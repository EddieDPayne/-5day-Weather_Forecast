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
var weatherContainer = $('#display-weather');



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var apiKey = 'f274417977bfe3e7532f91875384063b';
var lon;
var lat;

function cityApi(cityName) {
  
  
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
      // displayWeather(data);
      
    })
    .catch(function (error) {
      alert('API Had an error' + error);
    });
  }

// Function to request the weather sites API
function weatherApi(lat, lon) {
  
  
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric}`;

  fetch(requestUrl)  // fetch request to API
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw response.json()
    })
    .then(function (data) {
      console.log(data)
     for (let i = 0; i < data.list.length; i+=8) {
    var htmlEl = `
    <div class="card" style="width: 12rem;">
    <img src= "https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" style="width: 40%">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Temp: ${data.list[i].main.temp}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div> 
  </div> 
    `
    var htmlDiv = $("<div>")
    htmlDiv.html(htmlEl);
      $("#display-forecast-list").append(htmlDiv);
     }
      
    })
    .catch(function (error) {
      alert('API Had an error' + error);
    });
  }
  
  
  
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var cityName = searchInput.value
    cityApi(cityName);
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// str.split(" ")[1].split(":")[0]

// "2020-03-04 12:00:00"




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////































































































