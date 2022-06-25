dc := docker-compose -f ./docker/docker-compose.yml

.PHONY: init
init:
	$(dc) up -d --build

.PHONY: up
up:
	$(dc) up -d --build

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

.PHONY: vue
vue:
	$(dc) exec vue /bin/sh

.PHONY: nginx
nginx:
	$(dc) exec nginx /bin/sh

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

.PHONY: ssl
ssl:
	bash ./docker/nginx/ssl/ssl.sh