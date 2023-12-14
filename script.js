async function RequestClientIP() {
	const response = await fetch("https://api.ipify.org/?format=raw");

	console.log(response);

	const ip = await response.text();

	console.log(ip);

}

RequestClientIP();

// window.location.replace('http://example.com/');