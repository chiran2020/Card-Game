let player = {
  // playerInfo: ["John", 10],
  name: "John",
  chips: "10"
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Use same function as in HTML ON-CLICK and make that function call new function.


// pull HTML elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true

  }

  else {
    message = "You're out of the game!"
    isAlive = false
  }

  // Give values to HTML elements
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "

  playerEl.textContent = player.name + ": $" + player.chips



  // + cards[0] + " , " + cards[1]

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "

  }
}



function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  // return randomNum

  if (randomNumber === 1) {
    return 11
  }
  else if (randomNumber >= 11) {
    return 10
  }
  else {
    return randomNumber
  }
}

// console.log(getRandomCard())

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}



// let hasSolvedChallenge = false
// let hasHintsLeft = true
// if (hasSolvedChallenge === false || hasHintsLeft === false) {
//   showSolution()
// }

// function showSolution() {
//   console.log("Showing the solutions......")
// }


// Object

let airBNBplace = {
  place: "USA",
  state: "Kentucky",
  city: "Louisville",
  pricePerNight: 150,
  smokingFree: true,
  freeStuff: ["Breakfast", "Coffee", "pool", "Extra blankets"]
}

console.log("Place we are renting is: " + airBNBplace.place + " " + airBNBplace.state + "." + " Free stuff are:" + " " + airBNBplace.freeStuff + " " + airBNBplace.smokingFree)

// airBNBplace.freeStuff.slice(0, 0, "Water")

console.log(airBNBplace.freeStuff)





// function ForSmoke() {
//   let mes = "No Smoking!"
//   console.log(mes)
// }

// if (airBNBplace.smokingFree === true) {

//   ForSmoke()
// }