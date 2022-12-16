(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sin boton_atlas_1", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_2", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_3", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_4", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_5", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_6", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_7", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_8", frames: [[0,0,1778,1560]]},
		{name:"sin boton_atlas_9", frames: [[1252,0,512,512],[1252,514,145,480],[0,0,1250,1000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.ascat2_0 = function() {
	this.initialize(ss["sin boton_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_1 = function() {
	this.initialize(ss["sin boton_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_2 = function() {
	this.initialize(ss["sin boton_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_3 = function() {
	this.initialize(ss["sin boton_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_4 = function() {
	this.initialize(ss["sin boton_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_5 = function() {
	this.initialize(ss["sin boton_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_6 = function() {
	this.initialize(ss["sin boton_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ascat2_7 = function() {
	this.initialize(ss["sin boton_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bajar = function() {
	this.initialize(ss["sin boton_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.menu = function() {
	this.initialize(ss["sin boton_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pantalla = function() {
	this.initialize(ss["sin boton_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.web = function() {
	this.initialize(img.web);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,3651);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bajar();
	this.instance.setTransform(0,0,0.1293,0.1293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,66.2);


// stage content:
(lib.sinboton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [7];
	// timeline functions:
	this.frame_7 = function() {
		var _this = this;
		/*
		Detenga la animación completa.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.button_1.on('click', function(){
		/*
		Inicie la animación completa.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.addEventListener('tick', stage);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(144));

	// flecha
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(326.1,468.1,1,1,0,0,0,33.1,33.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(7).to({_off:false},0).wait(144));

	// gif
	this.instance = new lib.ascat2_0();
	this.instance.setTransform(273,169,0.0826,0.0826);

	this.instance_1 = new lib.ascat2_1();
	this.instance_1.setTransform(274,145,0.1001,0.1001);

	this.instance_2 = new lib.ascat2_2();
	this.instance_2.setTransform(289,153,0.0876,0.0876);

	this.instance_3 = new lib.ascat2_3();
	this.instance_3.setTransform(297,165,0.0751,0.0751);

	this.instance_4 = new lib.ascat2_4();
	this.instance_4.setTransform(290,172,0.0751,0.0751);

	this.instance_5 = new lib.ascat2_5();
	this.instance_5.setTransform(257,162,0.1026,0.1026);

	this.instance_6 = new lib.ascat2_6();
	this.instance_6.setTransform(242,153,0.0876,0.0876);

	this.instance_7 = new lib.ascat2_7();
	this.instance_7.setTransform(232,170,0.0901,0.0901);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},25).to({state:[{t:this.instance_7}]},13).to({state:[]},13).wait(75));

	// menu
	this.instance_8 = new lib.menu();
	this.instance_8.setTransform(130,104,0.4601,0.4601);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},76).wait(75));

	// Capa_1
	this.instance_9 = new lib.pantalla();
	this.instance_9.setTransform(0,0,0.5181,0.5181);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},76).wait(75));

	// web
	this.instance_10 = new lib.web();
	this.instance_10.setTransform(123,99,0.5213,0.5213);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},76).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,240,327.6,1762.3);
// library properties:
lib.properties = {
	id: 'B2A4342CC7226E4E92D4621A639B0F1E',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/web.png?1669205008066", id:"web"},
		{src:"images/sin boton_atlas_1.png?1669205008042", id:"sin boton_atlas_1"},
		{src:"images/sin boton_atlas_2.png?1669205008042", id:"sin boton_atlas_2"},
		{src:"images/sin boton_atlas_3.png?1669205008042", id:"sin boton_atlas_3"},
		{src:"images/sin boton_atlas_4.png?1669205008042", id:"sin boton_atlas_4"},
		{src:"images/sin boton_atlas_5.png?1669205008042", id:"sin boton_atlas_5"},
		{src:"images/sin boton_atlas_6.png?1669205008042", id:"sin boton_atlas_6"},
		{src:"images/sin boton_atlas_7.png?1669205008042", id:"sin boton_atlas_7"},
		{src:"images/sin boton_atlas_8.png?1669205008042", id:"sin boton_atlas_8"},
		{src:"images/sin boton_atlas_9.png?1669205008042", id:"sin boton_atlas_9"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B2A4342CC7226E4E92D4621A639B0F1E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;