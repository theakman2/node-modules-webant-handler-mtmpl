/**
 * Handles require calls to files with an extension of .mtmpl 
 */
var fs = require("fs");

var mtmpl = require("mtmpl");

module.exports = {
	extensions:".mtmpl",
	handle:function(filePath,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+mtmpl.precompile(c.toString())+"\n");
		});
	}
};