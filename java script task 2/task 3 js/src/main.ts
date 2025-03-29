import { createUser } from './user';

const userObj = createUser('Lewis Hamilton', 40, 'hamilton44@gmail.com');

console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);