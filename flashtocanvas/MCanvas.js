/**
 * Created by Administrator on 2017/1/3
 * 画布自适应
 */






function MCanvas(options){
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
}