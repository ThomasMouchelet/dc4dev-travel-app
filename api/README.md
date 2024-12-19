# Requirements

    - Node.js

# Start project

```sh
# install dependencies
npm i
# start container with docker-compose
docker-compose up -d
# start project with development mode
npm run dev
```

### Reset all docker containers , images and volumes

```sh
docker system prune -a -f --volumes
```
