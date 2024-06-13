const repeatString = function(word, num) {
    let wordChain = "";
    if (num < 0){
        return "ERROR"
    }
    for (let i = 0; i < num; i++){
       wordChain += word;
    }
    return wordChain;
}

// Do not edit below this line
module.exports = repeatString;
