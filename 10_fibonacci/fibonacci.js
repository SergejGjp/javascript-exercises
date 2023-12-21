const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    };
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            arr.push(1);
        } else if (i === 1) {
            arr.push(1);
        } else if (i >= 2) {
            arr.push(arr[i - 1] + arr[i - 2]);
        };
        if (i === num -1){
            return arr[num - 1];
        };
    };
};

// Do not edit below this line
module.exports = fibonacci;
