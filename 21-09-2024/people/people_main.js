import { User, Admin, UserManager } from './people_module.js'


let user1 = new User('name1', 'user');
let user2 = new User('name2', 'user');
let admin = new Admin('admin', 'admin', 'root');
let userManager = new UserManager();

console.log(user1.getInfo());
console.log(admin.getInfo());
console.log(admin.getPermissions());
userManager.addUser(user1);
userManager.addUser(user2);
userManager.deleteUser(user1);
userManager.deleteUser(user1);
console.log(userManager.getListUsers());