// Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
// Вызовите метод для созданного объекта.



let user = {
    'name': 'Test',
    'age': 100,
    'email': 'test@gmail.com',
};

function displayUserInfo(user) {
    let message = '';
    for (let key in user) {
        if (message !== '') {
            message += ', '
        }
        message += `${key[0].toUpperCase() + key.slice(1)}: ${user[key]}`;
    }
    user['greet'] = function greet() {
        console.log(`Hello, ${user['name']}!`)
    }
    return message;
}

console.log(displayUserInfo(user));