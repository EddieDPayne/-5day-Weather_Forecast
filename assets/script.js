
var displayTimeElement = $('#currentDay');
// Function to display current date and time in header.
function displayTime() {
  displayTimeElement.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
}
setInterval(displayTime, 1000);


    var searchBtn = $('.search-button');
var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('city-search');
var apiKey = 'f274417977bfe3e7532f91875384063b';
var weatherContainer = $('.container');





    // Function to request the weather sites API
    
    function getApi(city) {

        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey // needs Query Selectors

        fetch(requestUrl)  // fetch request to API
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
                throw response.json()
            })
.then(function(data) {
    console.log(data);
    console.log(data.main.temp);
    console.log(data.main.humidity);
   

  
   
})   
.catch(function(error){
    alert('API Had an error' + error);
});               
}










  // Forecast function
  function getForecast(city)
  {
      var requestUrlTemp = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + apiKey
      fetch(requestUrlTemp)  // fetch request to API
      .then(function (response) {
          if (response.ok) {
              return response.json()
          }
          throw response.json() // Error control
      })
      .then(function(data) {
          console.log(data);
          
          
      })   
      .catch(error => {
console.error('Error fetching data:', error);
      })
      };    
      

    //   for (var i = 0; i < data.list.length; i++) {
        
        
    //   }
  
  
  
// Function to display current weather

function displayWeather(data) {
    console.log("Data:", data);
    var currentWeather = document.getElementById('display-weather');

    var mainWeather = data.weather[0];

    //  This creates a list item for the temperature
    var tempListItem = document.createElement('li');
    tempListItem.textContent = `Temperature: ${data.main.temp}°C`;
    currentWeather.appendChild(tempListItem);

    // Create a list item for the main weather description
    var weatherDescListItem = document.createElement('li');
    weatherDescListItem.textContent = `Weather: ${mainWeather.main} - ${mainWeather.description}`;
    currentWeather.appendChild(weatherDescListItem);
};







// Function to search city
function searchCity (event) {
   
    event.preventDefault();
    var city = searchInput.value.trim();
    getApi(city);
    getForecast(city);
  
}    





// Event listener
searchForm.addEventListener('submit', searchCity) // Event listener on the search button


// Function to display previous seaches and buttons from localStorage
function searchHistory() {

}










                
           
    













  
    
