function mergeObject(obj1, obj2) {
    let obj = {};
    for (let key in obj1) {
        obj[key] = obj1[key];
    }
    for (let key in obj2) {
        obj[key] = obj2[key];
    }
    return obj;
}

let obj1 = {'a': 1, 'b': 2, 'c': 3};
let obj2 = {'d': 4, 'e': 5, 'f': 6};
console.log(mergeObject(obj1, obj2));



function Robot(name) {
    this.name = name;
}

Robot.prototype.performTask = function() {
    console.log(`Робот ${this.name} что-то делает`);
}


function CleaningRobot(name) {
    Robot.call(this, name);
}

CleaningRobot.prototype = Object.create(Robot.prototype);

CleaningRobot.prototype.performTask = function() {
    console.log(`Робот ${this.name} убирается`);
}


function GuardRobot(name) {
    Robot.call(this, name);
}

GuardRobot.prototype = Object.create(Robot.prototype);

GuardRobot.prototype.performTask = function() {
    console.log(`Робот ${this.name} охраняет`);
}


function AssistantRobot(name) {
    Robot.call(this, name);
}

AssistantRobot.prototype = Object.create(Robot.prototype);

AssistantRobot.prototype.performTask = function() {
    console.log(`Робот ${this.name} помогает людям`);
}


let cleaningRobot = new CleaningRobot('cleaningRobot');
let guardRobot = new GuardRobot('guardRobot');
let assistantRobot = new AssistantRobot('assistantRobot');
cleaningRobot.performTask();
guardRobot.performTask();
assistantRobot.performTask();