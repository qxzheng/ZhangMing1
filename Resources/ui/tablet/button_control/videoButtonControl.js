	//Global configuration
	var l_buttonTop = 120;
	var l_buttonHeight = 120;
	var l_buttonwidth = 120;
	var l_buttonzIndex = 100;
	var l_buttondistance = 50;
	var l_buttonscape = l_buttonHeight + 30;
	var l_buttonleft = 70;
	var l_buttonFadingTime = 100;

	//Animal Vedio button parameters
	var g_VedioControlButtonURL = 'ui/tablet/button_images/vedio.png';
	var g_VedioPerColumn = 6;
	var gb_vedioButtonNum = 3;
	var gb_vedioButton;
	var g_fontFamily = 'FZCYSK--GBK1-0';
	
	//URL for the new backgroud picture
	var g_backgroundViewNewURL =  'ui/tablet/button_images/forestnight.jpg';
	var g_backgroundViewOldURL = "ui/tablet/Animal_Image/background.png";

	
	//import functions
	var commonButtonControl = require('ui/tablet/button_control/commonButtonControl');
	var buttonDisppear = commonButtonControl.buttonDisppear;
	var buttonAnimate  = commonButtonControl.buttonAnimate;
	
	var cameraButtonControl = require('ui/tablet/button_control/cameraButtonControl');
	var cameraButtonDisppear = cameraButtonControl.cameraButtonShow;
	
	
	
	
		var g_buttonImages = [
		"ui/tablet/Animal_Image/linniu.png",
		"ui/tablet/Animal_Image/linshe.png",
		"ui/tablet/Animal_Image/zangqiuhou.png"
		];
		var AnimalVideoDirectory = [
		"ui/tablet/vedio/niujiaolin",
		"ui/tablet/vedio/xionglinshe",
		"ui/tablet/vedio/zangqiuhou"		
		];
	
	//Create a vedio control button
	var gb_groupVedioButtonControl;
	
	var initAnimalVedioButtons = function(regionImageView, gw_mainWindow)
	{		
		gb_vedioButton = new Array();
 		for (var i = 0; i< gb_vedioButtonNum; i++)
 		{
 			var AniTop = l_buttonTop + (i%g_VedioPerColumn)*(l_buttonHeight+l_buttondistance);
 			var AniLeft = l_buttonleft + parseInt(i/g_VedioPerColumn)*l_buttonscape;
 			gb_vedioButton[i] =  Ti.UI.createButton({
			//backgroundColor:'red',
			backgroundImage:g_buttonImages[i],
			//title:g_buttonTitles[i],
			top: AniTop,
			height: l_buttonHeight,
			width:l_buttonwidth,
			right: AniLeft,
			opacity:0,
			zIndex:i,		
			font:{fontSize:20, fontFamily:g_fontFamily},
			});	
		
			
			gb_vedioButton[i].addEventListener('click', function(e){  	
  		
  				var videoShow = require('ui/tablet/section_IV/videoShow');
 				var videoView = new videoShow(AnimalVideoDirectory[e.source.zIndex],gw_mainWindow, regionImageView);

  				gw_mainWindow.add(videoView[0]);
  				gw_mainWindow.add(videoView[1]);    				
 			});	
			
		}
 	}	

 	//Video control button on/off 	
	var videoControlButtonShow = function(show) 	
	{	
 		buttonDisppear(show, gb_groupVedioButtonControl);
 	}
 
 	//Video display buttons off 
 	var videoDisplayButtonShow = function(show) 	
 	{
 		for (var i = 0; i < gb_groupButtonNum; i++)
 			{
 				buttonDisppear(show, gb_vedioButton[i]);	
 			}  	 		
 	}			
 	
var videoButtonControl = function(regionImageView, gw_mainWindow) 
{
	gb_groupVedioButtonControl= Ti.UI.createButton({
			//backgroundColor:'blue',
			backgroundImage: g_VedioControlButtonURL ,
			//image: g_buttonImages[0][0],
			top: 15,
			height: 74,
			width:150,
			left:480,
			opacity:1,
			zIndex:l_buttonzIndex,
		});	
	initAnimalVedioButtons(regionImageView, gw_mainWindow);	

		//bind all the video buttons to backgroud view
		for (var i =0; i< gb_vedioButtonNum; i++)
 		{
 			regionImageView.add(gb_vedioButton[i]);
 		}		
	gb_groupVedioButtonControl.addEventListener('click', function(e){
 		buttonAnimate(e.source);
 		//animal button on/off
 		if((gb_vedioButton.length>0) && (gb_vedioButton[0].getOpacity() != 0))
 		{	
 			
 			for (var i = 0; i < gb_vedioButtonNum; i++)
 			{
 				buttonDisppear(true, gb_vedioButton[i]);	
 			} 
 			
 			//change to default image
 			regionImageView.backgroundImage = g_backgroundViewOldURL;	
 			//show all camera buttons
 			cameraButtonDisppear(true);
 			//hide video control button
  			var animalButtonControl = require('ui/tablet/button_control/animalButtonControl');
			var animalControlButtonShow = animalButtonControl.animalControlButtonShow;
 			animalControlButtonShow(false);
 			//regionImageView.opacity	= 1; 						
 		}
 		else
 		{
 			 //hide all camera buttons
 			cameraButtonDisppear(false);
 			
 			//show video button
  			var animalButtonControl = require('ui/tablet/button_control/animalButtonControl');
			var animalControlButtonShow = animalButtonControl.animalControlButtonShow;
 			animalControlButtonShow(true);
 			
 			//change the background image to another picture
 			regionImageView.backgroundImage = g_backgroundViewNewURL;
 			//regionImageView.opacity	= 0.3; 
 			for (var i = 0; i < gb_vedioButtonNum; i++)
 			{
 				buttonDisppear(false, gb_vedioButton[i]);	
 			}  						
 		} 				
	});
	return 	gb_groupVedioButtonControl; 
}



//make constructor function the public component interface
module.exports.videoButtonControl = videoButtonControl;
module.exports.videoControlButtonShow = videoControlButtonShow;
//module.exports.videoDisplayButtonShow = videoDisplayButtonShow;

