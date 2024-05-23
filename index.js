const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(answer);

let guess;
let running = true;
while (running) {
  guess = window.prompt("Guess Number between 50 t0 100");

  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Enter a number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Enter a valid number between 50 t0 100");
  } 
  else {
    attempts++;
    if (guess < answer) {
      window.alert("Answer is too low");
    } else if (guess > answer) {
      window.alert("Answer is too High");
    } else {
      window.alert(`You guessed it right, ${answer}, It took you ${attempts} attempts`);
      running = false;
    }
  }
}
