const carrinho = [10, 20, 30, 45, 69]

const checkout = (carrinho, callback) => {
    let total = 0;
    for(const item of carrinho) {
        total += item;
    }
    total -= callback(total)
    return total
}

const criaDesconto = (porcentagem) => {
    const calcDesc = (total) => {
        return total * (porcentagem/100);
    }
    return calcDesc;
}

const desc15 = criaDesconto(10);

const total = checkout(carrinho, desc15);
console.log(total);

