const repeatString = function(word, num) {
    let wordChain = "";
    for (let i = 0; i < num; i++){
       wordChain += word;
    }
    return wordChain;
}

// Do not edit below this line
module.exports = repeatString;
