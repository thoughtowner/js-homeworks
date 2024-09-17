// 1.  Управление пользователями и администраторами
// Условие:
// Создайте класс User, который имеет следующие свойства:
// name — имя пользователя.
// email — email пользователя.
// role — роль пользователя (по умолчанию user).

// Добавьте методы:
// login(), который выводит сообщение "Пользователь [name] вошел в систему".
// logout(), который выводит сообщение "Пользователь [name] вышел из системы".

// Создайте класс Admin, который наследует User и добавляет следующие методы:
// deleteUser(user), который выводит сообщение "Пользователь [name] был удален администратором [admin_name]".
// Создайте несколько объектов классов User и Admin.

// Ожидаемый результат:
// Объект класса User может логиниться и выходить из системы.
// Объект класса Admin может удалять пользователей и выполнять те же действия, что и обычный пользователь.



// pseudo classes

// class User {
//     constructor(name, email, role) {
//         this.name = name;
//         this.email = email;
//         this.role = role || 'user';
//     }
    
//     login() {
//         console.log(`User ${this.name } logged in`);
//     }
    
//     logout() {
//         console.log(`User ${this.name } logged out`);
//     }
// }
    
// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//         this.role = 'admin';
//     }

//     deleteUser(user) {
//         console.log(`User ${user.name } was deleted by the administrator ${this.name}`);
//     }
// }

// let user = new User('user', 'user@gmail.com');
// let admin = new Admin('admin', 'admin@gmail.com');

// user.login();
// user.logout();
// admin.deleteUser(user);



// functions

function User(name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role || 'user';
}

User.prototype.login = function() {
  console.log(`User ${this.name } logged in`);
}

User.prototype.logout = function() {
  console.log(`User ${this.name } logged out`);
}

function Admin(name, email, role) {
  User.call(this, name, email);
  this.role = role || 'admin';
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