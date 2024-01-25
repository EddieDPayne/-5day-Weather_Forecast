var displayTimeElement = $('#currentDay');
// Function to display current date and time in header.
function displayTime() {
  displayTimeElement.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
}
setInterval(displayTime, 1000);

//--------------------------------------------------------------------------------------------------------------


// Global Variables
var searchBtn = $('.search-btn');
var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('city-search');
var weatherContainer = $('#display-weather');

var apiKey = 'f274417977bfe3e7532f91875384063b';
var lon;
var lat;


//--------------------------------------------------------------------------------------------------------------


// Find city API & Fetch request
function cityApi(cityName) {
  $('#display-forecast-list').html('')

  var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`

  fetch(requestUrl)  // fetch request to API
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw response.json()
    })
    .then(function (data) {
      console.log(data);
      lat = data[0].lat;
      lon = data[0].lon;
      weatherApi(lat, lon)
      currentWeather(lat, lon)


    })
    .catch(function (error) {
      alert('API Had an error' + error);
    });
}

// Function to request the weather sites API -----------------------------------------------------------------------------
function weatherApi(lat, lon) {


  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(requestUrl)  // fetch request to API
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw response.json()
    })
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.list.length; i += 8) {
        // gets revelant day
        var timestamp = data.list[i].dt * 1000;
        // uses dayjs to display the relevant day
        var weekDay = dayjs(timestamp).format('dddd');
        var htmlEl = `
    <div class="card" style="width: 12rem;">
    <img src= "https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" style="width: 40%">
    <div class="card-body">
      <h5 class="card-title">${weekDay}</h5>
      <p class="card-text">Temp: ${data.list[i].main.temp}</p>
      <p class="card-text">Humidty: ${data.list[i].main.humidity}</p>
      <p class="card-text">Wind: ${data.list[i].wind.speed}</p>
      </div> 
    </div> `

        var htmlDiv = $("<div>")
        htmlDiv.html(htmlEl);
        $("#display-forecast-list").append(htmlDiv);
      }

    })
    .catch(function (error) {
      alert('API Had an error' + error);
    });
}





// Display the weather for current day -------------------------------------------------------------------------
function currentWeather(lat, lon) {
$('#display-current-weather').html('')

  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(requestUrl)  // fetch request to API
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw response.json()
    })
    .then(function (data) {
      console.log(data)

      var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();
let day = weekday[d.getDay()];
     
    
     var htmlEl2 = `
    <div class="card" style="width: 12rem;">
    <img src= "https://openweathermap.org/img/w/${data.weather[0].icon}.png" style="width: 40%">
    <div class="card-body">
      <h5 class="card-title">${day}</h5>
      <p class="card-text">Temp: ${data.main.temp}</p>
      <p class="card-text">Humidty: ${data.main.humidity}</p>
      <p class="card-text">Wind: ${data.wind.speed}</p>
      </div> 
    </div> `



      var htmlDiv2 = $('<div>')
      htmlDiv2.html(htmlEl2);
      $('#display-current-weather').append(htmlDiv2);
    }

    )
    .catch(function (error) {
      alert('API Had an error' + error);
    });
}

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  var cityName = searchInput.value
  cityApi(cityName);
 displaySearchedCities(cityName)

});





//--------------------------------------------------------------------------------------------------------------

function displaySearchedCities() {

// Function to display saved cities as buttons
var searchInput = document.getElementById('city-search');
var searchForm = document.getElementById('search-form');

// Event listener for the form submission
searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve the input value
  var cityName = searchInput.value;

  // Save the data to local storage
  localStorage.setItem('lastSearchedCity', cityName);

 var savedCityEl = `<div>
 <button>${cityname}</button>
 </div>`
 
 var savedCityHtml = $('button')
 savedCityHtml.html(savedCityEl);
 $('#saved-cities').append(savedCityHtml);
  // Optionally, update the display or perform other actions
  console.log('City saved to local storage:', cityName);
});

}





// str.split(" ")[1].split(":")[0]


































































































