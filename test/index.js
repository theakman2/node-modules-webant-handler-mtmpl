var vm = require("vm");

var test = require("tap").test;

var Handler = require("../lib/index.js");

test("webant-handler-mtmpl",function(t){
	var handler = new Handler();
	var data = [
	            "http://mysite.co.uk/bla.js",
	            "//cdn.google.com/path/to/assets.css",
	            "path/to/assets.mtmpl",
	            "/abs/path/to/assets.mtmpl",
	            "@@hbs/runtime",
	            "@@css/addStylesheet"
	            ];
	
	handler.handle(__dirname+"/tmpl.mtmpl",function(err,content){
		t.ok(!err,"There should be no errors handling this file.");
		
		var context = vm.createContext({module: {exports: {}}});
		
		vm.runInContext(content,context);
		
		t.equivalent(
			data.map(handler.willHandle),
			[false,false,true,true,false,false],
			"Should handle the correct files."
		);
		
		t.strictEqual(
			context.module.exports({name:"test"}),
			"Testing test.",
			"Handler should be calling callback correctly."
		);
		
		t.end();
	});
});