// Object.entries = transforma os campos em arrays separados

/* const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow)); */

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for (i in pairKeyValue) {
      console.log('------------------')
      console.log('Pais:', pairKeyValue[i][0])
      console.log('Capital:', pairKeyValue[i][1])
  }