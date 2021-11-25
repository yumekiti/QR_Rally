UID := $(shell id -u)
GID := $(shell id -g)
USER := $(UID):$(GID)
dc := user=$(USER) docker-compose -f ./docker/docker-compose.yml

.PHONY: init
init:
	$(dc) up -d --build
	bash ./docker/mysql/sql.sh
	$(dc) exec php /bin/bash -c "composer install"
	$(dc) exec php /bin/bash -c "cp .env.example .env"
	$(dc) exec php /bin/bash -c "php artisan key:generate"
	$(dc) exec php /bin/bash -c "php artisan migrate"

.PHONY: up
up:
	$(dc) up -d --build
	bash ./docker/mysql/sql.sh

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	$(dc) restart

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: db
db:
	$(dc) exec db /bin/sh

.PHONY: php
php:
	$(dc) exec php /bin/sh

.PHONY: nginx
nginx:
	$(dc) exec nginx /bin/sh

.PHONY: laravel6
laravel6:
	mkdir -p ./laravel
	@make up
	$(dc) exec php composer create-project --prefer-dist laravel/laravel . "6.*"

.PHONY: laravel8
laravel8:
	mkdir -p ./laravel
	@make up
	$(dc) exec php composer create-project --prefer-dist laravel/laravel . "8.*"

.PHONY: seed
seed:
	$(dc) -f ./docker/docker-compose.yml exec php php artisan db:seed

.PHONY: fresh
fresh:
	$(dc) -f ./docker/docker-compose.yml exec php php artisan migrate:fresh --seed

.PHONY: docker-rm
docker-rm:
	docker stop `docker ps -aq` ;
	docker rm `docker ps -aq`

.PHONY: docker-clean
docker-clean:
	docker stop `docker ps -aq` ; \
	docker rm `docker ps -aq` ; \
	docker rmi `docker images -q` ; \
	docker volume prune -f ; \
	docker network prune -f ; \
	docker system prune -f
