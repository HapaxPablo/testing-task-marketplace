# Stage 1: Установка и билд React приложения
FROM node:20 AS build-stage

WORKDIR /app

# Установка зависимостей React
COPY ./testing-task-marketplace/package.json ./testing-task-marketplace/yarn.lock ./testing-task-marketplace/
RUN yarn --cwd ./testing-task-marketplace install

# Копируем код приложения и собираем
COPY ./testing-task-marketplace ./testing-task-marketplace
RUN yarn --cwd ./testing-task-marketplace build

# Stage 2: Настройка json-server и production сервера
FROM node:20

WORKDIR /app

# Установка json-server
COPY package.json yarn.lock ./
RUN yarn install

# Копируем статические файлы React приложения из предыдущего этапа
COPY --from=build-stage /app/testing-task-marketplace/dist ./public

# Копируем базу данных
COPY db.json ./db.json

# Команда для запуска json-server и сервера React
CMD ["sh", "-c", "yarn server & npx serve public -l 3000"]

EXPOSE 3000 8000
