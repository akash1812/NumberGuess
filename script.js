let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"))
}

const random = Math.floor(Math.random()*maximum +1);
console.log(random);

let guess = prompt("Enter a number to guess or enter 'exit' to quit");
let attempts = 1;

while(guess !== random){
    if(guess==='exit'){
        break;
    }
    else if(guess > random){
        guess = parseInt(prompt("You guessed a higher number, now guess a lower number"));
        attempts++;
    }
    else if(guess < random){
        guess = parseInt(prompt("You guessed a lower number, now guess a higher number"));
        attempts++;
    }
    else{
        guess = parseInt(prompt("Enter a valid number"));
    }

}
if (guess === 'exit'){
    console.warn("You entered 'exit', Thanks");
}
else if(guess === random){
    console.warn(`You guessed the right number, it took you ${attempts} guesses`);
}