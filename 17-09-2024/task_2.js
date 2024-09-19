// Задача 2: Многоуровневая система управления проектами
// Условие:

// Создайте класс Person, который представляет человека с параметрами:

// name — имя.
// role — роль (например, "Developer", "Manager").
// Создайте класс Project, который представляет проект с параметрами:

// title — название проекта.
// budget — бюджет проекта.
// team — массив сотрудников, которые работают над проектом.
// Добавьте методы:

// addPerson(person) — добавляет сотрудника к проекту.
// getTeamSize() — возвращает количество людей в проекте.
// getTotalCost() — рассчитывает затраты на команду (например, у каждого сотрудника есть зарплата, которую можно учитывать).
// Создайте класс Manager, который наследует от Person и добавляет методы:

// assignProject(project) — назначает проект менеджеру.
// getManagedProjects() — возвращает список проектов, которые управляются менеджером.
// Создайте класс Developer, который наследует от Person и добавляет параметры:

// skills — массив навыков разработчика.
// Добавьте методы:

// addSkill(skill) — добавляет навык разработчику.
// getSkills() — возвращает массив навыков разработчика.
// Задача:

// Создайте несколько проектов и команд, включающих разработчиков и менеджеров.
// Назначьте менеджерам проекты и убедитесь, что проекты управляются правильно.
// Реализуйте подсчёт общего бюджета проекта, учитывая зарплаты сотрудников.
// Усложнение:

// Реализуйте проверку навыков разработчиков при добавлении их в проект (например, только разработчики с определёнными навыками могут участвовать в проекте).
// Добавьте систему повышения квалификации для разработчиков.



function Person(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
}

function Project(title, budget, team) {
    this.title = title;
    this.budget = budget;
    this.team = team;
    this.isBusy = false;
}

Project.prototype.addPerson = function(person) {
    this.team.push(person);
}

Project.prototype.getTeamSize = function() {
    return this.team.length;
}

Project.prototype.getTotalCost = function() {
    let totalCost = 0;
    for (let i = 0; i < this.team.length; i++) {
        totalCost += this.team[i].salary;
    }
    return totalCost;
}

function Manager(title, role, salary) {
    Person.call(this, title, role, salary)
    this.projects = [];
}

Manager.prototype = Object.create(Person.prototype);

// Надо перписать так, что при добавлении менеджера к команде проекта, к менеджеру автоматически добавляется этот проект
Manager.prototype.assignProject = function(project) {
    this.projects.push(project);
}

Manager.prototype.getManagedProjects = function() {
    let managedProjects = [];
    for (let i = 0; i < this.projects.length; i++) {
        managedProjects.push(this.projects[i]['title']);
    }
    return managedProjects;
}

function Developer(title, role, salary) {
    Person.call(this, title, role, salary)
    this.skills = [];
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.addSkill = function(skill) {
    this.skills.push(skill);
}

Developer.prototype.getSkills = function() {
    return this.skills;
}

let project1 = new Project('project1', 100, []);
let project2 = new Project('project2', 100, []);
let manager1 = new Manager('manager1', 'Manager', 10);
let manager2 = new Manager('manager2', 'Manager', 20);
let developer = new Developer('developer', 'Developer', 50);

project1.addPerson(manager1);
project1.addPerson(developer);
console.log(project1.getTeamSize());
console.log(project1.getTotalCost());
manager2.assignProject(project2);
console.log(manager2.getManagedProjects());
developer.addSkill('JavaScript');
developer.addSkill('C#');
console.log(developer.getSkills());