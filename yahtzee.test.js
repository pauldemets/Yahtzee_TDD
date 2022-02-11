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

test('test fives', () => {
    const dices = [5, 5, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 5)).toBe(10);
    const dices2 = [6, 5, 5, 5, 5];
    expect(yahtzee.handleBasic(dices2, 5)).toBe(20);
});

test('test sixes', () => {
    const dices = [5, 5, 6, 6, 6];
    expect(yahtzee.handleBasic(dices, 6)).toBe(18);
    const dices2 = [2, 6, 2, 6, 5];
    expect(yahtzee.handleBasic(dices2, 6)).toBe(12);
});

test('test three of a kind', () => {
    const dices = [2, 3, 4, 4, 4];
    expect(yahtzee.handleThreeOfKind(dices)).toBe(17);
    const dices2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleThreeOfKind(dices2)).toBe(0);
    const dices3 = [1, 1, 1, 6, 4];
    expect(yahtzee.handleThreeOfKind(dices3)).toBe(13);
});

test('test four of a kind', () => {
    const dices = [4, 3, 4, 4, 4];
    expect(yahtzee.handleFourOfKind(dices)).toBe(19);
    const dices2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleFourOfKind(dices2)).toBe(0);
    const dices3 = [5, 3, 5, 5, 5];
    expect(yahtzee.handleFourOfKind(dices3)).toBe(23);
});

test('test full house', () => {
    const dices = [2, 2, 5, 5, 5];
    expect(yahtzee.handleFullHouse(dices)).toBe(25);
    const dices2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleFullHouse(dices2)).toBe(0);
    const dices3 = [3, 1, 1, 1, 3];
    expect(yahtzee.handleFullHouse(dices3)).toBe(25);
});

test('test large straight', () => {
    const dices = [2, 3, 4, 5, 6];
    expect(yahtzee.handleLargeStraight(dices)).toBe(40);
    const dices2 = [1, 2, 3, 4, 5];
    expect(yahtzee.handleLargeStraight(dices2)).toBe(40);
    const dices3 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleLargeStraight(dices3)).toBe(0);
});