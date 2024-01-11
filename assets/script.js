$(function(){

var searchBtn = $('.search-button');





    // Function to request the weather sites API
    function getApi() {

        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather'

        fetch(requestUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw response.json()
                } else {

                    return response.json()
                }
            })
        };
    
    
    
    
        searchBtn.on('click', getApi) 
        
        
        








});