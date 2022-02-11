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


const main = () => {
    handleAces(DICES);
}


main();


module.exports = { handleAces };