console.log('exemplo do course')
const idHero = document.getElementById('idHero')
console.log(idHero.value)
const teste = async (id) => {
    const url = `https://www.superheroapi.com/api.php/4192484924171229/${id}`
    const promise = await fetch(url)
    const resp = await promise.json()
    console.log(resp)
    const imgCont = document.getElementById('img')
    const nameCont = document.getElementById('name')
    const container = document.getElementById('container')
    const figura = document.createElement('img')
    const list = [resp]
    // const lista = list.filter((item) => item.powerstats.combat >= 90);
    // console.log(lista)
    figura.src = resp.image.url;
    console.log('figura',figura.src)
    imgCont.appendChild(figura)
    nameCont.innerText = resp.name;
}

teste(75)