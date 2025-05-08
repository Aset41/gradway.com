// Функция для перехода на страницу входа
function redirectToLogin() {
    window.location.href = "/вход/main.html"; // Укажите правильный URL
  }
  
  // Функция для перехода на страницу регистрации
  function redirectToRegister() {
    window.location.href = ""; 
  }

  function redirectToVuz() {
    window.location.href = "/вузы/vuz.html"; // Укажите правильный URL
  }

  function redirectToLogin() {
    // Добавляем анимацию (например, изменение цвета кнопки)
    const loginBtn = document.querySelector(".login-btn");
    loginBtn.style.backgroundColor = "#6a11cb";
  
    // Перенаправление через 0.5 секунды
    setTimeout(() => {
      window.location.href = "/вход/main.html";
    }, 500);
  }
  
  function redirectToRegister() {
    // Добавляем анимацию
    const registerBtn = document.querySelector(".register-btn");
    registerBtn.style.backgroundColor = "#6a11cb";
  
    // Перенаправление через 0.5 секунды
    setTimeout(() => {
      window.location.href = "/вход/main.html";
    }, 500);
  }

  