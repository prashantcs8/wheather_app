
const yargs = require('yargs');
const axios = require('axios');

// const geocode = require('./geocode/geocode.js');
// const wheather = require('./wheather/wheather.js');

const argv = yargs
.options({
	a: {
		describe: 'Address to fetch weather for',
		demand : true,
		alias: 'address',
		string: true 
	}	
})
.help()
.alias('help', 'h')
.argv;

var encodeaddress =encodeURIComponent(argv.address);
var geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}&key=AIzaSyBqM7OMrF8-VRvQM4xDfgXxAZ0ZkndDJHQ`;

axios.get(geocodeurl).then((response) => {
	if(response.data.status === 'ZERO_RESULTS'){
		throw new Error('unable to find that address');
	}
	var api_key ='69ad645a4d448801cb654bb72a8d702c';
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var wheatherUrl = `https://api.darksky.net/forecast/${api_key}/${lat}, ${lng}`;
console.log(response.data.results[0].formatted_address);
return axios.get(wheatherUrl);
}).then((response) => {
// console.log(JSON.stringify(response.data.currently, undefined, 2));
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
	if(e.code ==="ENOTFOUND"){
		console.log('unable to connect API server');
	} else {
		console.log(e.message)
	}
});
// geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
// 	if(errorMessage){
// 		console.log(errorMessage);
// 	} else{
// 	// console.log(JSON.stringify(results, undefined, 2));
// 	console.log(`Formated Address ${results.address}`);
// 	// console.log(`latitude ${results.latitude}`);
// 	// console.log(`longitude ${results.longitude}`);
// 	wheather.getWheather(results.latitude, results.longitude, (errorMessage, WheatherResults) =>{
// 		if(errorMessage){
// 			console.log(errorMessage);
// 		}  else{
// 			// console.log(JSON.stringify(WheatherResults, undefined, 2));
// 			console.log(`It's currently ${WheatherResults.temperature}. It feels like ${WheatherResults.apparentTemperature}.`);
// 		}
// 	});
// }


// });