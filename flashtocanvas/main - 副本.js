//main.js
var canvas, stage, model, modelData, container, loadingView, currentView, homeView, stageWidth, stageHeight, stageScale, video, shape, controlType, isComplete = false;
var isloadInit = false;
model = new createjs.EventDispatcher();
modelData = {};
stageWidth = document.documentElement.clientWidth;
stageHeight = document.documentElement.clientHeight;
stageScale = stageWidth / (800 / 2); // 2倍
canvas = document.getElementById("mainView");
//video = document.getElementById("video");

//if (stageWidth / stageHeight > 0.665) {
if (stageWidth / stageHeight > 0.615) {    //宽高比例大过设计的比例就是 宽屏,  高取最大值
	console.log('1')
	stageScale = stageHeight / (1300 / 2);
	//canvas.style.left = (stageWidth - 800 / 2 * stageScale) / 2 + 'px'; //居中
} else {  //竖屏 ->  宽取最大值
	console.log('2')
	stageScale = stageWidth / (800 / 2);
	//canvas.style.left = '0px';
	//canvas.style.top = (stageHeight - 1300 / 2 * stageScale) / 2 + 'px'; //居中
}

canvas.style.width = 800 / 2 * stageScale + 'px';
canvas.style.height = 1300 / 2 * stageScale + 'px';


var def = {
	id:'#canvas',
	width:800,
	height:1300,
	minRaio:0.615
}

function Adaptation(options){
	this.id = options.id;
	this.stageWidth = document.documentElement.clientWidth;
	this.stageHeight = document.documentElement.clientHeight;
	this.width = options.width;
	this.height = options.height;
	this._w = this.width / 2; //
	this._h = this.height / 2;
	this.scale = 0;
	return this.init();
}

Adaptation.prototype.init = function (){
	
}

