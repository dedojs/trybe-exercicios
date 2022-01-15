const encodeDecode = require('./encodeDecode')

/* Teste se encode e decode são funções; */
test('Teste de veracidade da função', () => {
    expect(encodeDecode.encode).toBeDefined()
    expect(encodeDecode.decode).toBeDefined()
})

/* Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; */
test('Teste da função encode', () => {
    expect(encodeDecode.encode('aeiou')).toEqual('12345')
})

/* Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente; */
test('Teste da função decode', () => {
    expect(encodeDecode.decode('12345')).toEqual('aeiou')
})

/* Teste se as demais letras/números não são convertidos para cada caso; */
test('Teste duplo das funções Encode e Decode', () => {
    expect(encodeDecode.encode('bcdfg')).toMatch('bcdfg')
    expect(encodeDecode.decode('67890')).toMatch('67890')
})

/* Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */
test('Tesando tamanho da string', () => {
    expect(encodeDecode.encode('andre').length).toBe(5)
    expect(encodeDecode.decode('1ndr2').length).toBe(5)
})
