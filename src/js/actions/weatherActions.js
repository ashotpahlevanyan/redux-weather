let API_KEY = "468f937be26c4d91fe63cc0f4b7c0c12";
let apiUrl = "http://api.openweathermap.org/data/2.5/";
let cityId = 616051;

import axios from "axios";

export function fetchWeather(cityId) {
  //console.log(cityId);
  return function(dispatch) {
    dispatch({type: "FETCH_WEATHER"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get(`${apiUrl}/forecast?id=${cityId}&units=metric&APPID=${API_KEY}`)
      .then((response) => {
        dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_WEATHER_REJECTED", payload: err})
      })
  }
}
