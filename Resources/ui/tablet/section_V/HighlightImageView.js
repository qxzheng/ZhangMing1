//Application Window Component Constructor
function HighlightImageView() {
	var stage = 0;
	
	var view = Ti.UI.createImageView({
    backgroundImage:"ui/tablet/frames/RegionPics/QuWeiGuiHua_introduction.png",
    top: 0, left: 0,
    width:'100%',
    height:'100%'    
	});
		
	return view;
}

//make constructor function the public component interface
module.exports = HighlightImageView;
