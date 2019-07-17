// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

getCountries();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function getCountries() {
  // Get local json data
  fetch('countries.json')
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<option value="${post.code}">${post.name}</option>`;
      });
      document.getElementById('country').innerHTML += output;
    })
    .catch(err => console.log(err));
}
