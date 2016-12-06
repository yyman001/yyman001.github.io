(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 1300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.pagetext2 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.page1bg = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.page1figure1 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.page1figure2 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.page1figure3 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.page1figure4 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.page1figure5 = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.page1text = function() {
	this.spriteSheet = ss["保卫萝卜_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.文字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1text();
	this.instance.setTransform(-349,-192.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349,-192.9,615,390);


(lib.f5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1figure5();
	this.instance.setTransform(-84,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-104,148,193);


(lib.f4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1figure4();
	this.instance.setTransform(-73,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-71.9,143,143);


(lib.f3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1figure3();
	this.instance.setTransform(-79,-120.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-120.9,183,205);


(lib.f2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1figure2();
	this.instance.setTransform(-75,-69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-69.9,151,149);


(lib.f1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1figure1();
	this.instance.setTransform(-59,-66.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-66.9,113,128);


(lib.标题 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.pagetext2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,482,156);


// stage content:
(lib.保卫萝卜 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 标题
	this.instance = new lib.标题("synched",0);
	this.instance.setTransform(402.8,858.3,1,1,0,0,0,241,78);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({alpha:1},17).wait(13));

	// 文字
	this.instance_1 = new lib.文字("synched",0);
	this.instance_1.setTransform(400,554.1,1,1,0,0,0,-41.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},4).to({y:565.9},2).to({y:554.1},4).to({startPosition:0},4).to({y:565.9},2).to({y:554.1},4).to({startPosition:0},4).to({y:565.9},2).to({y:554.1},4).to({startPosition:0},4).to({y:565.9},2).to({y:554.1},4).to({startPosition:0},4).to({y:565.9},2).to({y:544.4},4).wait(30));

	// f5
	this.instance_2 = new lib.f5("synched",0);
	this.instance_2.setTransform(633.5,-96.5,1,1,0,0,0,-10,-7.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({y:317.9},4).to({y:348.5},2).to({y:317.9},4).wait(30));

	// f4
	this.instance_3 = new lib.f4("synched",0);
	this.instance_3.setTransform(535.6,-71.5,1,1,0,0,0,-1.5,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({y:327.2},4).to({y:360.4},2).to({y:327.2},4).wait(40));

	// f3
	this.instance_4 = new lib.f3("synched",0);
	this.instance_4.setTransform(408.4,-102.7,1,1,0,0,0,12.5,-18.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({y:296.5},4).to({y:331},2).to({y:296.5},4).wait(50));

	// f2
	this.instance_5 = new lib.f2("synched",0);
	this.instance_5.setTransform(266.6,-74.5,1,1,0,0,0,0.5,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:330.2},4).to({y:358.8},2).to({y:330.2},4).wait(60));

	// f1
	this.instance_6 = new lib.f1("synched",0);
	this.instance_6.setTransform(149,-64,1,1,0,0,0,-2.5,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:353.5},4).to({y:381.8},2).to({y:338.1},4).wait(70));

	// 背景
	this.instance_7 = new lib.page1bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,522,800,1428);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;