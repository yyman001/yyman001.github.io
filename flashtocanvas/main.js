//main.js



var def = {
	id:'#mainView',
	width:800,
	height:1300,
	minRaio:0.615
}


var canvas, stage, model, modelData, container, loadingView, currentView, homeView, stageWidth, stageHeight, stageScale, video, shape, controlType, isComplete = false;
var isloadInit = false;
var View = {};
View.isTween = false;

model = new createjs.EventDispatcher();
modelData = {};
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
	this.radio = (this.width / this.height).toFixed(3);
	this.scale = this.stageWidth / this._h;
	//return this.init();
}
Adaptation.prototype.setLayout = function(){
	this.canvas = document.querySelector(this.id)
	console.log('radio:',this.radio);
	console.log('id:',this.id);
	console.log('this.canvas:',this.canvas);
										//0.615 = 800/1300
	if (this.stageWidth / this.stageHeight > 0.615) {    //宽高比例大过设计的比例就是 宽屏,  高取最大值
	console.log('1')
	this.stageScale = this.stageHeight / this._h;
	//canvas.style.left = (stageWidth - 800 / 2 * stageScale) / 2 + 'px'; //居中
	} else {  //竖屏 ->  宽取最大值
		console.log('2')
		this.stageScale = this.stageWidth / this._w;
		//canvas.style.left = '0px';
		//canvas.style.top = (stageHeight - 1300 / 2 * stageScale) / 2 + 'px'; //居中
	}


	
	this.canvas.style.width = this._w  * this.stageScale + 'px';
	this.canvas.style.height = this._h * this.stageScale + 'px';
	
}
Adaptation.prototype.touchInit = function (){
	controlType = "touch";
	var mx = 0;
	var my = 0;
	this.canvas.addEventListener('touchstart', function(event) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		mx = touch.pageX * 2;
		my = touch.pageY * 2;
		modelData.mouseX = mx;
		modelData.mouseY = my;
		/*homeView.checkHit({
			x: mx / stageScale,
			y: my / stageScale
		})*/
		//homeView.startDrwaLine();
	}, false);


	var addX = 0;
	var addY = 0;

	this.canvas.addEventListener('touchmove', function(event) {
		// 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length == 1) {
			event.preventDefault(); // 阻止浏览器默认事件，重要
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置

			mx = touch.pageX * 2;
			my = touch.pageY * 2;
			modelData.mouseX = mx;
			modelData.mouseY = my;
			//touchMoveHandler();
		}
	}, false);

	this.canvas.addEventListener('touchend', function(event) {
		//homeView.endDrawLine();
	}, false);



	function touchMoveHandler() {
		
		homeView.checkHit({
			x: mx / stageScale,
			y: my / stageScale
		})
	}
	
}
//Adaptation.prototype. = function (){}
//Adaptation.prototype. = function (){}

Adaptation.prototype.init = function (){
	stage = new createjs.Stage(canvas);
	this.touchInit();
	//controlInit()
	container = new createjs.Container();
	stage.addChild(container);
	createjs.Touch.enable(stage);
	
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(true);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("progress", progressHandler);
	loader.addEventListener("complete", handleComplete);
	
	loader.loadFile({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);//new add software create
	
	loader.loadManifest(lib.properties.manifest);
	isloadInit = true;

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", this.stageBreakHandler);
}

Adaptation.prototype.stageBreakHandler = function (){
	if (this.stageWidth != document.documentElement.clientWidth || this.stageHeight != document.documentElement.clientHeight) {
		this.stageWidth = document.documentElement.clientWidth;
		this.stageHeight = document.documentElement.clientHeight;
		
		if (this.stageWidth / this.stageHeight > 0.665) { //最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
			this.stageScale = this.stageHeight / (1300 / 2);
			//canvas.style.left = (stageWidth - 800 / 2 * stageScale) / 2 + 'px';
		} else {
			this.stageScale = this.stageWidth / (800 / 2);
			//canvas.style.left = '0px';
		}

		this.canvas.style.width = 800 / 2 * this.stageScale + 'px';
		this.canvas.style.height = 1300 / 2 * this.stageScale + 'px';
		//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
	}
	this.stage.update();
}


var xxx  = new Adaptation(def); //实例化
xxx.setLayout(); //初始化页面的时候设置一次

window.onload = function (){
	
	xxx.init();
	console.log(xxx);
}




function init() {
	stage = new createjs.Stage(canvas);
	controlInit()
	container = new createjs.Container();
	stage.addChild(container);
	createjs.Touch.enable(stage);
	
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(true);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("progress", progressHandler);
	loader.addEventListener("complete", handleComplete);
	
	loader.loadFile({src:"images/保卫萝卜_atlas_.json", type:"spritesheet", id:"保卫萝卜_atlas_"}, true);//new add software create
	
	loader.loadManifest(lib.properties.manifest);
	isloadInit = true;

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stageBreakHandler);

}

