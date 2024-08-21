function rollDice (numDiceSides){
    if (numDiceSides > 0){
        return Math.ceil(Math.random() * numDiceSides);
    } else { 
        return 0;
    }
    
}

console.log(rollDice(6));
console.log(rollDice(30));
console.log(rollDice(-1));