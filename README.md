# nestjs-sample

## What is this?
This is a sample project of NestJS on Docker.

## Architecture
- `Node v12.16.1`
- `NestJS`

## Setup

### Build Docker

```bash
$ docker-compose build
```

### DB Migration

```bash
$ docker-compose run --rm app "yarn && yarn migration:run"
```

## Test

```bash
$ docker-compose run --rm app "yarn test"
```

## Serve NestJS

```bash
$ docker-compose run --rm --service-ports app "yarn start"
```

### Use Api
Access `http://{DockerIP}:3000`
- ApiDoc: `http://{DockerIP}:3000/api/`

## Details
- Create api and doc: See https://qiita.com/tktcorporation/items/ba2306ae46d99cf37035
- Create api with using typeorm: See https://qiita.com/tktcorporation/items/5f7ad549822bfcca6f98