const num = Math.ceil(Math.random() * 100)

while (true) {
    let guess = prompt("Guess the correct number between 1-100")
    if (guess == num) {
        alert("You got it right!!")
        break;
    } else if (guess > num) {
        alert('Its a bit too high')
    } else {
        alert('Its a bit too low')
    }
}