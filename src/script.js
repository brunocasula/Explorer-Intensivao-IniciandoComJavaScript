/*
---------------------------------------------------------------------------------------------
Desafio - Iniciando com JavaScript
---------------------------------------------------------------------------------------------
Você pode apresentar o resultado tanto no ** console ** quanto em um ** alerta ** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número.Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    💡 Para saber o tipo de dado você pode usar o operador `typeof`

4. Crie um script que declare uma variável e verifique se o seu valor é uma string.Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par.Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/


// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('hello World!');


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = Number(prompt('Informe o primeiro valor:'));
const numberTwo = Number(prompt('Informe o segundo valor:'));
alert(`A soma dos valores é: ${numberOne + numberTwo}`);


// 3. Crie um script que declare uma variável e verifique se o seu valor é um número.Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". 
let isNumber = prompt('Informe um valor:');

if (isNaN(isNumber) == true) {
  alert(`Não é um número`)
}
else {
  alert(`É um número`)
}


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string.Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = 'Exercício 4';

console.log(typeof (isString));

if (typeof (isString) == 'string') {
  console.log(`É uma string`);
}
else {
  console.log(`Não é uma string`);
}


// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true;

console.log(typeof (isBoolean));

if (typeof (isBoolean) == "boolean") {
  console.log(`É um booleano`);
}
else {
  console.log(`Não é um booleano`);
}


// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = (numberOne - numberTwo);

console.log(`O resultado da subtração é: ${sub}`);


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = (numberOne * numberTwo);

console.log(`O resultado da multiplicação é: ${mult}`);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = (numberOne / numberTwo);

console.log(`O resultado da divisão é: ${div}`);


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par.Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isEvenNumber = 10;

const isEven = (isEvenNumber % 2) == 0;

console.log(isEven);

if (isEven === true) {
  console.log(`É número par`);
}
else {
  console.log(`Não é número par`);
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 7;

const isOdd = (isOddNumber % 2) != 0;

console.log(isOdd);

if (isOdd === true) {
  console.log(`É um número ímpar`);
}
else {
  console.log(`Não é um número ímpar`);
}