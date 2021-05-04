// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button

    let getWeatherButton = document.querySelector(`.get-weather`)




  // When the "get weather" button is clicked:
  
    getWeatherButton.addEventListener(`click`, async function (event) {

   // - Ignore the default behavior of the button

    event.preventDefault()

    // - Get a reference to the element containing the user-entered location


    let locationInput = document.querySelector(`#location`) 

    // - Get the user-entered location from the element's value

    let location = locationInput.value

    // - Check to see if the user entered anything; if so:

    if (location.length > 1) {

    
    // Get reference to user entered days and store value, input the API key
    
    let daysInput = document.querySelector(`#days`)
    let days = daysInput.value

    let apiKey = 'e1a356526e994fcf9ec25430210405'

    // - Construct a URL to call the WeatherAPI.com API
    
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}`

    // - Fetch the url, wait for a response, store the response in memory

    let response = await fetch(url)

    // - Ask for the json-formatted data from the response, wait for the data, store it in memory

    let jsonResponse = await response.json()

    // - Write the json-formatted data to the JavaScript console

    console.log(jsonResponse)

    // - Store the interpreted location, current weather conditions, the forecast as three separate variables

    let interpretedLocation = jsonResponse.location
    let currentWeather = jsonResponse.current
    let forecastWeather = jsonResponse.forecast

    // clear html current and then add html current and extract weather and icon
    
    let currentTemp = currentWeather.cloud
    let currentText = currentWeather.condition.text
    let currentIcon = currentWeather.condition.icon

    let currentW = document.querySelector(`.current`)
    
    
    currentW.innerHTML = ''


    currentW.insertAdjacentHTML(`beforeend`,
    `<div class="text-center space-y-2">
        <div class="font-bold text-3xl">Current Weather for ${interpretedLocation.name}, ${interpretedLocation.region} , ${interpretedLocation.country}</div>
        <div class="font-bold">
          <img src="https:${currentIcon}" class="inline-block">
          <span class="temperature">${currentTemp}</span>° 
          and
          <span class="conditions">${currentText}</span>
        </div>
      </div>
    </div>`)

    // clear html forecast and then add html forecast and extract weather and icon
    
    

    let forecastW = document.querySelector(`.forecast`)
    
    forecastW.innerHTML = ''

    forecastW.insertAdjacentHTML(`beforeend`, 
    `<div class="text-center space-y-8">
    <div class="font-bold text-3xl">${days} Day Forecast</div>`)

    // loop through arrays to add one at a time

    for (let i = 0; i < days; i++) {

      let forecastTempLow = forecastWeather.forecastday[i].day.mintemp_f
      let forecastTempHigh = forecastWeather.forecastday[i].day.maxtemp_f
      let forecastDate = forecastWeather.forecastday[i].date
      let forecastText = forecastWeather.forecastday[i].day.condition.text
      let forecastIcon = forecastWeather.forecastday[i].day.condition.icon

      forecastW.insertAdjacentHTML(`beforeend`,

      ` <div class="text-center space-y-8">
          <div>
            <img src="https:${forecastIcon}" class="mx-auto">
            <h1 class="text-2xl text-bold text-gray-500">${forecastDate}</h1>
            <h2 class="text-xl">High ${forecastTempHigh}° – Low ${forecastTempLow}°</h2>
            <p class="text-gray-500">${forecastText}</h1>
          </div>
        </div>`)

    }


    }

else {

return 0

}

  })

 
})