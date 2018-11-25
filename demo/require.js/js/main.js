/**
 * Created by Administrator on 2017/3/13.
 */



require.config({
	//baseUrl:'js',
	paths: {
		//"jquery": "jquery.min", //同目录下 就是 baseUrl + paths
		"a":"../module/a" //非同目录不 想加
		,"b":"../module/b"
		,"c":"../module/c"
	}
});

//console.log(require.config.paths);

define(function (require){
	console.log('main.js');
	//console.log('require:', require);
	//console.log(require, exports, module,$);
	//var $ = require('jquery');
	var a = require('a');
	//console.log($);
	//var a = require('a');
	console.log(a);
	//$('body').append('<h1>require.js</h1>');

	require(['c'],function(c){

		c.c();
	});


	return {};
});

