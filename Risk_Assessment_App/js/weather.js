const weatherTable = document.querySelector("#weather table");
console.log(weatherTable);

// API 키
const API_KEY = "142e42e38a2279a3db8dfa0a7700fd4d";

function onGeoOK(position)   {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    // 비동기와 PROMISE에 대한 공부필요
    fetch(url).then(response => response.json()).then(data => {
        // 모레, 내일 날짜
        const dateRange = [];
        let date = new Date();
        for(var i=0; i<2; i++)  {
            date.setDate(date.getDate()+1);

            dateRange.push(date.getDate());
        }

        // 수색 투입시간 ~ 매복 철수시간
        const timeRange = [JSON.parse(localStorage.getItem("searchTime"))[0],JSON.parse(localStorage.getItem("ambushTime"))[1]]
        
        // 선별한 weatherDataList 
        const weatherDataList = [];
        for(var i=0; i<24; i++) {
            if(checkValidTime(dateRange, timeRange, data.list[i]) === true) {
                weatherDataList.push(data.list[i]);
            }
        }

        //도시명
        const location = data.city.name;
        console.log(`도시명 : ${location}`);

        return weatherDataList
    }).then(weatherDataList =>  {
        console.log(weatherDataList);
        for(var i=0; i<weatherDataList.length; i++) {
            weatherTable.appendChild(drawWeatherTR(weatherDataList[i]));
        }
    })
    console.log("You live in", lat, lon);
}

function onGeoError()   {
    alert("Can't find you, No weather for you")
}

function checkValidTime(dateRange, timeRange, data) {
    const date_txt = data.dt_txt[8]+ data.dt_txt[9];
    const time_txt = data.dt_txt[11]+ data.dt_txt[12];
    
    if(date_txt == dateRange[0])    {
        if(Number(timeRange[0])-3 >= Number(time_txt))  {
            return false;
        } else  {
            return true;
        }
    }   else if(date_txt == dateRange[1])   {
        if (Number(timeRange[1])+3 <= Number(time_txt))    {
            return false;
        }   else    {
            return true;
        }
    }   else    {
        return false;
    }
} 

function drawWeatherTR(weatherData) {
    const tr = document.createElement("tr");    

    // 시간,날씨,기온,습도
    tr.appendChild(drawWeatherTD(weatherData.dt_txt));
    tr.appendChild(drawWeatherTD(weatherData.weather[0].main));
    tr.appendChild(drawWeatherTD(weatherData.main.temp));
    tr.appendChild(drawWeatherTD(weatherData.main.humidity));

    return tr;
}

function drawWeatherTD(weatherDataElement) {
    const td = document.createElement("td");
    td.innerText = weatherDataElement;

    return td;
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);