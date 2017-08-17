
 var load = new Loader({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);

	load
	.fileload(function(evt){

	})
	.fileprogress(function(evt){

	})
	.progress(function(evt){

	})
	.complete(function(evt,queue){
		handleComplete(evt)
	})
	.error(function(evt){
		console.log(evt)
	})
 
 
function Loader (option){
	this.loader = null;
	this.loadFileDate = null;
	//this.loadFile = function (e){};
	//
	this._loadFile = function (e){}      //加载文件清单
	this._fileload = function (e){}      //单个文件已完成加载。
	this._fileprogress = function (e){}  //单个文件进度变化。注意,只有文件装载XHR(或可能通过插件)将 file 事件进展除了0或100%。
	this._progress = function (e){}      //对于整个队列进展已经改变。
	this._error = function (e){}         //当队列与任何文件遇到错误时。
	this._complete = function (e){}      //当队列完成加载所有文件时。
	
	this._arguments = [];
	
	this._arguments = Array.prototype.slice.call(arguments);
	
	return this._init();
}

Loader.prototype = new createjs.LoadQueue(true);
Loader.prototype.constructor = Loader;
Loader.prototype._init2 = function (o){
	var _load = new Loader();
	
		_load.addEventListener("fileload", function(evt){
			_this._fileload(evt)
		});
		
		_load.addEventListener("progress", function(evt){
			 _this._progress(evt)
		});
		
		_load.addEventListener("fileprogress", function(evt){
			 _this._fileprogress(evt)
		});
		
		_load.addEventListener("complete", function(evt){
		    console.log('init2-complete:',evt);
			_this._complete(evt,_this.loader)
		} );
		
		_load.addEventListener("error",  function(evt){
			_this._error(evt)
	});
	return _load;
}
Loader.prototype._init = function (o){
	var _this = this;
	//console.log('arguments:',arguments)
	
	try{
		this.loader = new createjs.LoadQueue(true);
		console.log('队列初始化-绑定事件');
		this.loader.addEventListener("fileload", function(evt){
			_this._fileload(evt)
		});
		
		this.loader.addEventListener("progress", function(evt){
			 _this._progress(evt)
		});
		
		this.loader.addEventListener("fileprogress", function(evt){
			 _this._fileprogress(evt)
		});
		
		this.loader.addEventListener("complete", function(evt){
			_this._complete(evt,_this.loader)
		} );
		
		this.loader.addEventListener("error",  function(evt){
			_this._error(evt)
		});
	
		this.loader.loadFile({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);//new add software create

		this.loader.load() ;//执行加载
	}catch(e){
		console.warn('Preload.js 未加载')
	}
	
	return this;
};

Loader.prototype.fileload = function (fn){
	if(fn && typeof fn === 'function'){
		this._fileload = fn;
	}
	return this;
}
Loader.prototype.fileprogress = function (fn){
	if(fn && typeof fn === 'function'){
		this._fileprogress = fn;
	}
	return this;
}
Loader.prototype.progress = function (fn){
	if(fn && typeof fn === 'function'){
		this._progress = fn;
	}	
	return this;
}
Loader.prototype.complete = function (fn){
	if(fn && typeof fn === 'function'){
		this._complete = fn;
	}
	return this;
}
Loader.prototype.error = Loader.prototype.catch = function (fn){
	if(fn && typeof fn === 'function'){
		this._error = fn;
	}
	return this;
}
 