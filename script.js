async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee41f20f53msha92af4b881e9689p1c15bfjsn2f4c8197742f',   // replace with your key
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    resultDiv.innerHTML = "Loading...";
    const response = await fetch(url, options);
    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>Temperature: ${data.current.temp_c}°C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="Weather Icon">
    `;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "<p>Failed to fetch weather. Check city name or try again.</p>";
  }
}
