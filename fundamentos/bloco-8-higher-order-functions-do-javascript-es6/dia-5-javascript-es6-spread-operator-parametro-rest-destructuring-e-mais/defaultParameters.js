const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const greeting1 = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting1(); // Welcome usuário!

  const greeting2 = (user = 'caboclo') => console.log(`Welcome ${user}!`);

greeting2();

// para fixar
// // Wel
const multiply = (number = 1, value = 1) => {
    return number * value
  };
  
  console.log(multiply(8));