(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.rCanvas = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * Created by lenovo on 2017/12/15.
 * ResizeCanvas用于create.js的画布自适应
 */

var ResizeCanvas = function () {
	function ResizeCanvas(options) {
		classCallCheck(this, ResizeCanvas);

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

	createClass(ResizeCanvas, [{
		key: 'init',
		value: function init() {
			var _this = this;
			this.stage = new createjs.Stage(this.el);
			this.setLayout();
			this.bindEvent(); //绑定事件
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
	}, {
		key: 'Ticker',
		value: function Ticker(FPS_Number) {
			var _this = this;
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			this.setFPS(FPS_Number);
			createjs.Ticker.addEventListener("tick", function (event) {
				_this.stageBreakHandler(event);
				_this.stage.update();
			});
			return this;
		}
	}, {
		key: 'setFPS',
		value: function setFPS(Number) {
			createjs.Ticker.setFPS(Number || 30);
			return this;
		}
	}, {
		key: 'append',
		value: function append(obj) {
			this.stage.addChild(obj);
			return this;
		}
	}, {
		key: 'del',
		value: function del(obj) {
			this.stage.removeChild(obj);
			return this;
		}
	}, {
		key: 'stageBreakHandler',
		value: function stageBreakHandler(event) {
			if (this.resetWin) {
				this.stageWidth = document.documentElement.clientWidth;
				this.stageHeight = document.documentElement.clientHeight;
				this.setWidthAndHeight();
				this.resetWin = false;
			}
			return this;
		}
	}, {
		key: 'setLayout',
		value: function setLayout() {
			console.log('setLayout:初始化页面的时候设置一次');
			this.setWidthAndHeight();
			return this;
		}
	}, {
		key: 'setWidthAndHeight',
		value: function setWidthAndHeight() {
			//0.615 = 800/1300
			//最小比例, 值越小,越接近原来尺寸比例,越大,比例放大
			if (this.stageWidth / this.stageHeight > 0.615) {
				//宽高比例大过设计的比例就是 宽屏,  高取最大值
				this.stageScale = this.stageHeight / this._h;
			} else {
				//竖屏 ->  宽取最大值
				this.stageScale = this.stageWidth / this._w;
			}

			//canvas的width height 改变会导致touch的坐标不稳 所以鼠标位置也需要算上stageScale
			this.el.style.width = this._w * this.stageScale + 'px';
			this.el.style.height = this._h * this.stageScale + 'px';
			return this;
		}
	}, {
		key: 'bindEvent',
		value: function bindEvent() {
			this.checkEventType();
			if (this.eventType === 'wap') {
				this.touchInit();
			} else if (this.eventType === 'pc') {
				this.mouseInit();
			}
			return this;
		}
	}, {
		key: 'touchInit',
		value: function touchInit() {
			return this;
		}
	}, {
		key: 'mouseInit',
		value: function mouseInit() {
			return this;
		}
	}, {
		key: 'callback',
		value: function callback(callbackfn) {
			// console.log('callbackfn:', callbackfn);
			if (callbackfn && typeof callbackfn === 'function') {
				callbackfn(this);
			}
			return this;
		}
	}, {
		key: 'checkEventType',
		value: function checkEventType() {
			var userAgentInfo = navigator.userAgent;
			var Agents = ["Android", "iPhone", "iPad", "iPod", "SymbianOS", "Windows Phone"];
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					this.eventType = 'wap';
					break;
				}
			}
		}
	}]);
	return ResizeCanvas;
}();

return ResizeCanvas;

})));
