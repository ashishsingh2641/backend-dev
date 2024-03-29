const calculateTip = (total, tipPercent) => {
    const tip = total * tipPercent;

    return total + tip;
}

const add = (a , b) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(a < 0 || b < 0) {
            return reject('Number must be greater Then zero.');
        }
        resolve(a + b);
       }, 2000);
    })
}


module.exports = {
    calculateTip,
    add
}