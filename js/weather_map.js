$(function() {
    // Function for days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function namedDayFromDay(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        return daysOfWeek[dateTime.getDay()];
    }
    // Function for wind speed.
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
    // This is where it updates weather cards
    function printWeather(data) {
        $( ".forecast" ).empty(); // This will clear the cards before you put a new location
        data.list.forEach((forecast, i) => {
            console.log(data);
            if (i % 8 === 0) {
                $(`.forecast`).append(`
                    <div class="card weatherCards rounded-0">
<!--                    <div class="container" style="width: 100%">                  -->
                    <p class="date"> Current date ${(data.list[i].dt_txt).split(' ')[0]}</p>
                    <img class="card-img-top justify-content-center" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"  alt="Card image cap" style="height: 90px; width: 90px;"> 
                    <p>The current temperature is ${data.list[i].main.temp}</p>
                    <p>Description: ${data.list[i].weather[0].description}</p>
                    <p>Humidity: ${data.list[i].main.humidity}</p>
                    <p>Wind Speed: ${data.list[i].wind.speed} ${windCardinalDirection(data.list[i].wind.deg)}</p> 
                    <p>Pressure: ${data.list[i].main.pressure}</p>
<!--                    </div>-->
                    </div>`);
            }
        });
    }
    // This is the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;  //we gave our token a var MAPBOX on keys.js
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.48962, 29.42692],
        zoom: 2
    });
    map.addControl(new mapboxgl.NavigationControl());
    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
// When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );


// I got the code from  https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/ that creates a draggable marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-99.48962, 29.42692])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        console.log(lngLat);
        // coordinates.style.display = 'block';
        // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        // created coords so we can call it on updateWeather
        let coords = [
            `${lngLat.lng}`,
            `${lngLat.lat}`
        ]
        updateWeather(coords)

    }
    marker.on('dragend', onDragEnd);
    function updateWeather(coordinates) {
        console.log("inside updateWeather");
        console.log(coordinates[0]);
        console.log(coordinates[1]);
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial" // this is fahrenheit
        }).done(function (data) {
            console.log("completed updateWeather get request");
            printWeather(data);
        });
    }
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
        });
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    29.423017,
            lon:   -98.48527,
            units: "imperial" // this is fahrenheit
        }).done(function(data) {
            printWeather(data)
        });
        // Search Bar
        document.getElementById('searchButton').addEventListener('click', function (e) {
            e.preventDefault();
            const address = document.getElementById('searchInput').value;
            console.log(address);
            geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {

                console.log(coordinates);
                // const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
                marker.setLngLat(coordinates).addTo(map);
                map.setCenter(coordinates);
                updateWeather(coordinates);
                updateWeather(coords)
            });
        });
    });



