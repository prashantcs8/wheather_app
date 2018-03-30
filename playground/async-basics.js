console.log('starting app');

setTimeout(() =>{
	console.log('Inside callback')
},2000);

setTimeout(() =>{
	console.log('My Inside callback')
},0);
console.log('finishing app');