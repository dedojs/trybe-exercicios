// get element by id 
console.log('Olá')

console.log(document.getElementById('teste').innerHTML);
document.getElementById('paragrafo').innerHTML= 'Minhas filhas são Lindas'

console.log(document.getElementById('teste').innerText)

document.getElementById('teste').innerText = "Aprendendo Dom e JavaScript"

document.getElementById('page-title').innerText = "Coração Valente"
document.getElementById('paragraph').innerText= "O filme Coração Valente, retrata o perído medieval, uma era onde a Escócia lutava contra a Inglaterra em busca de sua soberania."
document.getElementById('subtitle').innerText = "A História de William Wallace"
document.getElementById('second-paragraph').innerText = "O filme retrata a épica aventura vivida por William Wallace, um escocês que perde seus pais muito jovem, é criado pelo tio. Qaundo adulto retorna para sua antiga vila, conhece sua futura esposa, se casa, depois fica viúvo de uma forma trágica."
document.getElementById("second-paragraph").style.color = "blue";

//-------------------------------
// get elements by class

let pilotos = document.getElementsByClassName('piloto-f1-atual')

for(let i = 0; i<pilotos.length;i+=1 ){
    console.log(pilotos[i])
    pilotos[i].style.color = 'green';
}

// get elements by tag ---------
document.getElementsByTagName('span')[0].innerText = "Joaquin Fangio";

let pa = document.getElementsByClassName('piloto-f1-atual')
pa[0].style.backgroundColor = "red";
document.getElementsByTagName('h4')[0].style.color = "green";


// query sellector = retorna o primeiro elemento

document.querySelector('#Dona').style.color = 'pink';
document.querySelector('.pilotos-sem-titulo p').style.color = 'orange';
document.querySelector('.piloto-f1-atual').style.color = 'yellow';

// query sellector all = retorna todos os elemtnos

let l = document.querySelectorAll('div')
console.log(l)
for(let i = 0; i<l.length; i+=1){
    console.log(l[i])
}

let p = document.querySelectorAll('.piloto-f1-atual').length
console.log(p)

let x = document.querySelectorAll('.pilotos-sem-titulo .piloto-f1-atual')
console.log(x)






