function hydrate(string) {
    let cup = string.match(/\d/gi);
    let cup2 = [];
    let soma = 0;
    for (let i in cup) {
      cup2.push(parseInt(cup[i]));
      soma += cup2[i];
    }
    if (soma === 1) {
      return `${soma} copo de água`;
    }
    return `${soma} copos de água`;
  }
  /* console.log(hydrate(" 4 cachaça, 9 pinga")) */

  module.exports = hydrate