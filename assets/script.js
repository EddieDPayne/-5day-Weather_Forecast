// $(function () {

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
    console.log(data.list.temp);
    console.log(data.list.humidity);
    console.log(data.list);

  
   
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
      .catch(function(error){
          alert('API Had an error' + error);
      });    
      

    //   for (var i = 0; i < data.list.length; i++) {
        
        
    //   }
  }
  
  
// Function to display current weather
  function displayWeather(data){ 
  var temperature = data.main.temp    
  var humidity = data.main.humidity
  var windSpeed = data.wind.speed
  // Display on page 
 
var tempEl = document.createElement('p')
var humidityEl = document.createElement('p')
var windSpeedEl = document.createElement('p')

tempEl.textContent = `Temperature: ${temperature[i]}`;

p.appendChild(tempEl);

  
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










                
           
    













  
    
// });