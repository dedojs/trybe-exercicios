function techList (tech, nome) {
    tech.sort()
    let tecno = []
    for(let i of tech) {
        tecno.push({tech: i, name: nome})
    }
    if (tech.length === 0) {
        return 'Vazio!'
    }
    return tecno
}
/* 
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')); 
 */
module.exports = techList;