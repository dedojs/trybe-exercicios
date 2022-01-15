const myFizzBuzz = require('./myFizzBuzz')

/* 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número */

/* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado */

test('Numero divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
})

/* Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado */

test('Numero divisível por 3', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')
})

/* Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado */

test('Numero divisível por 5', () => {
    expect(myFizzBuzz(25)).toMatch('buzz')
})

/* Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado */

test('Numéro que não é divisivel nem por 3 nem 5', () => {
    expect(myFizzBuzz(7)).toBe(7)
})

/* Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

test('Não é número', () => {
    expect(myFizzBuzz('1')).toBeFalsy()
})
