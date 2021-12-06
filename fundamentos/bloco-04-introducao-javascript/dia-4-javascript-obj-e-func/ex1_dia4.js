//objeto

let singer= {
    name:'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age:77,
    bestAlbuns:['Travessia','Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
    }
}

console.log("O cantor " + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos')

console.log(singer['name'], singer['lastName'], singer['age'])

singer['fullName'] = singer.name + ' ' + singer.lastName

console.table(singer)

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state)

// exemplo 2 //

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    console.log(diasDaSemana['5'])

    let conta = {
        agencia: '0000',
        banco:{
            cod:'012',
            id:4,
            nome:'TrybeBank'
        }
    }

    let infoDoBanco = 'banco'; // criei uma variavel com 1 propriedade do objeto conta

    console.log(conta[infoDoBanco])
    console.log(conta[infoDoBanco]['nome'])
    console.log(conta.agencia)
    console.log(conta['agencia'])
    console.log(conta.banco.cod)
    console.log(conta['banco']['id'])

    // exxemplo 3 //

    let usuario = {
        id: 99,
        email:'jakeperalta"gmail.com',
        infoPessoal: {
            nome:'Jake',
            sobrenome:'Peralta',
            endereco:{
                rua:'Smith Street',
                bairro: 'Brooklyn',
                cidade:'New York',
                estado:'New York',
            }
        }
    }

    console.log(usuario.id)
    console.log(usuario.email)
    console.log(usuario.infoPessoal.endereco.rua)
    console.log(usuario.infoPessoal.endereco.cidade)
    console.log(usuario['infoPessoal']['endereco']['cidade'])

    // exemplo 4

    let moradores = [
        {
            nome:'Luiza',
            sobrenome:'Guimarães',
            andar:10,
            apartamento:1005,
        },
        {
            nome:'William',
            sobrenome: 'Albuquerque',
            andar:5,
            apartamento:502,
        },
        {
            nome:'Murilo',
            sobrenome:'Ferraz',
            andar:8,
            apartamento:804,
        },
        {
            nome:'Zoey',
            sobrenome: 'Brooks',
            andar:1,
            apartamento:101,
        }
    ]

    console.table(moradores)

    let primeiroMorador = moradores[0]
    console.log(primeiroMorador)
    console.log(primeiroMorador['andar'])
    console.log(primeiroMorador.andar)

    let ultimoMorador = moradores[moradores.length-1]
    console.log(ultimoMorador)
    console.log(ultimoMorador.nome, ultimoMorador.sobrenome)