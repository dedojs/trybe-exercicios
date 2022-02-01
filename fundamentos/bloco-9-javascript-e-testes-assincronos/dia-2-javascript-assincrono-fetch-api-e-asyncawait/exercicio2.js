console.log('hello')

let brl = 0;

const cotation = async () => { 
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const endPoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(endPoint)
    // console.log(url)

    const usd = await fetch(url) 
    const resp = await usd.json();
    brl = resp.usd.brl
    
}

cotation()
setTimeout(() => {
    console.log('usd', brl)
}, 3000)


async function crypto() {
    const response = await fetch(`https://api.coincap.io/v2/assets`)
    const data = await response.json();
    const coins = data.data.filter(({rank}) => rank <= 10)
    const list = document.getElementById('list')
     
      
    for(let i of coins) {
        const newline = document.createElement('li')
        newline.innerText = (`name: ${i.name} - (${i.symbol}) - price: $ ${Number(i.priceUsd).toFixed(2)} - price: R$ ${(i.priceUsd * brl).toFixed(2)}`)
        list.appendChild(newline);
    }
    
   // console.log(coins)
   // console.log(name)
   // console.log(price)
}

window.onload = () => crypto();

