# node-modules-webant-handler-mtmpl

_Require John Resig style micro-templating files with [webant](https://github.com/theakman2/node-modules-webant)_

See:

* [John Resig's blog post](http://ejohn.org/blog/javascript-micro-templating/).
* [mtmpl documentation](https://github.com/theakman2/node-modules-mtmpl)

## Installation

There should be no need to install this module since it's required by the [webant](https://github.com/theakman2/node-modules-webant) module by default.

If for some reason you'd like to use the module outside of webant, install as follows:

    $ npm install webant-handler-mtmpl

## Usage

Ensure the `mtmpl` handler is present in your webant configuration file. For example:

````json
{
    "entry":"src/js/main.js",
    "dest":"build/main.js",
    "handlers":{
        "mtmpl":{}
    }
}
````

You may now `require` mtmpl files:

````javascript
require("../path/to/tmpl.mtmpl");
````

See the [webant](https://github.com/theakman2/node-modules-webant) module for more information.

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant-handler-mtmpl.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant-handler-mtmpl)

    $ npm test