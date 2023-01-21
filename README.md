# nodejs-quick-rest-api

## Introduction
Meant to be ran on localhost (with "npm start"), you put the object you want to get back as JSON as a property of your app object in .\responseLibrary.js, you fetch from the endpoint like http://localhost:3001?app=yourFirstAppId&key=yourPropertyKey1 and hey presto, your very own REST server.

## Installation
1. `git clone` the repo into a folder of your choice
2. `cd nodejs-quick-rest-api` (enter the folder the clone command created)
3. `npm install` to install this project's required packages defined in package.json (the packages are express and nodemon)
4. Create your responseLibrary.js file in the root folder. The contents should be something like:
```
const yourFirstAppId = {
	"yourPropertyKey1": {
		are: "you ok",
		of: "course, never better"
	},
	"yourPropertyKey2": {
		youForgot: "to work",
		the: "thingamabob"
	}
};

const yourSecondAppId = {
	"yourPropertyKey3": {
		niceDay: "for",
		fishing: "ain't it"
	}
};

module.exports = { yourFirstAppId, yourSecondAppId };
```

## Usage
1. `npm start`
2. Talk to the server while it is listening by fetching from the url `http://localhost:3001?app=yourFirstAppId&key=yourPropertyKey1`

Thanks to the nodemon package, as you save changes to your responseLibrary.js or index.js the server will automatically restart to reflect your updates.