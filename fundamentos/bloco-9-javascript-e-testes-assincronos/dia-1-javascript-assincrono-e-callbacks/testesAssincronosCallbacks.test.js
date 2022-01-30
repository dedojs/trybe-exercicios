/* test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  }); */

const { expect } = require("@jest/globals");
const { test } = require("picomatch");

  ('---------------')

/*   test('Não deveria passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
  }); */

/*   test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  }); */

  const asoma = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result)
    }, 500);
  };

  test('Testando a função asoma', (done) => {
    asoma(10, 10, (result) => {
      try {
        expect(result).toBe(20);
        done()
      } catch (error) {
        done(error);
      }
    });
  });