FROM node:12.16.1

RUN npm i -g @nestjs/cli

ENTRYPOINT ["/bin/bash", "-c"]