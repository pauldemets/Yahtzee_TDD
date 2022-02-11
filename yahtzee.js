const DICES = [
    1,
    2,
    6,
    4,
    1
];

const handleAces = (dices) => {
    var cpt = 0;
    dices.forEach(dice => {
        if (dice === 1) {
            cpt++;
        }
    });

    return cpt;
}

const handleTwos = (dices) => {
    var cpt = 0;
    dices.forEach(dice => {
        if (dice === 2) {
            cpt++;
        }
    });

    return cpt * 2;
}

const handleThrees = (dices) => {
    var cpt = 0;
    dices.forEach(dice => {
        if (dice === 3) {
            cpt++;
        }
    });

    return cpt * 3;
}


const main = () => {
    handleAces(DICES);
}


main();


module.exports = { handleAces, handleTwos, handleThrees };