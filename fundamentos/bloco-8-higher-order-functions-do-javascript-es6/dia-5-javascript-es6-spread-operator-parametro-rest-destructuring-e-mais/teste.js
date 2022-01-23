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