 	
 	
 	var buttonAnimate = function(myview)
  	{
	  	var l_2dMatrix = Ti.UI.create2DMatrix();
	  	l_2dMatrix = l_2dMatrix.scale(1.2, 1.2);
	  	var l_animation = Ti.UI.createAnimation();
	  	l_animation.transform = l_2dMatrix;
	  	l_animation.autoreverse = true;
	  	l_animation.repeat = 1;
	  	l_animation.duration = 500;
	  	myview.animate(l_animation, function(){			
				
	  	}); 	
	  	l_2dMatrix = null;	
	  	l_animation = null;
  	}

  	var buttonDisppear = function(dissappear,button)
  	{
  		if (dissappear == true)
  		{
  			button.opacity = 0;
  		}
  		else
  		{
  			button.opacity = 1;
  		}
  	}
  	
 
//make constructor function the public component interface
module.exports.buttonAnimate = buttonAnimate;
module.exports.buttonDisppear = buttonDisppear;

