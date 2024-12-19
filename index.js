let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "ooooo bros edging it oooo"
} else if (sum === 21) {
    message = "good job sigma"
    hasBlackJack = true
} else {
    message = "haha dumb mcidiot face"
    isAlive = false
}

console.log(message)