let n = 5;
let linha = "";
  for (let i = n; i > 0; i=1) {
  linha += " ";

} 
  for (let c = 0; c <n; c += 1) {
    linha+='*'
}

  for (let x = n; x>0; x-=1){
    //linha+='*'
    console.log(linha)
}