var xxx  = new Adaptation(def);
console.log(xxx);
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
//View
var View = {};
View.isTween = false;
//LoadingView
//(function() {
//    "use strict";
//    function LoadingView(){
//        this.Container_constructor();
//
//        this.back = new loadlib.loadingViewAssets();
//        this.back.x = 375;
//        this.back.y = 603;
//        this.addChild(this.back);
//    }
//    var p = createjs.extend(LoadingView,createjs.Container);
//    View.LoadingView = createjs.promote(LoadingView, "Container");
//}());
////HomeView
/*
(function() {
	function HomeView() {
		this.Container_constructor();

		this.back = new lib.back();
		this.addChild(this.back);
		this.spriteData = {
			images: ["images/sp.jpg"],
			frames: {
				width: 375,
				height: 603,
				regX: 0,
				regY: 0
			},
			animations: {
				play: [0, 50, "play", 0.9]
			}
		};
		this.spriteSheet = new createjs.SpriteSheet(this.spriteData);
		this.sprite = new createjs.Sprite(this.spriteSheet, "play");
		this.sprite.scaleX = 2;
		this.sprite.scaleY = 2;
		this.addChildAt(this.sprite, 1);
		this.sprite.compositeOperation = "lighter";
		this.backShape = new createjs.Shape();
		this.addChild(this.backShape);
		this.shape = new createjs.Shape();
		this.addChild(this.shape);
		//        this.shape.graphics.setStrokeStyle(4).beginStroke("#66FFFF");
		//        this.shape.graphics.moveTo(100,5);
		//        this.shape.graphics.lineTo(5,180);
		this.lineBtn = new lib.lineBtn();
		this.addChild(this.lineBtn);
		this.lineBtn.x = 383;
		this.lineBtn.y = 925
		this.playBtn = new lib.playBtn();
		this.addChild(this.playBtn);
		this.playBtn.x = 382;
		this.playBtn.y = 913;
		var _this = this;
		this.playBtn.cc.addEventListener("click", function() {
			_this.playHandler();
		})
		this.list = [];
		this.sortList = [];
		this.key = [1, 2, 3, 4, 5, 6];
		this.initLine();
	}
	
	var p = createjs.extend(HomeView, createjs.Container);
	
	p.playHandler = function() {
		youkuVideoInfo.getVideoInfo("XMTcxODYxMjg2NA==", function(obj) {
			stage.addChild(shape);
			video.style.display = "block";
			video.src = obj.getVideoURL;
			video.load();
			var s;

			video.style.left = 0 + "px";
			video.style.top = 0 + "px";
			s = stageHeight / 500;
			video.width = s * 890;
			video.height = s * 500;
			video.style.left = stageWidth / 2 - video.width / 2 + "px";
			if (stageWidth < video.width) {
				video.width = 890;
				video.height = 500;
				video.style.left = 0 + "px";
				video.style.top = 0 + "px";
				s = stageWidth / 890;
				video.width = s * 890;
				video.height = s * 500;
				video.style.top = stageHeight / 2 - video.height / 2 + "px"; //垂直居中
			}
		});

	}
	p.initLine = function() {
		this.backShape.graphics.clear();
		this.backShape.graphics.setStrokeStyle(10).beginStroke("rgba(255,255,255,0.4)");
		var obj = this.lineBtn;
		for (var i = 1; i <= 6; i++) {
			for (var j = 1; j <= 6; j++) {
				if (i == j) continue;
				var point1 = obj.localToGlobal(obj["c" + i].x, obj["c" + i].y);
				var point2 = obj.localToGlobal(obj["c" + j].x, obj["c" + j].y);
				this.backShape.graphics.moveTo(point1.x, point1.y);
				this.backShape.graphics.lineTo(point2.x, point2.y);
			}
		}
	}
	p.checkHit = function(p) {
		if (isComplete) return;
		var obj = this.lineBtn;
		for (var i = 1; i <= 6; i++) {
			var point = obj.localToGlobal(obj["c" + i].x, obj["c" + i].y);
			var ax = p.x - point.x;
			var ay = p.y - point.y;
			if (Math.sqrt(ax * ax + ay * ay) < 50) {
				if (this.sortList.length > 0) {
					if (this.sortList[this.sortList.length - 1] == i) {
						return;
					}
				}
				obj["c" + i].gotoAndStop(1);
				this.list.push(point);
				this.sortList.push(i);
			}
		}
		var boo = true;
		if (homeView.sortList.length == homeView.key.length) {
			for (var i = 0; i < homeView.sortList.length; i++) {
				if (homeView.sortList[i] != homeView.key[i]) {
					boo = false;
					break;
				}
			}
		} else {
			boo = false;
		}
		if (boo) {
			isComplete = true;
			setTimeout(function() {
				location.href = "m.html";
			}, 500);

			return
		}
		console.log(this.list);
	}
	p.startDrwaLine = function() {
		if (isComplete) return;
		createjs.Ticker.addEventListener("tick", p.drawing);
	}
	p.drawing = function() {
		if (homeView.list.length > 0) {
			homeView.shape.graphics.clear();
			homeView.shape.graphics.setStrokeStyle(10).beginStroke("#66FFFF");
			for (var i = 0; i < homeView.list.length - 1; i++) {
				homeView.shape.graphics.moveTo(homeView.list[i].x, homeView.list[i].y);
				homeView.shape.graphics.lineTo(homeView.list[i + 1].x, homeView.list[i + 1].y);
			}
			if (isComplete) return;
			homeView.shape.graphics.moveTo(homeView.list[homeView.list.length - 1].x, homeView.list[homeView.list.length - 1].y);
			if (controlType == "touch") {
				homeView.shape.graphics.lineTo(modelData.mouseX / stageScale, modelData.mouseY / stageScale);
			} else {
				homeView.shape.graphics.lineTo(modelData.mouseX, modelData.mouseY);
			}

		}
	}
	p.endDrawLine = function() {
		createjs.Ticker.removeEventListener("tick", p.drawing);
		if (isComplete) return;
		var boo = true;
		if (homeView.sortList.length == homeView.key.length) {
			for (var i = 0; i < homeView.sortList.length; i++) {
				if (homeView.sortList[i] != homeView.key[i]) {
					boo = false;
					break;
				}
			}
		} else {
			boo = false;
		}
		if (!boo) {
			homeView.shape.graphics.clear();
			homeView.shape.graphics.setStrokeStyle(10).beginStroke("#ff0000");
			for (var i = 0; i < homeView.list.length - 1; i++) {
				homeView.shape.graphics.moveTo(homeView.list[i].x, homeView.list[i].y);
				homeView.shape.graphics.lineTo(homeView.list[i + 1].x, homeView.list[i + 1].y);
			}
			for (i = 0; i < homeView.sortList.length; i++) {
				homeView.lineBtn["c" + homeView.sortList[i]].gotoAndStop(2);
			}
		} else {
			alert("打开页面");
		}
		setTimeout(p.reset, 1000);
	}
	p.reset = function() {
		homeView.shape.graphics.clear();
		for (var i = 0; i < homeView.list.length; i++) {
			homeView.lineBtn["c" + homeView.sortList[i]].gotoAndStop(0);
		}
		homeView.list = [];
		homeView.sortList = [];
	}
	View.HomeView = createjs.promote(HomeView, "Container");
}());*/

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