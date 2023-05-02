/*Javascript for TP10*/

// add some code to wait for the DOM
document.addEventListener("DOMContentLoaded", function(){
    
    // code to load API
 const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20WA';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b89e4d8b2mshb6273ec07a69aa0p1d100ajsna002df06c25d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    
    
});