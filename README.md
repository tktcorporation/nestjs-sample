# nestjs-sample

## What is this?
This is a sample project of NestJS on Docker.

## Architecture
- `Node v12.16.1`
- `NestJS`

## Start Server

### Build Docker

```bash
$ docker-compose build
```

### Serve NestJS

```bash
$ docker-compose run --rm --service-ports app "yarn start"
```

### Use Api
Access `http://{DockerIP}:3000`
- ApiDoc: `http://{DockerIP}:3000/api/`

## Details
See https://qiita.com/tktcorporation/items/ba2306ae46d99cf37035