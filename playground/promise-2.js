const request = require('request');

var geocodeAddress = (address) => {

return new Promise((resolve, reject) => {
		var encodeaddress =encodeURIComponent(address);
// decodeURIComponent();
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}&key=AIzaSyBqM7OMrF8-VRvQM4xDfgXxAZ0ZkndDJHQ`,
	json: true
},(error, response,body) => {
	// console.log(JSON.stringify(body, undefined, 2));
	setTimeout(() =>{
		if(error){
			reject('Unable to connect Google server.');	
		} else if(body.status ==='ZERO_RESULTS'){
			reject('Unable to Find that address.');
		}  else if(body.status ==='OK'){
			resolve({
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});		
		}
	}, 2500);
});
});
};

geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});
