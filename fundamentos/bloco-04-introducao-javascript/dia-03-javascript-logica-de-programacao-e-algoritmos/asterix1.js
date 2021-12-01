let n = 10;
let linha = "";
for (let i = n; i > 0; i -= 1) {
  linha += "*";
  for (let c = 0; c < n; c += 1) {}
}
for (x = 0; x < n; x += 1) {
  console.log(linha);
}
