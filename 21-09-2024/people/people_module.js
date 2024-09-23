// Описание: Создайте пространство имен UserManagement, которое будет содержать классы для управления пользователями и их ролями. Реализуйте следующие функции:
// Класс User:
// Свойства:
// name (строка) — имя пользователя.
// role (строка) — роль пользователя (например, "user", "admin").
// Методы:
// getInfo() — возвращает информацию о пользователе.
// Класс Admin (наследуется от User):
// Дополнительные методы:
// getPermissions() — возвращает список прав администратора.
// Класс UserManager:
// Свойство:
// users (массив) — массив для хранения пользователей.
// Методы:
// addUser(user) — добавляет пользователя в массив.
// removeUser(name) — удаляет пользователя по имени.
// listUsers() — возвращает список всех пользователей с их ролями и правами.



function User(name, role) {
    this.name = name;
    this.role = role;
}

User.prototype.getInfo = function() {
    return `User: ${this.name}, Role: ${this.role}`;
}

function Admin(name, role, permissions) {
    User.call(this, name, role);
    this.permissions = permissions;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.getPermissions = function() {
    return this.permissions;
}

function UserManager(users) {
    this.users = users || [];
}

UserManager.prototype.addUser = function(user) {
    this.users.push(user);
}

UserManager.prototype.deleteUser = function(user) {
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] === user) {
            this.users.splice(i, 1);
            return;
        }
    }
    console.log(`Пользователя <${user.name}> не существует в менеджере`);
}

UserManager.prototype.getListUsers = function() {
    let listUserNames = [];
    for (let i = 0; i < this.users.length; i++) {
        listUserNames.push(this.users[i].name);
    }
    return listUserNames;
}

export { User, Admin, UserManager }