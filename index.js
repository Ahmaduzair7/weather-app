const apiKey = "472c5354d922ace440baa38a72547fde";
const btn = document.getElementById('btn');

const callWeatherAPI = function(city) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(json => {
      var lat = json[0].lat; 
      var lon = json[0].lon; 
       weather(lat,lon);
     
    })
    
};

btn.addEventListener('click', function() {
  const cityInput = document.querySelector('input').value;
  callWeatherAPI(cityInput);
});
const weather = function(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=472c5354d922ace440baa38a72547fde`)
    .then(res => res.json())
    .then(json=> {
        console.log(json.main.temp)
    })
}

/* https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=472c5354d922ace440baa38a72547fde */