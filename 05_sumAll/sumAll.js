const sumAll = function(num1, num2) {
    // check types
    if ((num1 < 0 || num2 < 0) || (!Number.isInteger(num1) || !Number.isInteger(num2))){
        return 'ERROR';
    }
    let lowNum, highNum;
    highNum = num1 > num2 ? num1 : num2;
    lowNum = num1 > num2 ? num2 : num1;

    let sum = 0;
    for (lowNum; lowNum <= highNum; lowNum++){
        sum += lowNum;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
