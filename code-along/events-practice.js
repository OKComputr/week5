// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory

let rollButton = document.querySelector(`.roll-button`)

// Listen for the clicking of the roll button, when clicked:

rollButton.addEventListener(`click`, async function(event) {

  // - Ignore the roll button's default behavior

  event.preventDefault()

  // - Store a random integer in memory, representing the roll of the first die

  let firstRoll = getRandomInt(6)

  // - Store a random integer in memory, representing the roll of the second die

  let secondRoll = getRandomInt(6)

  // - Store the total of the two random numbers, representing the total roll

  let totalRoll = firstRoll + secondRoll

  // - Replace the first die image using the first random value (hint: setAttribute)

  let dieOne = document.querySelector(`.die1`)

  dieOne.setAttribute(`src`, `../images/dice/${firstRoll}.png`)

   // - Replace the second die image using the second random value (hint: setAttribute)

  let dieTwo = document.querySelector(`.die2`)

  dieTwo.setAttribute(`src`, `../images/dice/${firstRoll}.png`)

  // - Store a reference to the player name input element

  let nameInput = document.querySelector(`#player`)

  // - Store a reference to the player name input element

  let playerName = nameInput.value

  // - Grab the value of the player name element and store the player's name in memory

   // - Make sure the player's name is filled out; if it is:

  if (playerName.length > 1) {

// - Form a sentence in memory, containing the player's name and the total that was rolled

let sentence = `${playerName} has rolled a total of ${totalRoll}`

// - Store a reference to the "result" un-ordered list element

let resultList = document.querySelector(`.result`)

// - Insert the sentence to the "result" un-ordered list as a list item (li)

resultList.insertAdjacentHTML(`beforeend`, `
<li>${sentence}</li>`

  }

else {

return 0

}

})

  
  
  

  

  

 

 

  
  
 
    

 

    /