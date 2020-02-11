import readlineSync from 'readline-sync';

const name = readlineSync.question('Як Вас звуть? ');

console.log(`Hello ${name}!`);