function handleFileLoad(evt) {
	if (evt.item.type == "image") {
		images[evt.item.id] = evt.result;
	}
}

function progressHandler(event) {

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

//
function stageBreakHandler(event) {
	if (stageWidth != document.documentElement.clientWidth || stageHeight != document.documentElement.clientHeight) {
		stageWidth = document.documentElement.clientWidth;
		stageHeight = document.documentElement.clientHeight;
		
		if (stageWidth / stageHeight > 0.665) { //最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
			stageScale = stageHeight / (1300 / 2);
			//canvas.style.left = (stageWidth - 800 / 2 * stageScale) / 2 + 'px';
		} else {
			stageScale = stageWidth / (800 / 2);
			//canvas.style.left = '0px';
		}

		canvas.style.width = 800 / 2 * stageScale + 'px';
		canvas.style.height = 1300 / 2 * stageScale + 'px';
		//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
	}
	stage.update();
}

//control
function controlInit() {
	if (IsPC() == true) {
		mouseInit()
	} else {
		touchInit();
	}
}

function mouseInit() {
	controlType = "mouse";
	var isMouseDown = false;
	var mx = 0;
	var my = 0;
	stage.addEventListener('stagemousedown', function(mouseEvent) {
		isMouseDown = true;
		mx = mouseEvent.rawX;
		my = mouseEvent.rawY;
		modelData.mouseX = mx;
		modelData.mouseY = my;
		homeView.checkHit({
			x: mx,
			y: my
		})
		homeView.startDrwaLine();
	});

	stage.addEventListener('stagemousemove', function(mouseEvent) {
		if (isMouseDown == false) return;
		mx = mouseEvent.rawX;
		my = mouseEvent.rawY;
		modelData.mouseX = mx;
		modelData.mouseY = my;
		mouseMoveHandler();
	});

	stage.addEventListener('stagemouseup', function(mouseEvent) {
		isMouseDown = false;
		homeView.endDrawLine();
	});

	function mouseMoveHandler() {
		homeView.checkHit({
			x: mx,
			y: my
		})
	}
}

function touchInit() {
	controlType = "touch";
	var mx = 0;
	var my = 0;
	canvas.addEventListener('touchstart', function(event) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		mx = touch.pageX * 2;
		my = touch.pageY * 2;
		modelData.mouseX = mx;
		modelData.mouseY = my;
		homeView.checkHit({
			x: mx / stageScale,
			y: my / stageScale
		})
		homeView.startDrwaLine();
	}, false);


	var addX = 0;
	var addY = 0;

	canvas.addEventListener('touchmove', function(event) {
		// 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length == 1) {
			event.preventDefault(); // 阻止浏览器默认事件，重要
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置

			mx = touch.pageX * 2;
			my = touch.pageY * 2;
			modelData.mouseX = mx;
			modelData.mouseY = my;
			touchMoveHandler();
		}
	}, false);

	canvas.addEventListener('touchend', function(event) {
		homeView.endDrawLine();
	}, false);



	function touchMoveHandler() {
		homeView.checkHit({
			x: mx / stageScale,
			y: my / stageScale
		})
	}
}

function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}