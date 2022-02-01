/* function poke() {
    const promisse = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    promisse.then((response) => {
        const promisseJson = response.json()
        promisseJson.then((object) => {
            console.log(object)
            const pokemon = {
                name: object.name,
                image: object.sprites.from_default,
            }
            const pokes = document.getElementById('pokes');
            const img = document.getElementById('img')
            const linha = document.createElement('li');
            img.src = object.image
            pokes.innerText = pokemon.name;
            
        })
    })
}
poke() */

async function pokebo () {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await resp.json()
    console.log(data)
    
}

pokebo()




