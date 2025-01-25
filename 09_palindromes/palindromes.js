const palindromes = function (string) {
    const clean_string = string
        .replace(/[^0-9a-z-A-Z]/g, "").replace(/ +/, " ")
        .toLowerCase();

    let p1 = 0;
    let p2 = clean_string.length - 1;

    while (p2 > p1){
        if (clean_string[p1] !== clean_string[p2]){
            return false
        }
        p1++;
        p2--; 
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
