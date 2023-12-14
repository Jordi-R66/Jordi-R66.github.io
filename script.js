async function RequestClientIP() {
	const response = await fetch("https://ipinfo.io/json");

	if (response.ok) {
		const data = await response.json();

		const ip = data.ip;
		alert("Votre ip est : ", ip);
	}
}

RequestClientIP();

// window.location.replace('http://example.com/');