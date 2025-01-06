FROM node:22-slim as build

ARG ACCESS_KEY_ID
ARG SECRET_ACCESS_KEY

ENV ACCESS_KEY_ID=${ACCESS_KEY_ID}
ENV SECRET_ACCESS_KEY=${SECRET_ACCESS_KEY}

ENV PORT=3000
EXPOSE 3000

ENV VITE_APP_GRAPHQL_ENDPOINT="https://appwisp.com/api/graphql"
ENV VITE_APP_USE_WEBSOCKET="true"

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run genkey
RUN yarn run build

FROM oven/bun as production

ENV PORT=3000
EXPOSE 3000

ENV VITE_APP_GRAPHQL_ENDPOINT="https://appwisp.com/api/graphql"
ENV VITE_APP_USE_WEBSOCKET="true"

WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package.json bun.lockb ./
RUN bun i
COPY . ./
COPY --from=build /usr/src/app/.env ./

ENTRYPOINT [ "bun", "run", "serve" ]
