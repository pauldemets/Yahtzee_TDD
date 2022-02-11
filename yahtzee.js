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
    var occurrences = {};
    var isValid = false;
    var i = 0;

    while (i < 6 && !isValid) {
        var dice = dices[i];

        if (dice in occurrences) {
            occurrences[dice] += 1;
            isValid = occurrences[dice] >= 3;
        }
        else {
            occurrences[dice] = 1;
        }
        i++;
    }

    return isValid ?
        calculateSumDice(dices) :
        0;
}

const handleFourOfKind = (dices) => {
    var occurrences = {};
    var isValid = false;
    var i = 0;

    while (i < 6 && !isValid) {
        var dice = dices[i];

        if (dice in occurrences) {
            occurrences[dice] += 1;
            isValid = occurrences[dice] >= 4;
        }
        else {
            occurrences[dice] = 1;
        }
        i++;
    }

    return isValid ?
        calculateSumDice(dices) :
        0;
}


const main = () => {
    handleThreeOfKind(DICES);
}


main();


module.exports = { handleBasic, handleThreeOfKind, handleFourOfKind };