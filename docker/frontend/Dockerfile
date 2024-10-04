FROM node:18.18.0 as builder

WORKDIR /frontend

COPY frontend/package.json frontend/yarn.lock /frontend/

RUN yarn install --legacy-peer-deps

COPY frontend /frontend/

RUN yarn build

FROM node:18.18.0

WORKDIR /frontend

COPY --from=builder ./frontend/package.json ./
COPY --from=builder ./frontend/node_modules ./node_modules
COPY --from=builder ./frontend/.output ./.output/
