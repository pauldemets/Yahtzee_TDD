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


const main = () => {

}


main();


module.exports = { handleBasic };