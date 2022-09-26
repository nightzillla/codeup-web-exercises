$(function(){
    $.get("http://api.openweathermap.org/data/3.0/weather", {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US"
    }).done(function(data) {
        console.log(data);
    });
});