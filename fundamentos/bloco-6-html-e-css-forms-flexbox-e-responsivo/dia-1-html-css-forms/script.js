const states = document.getElementById('estados');
const estadosBrasil = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins", "Distrito Federal" ]

function criarEstados () {
    for (let i = 0; i < estadosBrasil.length; i += 1) {
        const uf = document.createElement('option')
        uf.innerText = estadosBrasil[i]
        uf.value = estadosBrasil[i]
        states.appendChild(uf)
    }
    
}
criarEstados()


