const yahtzee = require('./yahtzee');

test('test aces', () => {
    const dices = [3, 4, 1, 2, 1];
    expect(yahtzee.handleAces(dices)).toBe(2);
});

test('test twos', () => {
    const dices = [2, 2, 1, 2, 1];
    expect(yahtzee.handleTwos(dices)).toBe(6);
});