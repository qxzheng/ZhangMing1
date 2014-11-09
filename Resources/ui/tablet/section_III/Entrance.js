//Application Window Component Constructor
function EntranceViewPlayer(pageSwitchCallbackfunc) {

	// create an imageview and set it to the width and height of your images
	var li_entranceImages = Ti.UI.createImageView({
		image: 'ui/tablet/frames/entrance-sequence/A__00000.png',
    	top: 0, left: 0,
    	width:'100%',
    	height:'100%'  
	});

	var play = require('ui/tablet/FrameAnimationPlayer');
	var FrameAnimationPlayer = new play.FrameAnimationPlayer(li_entranceImages,{
		frameImageNamePrefix: 'ui/tablet/frames/entrance-sequence/A__',
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
module.exports = EntranceViewPlayer;
