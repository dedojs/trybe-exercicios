const fs = require('fs').promises

// ler todos 4.1
/*
const read = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => {
      console.log(`O conteúdo do arquivo ${data}`)
    })
}
*/
// 4.1 transformar em array

const read2 = (id) => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((file) => {
      const data2 = JSON.parse(file)
      const idName = data2.map(({id, name}) => `${id} - ${name}`)
      idName.forEach((item) => console.log(item))
      const element = data2.find((item) => Number(item.id) === id)
      console.log(element)
    })
}

//4.2
getSimp = async (id) => {
  const file = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(file)
  const simpId = simpsons.find((item) => Number(item.id) === id)
  if(!simpId) throw new Error('id não encontrado');
  console.log(simpId)
}

// 4.3
changeSim = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(file)
  const removeSimp = simpsons.filter(({id}) => id !== '10' && id !== '6')
  console.log(removeSimp)
  await fs.writeFile('./simpsons2.json', JSON.stringify(removeSimp))
} 

// 4.4
makeNewSimp = async () => {
  const ids = [1, 2, 3, 4]
  const file = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(file)
  const newFamily = simpsons.filter(({id}) => ids.includes(Number(id)))
  console.log(newFamily)
  await fs.writeFile('./simpsonsNewFamily.json', JSON.stringify(newFamily))
}

// 4.5
addSimp = async () => {
  const file = await fs.readFile('./simpsonsNewFamily.json', 'utf-8')
  let simpsons = JSON.parse(file)
  simpsons.push({id: '5', name: 'Nelson Muntz'})
  console.log(simpsons)
  await fs.writeFile('./simpsonsNewFamily.json', JSON.stringify(simpsons))
}

// 4.6
setSimp = async () => {
  const file = await fs.readFile('./simpsonsNewFamily.json', 'utf-8')
  const simpsons = JSON.parse(file)
  const change = simpsons.filter(({name}) => name !== 'Nelson Muntz');
  const maggie = change.concat([{id: '7', name: 'Maggie Simpson'}])
  console.log(maggie)
  await fs.writeFile('./simpsonsNewFamily.json', JSON.stringify(maggie))
}
  


function main (id) {
  //read2(id);
  //getSimp(id)
  //changeSim()
  //makeNewSimp()
  //addSimp()
  setSimp()
}

main();