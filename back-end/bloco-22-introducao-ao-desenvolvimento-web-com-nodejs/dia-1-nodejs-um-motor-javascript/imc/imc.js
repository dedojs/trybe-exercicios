const imc = (peso, altura) => {
  return (peso / Math.pow(altura, 2)).toFixed(2)
};

module.exports = {imc};

// console.log(imc(72,1.7))