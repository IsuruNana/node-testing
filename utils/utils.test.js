const expect = require('expect');

const utils = require('./utils');

it('should add 2 numbers', () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should async add to two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    const res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    expect({name: 'boi'}).toEqual({name: 'boi'});
    expect({
        name: 'Drew',
        age: 200,
        location: 'Philly'
    }).toInclude({
        age: 200
    });
});

it('should verify first and last names are set', () => {
    let user = {
        location:'Philly',
        age: 200
    }
    let res = utils.setName(user, 'Drew Mead');

    expect(res).toInclude({
        firstName: 'Drew',
        lastName: 'Mead'
    });
});