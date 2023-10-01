const removeFromArray = function(input, ...theArgs) {
    for (const arg of theArgs) {
        if (input.includes(arg)) {
            let whereToRemove = input.indexOf(arg);
            input.splice(whereToRemove, 1);
        };
    };
    return input;
};

// Do not edit below this line
module.exports = removeFromArray;
