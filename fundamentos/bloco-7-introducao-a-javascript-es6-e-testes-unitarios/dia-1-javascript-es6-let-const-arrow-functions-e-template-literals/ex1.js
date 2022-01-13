/* unction testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
   
  }

  testingScope(true); */

  const test = (escopo) => {
      if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope)
      }
  }

  console.log(test(true));



  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const dec = oddsAndEvens.sort((a,b) => {return b-a})

  const cre = oddsAndEvens.sort((a,b) => {return a-b})

  

  console.log(dec)
  console.log(cre); 