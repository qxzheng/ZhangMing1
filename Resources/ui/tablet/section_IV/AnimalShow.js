//Application Window Component Constructor
function AnimalShow(imageDirectory,mainWindow, regionImageView) {
	var g_fontFamily = 'FZCYSK--GBK1-0';
	//var groupButton = new Array();
	var scrollGroupView = new Array();
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
	
 		
	var my_dir = Titanium.Filesystem.getFile(imageDirectory);
 
	var files = my_dir.getDirectoryListing().toString();
 
	var files_array = Array();
	files_array = files.split(',');
 
	var num_of_files = files_array.length
	//alert("---File Number---" + num_of_files);
	
 	for (var i = 0; i < num_of_files; i++)
 	{
 		scrollGroupView[i] = Ti.UI.createScrollView({
	    width: '100%', 
	    height: '100%',
	    contentWidth: 'auto',
	    contentHeight: 'auto',
	    backgroundColor:'white',
	    top:0,
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
	    maxZoomScale: 4.0,
	    minZoomScale: 1.0,
	    zoolScale:1.0,
	    oldScale:1.0,
		});
		// create an imageview and set it to the width and height of your images
	    groupView[i] = Ti.UI.createImageView({
		image: imageDirectory + '/' + files_array[i],
    	top: 0, right: 0,
    	width:'100%',
    	height:'100%'  
		});	
		scrollGroupView[i].add(groupView[i]);	
	}
 
  		
	var scrollable = Titanium.UI.createScrollableView({
    	  showPagingControl: false,
	});


 	for (var i = 0; i < num_of_files; i++)
 	{	
	  	scrollable.addView(scrollGroupView[i]);
	}
	//buttonAndView[0] = returnButton;
	//mainWindow.add(returnButton);
	//for (var i =0; i< pageCout; i++)
 	{	
 			
	  	returnButton.addEventListener('click', function(e){
	  		mainWindow.remove(scrollable);
	  		mainWindow.remove(e.source);
	  		
	  		
	
			scrollable = null;  
			e.source = null;	
		
							
 		});
	}
	/*
	scrollable.addEventListener('scroll',function(e){
		pageIndex = e.source.currentPage;		
	});
	*/
	/*
	scrollable.addEventListener('scrollend',function(e){
		var currentPage = e.source.currentPage;
		if (pageIndex != currentPage)
		{
			Ti.API.info("houseShow update ", pageIndex);
			/*	
			groupButton[(currentPage + 1 + pageCout) % pageCout].setImage(buttonImageURL[0]);
			groupButton[(currentPage - 1 + pageCout) % pageCout].setImage(buttonImageURL[0]);
			groupView[(currentPage + 1 + pageCout) % pageCout].setImage('ui/tablet/frames/house-show/2DHuXing.png');
			groupView[(currentPage - 1 + pageCout) % pageCout].setImage('ui/tablet/frames/house-show/2DHuXing.png');
			
			groupButton[pageIndex].setImage(buttonImageURL[0]);
			groupView[pageIndex].setImage('ui/tablet/frames/house-show/2DHuXing.png');
			pageIndex = currentPage;	
		}
		
	});
	*/
	//returnButton[1] = scrollable;
	return [scrollable, returnButton];
}

//make constructor function the public component interface
module.exports = AnimalShow;
