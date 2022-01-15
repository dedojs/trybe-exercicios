function encode(string) {
    let dividir = string.split('');
    let nova = '';
    for (let i = 0; i < dividir.length; i++) {
      if (dividir[i] == 'a' || dividir[i] == 'A') {
        dividir[i] = 1;
      } else if (dividir[i] == 'e' || dividir[i] == 'E') {
        dividir[i] = 2;
      }else if (dividir[i] == 'i' || dividir[i] == 'I') {
        dividir[i] = 3;
      }else if (dividir[i] == 'o' || dividir[i] == 'O') {
        dividir[i] = 4;
      }else if (dividir[i] == 'u' || dividir[i] == 'U') {
        dividir[i] = 5;
      }
    }
    nova = dividir.join('');
    return nova;
  }
  /* console.log(encode('AEIOU')); */
  
  function decode(string) {
    let dividir = string.split('');
    let nova = '';
    for (let i = 0; i < dividir.length; i++) {
      if (dividir[i] == 1) {
        dividir[i] = 'a';
      } else if (dividir[i] == 2) {
        dividir[i] = 'e';
      }else if (dividir[i] == 3) {
        dividir[i] = 'i';
      }else if (dividir[i] == 4) {
        dividir[i] = 'o';
      }else if (dividir[i] == 5) {
        dividir[i] = 'u';
      }
    }
    nova = dividir.join('');
    return nova;
  }
 /*  console.log(decode('A5r2l3n4')); */

module.exports = {
    encode,
    decode
}