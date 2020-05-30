FROM node:12.16.1

RUN npm i -g @nestjs/cli ts-node

ENTRYPOINT ["/bin/bash", "-c"]