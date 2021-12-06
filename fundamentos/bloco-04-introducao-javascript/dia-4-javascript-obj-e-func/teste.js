let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function arrayOfNumbers(array) {
    let numeros =array[0]
    let numeros2 = array[1]
    let numeros3 = array[2]
    let pares = []
    let todos = []

  for (let i = 0; i <array.length; i += 1) {
        pares.push(numeros[i])
    
    
  }
  console.log(pares)
}

arrayOfNumbers(vector)