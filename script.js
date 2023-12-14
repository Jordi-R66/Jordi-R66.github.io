async function RequestClientIP() {
	const response = await fetch("https://ipinfo.io/json", {
		"headers": {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
			"accept-language": "ca-FR,ca;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.6,en;q=0.5,ca-ES;q=0.4,en-US;q=0.3",
			"cache-control": "no-cache",
			"pragma": "no-cache",
			"sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "document",
			"sec-fetch-mode": "navigate",
			"sec-fetch-site": "none",
			"sec-fetch-user": "?1",
			"upgrade-insecure-requests": "1"
		},
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	});

	if (response.ok) {
		const data = await response.json();

		const ip = data.ip;
		alert("Votre ip est : ", ip);
	}
}

RequestClientIP();

// window.location.replace('http://example.com/');