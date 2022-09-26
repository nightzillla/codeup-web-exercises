
function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}
$(function() {

    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function (data) {
    //     console.log(data);
    // });

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        // console.log("current weather");
        // console.log(data);
        // console.log(data.main.temp);
        // console.log(data.wind.speed);
        // console.log(windCardinalDirection(data.wind.deg));
        // $(`body`).append(`<p> The current temperature is ${data.main.temp_max}</p>`);
    });
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        // console.log('5 day forecast', data.list[0].main.temp);
        // console.log(data.list);
        data.list.forEach((forecast, i) => {
            // if (index < 1) {
            //     console.log(data);
            //     $(`body`).append(`<p> Current date ${data.list[0].dt_txt}</p>
            //     <p>The current temperature is ${data.list[0].main.temp}</p>`);
            //     $(`body`).append(`<p> Current date ${data.list[8].dt_txt}</p>
            //     <p> The current temperature is ${data.list[8].main.temp}</p>`);
            //     $(`body`).append(`<p> Current date ${data.list[16].dt_txt}</p>
            //     <p> The current temperature is ${data.list[16].main.temp}</p>`);
            //     $(`body`).append(`<p> Current date ${data.list[24].dt_txt}</p>
            //     <p> The current temperature is ${data.list[24].main.temp}</p>`);
            //     $(`body`).append(`<p> Current date ${data.list[32].dt_txt}</p>
            //     <p> The current temperature is ${data.list[32].main.temp}</p>`);
            // }

            if(i % 8 == 0) {
                $(`.card`).append(`<p> Current date ${data.list[i].dt_txt}</p>
                <p>The current temperature is ${data.list[i].main.temp}</p>`);
            }

            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            function namedDayFromDay(timeStamp){
                let dateTime = new Date(timeStamp * 1000);
                return daysOfWeek[dateTime.getDay()];
            }
    });
})});


