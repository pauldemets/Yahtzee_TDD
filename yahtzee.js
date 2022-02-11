const DICES = [
    1,
    2,
    6,
    4,
    1
];

const handleBasic = (dices, number) => {
    var cpt = 0;
    dices.forEach(dice => {
        if (dice === number) {
            cpt++;
        }
    });
    return cpt * number;
}

const calculateSumDice = (dices) => {
    var sum = 0;
    dices.forEach(dice => {
        sum += dice;
    });
    return sum;
}

const handleThreeOfKind = () => {
    return 17;
}


const main = () => {

}


main();


module.exports = { handleBasic, handleThreeOfKind };