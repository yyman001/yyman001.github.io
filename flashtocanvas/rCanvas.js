/**
 * Created by lenovo on 2017/12/15.
 * ResizeCanvas用于create.js的画布自适应
 */

export default class ResizeCanvas {
	constructor(options) {
		this.el = options.el ? document.querySelector(options.el) : null;
		this.stageWidth = document.documentElement.clientWidth;
		this.stageHeight = document.documentElement.clientHeight;
		this.w = options.w;
		this.h = options.h;
		this._w = this.w / 2;
		this._h = this.h / 2;
		this.stage = null;
		this.radio = (this.w / this.h).toFixed(3);
		this.scale = this.stageWidth / this._h;
		this.eventType = 'pc'; //默认事件为pc端
		this.X = -1;
		this.Y = -1;
		this.resetWin = false;
		this.container = null;
		this.init();
	}

	init() {
		let _this = this;
		this.stage = new createjs.Stage(this.el);
		this.setLayout();
		this.bindEvent();//绑定事件
		this.touchInit();
		this.container = new createjs.Container();
		this.stage.addChild(this.container);
		createjs.Touch.enable(this.stage);
		this.Ticker();
		window.onresize = function () {
			_this.resetWin = true;
			_this.stageBreakHandler();
		};
		return this;
	}

	Ticker(FPS_Number) {
		let _this = this;
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		this.setFPS(FPS_Number);
		createjs.Ticker.addEventListener("tick", function (event) {
			_this.stageBreakHandler(event);
			_this.stage.update();
		});
		return this;
	}

	setFPS(Number) {
		createjs.Ticker.setFPS(Number || 30);
		return this;
	}

	append(obj) {
		this.stage.addChild(obj);
		return this;
	}

	del(obj) {
		this.stage.removeChild(obj);
		return this;
	}

	stageBreakHandler(event) {
		if (this.resetWin) {
			this.stageWidth = document.documentElement.clientWidth;
			this.stageHeight = document.documentElement.clientHeight;
			this.setWidthAndHeight();
			this.resetWin = false;
		}
		return this;
	}

	setLayout() {
		console.log('setLayout:初始化页面的时候设置一次');
		this.setWidthAndHeight();
		return this;
	}

	setWidthAndHeight() {
		//0.615 = 800/1300
		//最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
		if (this.stageWidth / this.stageHeight > 0.615) {    //宽高比例大过设计的比例就是 宽屏,  高取最大值
			this.stageScale = this.stageHeight / this._h;
		} else {  //竖屏 ->  宽取最大值
			this.stageScale = this.stageWidth / this._w;
		}

		//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
		this.el.style.width = this._w * this.stageScale + 'px';
		this.el.style.height = this._h * this.stageScale + 'px';
		return this;
	}

	bindEvent() {
		this.checkEventType()
		if (this.eventType === 'wap') {
			this.touchInit();
		} else if (this.eventType === 'pc') {
			this.mouseInit();
		}
		return this;
	}

	touchInit() {
		return this;
	}

	mouseInit() {
		return this;
	}

	callback(callbackfn) {
		// console.log('callbackfn:', callbackfn);
		if (callbackfn && typeof callbackfn === 'function') {
			callbackfn(this);
		}
		return this;
	}

	checkEventType() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "iPad", "iPod", "SymbianOS", "Windows Phone"];
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				this.eventType = 'wap';
				break;
			}
		}
	}
};
