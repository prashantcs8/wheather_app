const request = require('request');

var getWheather = (lat, lng, callback) => {
	var api_key ='69ad645a4d448801cb654bb72a8d702c';
// decodeURIComponent();
request({
	url: `https://api.darksky.net/forecast/${api_key}/${lat}, ${lng}`,
	json: true
},(error, response,body) => {
// console.log(JSON.stringify(body, undefined, 2));
if(!error && response.statusCode ===200){
	callback(undefined, {
		temperature: body.currently.temperature,
		apparentTemperature: body.currently.apparentTemperature,
	});
} else {
	callback('Unable to fetch Wheather.');
}
});
};

module.exports.getWheather = getWheather;