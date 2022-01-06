const states = document.getElementById('estados');
const estadosBrasil = ["Estados","Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins", "Distrito Federal" ]
const enviar = document.getElementById('btnEnviar');
const imprimir = document.getElementById('impressao');

function criarEstados () {
    for (let i = 0; i < estadosBrasil.length; i += 1) {
        const uf = document.createElement('option')
        uf.innerText = estadosBrasil[i]
        uf.value = estadosBrasil[i]
        states.appendChild(uf)
    }
}
criarEstados()

/* $(function() {
    $('#datepicker').datepicker();
}); */

$('#datepicker').datepicker({
    format: "dd/mm/yyyy",
    todayBtn: true,
    language: "pt-BR",
    autoclose: true,
    todayHighlight: true
});

/* 
function enviarManual(event) {
    event.preventDefault()
    validarNome()
    validarEmail()
    validarCpf()
    validarEndereço()
    validarCidade()
    validarEstado()
    validarTipo()
    imprimirCurriculo()
}

function imprimirCurriculo () {
    imprimir.innerHTML = ''

    let name = document.createElement('li')
    name.innerHTML = document.querySelector('[name=nome]').value
    imprimir.appendChild(name)

    let email = document.createElement('li')
    email.innerHTML = document.querySelector('[name=email]').value
    imprimir.appendChild(email)

    let cpf = document.createElement('li')
    cpf.innerHTML = document.querySelector('[name=cpf]').value
    imprimir.appendChild(cpf)
    
    let end = document.createElement('li')
    end.innerHTML = document.querySelector('[name=endereco]').value
    imprimir.appendChild(end)
    
    let city = document.createElement('li')
    city.innerHTML = document.querySelector('[name=cidade]').value
    imprimir.appendChild(city)

    let state = document.createElement('li')
    state.innerHTML = document.querySelector('[name=estados]').value
    imprimir.appendChild(state)

    let tipo = document.createElement('li')
    tipo.innerText = moradia
    if (moradia === '') {
        alert('Escolha um tipo de moradia')
    }
    imprimir.appendChild(tipo)

    

}

enviar.addEventListener('click', enviarManual);

function validarNome() {
    let name = document.querySelector('[name=nome]')
    if (name.value.length > 40){
        alert('Nome, Digite apenas 40 caracteres')
    } else if (name.value.length === 0){
        alert('Nome, Preenchimento obrigatório')
    }
}

function validarEmail() {
    let email = document.querySelector('[name=email]')
    if (email.value.length > 50) {
        alert('Email, Digite apenas 50 caracteres')
    } else if (email.value.length === 0){
        alert('Email, Preenchimento obrigatório')
    }
}

function validarCpf() {
    let cpf = document.querySelector('[name=cpf]')
    if (cpf.value.length > 11 || cpf.value.length < 11  ) {
        alert('Cpf, Digite apenas 11 caracteres')
    } else if (cpf.value.length === 0){
        alert('Cpf, Preenchimento obrigatório')
    } 
}

function validarEndereço() {
    let end = document.querySelector('[name=endereco]')
if (end.value.length > 200) {
    alert('Endereço, Digite no máximo 200 caracteres')
} else if (end.value.length === 0){
    alert('Endereço, Preenchimento obrigatório')
} 
}

function validarCidade() {
    let city = document.querySelector('[name=cidade]')
if (city.value.length > 28) {
    alert('Cidade, Digite no máximo 28 caracteres')
} else if (city.value.length === 0){
    alert('Cidade, Preenchimento obrigatório')
} 
}

function validarEstado() {
    let state = document.querySelector('[name=estados]')
    if (state.value === "Estados") {
    alert('Estados, Escolha uma opção')
}
}

let moradia = ''
function validarTipo() {
    let tipo = document.getElementsByClassName('radio')
    for(let i = 0; i < tipo.length; i+=1){
       if (tipo[i].value === 'casa' || tipo[i].value ==='apartamento') {
           if(tipo[i].checked === true){
               console.log(tipo[i].value)
               moradia = tipo[i].value
           } 
       } 
    }
}
 */