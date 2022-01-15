const sum = require('./sum')

// 1 Teste se o retorno de sum(4, 5) é 9

test('Soma entre dois valores inteiros', () => {
    expect(sum(2, 3)).toBe(5);
})

//2 Teste se o retorno de sum(0, 0) é 0

test('Soma entre zeros', () => {
    expect(sum(0, 0)).toBe(0)
})

// 3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 4 Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

test("Se um dos valores for string", () => {
    expect(() => sum(4, '5')).toThrowError();
});
  