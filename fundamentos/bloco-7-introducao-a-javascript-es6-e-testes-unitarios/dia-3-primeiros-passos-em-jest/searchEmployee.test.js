const searchEmployee = require('./searchEmployee')

describe('Teste a função searchEmployee', () => {
    it('Testa se a função searchEmployee é definida', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Testa veracidade da informação do campo id', () => {
        expect(() => searchEmployee(111, 'firstName')).toThrowError();
    });
    it('Testa veracidade da informação do campo detail', () => {
        expect(() => searchEmployee('4678-2', 'ambrosio')). toThrowError()
    })
    it('Testando o detail: firstName', () => {
        expect(searchEmployee('4678-2', 'firstName').match('Id: 4678-2 firstName: Paul'))
    })
    it('Testando o detail: lastName', () => {
        expect(searchEmployee('4678-2', 'lastName').match('Id: 4678-2 lastName: Dodds'))
    })
    it('Testando o detail: specialities', () => {
        expect(searchEmployee('4678-2', 'specialities').match('Id: 4678-2 specialities: Backend'))
    })
})