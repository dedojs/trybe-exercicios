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
let p = document.createElement('p')
section.appendChild(p)
p.innerText='Estudar na Trybe é muito bom'

//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section2 = document.createElement('section')
section2.className = 'left-content'
main.appendChild(section2)

//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section3 = document.createElement('section')
section3.className = 'right-content'
main.appendChild(section3)

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement('img')
image.className ='small-image'
image.src = 'https://picsum.photos/200'
section2.appendChild(image)

//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listaItens = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
let lista = document.createElement('ul')
section3.appendChild(lista)

for(let i = 0; i<listaItens.length; i+=1){
    let numListItem = document.createElement('li')
    numListItem.innerText = listaItens[i]
    lista.appendChild(numListItem)
}

//9 



