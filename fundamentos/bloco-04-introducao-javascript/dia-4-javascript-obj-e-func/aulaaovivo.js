let estudante = {
  nome: "joana",
  idade: 43,
  hardSkills: 3,
  softSkills: 6,
  carreiraSkills: 5,
  possuiHabilitacao: true,
  bandasFavoritas:['Iron Maiden', 'NightWish', 'Sepultura'],
  endereco: {
      rua: 'Erico Gongalves Aguiar',
      numero: 21,
      bairro: 'Candeias',
      cidade: 'Vitória da Conquista',
      estado: 'Bahia',
      cep: 45028674,
  }
};

console.log(estudante.endereco.estado)
console.log(estudante.nome + " tem " + estudante.idade + " anos ");
console.log(estudante.bandasFavoritas[0])

console.log(estudante['endereco']['rua'])

let key = 'nome'

console.log(key)
console.log(estudante[key])

estudante.nome = 'André'

console.log(estudante[key])

estudante.endereco.pais = 'Brasil'

console.log(estudante.endereco.pais)

//delete estudante.altura // apaga propriedade 

for(let key in estudante){
    console.log(key + ' = ' + estudante[key])
}

/*
console.log("for of")

for (let value of estudante){
    console.log(estudante)
}*/

function trybe (estudante){
    let pessoaDesenvolvedora = estudante;
    estudante.hardSkills= 10
    estudante.softSkills= 10
    estudante.carreiraSkills= 10
    console.log(estudante)

}

function printGreetings(x){
    console.log('Ola Mundão véi sem porteira. Bem vindo ' + x)
}

printGreetings('Andre')

function sum (a,b){
    let soma= a+b
    console.log(soma)
}

sum(9,8)

function max (x,y){
    if(x>y){
        return x
    } else{
        return y
    }
}

console.log(max(126, 379))

nums = [1,3,56,78,96,125]

function average (a,b){
    return (a+b)/2
}

console.log(average(956,745))

let maior = 0
function media(x){
    let maior =0
    for(let i = 0; i<x.length; i++){
        if(x[i]>x[i+1]){
            maior = x[i]
        }else{
            maior = x[i+1]
        }
    }
console.log(maior)
}

media(nums)