# `akanweeknames v1.0.1`

This library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i akanweeknames
$ npm i --save akanweeknames
```

In Node.js:
```js
// Load the package.
// It returns the getAkanWeekName function
var getAkanWeekName = require('akanweeknames');

// passing a weekday and a gender
// returns a valid name if successfully or null if not successful

let akanName = getAkanWeekName("monday","male"); 

// use the result
console.log(akanName) // Kojo
```

# Weekdays
Any of these values can be provided as a weekday.
```
- Sunday or sunday
- Monday or monday
- Tuesday or tuesday
- Wednesday or wednesday
- Thursday or thursday
- Friday or friday
- Saturday or saturday

```

# Genders
Any of these values can be provided as a gender.
```
- Male or male
- Female or female

```

## Support

Tested in Node.js 18.12.1