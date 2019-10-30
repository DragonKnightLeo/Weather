function search() {
  let search = document.getElementById('search').value;
  search = search.charAt(0).toUpperCase() + search.substring(1).toLowerCase();
  let city = document.getElementById('city');
  let api = `https://api.weatherbit.io/v2.0/current?city=${search}&units=I&key=`;

  function info() {
    let temperature = document.getElementById('temp');
    let precipatation = document.getElementById('prec');
    let humidity = document.getElementById('humi');
    let wind = document.getElementById('wind');

    fetch (api)
      .then(response =>
          response.json()
        )
        .then(data => {
          city.innerHTML = search;
          temperature.innerHTML = data.data[0].temp + '° F';
          precipatation.innerHTML = 'Precipatation: ' + data.data[0].precip + '%';
          humidity.innerHTML = 'Humidity: ' + data.data[0].rh + '%';
          wind.innerHTML = 'Wind: ' + data.data[0].wind_spd + ' mph';
        })
        .catch((err) => {
          if(SyntaxError) {
            alert("Search did not yield a result, please try again");
          }
        });
      };
  info();
};
