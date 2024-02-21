const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let fullWord = "";
    for (let index = 0; index < num; index++) {
        fullWord += string;
    }
    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
