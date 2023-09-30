const reverseString = function(string) {
    let text = string;
    let array = text.split("");
    let reverse = array.reverse();
    let reverseString = reverse.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
