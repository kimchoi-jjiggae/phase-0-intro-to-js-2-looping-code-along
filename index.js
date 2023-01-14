// Code your solutions in this file
let cards = []

function writeCards(names, event){
    for (let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cards.push(message)
        debugger;

    }
    return cards;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}