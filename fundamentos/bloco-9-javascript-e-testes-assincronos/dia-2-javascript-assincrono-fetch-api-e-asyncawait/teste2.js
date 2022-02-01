// apiScript.js
const url= 'https://api.coincap.io/v2/assets';

const fetchCrypto = () => {
  // Adicionar lógica aqui!
  const object = {
      method: 'GET',
      headers: { 'Accept': 'application/json'}
  }
  const list = document.getElementById('list');
  let dados = []

  fetch(url, object)
    .then (response => response.json())
    .then (data => console.log(data));
    
    
};

window.onload = () => fetchCrypto();