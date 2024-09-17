// 4. Задача: Система пользователей
// Условие:
// Создайте конструктор User для управления пользователями с параметрами:

// username — имя пользователя.
// email — email пользователя.
// Добавьте методы к прототипу:

// login() — выводит сообщение "Пользователь [username] вошел в систему".
// logout() — выводит сообщение "Пользователь [username] вышел из системы".
// Создайте конструктор Admin, который наследует от User, добавив метод:

// deleteUser(user) — удаляет пользователя и выводит сообщение "Пользователь [username] был удален администратором".
// Подсказка:
// Используйте call() или apply() для вызова конструктора родителя и прототипное наследование для добавления методов.



function User(name, email) {
    this.name = name;
    this.email = email;
  }
  
  User.prototype.login = function() {
    console.log(`User ${this.name } logged in`);
  }
  
  User.prototype.logout = function() {
    console.log(`User ${this.name } logged out`);
  }
  
  function Admin(name, email) {
    User.call(this, name, email);
  }
  
  Admin.prototype = Object.create(User.prototype);
  
  Admin.prototype.deleteUser = function(user) {
    console.log(`User ${user.name } was deleted by the administrator ${this.name}`);
  }
  
  let user = new User('user', 'user@gmail.com');
  let admin = new Admin('admin', 'admin@gmail.com');
  
  user.login();
  user.logout();
  admin.deleteUser(user);