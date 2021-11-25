# Laravel8

docker/php/dockerfile
```
FROM php:7.4-fpm
# FROM php:8.0-fpm
```

docker/docker-compose.yml
```
- ../laravel/:/var/www/
```

.env.example
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=user
DB_PASSWORD=password
```
