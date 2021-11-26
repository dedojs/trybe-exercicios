/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

var a = 10;
var b = 8;

var adicao = (a+b);
var subtracao = (a-b);
var multiplicacao = (a*b);
var divisao = (a/b);
var modulo = (a%b);

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

/* 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

var x = 80;
var y = 50;

if(x>y){
    console.log("x = " + x + " é o maior valor")
}
else{
    console.log("y = " + y + " é o maior valor")
}

/* 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

var x = 98;
var y = 12;
var z = 9;

if(x>y && x>z){
    console.log(x)
}
else if (y>x && y>z){
    console.log(y)
}
else if(z>x && z>y){
    console.log(z)
}

/* 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const result=-85

if(result>0){
    console.log("positive")
}
else if(result<0){
    console.log("negative")
}
else{
    console.log("zero")
}

/* 5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

var x = 45;
var y = 45;
var z = -90;

var soma = x+y+z;

if(soma === 180){
    console.log(true)
}
else if(soma < 180 && soma > 0){
    console.log(false)
}
else{
    console.log("Ângulo inválido")
}

/* 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

var peca = "jumento";
var xadrez = peca.toLowerCase();


switch(xadrez){
    case "peao":
        console.log(xadrez.toUpperCase() + " => Verticalmente para frente")
        break;
    case "torre":
        console.log(xadrez.toUpperCase() + " => Vertical e Horizontal")
        break;
    case "cavalo":
        console.log(xadrez.toUpperCase() + " => 5 casas em formato de L")
        break;
    case "bispo":
        console.log(xadrez.toUpperCase() + " => Diagonal")
        break;
    case "rainha":
        console.log(xadrez.toUpperCase() + " => Vertical, Horizontal e Diagonal")
        break;
    case "rei":
        console.log(xadrez.toUpperCase() + " => Vertical, Horizontal e Diagonal, apenas 1 casa")
        break;
    default:
        console.log("Peça inválida")
}