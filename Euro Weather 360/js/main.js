function GetInfo() {
    const placeInput = document.getElementById("placeInput");
    const placeName = document.getElementById("placeName");
    // placeName.innerHTML=""+placeInput.value+""
    fetch(`http://www.7timer.info/bin/api.pl?${placeInput.value}&product=civillight&output=json`)
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 7; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.dataseries[i].temp2m.min) + "°";
            }
            for (i = 0; i < 7; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.dataseries[i].temp2m.max) + "°";
            }
            for (i = 0; i < 7; i++) {
                document.getElementById("img" + (i + 1)).src = "./images/" + data.dataseries[i].weather + ".png";
            }
            for (i = 0; i < 7; i++) {
                w = data.dataseries[i].weather;
                switch (w) {
                    case 'clear':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Clear';
                        break;
                    case 'cloudy':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Cloudy';
                        break;
                    case 'humid':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Muggy';
                        break;
                    case 'ishower':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Light rain';
                        break;
                    case 'lightrain':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Light rain';
                        break;
                    case 'lightsnow':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Light snow';
                        break;
                    case 'mcloudy':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Mostly cloudy';
                        break;
                    case 'oshower':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Cloudy';
                        break;
                    case 'pcloudy':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Partly cloudy';
                        break;
                    case 'rain':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Rain';
                        break;
                    case 'rainsnow':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Rain snow';
                        break;
                    case 'snow':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Snow';
                        break;
                    case 'ts':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Thundertorm';
                        break;
                    case 'tsrain':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Storm rain';
                        break;
                    case 'windy':
                        document.getElementById("weather" + (i + 1)).innerHTML = 'Windy';
                        break;
                    default:
                        break;
                }
            }
            const d = new Date();
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            function CheckDay(day) {
                if (day + d.getDay() > 6) {
                    return day + d.getDay() - 7;
                }
                else {
                    return day + d.getDay();
                }
            }

            for (i = 0; i < 7; i++) {
                document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
            }
        })
    // .catch(err => alert("Select location"))


}

