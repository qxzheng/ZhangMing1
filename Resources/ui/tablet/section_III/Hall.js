//Application Window Component Constructor
function HallViewPlayer(pageSwitchCallbackfunc) {

	// create an imageview and set it to the width and height of your images
	var li_hallImages = Ti.UI.createImageView({
		image: 'ui/tablet/frames/hall-sequence/B__00000.png',
    	top: 0, left: 0,
    	width:'100%',
    	height:'100%'  
	});

	var play = require('ui/tablet/FrameAnimationPlayer');
	var FrameAnimationPlayer = new play.FrameAnimationPlayer(li_hallImages,{
		frameImageNamePrefix: 'ui/tablet/frames/hall-sequence/B__',
    	frameStartIndex: 0,
    	frameEndIndex: 199,
    	dipPerFrame: 2,
    	opDirection: 'vertical',
    	autoCycle: false,
    	pageSwitchCallback: pageSwitchCallbackfunc
	});	
 
	return FrameAnimationPlayer;
}

//make constructor function the public component interface
module.exports = HallViewPlayer;
