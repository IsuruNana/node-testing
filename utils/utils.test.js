const expect = require('expect');

const utils = require('./utils');

it('should add 2 numbers', () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    const res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
})