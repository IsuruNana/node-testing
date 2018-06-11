const db = require('./db.js');

const handleSignUp = (email, password) => {
    //Check if email exists
    //Save user to db
    db.saveUser({
        email,
        password
    });
    //Send the welcome email
}

module.exports = {
    handleSignUp
}