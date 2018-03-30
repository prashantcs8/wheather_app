
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const wheather = require('./wheather/wheather.js');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
	if(errorMessage){
		console.log(errorMessage);
	} else{
	// console.log(JSON.stringify(results, undefined, 2));
	console.log(`Formated Address ${results.address}`);
	// console.log(`latitude ${results.latitude}`);
	// console.log(`longitude ${results.longitude}`);
	wheather.getWheather(results.latitude, results.longitude, (errorMessage, WheatherResults) =>{
		if(errorMessage){
			console.log(errorMessage);
		}  else{
			// console.log(JSON.stringify(WheatherResults, undefined, 2));
			console.log(`It's currently ${WheatherResults.temperature}. It feels like ${WheatherResults.apparentTemperature}.`);
		}
	});
}


});