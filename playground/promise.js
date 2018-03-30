var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			} else {
				reject('Arguments must be number');
			}
		}, 2500);
	});
};


asyncAdd(5, 5).then((res) => {
	console.log('sucess: ', res);
	return asyncAdd(res, 30);
}, (errorMessage) => {
console.log('error: ', errorMessage);
}).then((res) => {
	console.log('sucess: 40', res);
}).catch((errorMessage) => {
console.log('error: ', errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() =>{
// // resolve('hey it works');
// reject('unable to fulfil Promise');

// 	}, 2500);
	
// });

// somePromise.then((message) => {
// 	console.log('sucess: ', message);
// }, (errorMessage) => {
// console.log('error: ', errorMessage);
// });