/* [13:13, 20/01/2022] André: Para quem for participar da mentoria invertida, peço que copie o seguinte array e os enunciados: */

 const techProducts = [
     {
         id: 1, // numérico
         name: 'computer', // string
         price: 2100, // number
     },
     {
         id: 2,
         name: 'mouse',
         price: 56,
     },
     {
         id: 3,
         name: 'monitor',
         price: 589,
     },
     {
         id: 4,
         name: 'keyboard',
         price: 78,
     },
     {
         id: 5,
         name: 'HD',
         price: 350,
     },
     {
         id: 6,
         name: 'webcam',
         price: 187,
     },
     {
         id: 7,
         name: 'mic',
         price: 69,
     },
     {
         id: 8,
         name: 'headset',
         price: 216,
     },
    ];
     // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

     const produtos = techProducts.filter((item) => (item.id % 2 === 0)).map((item) => item.name)

     console.log(produtos)

// Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

    const prod = techProducts.filter((item) => (item.price > 300))
    console.log(prod)

    const p = techProducts.some((item) => (item.price > 300))
    console.log(p)

  // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
 // ex: id: 8 e quantidade: 2 preço total: 432

    
 const product = (id, qtd) => techProducts.filter((item) => (id === item.id)).map((item) => item.price * qtd)
 
 console.log(product(8,2))
