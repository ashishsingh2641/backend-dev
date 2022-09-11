const bcrypt = require('bcrypt');

const passwordHash = async (passoword) => {
    const salt = await bcrypt.genSalt(8);
    const hassedPromisePassword = await bcrypt.hash(passoword, salt);
    
    return hassedPromisePassword;
}

const isMatchPassword = async (password, hassedPassword) => {
    const isMatch = await bcrypt.compare(password, hassedPassword);
    return isMatch;
}


module.exports = {
    isMatchPassword,
    passwordHash
}