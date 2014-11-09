//Application Window Component Constructor
function houseShow() {
	var g_fontFamily = 'FZCYSK--GBK1-0';
	var groupButton = new Array();
	var groupView = new Array();
	var pageIndex = 0;
	var pageCout = 3;
	//var houseTitle = ['3D户型1', '3D户型2', '3D户型3', '3D户型4', '3D户型5', '3D户型6'];
	var buttonImageURL = ['ui/tablet/button_images/360_Room_layout.png', 'ui/tablet/button_images/flat_room.png'];
	
 	for (var i = 0; i< pageCout; i++)
 	{
 			//Create a group of buttons
			groupButton[i] = Ti.UI.createButton({
			//backgroundColor:'yellow',
			//backgroundImage:	,
			//title:houseTitle[i],
			//image:'ui/tablet/button_images/360_Room_layout.png',
			//image:buttonImageURL[0],
			backgroundImage:buttonImageURL[0],
			top: 70,
			height: 30,
			width:100,
			right:100,
			opacity:1,
			zIndex:100+1,
			my_id:i,
		}); 			
 	}
 		
	
 	for (var i =0; i< pageCout; i++)
 	{
	// create an imageview and set it to the width and height of your images
	    groupView[i] = Ti.UI.createImageView({
		image: 'ui/tablet/frames/house-show/2DHuXing.png',
    	top: 0, right: 0,
    	//width:'100%',
    	//height:'100%'  
		});
		groupButton[i].setImage(buttonImageURL[0]);	
		groupView[i].add(groupButton[i]);
	}
 	for (var i =0; i< pageCout; i++)
 	{	
 			
	  	groupButton[i].addEventListener('click', function(e){
	  	var i = e.source.my_id;
	  	Ti.API.info(groupButton[i].getImage());
	  	if (groupButton[i].getImage() == buttonImageURL[0])
	  	{	  
	  		groupButton[i].setImage(buttonImageURL[1]);		
	  		groupView[i].setImage('ui/tablet/frames/house-show/3DHuXing.png');	
	  		//groupButton[i].setBackgroudImage(buttonImageURL[1]);
	  		
	  	}
	  	else
	  	{	 
	  		groupButton[i].setImage(buttonImageURL[0]); 		
	  		groupView[i].setImage('ui/tablet/frames/house-show/2DHuXing.png');
	  		//groupButton[i].setBackgroudImage(buttonImageURL[0]);
	  		
	  	}
	  	
  		
 	});
	}
  		
var scrollable = Titanium.UI.createScrollableView({
      showPagingControl: false,
});

 	for (var i =0; i< pageCout; i++)
 	{	
	  	scrollable.addView(groupView[i]);
	}
	/*
	scrollable.addEventListener('scroll',function(e){
		pageIndex = e.source.currentPage;		
	});
	*/
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
			*/
			groupButton[pageIndex].setImage(buttonImageURL[0]);
			groupView[pageIndex].setImage('ui/tablet/frames/house-show/2DHuXing.png');
			pageIndex = currentPage;	
		}
		
	});
	return scrollable;
}

//make constructor function the public component interface
module.exports = houseShow;