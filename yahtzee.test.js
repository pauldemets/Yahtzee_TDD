const yahtzee = require('./yahtzee');

test('test init', () => {
    const dices = [3, 4, 1, 2, 1];
    expect(yahtzee.handleAces(dices)).toBe(2);
});