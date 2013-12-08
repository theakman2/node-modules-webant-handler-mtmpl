/**
 * Handles require calls to files with an extension of .mtmpl 
 */
var fs = require("fs");
var path = require("path");
var url = require("url");

var mtmpl = require("mtmpl");

function Handler(settings) {
	
	this.willHandle = function(filePath) {
		if (url.parse(filePath,false,true).host) {
			return false;
		}
		if (filePath.indexOf("@@") === 0) {
			return false;
		}
		if (path.extname(filePath) !== ".mtmpl") {
			return false;
		}
		return true;
	};
	
	this.handle = function(filePath,done) {
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+mtmpl.precompile(c.toString())+"\n");
		});
	};
};

module.exports = Handler;