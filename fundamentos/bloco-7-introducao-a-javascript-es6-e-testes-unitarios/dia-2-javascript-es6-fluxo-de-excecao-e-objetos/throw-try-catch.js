const sum = (a,b) => a+b

console.log(sum(3, 4)); // certo = 7
console.log(sum(3, '4')); // errado = 34

const sum1 = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
       throw new Error ('os valores devem ser numéricos')
    } else {
        console.log(`A soma resulta em: ${a+b}`)
    }
    
}

sum1(9,9)

// catch and try

const verificar = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error ('Digite apenas numeros, misera')
    }
}

const soma = (a, b) => {
    try {
        verificar(a, b);
        return `A soma dos valores é igual a: ${a+b}`;
    } catch (error) {
        throw error.message
    }
};

console.log(soma(100, '1000'))


