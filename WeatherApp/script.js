let weather = {
    "apiKey": "9bc19e457c1e3ce6e44b5ea0a1a01147",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=9bc19e457c1e3ce6e44b5ea0a1a01147"
            ).then((response) => response.json())
            .then((data) => console.log(data));
    }
}