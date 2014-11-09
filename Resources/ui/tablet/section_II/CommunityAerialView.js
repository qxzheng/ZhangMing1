//Application Window Component Constructor
function CommunityAerialViewPlayer() {

	var baseView = Ti.UI.createView({
    	top: 0, left: 0,
    	width:'100%',
    	height:'100%' 			
	});
	
	// create an imageview and set it to the width and height of your images
	var li_communityAerialImages = Ti.UI.createImageView({
		image: 'ui/tablet/frames/community-sequence/NK_360__00000.png',
    	top: 0, left: 0,
    	width:'100%',
    	height:'100%'  
	});
	
	var play = require('ui/tablet/FrameAnimationPlayer');
	var FrameAnimationPlayer = new play.FrameAnimationPlayer(li_communityAerialImages,{
		frameImageNamePrefix: 'ui/tablet/frames/community-sequence/NK_360__',
    	frameStartIndex: 0,
    	frameEndIndex: 360,
    	dipPerFrame: 5,
    	opDirection: 'horizental',
    	autoCycle: true
	});	
	

	var btn360 = Ti.UI.createButton({
		backgroundImage: "ui/tablet/button_images/360_button.png",
		top: 40,
		right:120,
		height: 35,
		width:100,
		opacity:1,
		zIndex:100+1,
	});
	
	btn360.addEventListener('click', function(){
		var webView = Titanium.UI.createWebView({
			url:'/Panos/Apartment/tour.html'
		}); 
		
		baseView.remove(li_communityAerialImages);
		baseView.add(webView);
		btn360.hide();
 	});
 	 	
	baseView.add(li_communityAerialImages);
	baseView.add(btn360);

	return baseView;
}

//make constructor function the public component interface
module.exports = CommunityAerialViewPlayer;

