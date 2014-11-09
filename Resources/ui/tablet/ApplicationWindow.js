
//Application Window Component Constructor
function ApplicationWindow() {
	var g_fontFamily = 'FZCYSK--GBK1-0';

	//background view
	var RegionImageView = require('ui/tablet/section_I/RegionImageView');
	var regionImageView = new RegionImageView();

	//create component instance
	var gw_mainWindow = Ti.UI.createWindow({
		//backgroundColor:'#ffffff'
	});

	
	
 	gw_mainWindow.orientationModes = [ Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT ];

			
		
	gw_mainWindow.add(regionImageView);
		
	
	var demoLabel = Ti.UI.createLabel({
		top: "90%",
		left:"5%",
		//height: 60,
		//width:150,
		opacity:0.5,
		text: '森林之眼1.0演示版',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{fontSize:20, fontFamily:g_fontFamily},
		zIndex:100 + 10,
	});

	gw_mainWindow.add(demoLabel);
	
	return [gw_mainWindow,regionImageView];
}

//make constructor function the public component interface
module.exports = ApplicationWindow;

