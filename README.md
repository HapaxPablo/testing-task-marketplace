<h1>Тестовое задание для стажёра Frontend</h1>

Запуск

- установить docker
- прописать в терминале `sudo docker build --build-arg VITE_REACT_APP_BACKEND=http://your-backend-url.com -t marketplace-app .`, где `http://your-backend-url.com` ссылка на ваш бэк
- прописать `sudo docker run -p 3000:3000 -p 8000:8000 marketplace-app`, где 3000 порт клиента, в 8000 бэка
