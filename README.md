# nodejs-quick-rest-api

## Introduction
Meant to be ran on localhost (with "npm start"), you put the object you want to get back as json as a property of responseLibrary in .\responseLibrary.js, you fetch from the endpoint like http://localhost:3001?query=[your responseLibrary property name] and hey presto, your very own REST server.

## Installation
1. `git clone` the repo into a folder of your choice
2. `cd nodejs-quick-rest-api` (enter the folder the clone command created)
3. `npm install` to install the express and nodemon packages required by this project
4. Create your responseLibrary.js file in the root folder. The contents should be something like:
```
const responseLibrary = {
	"your-response-property-name": {
		are: "you ok",
		of: "course, never better"
	}
};

module.exports = { responseLibrary };
```

## Usage
1. `npm start`
2. Talk to the server while it is listening by fetching from the url `http://localhost:3001?query=your-response-property-name`

Thanks to the nodemon package, as you save changes to your responseLibrary.js or index.js the server will automatically restart to reflect your updates.

