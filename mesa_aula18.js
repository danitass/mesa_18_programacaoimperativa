//MESA DE TRABALHO - AULA 18 - PROGRAMAÇÃO IMPERATIVA - 08/06/2022
// EQUIPE 1

//1. Loop de Pares

function loopDePares (num) {
   for (let i = 0; i <= 100; i++) {
       console.log((num + i) % 2 === 0 ? `O número ${num + i} é par` : (num + i)); 
   }
}

loopDePares(7);

//2. Loop ímpares com palavra
function loopDeImpares (num, str) {
   for (let i = 0; i <= 100; i++) {
       console.log((num + i) % 2 === 1 ? `${num + i} - ${str}`: (num + i)); 
   }
}

loopDeImpares(7, 'Ímpar');

// 3. Soma
function soma (num) {
   if (num > 0) {
   num = num + soma(num - 1);
   }
   return num;
}

console.log (soma(5));


// 4. Novo Array

function newArray (num) {
   let array1 = [];
   for (let i = 1; i <= num; i++) {
       array1.push(i);
   }
   return array1;
}

console.log(newArray(5));

// 5. string.split()

function split (str) {
   let array = [];
   for (let i = 0; i < str.length; i++) {
       array.push(str[i]);
   }
   return array;
}

console.log(split("DigitalHouse"));