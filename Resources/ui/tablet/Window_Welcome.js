//Application Window Component Constructor
function initializeButtons(gw_mainWindow, regionImageView){
	
	

	//add animal pictures buttons
	var animalbuttonControl = require('ui/tablet/button_control/animalButtonControl');
	var gb_groupButtonControl = new animalbuttonControl.animalButtonControl(regionImageView, gw_mainWindow);

	  	
	//add video buttons
	var videobuttonControl = require('ui/tablet/button_control/videoButtonControl');
	var gb_videoButtonControl = new videobuttonControl.videoButtonControl(regionImageView, gw_mainWindow);
	//Add control button to the background view	
	gb_groupButtonControl.opacity = 0;
	gb_videoButtonControl.opacity = 0;
	regionImageView.add(gb_groupButtonControl);
	regionImageView.add(gb_videoButtonControl);  
	
	//add camera buttons
	var camerabuttonControl = require('ui/tablet/button_control/cameraButtonControl');
	var camerabutton = new camerabuttonControl.cameraButtonControl(regionImageView, gw_mainWindow);
	gb_groupButtonControl.opacity = 1;
	gb_videoButtonControl.opacity = 1;		
}
function Window_Welcome() {
	var i = 0;
	var VedioURL = 'ui/tablet/vedio/startMovie.mp4';
	var g_fontFamily = 'FZCYSK--GBK1-0';
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	//load component dependencies
	var movieView = Titanium.Media.createVideoPlayer({
		url:VedioURL,
		backgroundColor:'#111',
		//mediaControlStyle: Titanium.Media.VIDEO_CONTROL_EMBEDDED, // See TIMOB-2802, which may change this property name
		//mediaControlStyle: Titanium.Media.VIDEO_CONTROL_HIDDEN,
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
		width:"100%",
		height:"100%",
		autoplay:false
	});
	
	movieView.addEventListener('complete',function()
	{
		
		movieView.stop();
		movieView.release();
		movieView = null;
		self.close();
		
	});	
	
	self.addEventListener('close', function() {				
		var Window_Page1 = require('ui/tablet/ApplicationWindow');
		var wp1 = new Window_Page1();
		wp1[0].open({fullscreen:true});
		
	var labelAnimate = function(myview)
  	{
	  	var l_2dMatrix = Ti.UI.create2DMatrix();
	  	l_2dMatrix = l_2dMatrix.scale(1.2, 1.2);
	  	var l_animation = Ti.UI.createAnimation();
	  	l_animation.transform = l_2dMatrix;
	  	l_animation.autoreverse = true;
	  	l_animation.repeat = 10;
	  	l_animation.duration = 500;
	  	myview.animate(l_animation, function(){			
				
	  	}); 	
	  	l_2dMatrix = null;	
	  	l_animation = null;
  	}		
	var helpLabel = Ti.UI.createLabel({
		top: "50%",
		left:"20%",
		//height: 60,
		//width:150,
		opacity:0.5,
		text: '载入图片中,请等候......',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{fontSize:50, fontFamily:g_fontFamily},
		zIndex:100 + 10,
	});
		wp1[0].add(helpLabel);
		labelAnimate(helpLabel);		
		initializeButtons(wp1[0], wp1[1]);
		wp1[0].remove(helpLabel);	
		helpLabel = null;
	});
	
	
	self.add(movieView);
	
	movieView.play();
	
	

	self.orientationModes = [ Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT ];
	return self;
};

//make constructor function the public component interface
module.exports = Window_Welcome;
