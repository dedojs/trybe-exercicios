const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(arr) {
    const names2 = arr.map((item) => item.toLowerCase()).reduce((acc, curr) => (acc+curr))
    let sum = 0;
    for( let i of names2) {
        (i === 'a') ? sum +=1 : i
    }
    console.log(sum)
  }

  containsA(names)