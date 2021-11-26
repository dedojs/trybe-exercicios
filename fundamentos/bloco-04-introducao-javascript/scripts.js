/*Bloco -04 - dia 1 - Variaveis */

var myName = "Andre";
const birthCity = "Vitória da Conquista";
var birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

/*Tipos primitivos*/

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(patientInfo)



const base = 5;
var height = 8;
const area = base * height;
console.log(area);
const perimeter = (base + height)*2;
console.log(perimeter);

/* If e else */

const nota = 105;

if(nota >= 80 && nota <=100){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}

else if(nota>100){
    console.log("Nota inválida, digite um valor entre 0 e 100")
}

else{
    console.log("Você foi reprovada(o)");
}

/* operadores lógicos */

/* && */

const currentHour = 18;
var message;

if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir"
}

else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
}

else if(currentHour >=14 && currentHour <18){
    message = "Vamos fazer um bolo pro café da tarde?"
}

else if(currentHour >= 11 && currentHour <14){
    message = "Hora do almoço!!!"
}

else if(currentHour >=4 && currentHour <11){
    message = "Hummm, cheiro de café recém passado!"
}
else{
    message = "Hora de dormir"
}

console.log(message)

/*-------------*/
/* || */

var weekDay = "sexta-feira";

if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else{
    console.log("FINALMENTE, descanso merecido! UwU")
    
}
/*---------------*/
/* ! not */

