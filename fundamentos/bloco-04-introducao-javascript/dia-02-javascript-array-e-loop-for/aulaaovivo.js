let jogo = [5, 9, 15, 64, 39, 78];
console.log(jogo);

let mega = [];

let acertados = [];

for (let x = 0; x < 6; x += 1) {
  mega.push(Math.floor(Math.random() * 60 + 1));
}

console.log(mega);

for (var c = 0; c < jogo.length; c += 1) {
  for (var i = 0; i < mega.length; i += 1) {
    if (jogo[c] == mega[i]) {
      acertados.push(mega[i]);
    }
  }
}

console.log(acertados);

if (acertados.length == 6) {
  console.log("Ganhou");
} else {
  console.log("Perdeu");
}
