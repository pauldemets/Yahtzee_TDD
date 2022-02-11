const DICES = [
    1,
    2,
    6,
    1,
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

const handleThreeOfKind = (dices) => {
    var occurrence = {};
    var isValid = false;

    dices.forEach(dice => {
        if (dice in occurrence) {
            occurrence[dice] += 1;
            occurrence[dice] >= 3 ? isValid = true : null;
        }
        else {
            occurrence[dice] = 1;
        }
    });

    return isValid ?
        calculateSumDice(dices) :
        0;
}


const main = () => {
    handleThreeOfKind(DICES);
}


main();


module.exports = { handleBasic, handleThreeOfKind };