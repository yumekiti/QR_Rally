# node

## docker-compose
```
    # node:
    #     image: node:lts-alpine
    #     volumes:
    #         - ../laravel:/mnt/laravel
    #     working_dir: /mnt/laravel
    #     tty: true
```
コメントアウト消す

```
$(dc) exec node /bin/sh -c "npm install && npm run dev"
```
makefileに追加