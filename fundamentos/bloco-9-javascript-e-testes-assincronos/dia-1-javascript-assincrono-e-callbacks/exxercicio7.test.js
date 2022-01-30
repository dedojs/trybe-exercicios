/* 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

const { expect } = require("@jest/globals");

const upper = (str) => str.toUpperCase()

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500)
  };

// uppercase('ola, bom dia', (str))

  test('String low to up', (done) => {
   uppercase('ola', (str) => {
     try {
       expect(str).toBe('OLA');
       done()
     } catch (error) {
       done(error)
     }
   })
});

