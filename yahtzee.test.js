const yahtzee = require('./yahtzee');

test('test aces', () => {
    const dices = [3, 4, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 1)).toBe(2);
});

test('test twos', () => {
    const dices = [2, 2, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 2)).toBe(6);
});

test('test threes', () => {
    const dices = [2, 2, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 3)).toBe(0);
    const dices2 = [6, 3, 3, 3, 1];
    expect(yahtzee.handleBasic(dices2, 3)).toBe(9);
});

test('test fours', () => {
    const dices = [2, 4, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 4)).toBe(4);
    const dices2 = [6, 4, 4, 3, 4];
    expect(yahtzee.handleBasic(dices2, 4)).toBe(12);
});