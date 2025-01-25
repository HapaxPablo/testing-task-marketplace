# Stage 1: Установка и сборка React-приложения
FROM node:20 AS build-stage

WORKDIR /app

# Устанавливаем зависимости React-приложения
COPY ./marketplace-front/package.json ./marketplace-front/yarn.lock ./marketplace-front/
RUN yarn --cwd ./marketplace-front install

# Копируем весь код приложения
COPY ./marketplace-front ./marketplace-front

# Собираем приложение
RUN yarn --cwd ./marketplace-front build

# Stage 2: Настройка json-server и production сервера
FROM node:20

WORKDIR /app

# Устанавливаем json-server и serve
COPY package.json yarn.lock ./
RUN yarn install && yarn global add serve

# Копируем статические файлы React-приложения
COPY --from=build-stage /app/marketplace-front/dist ./public

# Копируем базу данных
COPY db.json ./db.json

# Команда для запуска json-server и React-приложения
CMD ["sh", "-c", "yarn server & serve -s public -l 3000"]

# Открываем порты
EXPOSE 3000 8000
