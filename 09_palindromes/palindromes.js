const palindromes = function (str) {
    let punctuation = /[\.,?!]/g;
    let newStr = str.replace(punctuation, "");
    let reverseStr = newStr
        .toLowerCase()
        .split(" ")
        .map(item => item.split("").reverse().join(""))
        .reverse()
        .join("");
    let jointStr = newStr
        .toLowerCase()
        .split(" ")
        .join("");
    return reverseStr === jointStr;
};

// Do not edit below this line
module.exports = palindromes;
