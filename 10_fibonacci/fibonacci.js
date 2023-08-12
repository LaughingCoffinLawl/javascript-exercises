const fibonacci = function(fibonacci) {
    if (fibonacci < 0) return "OOPS";
    if (fibonacci === 0) return "ERROR";

    let firstNum = 0;
    let secondNum = 1;
    
    for (let i = 2; i <= fibonacci; i++) {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }

    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
