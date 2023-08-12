const palindromes = function (string) {
    const regularExpression = /[^a-z0-9]/g;
    let lowerCaseString = string.toLowerCase().replace(regularExpression, '');
    let reversedString = lowerCaseString.split('').reverse().join('');
    return reversedString == lowerCaseString;
};

// Do not edit below this line
module.exports = palindromes;
