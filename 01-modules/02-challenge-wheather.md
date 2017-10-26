# Weather CLI app

Create a node application that asks the user a city name and prints to the console
the current temperature in the given city.

#### Install inquirer

    npm install inquirer 

#### Example of using `inquirer`

    const inquirer = require('inquirer');
    
    const question = {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    };
    
    inquirer.prompt([question]).then(function (answers) {
      console.log(`Your name is ${answers.name}`);
    });

[Inquirer.js on Github](https://github.com/SBoudrias/Inquirer.js)

#### Install request

    npm install request
    
#### Example of using request

    const request = require('request');
    
    request('https://api.github.com/users/tamaspap', {headers: {'User-Agent': 'NodeJS'}, json: true}, (err, response, body) => {
      console.log(body);
    });

#### Weather API
    http://api.openweathermap.org/data/2.5/weather?q=[CITY_NAME]&units=metric&APPID=92069bf957d02bc300f09ef3edd27e75
    
    
**Notes**:

Read configuration values (units=metrics, APPID=92069bf957d02bc300f09ef3edd27e75) from config.js.
