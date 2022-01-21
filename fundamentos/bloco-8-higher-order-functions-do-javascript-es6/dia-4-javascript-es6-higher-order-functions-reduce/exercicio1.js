const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((item1, item2) => item1.concat(item2), []);
  }

  //console.log(flatten())

  const geral = arrays.reduce((arr, curr) => arr.concat(curr))

  console.log(geral)