// getting weather update funciton
const getUpdate= async () =>{
    const inputText=document.getElementById('input-value');
    const inputValue=inputText.value;
        // const displaySpace=document.getElementById('area-space').innerText="";
    
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=bebaffb8a8aedcfc3dc27239cdfdb791`;

    document.querySelector('.spinner').classList.add('spinner-hide');
    
// fethcing data from API
    const response= await fetch(url);
    const data= await response.json();
    if(response){
        document.querySelector('.spinner').classList.remove('spinner-hide');
    }

            if(data.cod==404){
                document.getElementById('area-space').innerText="Please Provide A City Name";
                document.getElementById('area-space').classList.add('error');
                const img=document.getElementById("image").src="";
        }
        else{
        displayData(data);
        }
        inputText.value="";

}


// new



// const getUpdate=  () =>{
//     const url= `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=bebaffb8a8aedcfc3dc27239cdfdb791`;
// fethcing data from API
    // fetch(url)

    // .then(res=>res.json())
    // .then(data=> {
    //     if(data.cod==404){
    //             document.getElementById('area-space').innerText="Please Provide A City Name";
    //             document.getElementById('area-space').classList.add('error');
    //             const img=document.getElementById("image").src="";
    //     }
    //     else{
    //     displayData(data);
    //     }
    // })



// const response = await etch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=bebaffb8a8aedcfc3dc27239cdfdb791`);


// }

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

