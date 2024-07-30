async function fetchWeatherData(lat, lon) {
  const apiKey = "a508c2fd4b18be3f036a6a76334d0f75";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {

    const response = await fetch(url);

    if (!response.ok) {

      throw new Error(`HTTP error! status: ${response.status}`);

    }

    const data = await response.json();
    console.log(data);
    displayWeatherData(data);

  } catch (error) {

    console.error('Error fetching data', error);
    document.querySelector("#weather").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;

  }

  function displayWeatherData() {

    const weather = document.querySelector("#weather");
    weather.innerHTML = `
      `;
  }
}

  async function fetchLocatlity(lat, lon) {

    const apiKey = 'bdc_f11a7b20e1524e78a226fc59d8e3ceac';
    const url = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=[${apiKey}]`;

    try {

      const response = await fetch(url);
      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);

      }

      const data = await response.json();
      console.log(data);
      return data.city, data.locality;

    } catch (error) {

      console.error('Error fetching locality', error);
      return null;

    }
  }
  
  function getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        async function position(position){
          try{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            await fetchLocatlity(lat, lon);
            await fetchWeatherData(lat, lon);
            
          } catch(error){
            console.error("Error getting position: ", error);
            return null
          }
        }
      )
  }
}

