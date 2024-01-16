


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
    function getApi(city) {
          // var savedSearches = JSON.stringify(localStorage.setItem("search", history))
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey // needs Query Selectors

        fetch(requestUrl)  // fetch request to API
            .then(function (response) {
                if (response.ok) {
                    data = response.json;
                    console.log(data.list);
                    return response.json()
                }
                //throw response.json()
            })
.then(function(data) {
    console.log(data);
    console.log(data.main.temp);
    console.log(data.main.list);
    //console.log(data.main.humidity);
    displayWeather(data);
    console.log(data[0]);
})   
.catch(function(error){
    alert('API Had an error' + error);
});               
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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
          
          // "2020-03-04 12:00:00"
      //   }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    // Function to display weather to page - revised
  function displayWeather(data) {
      console.log("Data:", data);
      //Test
    //   alert("Data received!");
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
      function searchCity (event) {
         
          event.preventDefault();
          var city = searchInput.value.trim();
          getApi(city);
          getForecast(city);
        
      }    
  
      
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    
      function displayForecast(data) {
        // Saves container to a variable
        var forecastContainer = $('#display-forecast-list');
        // Clears the previous results
        weatherContainer.empty();
        //console.log(data.list[0].dt_txt);

        var forecast1 = data.array[4];
        //console.log(forecast1);

      };

   
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
        
      
      // Event listener on search button/form
      searchForm.addEventListener('submit', searchCity) // Event listener on the search button
      
 
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      var searchHistory = 
      
      // Function to display previous seaches and buttons from localStorage
      function savedSearches(array) {
      getApi();
      };









      








      

    
    

  
  
  
  
    













  









                
           
    













  
    
