const DICES = [
    1,
    6,
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

const handleFullHouse = (dices) => {
    var occurrences = {};

    dices.forEach(dice => {
        if (dice in occurrences) {
            occurrences[dice] += 1;
        }
        else {
            occurrences[dice] = 1;
        }
    });

    return Object.keys(occurrences).length === 2 ?
        25 :
        0;
}

const handleSmallStraight = (dices) => {
    return -1;
}

const handleLargeStraight = (dices) => {
    var isValid = true;
    var i = 0;
    var tempDice = -1;

    while (i < 6 && isValid) {
        if (dices[i] <= tempDice) {
            isValid = false;
        }
        tempDice = dices[i];
        i++;
    }

    return isValid ?
        40 : 0;
}


const main = () => {
}


main();


module.exports = {
    handleBasic, handleThreeOfKind,
    handleFourOfKind, handleFullHouse,
    handleLargeStraight, handleSmallStraight
};