const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodeaddress =encodeURIComponent(address);
// decodeURIComponent();
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}&key=AIzaSyBqM7OMrF8-VRvQM4xDfgXxAZ0ZkndDJHQ`,
	json: true
},(error, response,body) => {
// console.log(JSON.stringify(body, undefined, 2));
if(error){
	callback('Unable to connect Google server.');	
} else if(body.status ==='ZERO_RESULTS'){
	callback('Unable to Find that address.');
}  else if(body.status ==='OK'){
	callback(undefined, {
		address: body.results[0].formatted_address,
		latitude: body.results[0].geometry.location.lat,
		longitude: body.results[0].geometry.location.lng
	});		
}

});
};

module.exports.geocodeAddress = geocodeAddress;