const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

   // 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const add = (object, key, value) => {
      object[key] = value
  }
 
  add(lesson2, 'turno', 'noite')
  console.log(lesson2)

  // 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listKeys = (object) => {
      console.log(Object.keys(object))
  }

  listKeys(lesson3)

  // 3 Crie uma função para mostrar o tamanho de um objeto.
  const verify = (object) => {
      const tam = Object.keys(object).length
      console.log(`O objeto possui ${tam} campos.`)
  }

 verify(lesson1)

  

  // 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  const listValue = (object) => {
    console.log(Object.values(object))
}

listValue(lesson3)

//5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã',
    },
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite'
    },
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite',
    },
}

console.log(allLessons)

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const alunos = () => {
    const alunos1 = allLessons.lesson1.numeroEstudantes
    const alunos2 = allLessons.lesson2.numeroEstudantes
    const alunos3 = allLessons.lesson3.numeroEstudantes
    return(`Total de alunos ${alunos1+alunos2+alunos3}`) 
}

console.log(alunos())

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
/* console.log(getValueByNumber(lesson1, 0));
Output: 'Matématica' */

const valueOfKey = (key, pos) => {
   const chave = allLessons[key]
   const inf = Object.entries(chave)
   console.log(`Output: ${inf[pos][1]}`)
}

valueOfKey('lesson1',0)

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
/* console.log(verifyPair(lesson3, 'turno', 'noite'));
Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Output: false */

const verificar = (obj, key, value) => {
    const objeto = allLessons[obj]
    const inf = Object.entries(objeto)
    const chave = objeto[key]
    const valor = value
    const result = chave.includes(valor)
    console.log(result)
}
verificar('lesson1', 'materia', 'Matemática')

//bônus
/* Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
 */

const reportCreate = (object, professor) => {
    let report = {}
    let aulas = []
    let alunos = 0
    for (let i in object) {
        if(object[i].professor === professor) {
            aulas.push(object[i].materia)
            alunos += (object[i].numeroEstudantes)
        }
    }
    report.professor = professor
    report.aulas = aulas
    report.estudantes = alunos
    console.log(report)
}

reportCreate(allLessons, 'Maria Clara')