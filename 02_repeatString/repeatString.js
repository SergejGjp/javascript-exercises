const repeatString = function(string, num) {
    let text = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
        text += string;
        };
    } else if (num < 0) {
        text = "ERROR";
    };
    return text;
};


// Do not edit below this line
module.exports = repeatString;
