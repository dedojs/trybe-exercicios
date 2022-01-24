const myCounter = () => {
    var myArray = [];
    // var counter1 = [];
    // var counter3 = [];
    for (let counter = 0; counter <= 3; counter += 1) {
      myArray.push(counter);
      // counter1.push(counter);
      for (let counter = 2; counter <= 3; counter += 1) {
        myArray.push(counter);
        // counter3.push(counter2);
      }
    }
    // console.log(counter1);
    // console.log(counter3);
    return myArray;
  };
  
  console.log(myCounter());

 
          
const numbers = [3, 12, 1, 21, 23];
const foundElements = numbers.find(e => e > 10);
console.log(foundElements);

  
          
const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2
    },
    {
      name: 'phone',
      price: 500,
      id: 1
    }
  ];
  
  console.log(products.sort((a, b) => b.price - a.price));


          
const adultos = [
    {
      peso: 100,
      altura: 1.85
    },
    {
      peso: 90,
      altura: 1.72
    },
    {
      peso: 79,
      altura: 1.99
    }
  ]
  
  // IMC = Índice de Massa Corporal
  
  function IMC(adulto) {
    return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2))
  }
  
  console.log(adultos.map(IMC))
  
          
  
                 