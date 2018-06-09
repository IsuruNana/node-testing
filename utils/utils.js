const add  = (a, b) => {
    return a + b;
}

const asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

const square  = (a) => {
    return a * a;
}

const setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd
}