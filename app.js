// getting weather update funciton
const getUpdate= () =>{
    const inputText=document.getElementById('inputValue');
    const inputValue=inputText.value;
// fethcing data from API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=bebaffb8a8aedcfc3dc27239cdfdb791`)
    .then(res=> res.json())
    .then(data=> displayData(data))
    // .then(data=> console.log(data))

}


// converting Kelvin to celcius

const convertToCelcius=kelvin=>{
const celcius= kelvin-273.15;
const Newcelcius= celcius.toFixed(0);
return Newcelcius;

}
// displaying the data
const displayData= (forecast)=>{

    const displaySpace=document.getElementById('area-space');
    displaySpace.innerHTML=`
    
                <h2 class="text-center">${forecast.name}</h2>
                <div class="d-flex justify-content-center">
                    <div class="temps"> Temp : ${convertToCelcius(forecast.main.temp)}&#176C</div>
                    <div class="temps">Feels Like : ${convertToCelcius(forecast.main.feels_like)}&#176C</div>
                </div>
                <h2 class="text-center cloud">${forecast.weather[0].main}</h2>  
    `
    console.log(forecast.weather[0].main);
        if(forecast.weather[0].main=="Clear"){
            const load= "./images/sunny.png";
            const img=document.getElementById("image");
            img.src =load;
    }
        else if(forecast.weather[0].main=="Clouds"){
            const load= "./images/clouds.png";
            const img=document.getElementById("image");
            img.src =load;
    }
        else if(forecast.weather[0].main=="Haze"){
            const load= "./images/haze.png";
            const img=document.getElementById("image");
            img.src =load;
    }
        else if(forecast.weather[0].main=="Rain"){
            const load= "./images/rainy.png";
            const img=document.getElementById("image");
            img.src =load;
    }
}




//  <img src="./images/clouds.png" width="50px" alt=""></img>