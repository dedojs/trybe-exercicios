/* Dado um arquivo com dados de regiões, estados e cidades, crie uma função (mapCities) que retorna um objeto no qual as chaves são as siglas das regiões (N, NE, CW, SE e S) e os valores são arrays compostos por objetos com o nome da cidade e o nome do estado. */

/* { 
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ],
  
}; */

const states = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goías' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraíma' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
];

const regions = [
  { sigla: 'S', name: 'Sul' },
  { sigla: 'SE', name: 'Sudeste' },
  { sigla: 'N', name: 'Norte' },
  { sigla: 'NE', name: 'Nordeste' },
  { sigla: 'CO', name: 'Centro-Oeste' },
]
const cities = [
  {name: 'Arroio dos Ratos', uf: 'RS', region: 'S'},
  {name: 'Trombudo Central', uf: 'SC', region: 'S'},
  {name: 'Flor do Sertão', uf: 'SC', region: 'S'},
  {name: 'Cidade de Espumoso', uf: 'RS', region: 'S'},
  {name: 'Ampére', uf: 'PR', region: 'S'},
  {name: 'Passa Tempo', uf: 'MG', region: 'SE'},
  {name: 'Solidão', uf: 'PE', region: 'NE'},
  {name: 'Ponto Chique', uf: 'MG', region: 'SE'},
  {name: 'Passa e Fica', uf: 'RN', region: 'NE'},
  {name: 'Feliz Natal', uf: 'MT', region: 'CO'},
  {name: 'Fruta de Leite', uf: 'MG', region: 'SE'},
  {name: 'Gado Bravo', uf: 'PB', region: 'NE'},
  {name: 'Baía da Traição', uf: 'PB', region: 'NE'},
  {name: 'Xique-Xique', uf: 'BA', region: 'NE'},
  {name: 'Venha-Ver', uf: 'RN', region: 'NE'}
]


const regioes = () => {
  const regioesBrasileiras = {
    CO: cities.filter(({region}) => region === 'CO'),
    NE: cities.filter(({region}) => region ==='NE'),
    S: cities.filter(({region}) => region ==='S'),
    SE: cities.filter(({region}) => region ==='SE'),
  }
  console.log(regioesBrasileiras)
}

regioes()




