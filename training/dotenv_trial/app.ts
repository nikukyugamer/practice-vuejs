// require('dotenv').config();
require('dotenv').config({ path: './.env.development' });

console.log(process.env.HELLO);
console.log(process.env.TIGER);

console.log(require.resolve('dotenv'));
