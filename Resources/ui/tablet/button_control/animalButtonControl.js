//Application Window Component Constructor
	//Global configuration
	var l_buttonTop = 120;
	var l_buttonHeight = 120;
	var l_buttonwidth = 120;
	var l_buttonzIndex = 100;
	var l_buttondistance = 50;
	var l_buttonscape = l_buttonHeight + 30;
	var l_buttonleft = 70;
	var l_buttonFadingTime = 100;
	//import functions
	var commonButtonControl = require('ui/tablet/button_control/commonButtonControl');
	var buttonDisppear = commonButtonControl.buttonDisppear;
	var buttonAnimate  = commonButtonControl.buttonAnimate;
	
	var cameraButtonControl = require('ui/tablet/button_control/cameraButtonControl');
	var cameraButtonDisppear = cameraButtonControl.cameraButtonShow;
	
	var gb_groupButtonControl;



	//URL for the new backgroud picture
	var g_backgroundViewNewURL =  'ui/tablet/button_images/forestnight.jpg';
	var g_backgroundViewOldURL = "ui/tablet/Animal_Image/background.png";
	//Animal picture button parameters
	var g_controlButtonURL = 'ui/tablet/button_images/huakuang.png';
	var g_animalPerColumn = 4;
	var gb_groupButtonNum = 24;
	var gb_groupButton;
	var g_fontFamily = 'FZCYSK--GBK1-0';
	
	var g_buttonImages = [
		["ui/tablet/Animal_Image/bigpanda.png", "ui/tablet/Animal_Image/bigpanda.png"],
		["ui/tablet/Animal_Image/banlin.png", "ui/tablet/Animal_Image/banlin.png"],
		["ui/tablet/Animal_Image/linshe.png", "ui/tablet/Animal_Image/linshe.png"],
		["ui/tablet/Animal_Image/smallPanda.png", "ui/tablet/Animal_Image/smallPanda.png"],
		["ui/tablet/Animal_Image/xiaolu.png", "ui/tablet/Animal_Image/xiaolu.png"],
		["ui/tablet/Animal_Image/yanyang.png", "ui/tablet/Animal_Image/yanyang.png"],
		
		["ui/tablet/Animal_Image/bigpanda.png", "ui/tablet/Animal_Image/baomao.png"],
		["ui/tablet/Animal_Image/banlin.png", "ui/tablet/Animal_Image/cihu.png"],
		["ui/tablet/Animal_Image/linshe.png", "ui/tablet/Animal_Image/haozhu.png"],
		["ui/tablet/Animal_Image/smallPanda.png", "ui/tablet/Animal_Image/heixiong.png"],
		["ui/tablet/Animal_Image/xiaolu.png", "ui/tablet/Animal_Image/xiangyou.png"],
		["ui/tablet/Animal_Image/yanyang.png", "ui/tablet/Animal_Image/huamianli.png"],
		
		["ui/tablet/Animal_Image/bigpanda.png", "ui/tablet/Animal_Image/huanghoudiao.png"],
		["ui/tablet/Animal_Image/banlin.png", "ui/tablet/Animal_Image/jinmao.png"],
		["ui/tablet/Animal_Image/linshe.png", "ui/tablet/Animal_Image/jinsihou.png"],
		["ui/tablet/Animal_Image/smallPanda.png", "ui/tablet/Animal_Image/linniu.png"],
		["ui/tablet/Animal_Image/xiaolu.png", "ui/tablet/Animal_Image/maoguanlu.png"],
		["ui/tablet/Animal_Image/yanyang.png", "ui/tablet/Animal_Image/maolin.png"],
		
		
		["ui/tablet/Animal_Image/bigpanda.png", "ui/tablet/Animal_Image/shidiao.png"],
		["ui/tablet/Animal_Image/banlin.png", "ui/tablet/Animal_Image/shuilu.png"],
		["ui/tablet/Animal_Image/linshe.png", "ui/tablet/Animal_Image/xuebao.png"],
		["ui/tablet/Animal_Image/smallPanda.png", "ui/tablet/Animal_Image/yezhu.png"],
		["ui/tablet/Animal_Image/xiaolu.png", "ui/tablet/Animal_Image/zangqiuhou.png"],
		["ui/tablet/Animal_Image/yanyang.png", "ui/tablet/Animal_Image/zhuhuan.png"]
		
		];
	var AnimalImagesDirectory = [
		"ui/tablet/frames/animal/bigpanda",
		"ui/tablet/frames/animal/banlin",
		"ui/tablet/frames/animal/linshe",
		"ui/tablet/frames/animal/smallPanda",
		"ui/tablet/frames/animal/xiaolu",
		"ui/tablet/frames/animal/yanyang",
			
		"ui/tablet/frames/animal/baomao",
		"ui/tablet/frames/animal/cihu",
		"ui/tablet/frames/animal/haozhu",
		"ui/tablet/frames/animal/heixiong",
		"ui/tablet/frames/animal/xiangyou",
		"ui/tablet/frames/animal/huamianli",
	
		"ui/tablet/frames/animal/huanghoudiao",
		"ui/tablet/frames/animal/jinmao",
		"ui/tablet/frames/animal/jinsihou",
		"ui/tablet/frames/animal/linniu",
		"ui/tablet/frames/animal/maoguanlu",
		"ui/tablet/frames/animal/maolin",
						
		"ui/tablet/frames/animal/shidiao",
		"ui/tablet/frames/animal/shuilu",
		"ui/tablet/frames/animal/xuebao",
		"ui/tablet/frames/animal/yezhu",
		"ui/tablet/frames/animal/zangqiuhou",
		"ui/tablet/frames/animal/zhuhuan",	
		];
	

	var initAnimalButtons = function(regionImageView, gw_mainWindow)
	{
		gb_groupButton = new Array();
 		for (var i =0; i< gb_groupButtonNum; i++)
 		{
 			var AniTop = l_buttonTop + (i%g_animalPerColumn)*(l_buttonHeight+l_buttondistance);
 			var AniLeft = l_buttonleft + parseInt(i/g_animalPerColumn)*l_buttonscape;
 			gb_groupButton[i] =  Ti.UI.createButton({
			//backgroundColor:'red',
			backgroundImage:g_buttonImages[i][1],
			//title:g_buttonTitles[i],
			top: AniTop,
			height: l_buttonHeight,
			width:l_buttonwidth,
			left: AniLeft,
			//boaderRadius: 40,
			//boaderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//borderWidth: 3,
			//borderColor:'red',
			opacity:0,
			zIndex:i,		
			font:{fontSize:20, fontFamily:g_fontFamily},
			});	
			
			gb_groupButton[i].addEventListener('click', function(e){
  				var AnimalView = require('ui/tablet/section_IV/AnimalShow');
 				var Animal = new AnimalView(AnimalImagesDirectory[e.source.zIndex],gw_mainWindow, regionImageView);
  				
  	
  				gw_mainWindow.add(Animal[0]);
  				gw_mainWindow.add(Animal[1]);

  				
 			});	
			regionImageView.add(gb_groupButton[i]);
		}
	}


