const removeFromArray = function(array, ...elements) {
    const newArray = [];
    array.forEach ((item) => {
        if (!elements.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
