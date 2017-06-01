var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a57146c56c0c66ebd39592404318d490&units=metric';

  const getTemp = (location) => {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }).catch((res) => {
    throw new Error(res.data.message);
  });
}

module.exports = { getTemp }
