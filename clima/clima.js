const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c221cb2cc29fff2e96ccc008afcf49ec&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}