//Application Window Component Constructor
function videoShow(videoDirectory,mainWindow, regionImageView) {
	var g_fontFamily = 'FZCYSK--GBK1-0';
	//var groupButton = new Array();
	var videoSequence = 0;
	var groupView = new Array();
	var pageIndex = 0;
	//var buttonAndView = new Array;
	var buttonImageURL = ['ui/tablet/button_images/home.png', 'ui/tablet/button_images/flat_room.png'];
	
 	//for (var i = 0; i< pageCout; i++)
 	{
 			//Create a group of buttons
			var returnButton = Ti.UI.createButton({
			//backgroundColor:'yellow',
			//backgroundImage:	,
			//title:houseTitle[i],
			//image:'ui/tablet/button_images/360_Room_layout.png',
			//image:buttonImageURL[0],
			backgroundImage:buttonImageURL[0],
			top: 20,
			height: 80,
			width:80,
			right:100,
			opacity:0.6,
			zIndex:100+1,
			my_id:100,
		}); 			
 	}	
	
 		
	var my_dir = Titanium.Filesystem.getFile(videoDirectory);
 
	var files = my_dir.getDirectoryListing().toString();
 
	var files_array = Array();
	files_array = files.split(',');
 
	var num_of_files = files_array.length
	//alert("---File Number---" + num_of_files);
	/*
 	for (var i = 0; i < num_of_files; i++)
 	{
		// create an imageview and set it to the width and height of your images
	    groupView[i] = Ti.UI.createImageView({
		image: imageDirectory + '/' + files_array[i],
    	top: 0, right: 0,
    	width:'100%',
    	height:'100%'  
		});		
	}
 	*/
	
	//load component dependencies
	var movieView = Titanium.Media.createVideoPlayer({
		url:videoDirectory + '/' + files_array[0],
		backgroundColor:'#111',
		//mediaControlStyle: Titanium.Media.VIDEO_CONTROL_EMBEDDED, // See TIMOB-2802, which may change this property name
		//mediaControlStyle: Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
		mediaTypes:Titanium.Media.VIDEO_MEDIA_TYPE_VIDEO,
		//scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
		//width:"100%",
		//height:"100%",
		//repeatMode:Titanium.Media.VIDEO_REPEAT_MODE_ONE,
		autoplay:false
	});
	
	movieView.addEventListener('error',function()
	{
		if (videoSequence < (num_of_files - 1))
		{
			videoSequence++;
			movieView.stop();
			movieView.url = videoDirectory + '/' + files_array[videoSequence];
				
			movieView.play();		
		}
		else
		{
			movieView.stop();
			movieView.release();
			mainWindow.remove(returnButton);
			movieView = null;
			returnButton = null;
		}	
	});		
	movieView.addEventListener('complete',function()
	{
		if (videoSequence < (num_of_files - 1))
		{
			videoSequence++;
			movieView.stop();
			movieView.url = videoDirectory + '/' + files_array[videoSequence];
				
			movieView.play();		
		}
		else
		{
			movieView.stop();
			movieView.release();
			mainWindow.remove(returnButton);
			movieView = null;
			returnButton = null;
		}	
	});	
	
	  	returnButton.addEventListener('click', function(e){
	  		
	  		mainWindow.remove(movieView);
	  		mainWindow.remove(e.source);
	  		movieView.stop();
	  		movieView.release();
	
			 
			e.source = null;	
		
							
 		});
	movieView.play();
	//returnButton[1] = scrollable;
	return [movieView, returnButton];
}

//make constructor function the public component interface
module.exports = videoShow;
