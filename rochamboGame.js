const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let machineChoice = Math.random();

if (machineChoice < 0.33){
  machineChoice = 'scissors';
  } else if (machineChoice <= 0.67 ){
  machineChoice = 'rock';
  } else {
  machineChoice = 'paper'
  }

rl.question('Select: rock, paper, or scissors: ', (myChoice) => {
  console.log(`\nYou selected ${myChoice}`)
  console.log(`computer selects ${machineChoice}\n`)

  if(myChoice === machineChoice){
    console.log('Tie, Choose again')
  }  

  if(myChoice === 'rock'){
    if(machineChoice === 'scissors'){
      console.log('You Win: rock trumps scissors')
    } else if (machineChoice === 'paper') {
      console.log('You Lose: paper trumps rock')
    }
  }

  if(myChoice === 'scissors'){
    if(machineChoice === 'paper'){
      console.log('You Win: scissors trumps paper')
    } else if (machineChoice === 'rock') {
      console.log('You Lose: rock trumps scissors')
    }
  }

  if(myChoice === 'paper'){
    if(machineChoice === 'rock'){
      console.log('You Win: paper trumps rock')
    } else if (machineChoice === 'scissors') {
      console.log('You Lose: scissors trumps paper')
    }
  }
  
  rl.close();
});




