//My personal APIKey//
var APIKey = "295bbe3ca74a16499159d4b26aed24cf";


//UV Index APIKey//
var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=" + APIKey;

//This function will retirieve input data//
$("#run-search").on("click", function() {

    var city = $("#search-term").val().trim();
    console.log(city);

    weather(city);
});
//Function that retrieves weather data for the current city that was searched//
function weather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    APIKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        fiveDayWeather(city);

        //Allows data like the current date, city name, temperature, and wind speed to display//
        var a = new Date(response.dt * 1000).toLocaleDateString();
        console.log(a);
        $("#city-name-date").text(response.name + " " + d);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.wind.speed);


        //Converts temperature from Kelvin to Farenheit//
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        $(".temperature").text("Temperature (F) " + tempF.toFixed(2));
    });
};
//Function to retrieve 5-day forecast data//
function fiveDayWeather(city) {
    var foreCastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid" + APIKey;
    console.log(foreCastURL);

    $.ajax({
        url: foreCastURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);

        var listArr = [respose.list[0], response.list[8], response.list[16], response.list[24], response.list[32]];
        console.log(listArr);
    })
}