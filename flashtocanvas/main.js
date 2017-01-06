//main.js


var def = {
	id: '#mainView',
	width: 800,
	height: 1300,
	minRaio: 0.615
};


var canvas, stage, model, modelData, container, loadingView, currentView, homeView, stageWidth, stageHeight, stageScale, video, shape, controlType, isComplete = false;
var isloadInit = false;
var View = {};
View.isTween = false;

//model = new createjs.EventDispatcher();
//modelData = {};
//stageWidth = document.documentElement.clientWidth;
//stageHeight = document.documentElement.clientHeight;
//stageScale = stageWidth / (800 / 2); // 2倍
//canvas = document.getElementById("mainView");
//video = document.getElementById("video");

//if (stageWidth / stageHeight > 0.665) {

function Adaptation(options){
	this.canvas = null;
	this.id = options.id;
	this.stageWidth = document.documentElement.clientWidth;
	this.stageHeight = document.documentElement.clientHeight;
	this.width = options.width;
	this.height = options.height;
	this._w = this.width / 2; //
	this._h = this.height / 2;
	this.stage = null;
	this.radio = (this.width / this.height).toFixed(3);
	this.scale = this.stageWidth / this._h;
	this.eventType = 'pc'; //默认事件为pc端
	this.X = -1; 
	this.Y = -1;
	this.resetWin = false; //记录分辨率是否缩放过
	//function 
	this._fileload = function (event){}
	this._progress = function (event){}
	this._complete = function (event){}
	
	//wap event
	this._touchstart = function (event){}
	this._touchmove = function (event){}
	this._touchend = function (event){}
	//pc event
	this._mousedown = function (event){}
	this._mousemove = function (event){}
	this._mouseup = function (event){}
	
	this._callbackfn = function (){}
	
	//return this.init();
	//console.log('this.canvas:',this.canvas);
	
	this.setLayout(); //初始化页面的时候设置一次
}

Adaptation.prototype.setLayout = function(){
	this.canvas = document.querySelector(this.id)
	//console.log('radio:',this.radio);
	//console.log('id:',this.id);
	//console.log('this.canvas:',this.canvas);
	this.setWH();									
	
}

Adaptation.prototype.setWH = function (){
										   //0.615 = 800/1300
										   //最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
	if (this.stageWidth / this.stageHeight > 0.615) {    //宽高比例大过设计的比例就是 宽屏,  高取最大值
	//console.log('1')
	this.stageScale = this.stageHeight / this._h;
	//canvas.style.left = (stageWidth - 800 / 2 * stageScale) / 2 + 'px'; //居中
	} else {  //竖屏 ->  宽取最大值
		//console.log('2')
		this.stageScale = this.stageWidth / this._w;
		//canvas.style.left = '0px';
		//canvas.style.top = (stageHeight - 1300 / 2 * stageScale) / 2 + 'px'; //居中
	}
	
	//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
	this.canvas.style.width = this._w  * this.stageScale + 'px';
	this.canvas.style.height = this._h * this.stageScale + 'px';
	
}

Adaptation.prototype.touchInit = function (event){
	var _this = this;
	controlType = "touch";
	var mx = 0;
	var my = 0;
	//console.log('touchInit:',touchInit)
	this.canvas.addEventListener('touchstart', function(event) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		_this.X = touch.pageX * 2;
		_this.Y = touch.pageY * 2;
		//modelData.mouseX = mx;
		//modelData.mouseY = my;
		_this._touchstart(event, _this.X , _this.Y);
	}, false);

	var addX = 0;
	var addY = 0;

	this.canvas.addEventListener('touchmove', function(event) {
		// 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length === 1) {
			event.preventDefault(); // 阻止浏览器默认事件，重要
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置

			_this.X = touch.pageX * 2;
			_this.Y = touch.pageY * 2;
			//modelData.mouseX = mx;
			//modelData.mouseY = my;
			//touchMoveHandler();
			_this._touchmove(event,_this.X,_this.Y);
			//console.log(_this.X,_this.Y)
		}
	}, false);

	this.canvas.addEventListener('touchend', function(event) {
		_this._touchend(event);
	}, false);



	/*function touchMoveHandler() {
		
		homeView.checkHit({
			x: mx / stageScale,
			y: my / stageScale
		})
	}*/
	
}

Adaptation.prototype.mouseInit = function (event){
	controlType = "mouse";
	var isMouseDown = false;
	var _this = this;
	var mx = 0;
	var my = 0;
	_this.stage.addEventListener('stagemousedown', function(mouseEvent) {
		isMouseDown = true;
		_this.X = mouseEvent.rawX;
		_this.Y = mouseEvent.rawY;
	
		_this._mousedown(mouseEvent,_this.X,_this.Y)
		/*homeView.checkHit({
			x: mx,
			y: my
		})*/
		//homeView.startDrwaLine();
	});

	_this.stage.addEventListener('stagemousemove', function(mouseEvent) {
		if (isMouseDown == false) return;
		_this.X = mouseEvent.rawX;
		_this.Y = mouseEvent.rawY;
		_this._mousemove(mouseEvent,_this.X,_this.Y)
		
		//mouseMoveHandler();
	});

	_this.stage.addEventListener('stagemouseup', function(mouseEvent) {
		isMouseDown = false;
		_this._mouseup(mouseEvent);
		//homeView.endDrawLine();
	});
}
//Adaptation.prototype. = function (){}

