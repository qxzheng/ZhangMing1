	//Global configuration
	var l_buttonTop = 120;
	var l_buttonHeight = 80;
	var l_buttonwidth = 80;
	var l_buttonzIndex = 100;
	var l_buttondistance = 30;
	var l_buttonscape = l_buttonHeight + 30;
	var l_buttonleft = 30;
	var l_buttonFadingTime = 100;
	var g_fontFamily = 'FZCYSK--GBK1-0';
		//import functions
		var commonButtonControl = require('ui/tablet/button_control/commonButtonControl');
		var buttonDisppear = commonButtonControl.buttonDisppear;
	//camera button parameters
	var g_cameraURL = 'ui/tablet/Animal_Image/camera.png';
	var g_cameraNumber = 8;
	var gb_CameragroupButton =new Array(); 
	
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
	
//Application Window Component Constructor
function cameraButtonControl(regionImageView, gw_mainWindow) {


 	var initCameraButtons = function()
	{
		
 		for (var i =0; i< g_cameraNumber; i++)
 		{
 			
 			gb_CameragroupButton[i] =  Ti.UI.createButton({
			//backgroundColor:'red',
			backgroundImage:g_cameraURL	,
			//title:g_buttonTitles[i],
			//top: l_buttonTop + i*(l_buttonHeight+l_buttondistance),
			height: l_buttonHeight - 20,
			width:l_buttonwidth - 20,
			//left:l_buttonleft,
			opacity:1,
			zIndex:i,		
			font:{fontSize:20, fontFamily:g_fontFamily},
			});	
			gb_CameragroupButton[i].addEventListener('click', function(e){ 				
  				
  				var AnimalView = require('ui/tablet/section_IV/AnimalShow');
 				var Animal = new AnimalView(AnimalImagesDirectory[e.source.zIndex],gw_mainWindow, regionImageView);
  				//gw_mainWindow.remove(regionImageView);
				gw_mainWindow.add(Animal[0]);
  				gw_mainWindow.add(Animal[1]);
  			

  				//postOpenView(regionImageView);
 			});	
 	
			//gw_mainWindow.add(gb_CameragroupButton[i]);
		}
		//set the position of camera image;
 		gb_CameragroupButton[0].left = '15%';
 		gb_CameragroupButton[0].top = '40%';
 	
 		gb_CameragroupButton[1].left = '30%';
 		gb_CameragroupButton[1].top = '30%';
 
 		gb_CameragroupButton[2].left = '60%';
 		gb_CameragroupButton[2].top = '45%';
 
 		gb_CameragroupButton[3].left = '70%';	
 		gb_CameragroupButton[3].top = '70%';
 		
 		//set the position of camera image;
 		gb_CameragroupButton[4].left = '85%';
 		gb_CameragroupButton[4].top = '25%';
 	
 		gb_CameragroupButton[5].left = '90%';
 		gb_CameragroupButton[5].top = '90%';
 
 		gb_CameragroupButton[6].left = '90%';
 		gb_CameragroupButton[6].top = '45%';
 
 		gb_CameragroupButton[7].left = '55%';	
 		gb_CameragroupButton[7].top = '70%';		
 	} 
		initCameraButtons();
 		//add cameraButton to the main view
 		for (var i =0; i< g_cameraNumber; i++)
 		{
 			regionImageView.add(gb_CameragroupButton[i]);
 		}	
 		
 		
}

	//Camera buttons on/off
	cameraButtonShow = function(show)
	{
		for (var i = 0; i < g_cameraNumber; i++)
 		{
 			buttonDisppear(!show, gb_CameragroupButton[i]);	
 		}  						
 	} 
 	 		
//make constructor function the public component interface
module.exports.cameraButtonControl = cameraButtonControl;
module.exports.cameraButtonShow = cameraButtonShow;
