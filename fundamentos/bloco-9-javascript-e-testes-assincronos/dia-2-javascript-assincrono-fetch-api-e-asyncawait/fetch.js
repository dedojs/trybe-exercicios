const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`algo deu errado :(\n${error})`))

  // console.log(fetch(url));
}

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

fetchJoke();