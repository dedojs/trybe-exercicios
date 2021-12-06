 //1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let titulo = document.createElement('h1')
titulo.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(titulo)
//console.log(titulo)

//2 - Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)

//3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section')
main.appendChild(section)
section.className = 'center-content'

//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;



