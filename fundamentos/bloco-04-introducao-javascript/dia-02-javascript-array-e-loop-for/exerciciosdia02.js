let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let num of numbers) {
  console.log(num);
}

//2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
var soma = 0;

for (var i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log("A soma é = " + soma);

//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
var soma = 0;
var cont = 0;
var media = 0;
for (var i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
  cont++;
}
media = soma / cont;
console.log("A média é =", media);

/*4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

/*5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/

let maior = 0;
for (n of numbers) {
  maior = Math.max.apply(null, numbers);
}
console.log("O maior é = ", maior);

/*6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
var impar = 0;
var impares = [];
for (var i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    impares.push(numbers[i]);
    impar++;
  }
}
if (impar == 0) {
  console.log("Nenhum valor impar encontrado");
}
console.log(impares);
console.log('tem' + impar + ' numeros impares');

/*7 Utilizando for , descubra qual o menor valor contido no array e imprima-o; */
var menor = 0;
for (i = 0; i < numbers.length; i++) {
    menor = Math.min.apply(null,numbers)
}
console.log('o menor numero e ', menor)

/*8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
var array = []
for(i=1; i<=25; i+=1){
    array.push(i)
    
}
console.log('array', array)

/* 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/

for(num of array){
    console.log(num/2)
}