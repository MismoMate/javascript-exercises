const removeFromArray = function(numList, ...excludeNums) {
    let newNumbList = numList;
    for (let i = 0; i < excludeNums.length; i++){
        newNumbList = newNumbList.filter(a => a !== excludeNums[i]);  
    }  
    return newNumbList;
}

// Do not edit below this line
module.exports = removeFromArray;