Adaptation.prototype.bindEvent = function (){
	this.checkEventType ()
	if(this.eventType === 'wap'){
		this.touchInit();
	}else if(this.eventType === 'pc'){
		this.mouseInit();
	}
	
}

Adaptation.prototype.init = function (){
	var _this = this;
	this.stage = new createjs.Stage(this.canvas);
	this.bindEvent();//绑定事件
	this.touchInit();
	//controlInit()
	container = new createjs.Container();
	this.stage.addChild(container);
	createjs.Touch.enable(this.stage);
	
	
	//=====================资源队列处理
	//images = images||{};
	//ss = ss||{};
	//var loader = new createjs.LoadQueue(true);
	//loader.addEventListener("fileload", handleFileLoad);
	//loader.addEventListener("progress", progressHandler);
	//loader.addEventListener("complete", handleComplete);
	
	//loader.loadFile({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);//new add software create
	
	//loader.loadManifest(lib.properties.manifest);
	//console.log(lib.properties.manifest)
	//isloadInit = true;
	//======================

	this.Ticker();
	
	//this.stage.update();
	window.onresize = function (){
		_this.resetWin = true;
		_this.stageBreakHandler();
	};
	return this;
};

Adaptation.prototype.Ticker = function (FPS_Number){
	var _this = this;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	//reatejs.Ticker.setFPS(FPS_Number || 30);
	this.setFPS();
	createjs.Ticker.addEventListener("tick", function(event){
		_this.stageBreakHandler(event);
		_this.stage.update();
	});

};

Adaptation.prototype.setFPS = function (Number){
	createjs.Ticker.setFPS(Number || 30);
};

Adaptation.prototype.append = function (obj){
	//obj.appendTo(this.stage);
	this.stage.addChild(obj)
};
Adaptation.prototype.stageBreakHandler = function (event){
	//console.log(this)
	if(this.resetWin){
		this.stageWidth = document.documentElement.clientWidth;
		this.stageHeight = document.documentElement.clientHeight;
		this.setWH();
		this.resetWin = false;
	}
	//if (this.stageWidth !== document.documentElement.clientWidth || this.stageHeight !== document.documentElement.clientHeight) {
	//	this.stageWidth = document.documentElement.clientWidth;
	//	this.stageHeight = document.documentElement.clientHeight;
	//	this.setWH();
	//}
	//this.stage.update();
};

Adaptation.prototype.callback = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._callbackfn = callbackfn;
	}
	return this;
}

Adaptation.prototype.touchstart = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._touchstart = callbackfn;
		//console.log('touchstart-init',this._touchstart);
	}
	return this;
}

Adaptation.prototype.touchmove = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._touchmove = callbackfn;
		//console.log('touchmove-init',this._touchmove);
	}
	return this;
}

Adaptation.prototype.touchend = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._touchend = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}

Adaptation.prototype.mousedown = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._mousedown = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}
Adaptation.prototype.mousemove = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._mousemove = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}
Adaptation.prototype.mouseup = function (callbackfn){
	if(callbackfn && typeof callbackfn === 'function'){
		this._mouseup = callbackfn;
		//console.log('touchend-init',this.mouseup);
	}
	return this;
}


Adaptation.prototype.checkEventType = function (){
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone", "iPad", "iPod","SymbianOS", "Windows Phone"];
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			this.eventType = 'wap';
			break;
		}
	}
	//console.log('type:',this.eventType);
}







//function init() {
//	stage = new createjs.Stage(canvas);
//	controlInit()
//	container = new createjs.Container();
//	stage.addChild(container);
//	createjs.Touch.enable(stage);
//
//	images = images||{};
//	ss = ss||{};
//
//	var loader = new createjs.LoadQueue(true);
//	loader.addEventListener("fileload", handleFileLoad);
//	loader.addEventListener("progress", progressHandler);
//	loader.addEventListener("complete", handleComplete);
//
//	loader.loadFile({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);
//	//new add software create
//
//	loader.loadManifest(lib.properties.manifest);
//	isloadInit = true;
//
//	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
//	createjs.Ticker.setFPS(30);
//	createjs.Ticker.addEventListener("tick", stageBreakHandler);
//
//}

function handleFileLoad(evt) {
	if (evt.item.type == "image") {
		images[evt.item.id] = evt.result;
	}
}

function progressHandler(event) {
	//console.log(event)
}

/*function completeHandler(event) {
	event.currentTarget.removeEventListener("fileload", handleFileLoad);
	event.currentTarget.removeEventListener("progress", progressHandler);
	event.currentTarget.removeEventListener("complete", completeHandler);
	//    if(loadingView.parent) loadingView.parent.removeChild(loadingView);

	homeView = new View.HomeView();
	container.addChild(homeView);
	shape = new createjs.Shape();
	shape.graphics.beginFill("rgba(0,0,0,0.8)");
	shape.graphics.drawRect(0, 0, 800, 1300);
	shape.graphics.endFill();
	shape.addEventListener("click", function() {
		//video.style.display = "none";
		//video.pause();
		if (shape.parent) shape.parent.removeChild(shape);
	})
	homeView.back.gotoAndPlay(1);
	currentView = homeView;
}*/

