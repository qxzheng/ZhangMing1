//Application Window Component Constructor
function RegionImageView() {
	var stage = 0;
	
	var image = Ti.UI.createImageView({
    backgroundImage:"ui/tablet/Animal_Image/background.png",
    top: 0, left: 0,
    width:'100%',
    height:'100%'    
	});
	/*
	var image1 = Ti.UI.createImageView({
    backgroundImage:"ui/tablet/frames/RegionPics/QuWeiGuiHua_introduction.png",
    top: '10%', left: '10%',
    width:'80%',
    height:'80%'    
	});
	
	var image2 = Ti.UI.createImageView({
    backgroundImage:"ui/tablet/frames/RegionPics/QuWeiGuiHua_guihuatu.png",
    top: '0%', left: '0%',
    width:'100%',
    height:'100%'    
	});
	
	image.add(image1);
	image.add(image2);
	image1.hide();
	image2.hide();
	
	//Create navigation button
	var navBtn = Ti.UI.createButton({
			//backgroundColor:'blue',
			backgroundImage: "ui/tablet/button_images/planning.png",
			top: 50,
			right:150,
			height: 80,
			width:80,
			opacity:1,
			zIndex:100+1,
		});
			
	navBtn.addEventListener('click', function(){
  		if(stage == 0)
  		{
  			image1.show();
			image2.hide();
  			stage = 1;
  		}
  		else if(stage == 1)
  		{
  			image1.hide();
			image2.show();
			navBtn.setImage("ui/tablet/button_images/return_button.png");
  			stage = 2;
  		}
  		else
  		{
  			image1.hide();
			image2.hide();
			navBtn.setImage("ui/tablet/button_images/planning.png");
  			stage = 0;
  		}
 	});
 	
 	image.add(navBtn);	
	*/	
	return image;
}

//make constructor function the public component interface
module.exports = RegionImageView;
