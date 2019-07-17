class UI {
  constructor() {
    this.body = document.body;
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.sunrise= document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {

    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent += convertKelvinToCelsius(weather.main.temp);
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.sunrise.textContent = `Sunrise: ${ moment.unix(weather.sys.sunrise).format('h:mm a')}`;
    this.sunset.textContent = `Sunset: ${ moment.unix(weather.sys.sunset).format('h:mm a')}`;
    this.wind.innerHTML = `Wind speed: <span style="letter-spacing:2px;">${weather.wind.speed}</span> m/s`;

    switch(weather.weather[0].icon) {
      case '01d':
        this.body.style.backgroundImage = 'url(/img/clear_sky.jpg)';
        break;
      case '02d':
        this.body.style.backgroundImage = 'url(/img/few_clouds.jpg)';
        break;
      case '03d':
        this.body.style.backgroundImage = 'url(/img/scatter_clouds.jpg)';
        break;
      case '04d':
        this.body.style.backgroundImage = 'url(/img/broken_clouds.jpg)';
        break;
      case '09d':
        this.body.style.backgroundImage = 'url(/img/shower_rain.jpg)';
        break;
      case '10d':
        this.body.style.backgroundImage = 'url(/img/rain.jpg)';
        break;
      case '11d':
        this.body.style.backgroundImage = 'url(/img/thunderstorm.jpg)';
        break;
      case '13d':
        this.body.style.backgroundImage = 'url(/img/snow.jpg)';
        break;
      case '50d':
        this.body.style.backgroundImage = 'url(/img/mist.jpg)';
        break;
      default:
        this.body.style.backgroundColor = '#fff';
    }



    //todo call this when location is changed
    function convertKelvinToCelsius(kelvin) {
      if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
      } else {
        return (kelvin-273.15).toFixed(1);
      }
    }  


  }
}