const express = require('express');
const app = express();

// Маршрут за замовчуванням
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});