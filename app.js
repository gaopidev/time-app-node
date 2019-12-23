const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'La dirección donde consultar el tiempo actual',
            demand: true
        }
    }).argv
    /* 
    lugar.getLugarLatLng(argv.direccion)
        .then(console.log)
        .catch(console.log)
     */
    /* 
    clima.getClima(28.540001, -81.379997)
        .then(console.log)
        .catch(console.log) 
    */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El tiempo en ${coords.dir} es de ${temp}°C.`;

    } catch (error) {
        return `No se pudo determinar el estado del tiempo en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)