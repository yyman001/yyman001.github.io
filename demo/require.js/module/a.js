

define(function(require){
	//console.log(require, exports, module);
	var b = require('b');
	var c = require('c');
	console.log(b);
	console.log('a.js');
	console.log('c:',c);
	return {
		a:function(){
			console.log('a:function');
		}
	};
});
