  // Настройки
  const setup = {port:8000}
  // Подключаем express
  const express = require ('express'); 
  // создаем приложение
  const app = express ();
  // Маршрутизируем GET-запрос http://ваш_сайт/test
  app.get('/', (req, res) => {    
    res.sendFile(__dirname + "/static/index.html"); 
  });
  // Слушаем порт и при запуске сервера сообщаем
  app.listen(setup.port, () => {
    console.log(`Сервер: порт ${setup.port} - старт!`);
  });