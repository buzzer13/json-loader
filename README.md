# json loader for webpack

## Installation

`npm install --save-dev json-loader`

## Usage

``` javascript
var json = require("json?key=public!./file.json");
// => returns file.json content as json parsed object
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
