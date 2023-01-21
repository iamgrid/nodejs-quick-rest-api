// Run "npm start" in the command line to start listening for requests.

const responseLibrary = require("./responseLibrary");

const express = require("express");
const app = express();

app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type,cxa-netsuite-token"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});

app.get("/", (req, res) => {
	// res.status("200").send("hello");
	const appId = req.query["app"];
	const pKey = req.query["key"];

	if (typeof appId !== "string") {
		res
			.status(406)
			.send(`The 'app' param is missing from your url parameters.`);
	}
	if (!(appId in responseLibrary)) {
		res.status(406).send(`Could not locate app '${appId}' in responseLibrary.`);
	}

	if (typeof pKey !== "string") {
		res
			.status(406)
			.send(`The 'key' param is missing from your url parameters.`);
	}
	if (!(pKey in responseLibrary[appId])) {
		res
			.status(406)
			.send(
				`Could not locate a property with key '${pKey}' in responseLibrary['${appId}'].`
			);
	}

	res.status(200).json(responseLibrary[appId][pKey]);
});

// launch our server on port 3001
const server = app.listen(3001, () => {
	console.log("listening on port %s...", server.address().port);
});
