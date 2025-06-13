const add = require('./app');

test('add 2 + 3 and return 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('add (-1) + (-4) and return (-5)', () => {
    expect(add(-1, -4)).toBe(-5);
});