function animalButtonControl(regionImageView, gw_mainWindow) {		
	//Create animal control button
	gb_groupButtonControl = Ti.UI.createButton({
			backgroundImage: g_controlButtonURL ,
			top: 10,
			height: 90,
			width:150,
			left:260,
			opacity:1,
			zIndex:l_buttonzIndex,
		});	
			
		initAnimalButtons(regionImageView, gw_mainWindow);
	
 		
 	gb_groupButtonControl.addEventListener('click', function(e){
 		buttonAnimate(e.source);
 		//animal button on/off
 		if((gb_groupButton.length>0) && (gb_groupButton[0].getOpacity() != 0))
 		{	
 			
 			for (var i = 0; i < gb_groupButtonNum; i++)
 			{
 				buttonDisppear(true, gb_groupButton[i]);	
 			} 
 			
 			//change to default image
 			regionImageView.backgroundImage = g_backgroundViewOldURL;	
 			//show all camera buttons
 			cameraButtonDisppear(true);
 			//show video control button
  			//show video control button
 			var VideoButtonControl = require('ui/tablet/button_control/videoButtonControl');
			var videoControlButtonShow = VideoButtonControl.videoControlButtonShow; 
			videoControlButtonShow(0);
 				//regionImageView.opacity	= 1; 						
 		}
 		else
 		{
 			 //hide all camera buttons
 			cameraButtonDisppear(false);
 			
 			//hide video control button
 			var VideoButtonControl = require('ui/tablet/button_control/videoButtonControl');
			var videoControlButtonShow = VideoButtonControl.videoControlButtonShow; 
			videoControlButtonShow(1);
 			//change the background image to another picture
 			regionImageView.backgroundImage = g_backgroundViewNewURL;
 			//regionImageView.opacity	= 0.3; 
 			for (var i = 0; i < gb_groupButtonNum; i++)
 			{
 				buttonDisppear(false, gb_groupButton[i]);	
 			}  						
 		} 		
 	});
 
	return gb_groupButtonControl;
	
}
 	
 	//animal control button on/off 	
	var animalControlButtonShow = function(show) 	
	{	
 		buttonDisppear(show, gb_groupButtonControl);
 	}
 		
//make constructor function the public component interface

module.exports.animalButtonControl = animalButtonControl;
module.exports.animalControlButtonShow = animalControlButtonShow;
