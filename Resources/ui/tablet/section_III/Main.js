//Application Window Component Constructor
var SectionThreeMain = function (parameters) {
	//Private attributes definition:
	var _this = this;
	
	//public attributes
	this.li_entrance = null;
	this.li_hall = null;
	this.li_roomLayout = null;
	this.li_garden360View = null;
	this.li_club360View = null;	
	this.l_ifSwitchInProgress = false;
	
	this.mainWindow = parameters.mainWindow;
	this.apiName = 'SectionThreeMain';
	

	///////////////////////////////////////////////////////////////////////////////Switch from Entrance to Hall
 	var lb_switchfromEntrance2Hall = null;
 	var lf_switchfromEntrance2Hall = function()
	{
		_this.l_ifSwitchInProgress = true;
		
  		var l_2dMatrix = Ti.UI.create2DMatrix();
  		l_2dMatrix = l_2dMatrix.scale(1.2, 1.2);
  		var l_animation = Ti.UI.createAnimation();
  		l_animation.transform = l_2dMatrix;
  		l_animation.autoreverse = true;
  		l_animation.repeat = 1;
  		l_animation.duration = 1000;
  		lb_switchfromEntrance2Hall.animate(l_animation, function(){
			lb_switchfromEntrance2Hall.removeEventListener('click',lf_switchfromEntrance2Hall);
			_this.li_entrance.imageView.remove(lb_switchfromEntrance2Hall);
			lb_switchfromEntrance2Hall = null;
					
	   		var l_hall = require('ui/tablet/section_III/Hall');
	 		_this.li_hall = new l_hall(switchfromHall2Roomlayout);
	    	
			_this.mainWindow.add(_this.li_hall.imageView); 	
			
			_this.l_ifSwitchInProgress = false;
  		});
	};

  	var switchfromEntrance2HallCallback = function(distance2LastPage)
 	{
 		if (_this.l_ifSwitchInProgress === false)
 		{
	 		if ((distance2LastPage <= 3)&&(lb_switchfromEntrance2Hall === null))
	 		{
	 	 		lb_switchfromEntrance2Hall = Ti.UI.createButton({
		 			top: 350,
					left: 700,
					width: 100,
					height: 37,
					backgroundImage:'ui/tablet/button_images/Enter_hall.png',
					zIndex:100
		 		});
	
		 		lb_switchfromEntrance2Hall.addEventListener('click', lf_switchfromEntrance2Hall);
		 		
		 		_this.li_entrance.imageView.add(lb_switchfromEntrance2Hall);	
	 		}
	 		else if (distance2LastPage > 3)
	 		{
	 			if (lb_switchfromEntrance2Hall != null)
	 			{
	 				lb_switchfromEntrance2Hall.removeEventListener('click',lf_switchfromEntrance2Hall);
	 				_this.li_entrance.imageView.remove(lb_switchfromEntrance2Hall);
	 				lb_switchfromEntrance2Hall = null;	
	 			}
	 		}
 		}
 	};
 	
 	
 	
 	
	///////////////////////////////////////////////////////////////////////////////Switch from Hall to 360 Room layout
 	var lb_switchfromHall2Roomlayout = null;
 	var lf_switchfromHall2Roomlayout = function()
	{
		_this.l_ifSwitchInProgress = true;
				
  		var l_2dMatrix = Ti.UI.create2DMatrix();
  		l_2dMatrix = l_2dMatrix.scale(1.2, 1.2);
  		var l_animation = Ti.UI.createAnimation();
  		l_animation.transform = l_2dMatrix;
  		l_animation.autoreverse = true;
  		l_animation.repeat = 1;
  		l_animation.duration = 1000;
  		lb_switchfromHall2Roomlayout.animate(l_animation,function(){
  			
 			lb_switchfromHall2Roomlayout.removeEventListener('click',lf_switchfromHall2Roomlayout);
			_this.li_hall.imageView.remove(lb_switchfromHall2Roomlayout);
			lb_switchfromHall2Roomlayout = null;	
	 						
	  		//construct WebView
			_this.li_roomLayout = Titanium.UI.createWebView({
				url:'/Panos/Apartment/tour.html',
			}); 
		
	  		_this.mainWindow.add(_this.li_roomLayout); 		
	  		_this.l_ifSwitchInProgress = false;
  		});
	};

  	var switchfromHall2Roomlayout = function(distance2LastPage)
 	{
 		if (_this.l_ifSwitchInProgress === false)
 		{
	 		if ((distance2LastPage <= 3)&&(lb_switchfromHall2Roomlayout === null))
	 		{
	 	 		lb_switchfromHall2Roomlayout = Ti.UI.createButton({
		 			top: 350,
					left: 600,
					width: 100,
					height: 35,
					backgroundImage:'ui/tablet/button_images/360_Room_layout.png',
					zIndex:100
		 		});
	
		 		lb_switchfromHall2Roomlayout.addEventListener('click', lf_switchfromHall2Roomlayout);
		 		
		 		_this.li_hall.imageView.add(lb_switchfromHall2Roomlayout);	
	 		}
	 		else if (distance2LastPage > 3)
	 		{
	 			if (lb_switchfromHall2Roomlayout != null)
	 			{
	 				lb_switchfromHall2Roomlayout.removeEventListener('click',lf_switchfromHall2Roomlayout);
	 				_this.li_hall.imageView.remove(lb_switchfromHall2Roomlayout);
	 				lb_switchfromHall2Roomlayout = null;	
	 			}
	 		}
 		}
 	}; 	
 	
	//construct WebView
	this.li_garden360View = Titanium.UI.createWebView({
		url:'/Panos/Garden/360_yuanlin__cube_cube_sphere.html',
	}); 
	
	var lb_club360 = Ti.UI.createButton({
			backgroundImage: "ui/tablet/button_images/club360.png",
			top: 50,
			right:150,
			height: 37,
			width:100
			//zIndex:100+1,
	});	
	
	lb_club360.addEventListener('click', function(){
	  		//construct WebView
			_this.li_club360View = Titanium.UI.createWebView({
				url:'/Panos/Club/tour.html',
			}); 
		
	  		_this.mainWindow.add(_this.li_club360View); 		
	});
	
	var lb_entrance = Ti.UI.createButton({
			backgroundImage: "ui/tablet/button_images/Enter_hall.png",
			top: 110,
			right:150,
			height: 37,
			width:100
			//zIndex:100+1,
	});	
	
	lb_entrance.addEventListener('click', function(){
		var l_entrance = require('ui/tablet/section_III/Entrance');
		_this.li_entrance = new l_entrance(switchfromEntrance2HallCallback);
		
		_this.mainWindow.add(_this.li_entrance.imageView); 
	});
	
	this.li_garden360View.add(lb_club360);
	this.li_garden360View.add(lb_entrance);	
		
	this.mainWindow.add(this.li_garden360View);
	//return _this;
};


SectionThreeMain.prototype.close = function() 
{
	if(this.li_club360View != null)
	{
		this.mainWindow.remove(this.li_club360View); 
		this.li_club360View = null;		
	}

	if(this.li_roomLayout != null)
	{
		this.mainWindow.remove(this.li_roomLayout); 
		this.li_roomLayout = null;		
	}

	if(this.li_hall != null)
	{
		this.mainWindow.remove(this.li_hall.imageView); 
		this.li_hall.close();
		this.li_hall = null;
	}	
		
	if(this.li_entrance != null)
	{
		this.mainWindow.remove(this.li_entrance.imageView); 
		this.li_entrance.close();
		this.li_entrance = null;
	}
		
	if(this.li_garden360View !=null)
	{
		this.mainWindow.remove(this.li_garden360View); 
		this.li_garden360View = null;
	}
};

SectionThreeMain.prototype.getApiName = function() 
{
	return this.apiName;
};
//make constructor function the public component interface
module.exports = SectionThreeMain;
