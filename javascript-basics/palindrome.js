let word = prompt("Enter any word to check for palindrome");

function palindrome (word) {
    let reversed = word.split('').reverse().join('')
    if (word == reversed)
        return true
    return false
}

alert("Palindrome Check: " + palindrome(word))