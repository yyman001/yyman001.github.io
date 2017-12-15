//main.js


var def = {
	id: '#mainView',
	width: 800,
	height: 1300,
	minRaio: 0.615
};

function Adaptation(options) {
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
	this._fileload = function (event) {
	}
	this._progress = function (event) {
	}
	this._complete = function (event) {
	}

	//wap event
	this._touchstart = function (event) {
	}
	this._touchmove = function (event) {
	}
	this._touchend = function (event) {
	}
	//pc event
	this._mousedown = function (event) {
	}
	this._mousemove = function (event) {
	}
	this._mouseup = function (event) {
	}

	this._callbackfn = function () {
	}

	this.setLayout(); //初始化页面的时候设置一次
}
Adaptation.prototype.setLayout = function () {
	this.canvas = document.querySelector(this.id)
	console.log('初始化页面的时候设置一次');
	this.setWH();
}
Adaptation.prototype.setWH = function () {
	//0.615 = 800/1300
	//最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
	if (this.stageWidth / this.stageHeight > 0.615) {    //宽高比例大过设计的比例就是 宽屏,  高取最大值
		this.stageScale = this.stageHeight / this._h;
	} else {  //竖屏 ->  宽取最大值
		this.stageScale = this.stageWidth / this._w;
	}

	//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
	this.canvas.style.width = this._w * this.stageScale + 'px';
	this.canvas.style.height = this._h * this.stageScale + 'px';

}
Adaptation.prototype.touchInit = function (event) {
	var _this = this;
	controlType = "touch";
	this.canvas.addEventListener('touchstart', function (event) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		_this.X = touch.pageX * 2;
		_this.Y = touch.pageY * 2;
		_this._touchstart(event, _this.X, _this.Y);
	}, false);

	this.canvas.addEventListener('touchmove', function (event) {
		// 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length === 1) {
			event.preventDefault(); // 阻止浏览器默认事件，重要
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置
			_this.X = touch.pageX * 2;
			_this.Y = touch.pageY * 2;
			_this._touchmove(event, _this.X, _this.Y);
		}
	}, false);

	this.canvas.addEventListener('touchend', function (event) {
		_this._touchend(event);
	}, false);
};
Adaptation.prototype.mouseInit = function (event) {
	controlType = "mouse";
	var isMouseDown = false;
	var _this = this;
	_this.stage.addEventListener('stagemousedown', function (mouseEvent) {
		isMouseDown = true;
		_this.X = mouseEvent.rawX;
		_this.Y = mouseEvent.rawY;
		_this._mousedown(mouseEvent, _this.X, _this.Y)
	});

	_this.stage.addEventListener('stagemousemove', function (mouseEvent) {
		if (isMouseDown == false) return;
		_this.X = mouseEvent.rawX;
		_this.Y = mouseEvent.rawY;
		_this._mousemove(mouseEvent, _this.X, _this.Y)
	});

	_this.stage.addEventListener('stagemouseup', function (mouseEvent) {
		isMouseDown = false;
		_this._mouseup(mouseEvent);
	});
}
Adaptation.prototype.bindEvent = function () {
	this.checkEventType()
	if (this.eventType === 'wap') {
		this.touchInit();
	} else if (this.eventType === 'pc') {
		this.mouseInit();
	}

}
Adaptation.prototype.init = function () {
	var _this = this;
	this.stage = new createjs.Stage(this.canvas);
	this.bindEvent();//绑定事件
	this.touchInit();
	container = new createjs.Container();
	this.stage.addChild(container);
	createjs.Touch.enable(this.stage);

	this.Ticker();

	window.onresize = function () {
		_this.resetWin = true;
		_this.stageBreakHandler();
	};
	return this;
};
Adaptation.prototype.Ticker = function (FPS_Number) {
	var _this = this;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	this.setFPS();
	createjs.Ticker.addEventListener("tick", function (event) {
		_this.stageBreakHandler(event);
		_this.stage.update();
	});

};
Adaptation.prototype.setFPS = function (Number) {
	createjs.Ticker.setFPS(Number || 30);
};
Adaptation.prototype.append = function (obj) {
	this.stage.addChild(obj)
};
Adaptation.prototype.del = function (obj) {
	this.stage.removeChild(obj)
};
Adaptation.prototype.stageBreakHandler = function (event) {
	if (this.resetWin) {
		this.stageWidth = document.documentElement.clientWidth;
		this.stageHeight = document.documentElement.clientHeight;
		this.setWH();
		this.resetWin = false;
	}
};
Adaptation.prototype.callback = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._callbackfn = callbackfn;
	}
	return this;
}
Adaptation.prototype.touchstart = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._touchstart = callbackfn;
		//console.log('touchstart-init',this._touchstart);
	}
	return this;
}
Adaptation.prototype.touchmove = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._touchmove = callbackfn;
		//console.log('touchmove-init',this._touchmove);
	}
	return this;
}
Adaptation.prototype.touchend = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._touchend = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}
Adaptation.prototype.mousedown = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._mousedown = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}
Adaptation.prototype.mousemove = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._mousemove = callbackfn;
		//console.log('touchend-init',this._touchend);
	}
	return this;
}
Adaptation.prototype.mouseup = function (callbackfn) {
	if (callbackfn && typeof callbackfn === 'function') {
		this._mouseup = callbackfn;
		//console.log('touchend-init',this.mouseup);
	}
	return this;
}
Adaptation.prototype.checkEventType = function () {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone", "iPad", "iPod", "SymbianOS", "Windows Phone"];
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			this.eventType = 'wap';
			break;
		}
	}
	//console.log('type:',this.eventType);
}
