/*
function rgb(r, g, b){
  const set = (p) => {
    if (p > 255) return 'FF';
    else if (p <= 0) return '00'
    else 
      return p.toString(16).padStart(2, '0').toUpperCase();
  }
  return set(r) + set(g) + set(b)
}

// console.log(rgb(255,200,222))

const d = 255
console.log(d.toString(16).padStart(5,1))
*/

/*
function parse( data ) {
  const q = data.split('');
  let sum = 0;
  let result = []
  const num = q.map((item) => {
    if (item === 'i') sum += 1;
    if (item === 'd') sum -= 1;
    if (item === 's') sum *= sum
    if (item === 'o') result.push(sum)
  });
  return result
};

console.log(parse('iiisdoso'))
*/

/*
function invert(array) {
  const result = array.map((item) => {
    if (item > 0) return item * -1
    if (item < 0) return item * -1
    if (item === 0) return item * -0
    if (!item) return []
  })
  return result;
}

function invert2(array) {
  const result = array.map((item) => -item)
  return result
}

console.log(invert2([1,-2,-3,9]))
*/
/*
function cakes(recipe, available) {
  const recipes = Object.keys(recipe)
  const availables = Object.keys(available)
  const result = recipes.every((item) => availables.includes(item))
  const quantity = []
  if (!result) return 0
  if (result) {
    recipes.forEach((chave) => {
      const rec = [recipe].map((item) => item[chave])
      const ava = [available].map((item) => item[chave])
      const total = Math.floor(ava / rec)
      quantity.push(total)
      quantity.sort()
    })
  }
  return quantity[0]
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
*
/*
function contamination(text, char){
  const length = text.length
  if (text && char) return char.padStart(length, char)
  if (!text || !char ) return ''
}

console.log(contamination("abc","z"));
*/

/*
function howMuchILoveYou(n) {
  const data = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  while (n > data.length) {
    n -= data.length
  }
  return data[n-1];
}

console.log(howMuchILoveYou(100))
*/

/*
function maps(x){
  const result = x.map((item) => item * 2)
  return result
}

console.log(maps([1, 2, 3]))
*/

/* hackerrank ibm test1
function subsetA(arr) {
  const data = arr.sort((a, b) => b - a)
  const sum = arr.reduce((curr, tot) => curr + tot, 0)
  const div = sum / 2
  let p = []
  const sum2 = arr.map((item) => {
    let sumP = p.reduce((curr, tot) => curr + tot, 0)
    // console.log('ooo', sumP)
    if (sumP <= div) {
      p.push(item)
    }
  })
  // arrA(arr)
  // console.log('d',data.length)
  // console.log('p', p)
  return p.sort((a, b) => a - b)
}

console.log(subsetA([10,10,10,10,9,8,8,7,6,6,5,5,4,4,4,4,4,3,2,1]))
*/

// [7, 0, 0, 1, 1, 0, 1, 0] = 1 item total, 2 array, 