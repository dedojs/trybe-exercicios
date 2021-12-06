 //1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let titulo = document.createElement('h1')
titulo.innerText = "Exercício 5.2 - JavaScript DOM"
titulo.className ='title'
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
p.className = 'description'
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
    numListItem.className = 'list-item'
    lista.appendChild(numListItem)
}

//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for(let i = 0; i<3; i+=1){
    let h3 = document.createElement('h3')
    h3.className = 'description'
    
    main.appendChild(h3)
}

//10 Adicione a classe title na tag h1 criada;
//titulo.className ='title'

//11 Adicione a classe description nas 3 tags h3 criadas;
//h3.className = 'description'

//12 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(section2)

//13 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
section3.style.marginRight = 'auto'

//14 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
main.style.backgroundColor = 'green'

//15 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let item = document.getElementsByClassName ('list-item')
lista.removeChild(item[9])

let item2 = lista.lastElementChild
lista.removeChild(item2)




