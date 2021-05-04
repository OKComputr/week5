// Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// Get a reference to the bulleted list of movies
 let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)

// Get a reference to the image
let image = document.querySelector(`img`)

// Add the `border-pink-500` class to the image element
image.classList.add(`border-pink-500`)

// get reference to Click me button

let clickMeButton = document.querySelector(`.click-me`)

// Event listener for the click me button

clickMeButton.addEventListener(`click`, async function(event) {
  // Get a reference to the page title element from the DOM
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
pageTitleElement.innerHTML = `Movies to watch!`

})


// get a reference to 'add a movie' button

let addMovieLink = document.querySelector(`.add-movie`)


// Event listener for add movie 

addMovieLink.addEventListener(`click`, async function(event) {

  // Prevent default event to happen -> going to google
  event.preventDefault()

  // Get a reference to the bulleted list of movies
 let movieList = document.querySelector(`.movies-to-watch`)

 // Add an new list item to the bulleted list of movies
 movieList.insertAdjacentHTML(`beforeend`, `
   <li>Spaceballs</li>
 `)

})

// get a reference to zoom image button

let zoomImageButton = document.querySelector(`.zoom-image`)

// Add event listener

zoomImageButton.addEventListener(`click`, async function(event) {

  // get reference to the image

  let image = document.querySelector(`img`)

  // make image larger and smaller
  image.classList.toggle(`w-94`)
  image.classList.toggle(`w-full`)


})

// get a reference to the change image

let changeImageButton = document.querySelector(`.change-image`)

// Add event listener

changeImageButton.addEventListener(`click`, async function(event) {

  // get a reference to the image

  let image = document.querySelector(`img`)

  // change image

  image.setAttribute(`src`, `../images/grogu2.jpg`)


})


// get reference to say hi

let sayHiButton = document.querySelector(`.say-hi`)

// add event listener to say hi button

sayHiButton.addEventListener(`click`, async function(event) {

  // prevent default

  event.preventDefault()

  // get reference to name input

  let nameInput = document.querySelector(`#first-name`)
  
  // get value from the input

  let firstName = nameInput.value

  // get reference to greet button

  let greetingElement = document.querySelector(`.greet`)

  // first name should have a value

  if (firstName.length > 1) 
  
  {

      let sentence = `Hi, ${firstName}!`

  // set html element to sentence

      greetingElement.innerHTML = sentence

  // else keep empty
  }

  else 
{
    greetingElement.innerHTML = ``
}




})

