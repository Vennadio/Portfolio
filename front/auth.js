// Получение формы авторизации из DOM
const loginForm = document.querySelector('#login-form');

// Обработчик события отправки формы
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Отменяем обычное поведение отправки формы

  // Получаем значения полей формы
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Создаем объект с данными пользователя
  const userData = {
    email: email,
    password: password
  };

  try {
    // Отправляем данные на сервер для проверки
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    // Проверяем статус ответа
    if (response.ok) {
      // Авторизация успешна
      const data = await response.json();
      // Делаем что-то после успешной авторизации, например, перенаправляем на другую страницу
      window.location.href = '/dashboard';
    } else {
      // Авторизация не удалась
      const errorData = await response.json();
      // Обрабатываем ошибку, например, отображаем сообщение об ошибке на странице
      console.error(errorData.message);
    }
  } catch (error) {
    // Обработка ошибки сети или других проблем
    console.error('Ошибка:', error);
  }
});