/* 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // implemente seus testes aqui

//1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
test('Retorno esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
})

//2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
test('Não esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
})

//3 Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
test('Verificar retorno', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
})




