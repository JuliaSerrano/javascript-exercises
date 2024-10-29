const removeFromArray = function(nums) {
    let numsToRemove = [];
    for (let i = 1; i < arguments.length; i++){
        numsToRemove.push(arguments[i]);
    }

    return nums.filter((num) => !numsToRemove.includes(num));

};

// Do not edit below this line
module.exports = removeFromArray;
