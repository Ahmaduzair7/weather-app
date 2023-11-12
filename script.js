 const apiKey = "472c5354d922ace440baa38a72547fde";
const btn = document.getElementById('btn');




const callLocationAPI = function(city) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(json => {
      var lat = json[0].lat; 
      var lon = json[0].lon; 
     
       weather(lat,lon,city);
     
    })
    
};

const weather = function(lat,lon,city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=472c5354d922ace440baa38a72547fde`)
  .then(res => res.json())
  .then(json=> {
    
    const name  = city;
    const  icon = json.weather[0].icon
    const  description = json.weather[0].description
    const  temp = json.main.temp
    const  humidity = json.main.humidity
    const  speed  = json.wind.speed
    

    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
    document.querySelector('.wind').innerText = 'Wind speed: ' + speed + ' km/h';
    
  })
}

btn.addEventListener('click', function() {
  const cityInput = document.querySelector('input').value;
  callLocationAPI(cityInput);
});

const input  = document.querySelector('input');

input.addEventListener('keyup', function(event) {
  if(event.key == 'Enter'){
    const cityInput = document.querySelector('input').value;
    callLocationAPI(cityInput);
  }
  
});

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(json => {
      
      const city = json[0].name;
      
      
       weather(lat,lon,city);
     
    })

 

});

