"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const userObj = (0, user_1.createUser)('Lewis Hamilton', 40, 'hamilton44@gmail.com');
console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);
