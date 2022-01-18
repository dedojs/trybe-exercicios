const wakeUp = () => {
    return 'Acordando!!';
}

const coffee = () => {
    return 'Bora tomar café!!'
}

const sleep = () => {
    return 'Partiu dormir!!'
}

const doingThings = (fun) => {
    console.log(fun());
}

doingThings(sleep)