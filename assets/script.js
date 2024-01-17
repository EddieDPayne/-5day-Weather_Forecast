var displayTimeElement = $('#currentDay');
// Function to display current date and time in header.
function displayTime() {
  displayTimeElement.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
}
setInterval(displayTime, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var searchBtn = $('.search-btn');
var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('city-search');
var apiKey = 'f274417977bfe3e7532f91875384063b';
var weatherContainer = $('#display-weather');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Function to request the weather sites API
function getApi(data) {
  
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`

  fetch(requestUrl)  // fetch request to API
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw response.json()
    })
    .then(function (data) {
  
      displayWeather(data);

    })
    .catch(function (error) {
      alert('API Had an error' + error);
    });
}
        
      



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// "2020-03-04 12:00:00"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to display weather to page - revised
function displayWeather(data) {
  console.log("Data:", data);

  // Saves container to a variable
  var weatherContainer = $('#display-weather-list');
  // Clears the previous results
  weatherContainer.empty();
  // Set the index to 0
  var mainWeather = data.weather[0];
  // Creates a list item for the temperature
  var tempListItem = $('<li>').text(`Temperature: ${data.main.temp}°C`);
  // Creates a list item for the main weather description
  var weatherDescListItem = $('<li>').text(`Weather: ${mainWeather.main} - ${mainWeather.description}`);
  // Creates a list item for the humidity
  var humidityValue = data.main.humidity;
  var weatherHumidtyItem = $('<li>').text(`Humidty: ${humidityValue}`);
  // Creates a list item for the wind
  var windValue = data.wind.speed;
  var weatherWindItem = $('<li>').text(`Wind Speed: ${windValue}`);

  // Appends list items to the container/div
  weatherContainer.append(tempListItem, weatherDescListItem, weatherHumidtyItem, weatherWindItem);

};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to search city
function searchCity(event) {

  event.preventDefault();
  var city = searchInput.value.trim();
  getApi();
 

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


// Event listener on search button/form
searchForm.addEventListener('submit', searchCity) // Event listener on the search button


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////











































































