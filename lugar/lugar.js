const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    const encDir = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encDir }`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'c2cc7499a5msh70eff0ccf709567p1fdadcjsn7ba853007387'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results === 0) {
        throw new Error(`No hay resultados para ${ direccion }`)
    }

    let data = resp.data.Results[0];
    let dir = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}