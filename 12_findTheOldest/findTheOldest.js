const findTheOldest = function(arr) { 
    arr.map( item => {
        if (!item.yearOfDeath) {
            item.yearOfDeath = new Date().getFullYear()
        };
    });
    arr.sort((a, b) => 
        (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    );
    console.log(arr);
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
