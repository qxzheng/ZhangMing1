/* usage:
* var player = require('FrameAnimationPlayer'), var player = new player.FrameAnimationPlayer(viewToOpen,openProperties);
*/

var FrameAnimationPlayer = function(viewToOpen,openProperties) 
{
	//Private attributes definition:
	var _this = this;
	
 	//Private member functions
	var pad = function(num, size)
	{
		var s = "0000" + num;
		return s.substr(s.length-size);  	
	};
	 	
	var touchstartHandler = function(e)
	{
		if(_this.opDirection === 'vertical')
		{
			_this.originCoorindates = e.y;
		}
		else
		{
			_this.originCoorindates = e.x;
		}
	};

	var touchendHandler = function(e)
	{
	};

	var touchmoveHandler = function(e)
	{
		var imageIndex;
	 	var totalImageNumber = (_this.frameEndIndex-_this.frameStartIndex);
	 	
	 	if(_this.opDirection === 'vertical')
	 	{
	 		_this.totalDistance += (_this.originCoorindates-e.y);
	 		_this.originCoorindates = e.y;
	 	}
	 	else
	 	{
	 		_this.totalDistance += (_this.originCoorindates-e.x);
	 		_this.originCoorindates = e.x;
	 	}
	 	
		if (_this.totalDistance > (totalImageNumber*_this.dipPerFrame))
		{
			if(_this.autoCycle == false)
	 		{
				_this.totalDistance = (totalImageNumber*_this.dipPerFrame);
			}
			else
			{
				// Note: suppose _this.totalDistance must be between (totalImageNumber*_this.dipPerFrame, totalImageNumber*_this.dipPerFrame*2)
				_this.totalDistance -= (totalImageNumber*_this.dipPerFrame);
			}
		}
	 	else if (_this.totalDistance < 0)
	 	{
			if(_this.autoCycle == false)
			{
				_this.totalDistance = 0;
			}
			else
			{
				// Note: suppose _this.totalDistance must be between (-totalImageNumber*_this.dipPerFrame, 0)
				_this.totalDistance += (totalImageNumber*_this.dipPerFrame);
			}
		}

		imageIndex = Math.floor((_this.totalDistance)/(_this.dipPerFrame));	
		
		//Ti.API.info(_this.frameImageNamePrefix + pad(imageIndex,5) +'.png');		
		_this.imageView.image = _this.frameImageNamePrefix + pad(imageIndex,5) +'.png';	
		if(_this.pageSwitchCallback != null)
		{
			_this.pageSwitchCallback(_this.frameEndIndex-imageIndex);
		}
	};	
	
	//Public attributes definition;
    this.imageView = viewToOpen;
    this.frameImageNamePrefix = openProperties.frameImageNamePrefix; 
    this.frameStartIndex = openProperties.frameStartIndex-0;//To make sure it is an integer
    this.frameEndIndex = openProperties.frameEndIndex-0;
    this.dipPerFrame = openProperties.dipPerFrame-0;
    this.opDirection = openProperties.opDirection; //This is used to store in vertical direction or horizental direction frames will be flushed to screen
 	this.autoCycle = openProperties.autoCycle;
   //this.os = Ti.Platform.osname; //So far we only support Ipad
	this.originCoorindates = 0;
	this.totalDistance = 0;	
	this.pageSwitchCallback = openProperties.pageSwitchCallback;
	this.apiName = 'FrameAnimationPlayer';
	
	//Ti.API.info(this.buttonNumber);

 	this.imageView.addEventListener('touchstart', 	function(e){touchstartHandler(e);e.cancelBubble = true;}); //e.cancelBubble = true; is used to optimize performance
 	//this.imageView.addEventListener('touchend', 	function(e){touchendHandler(e);e.cancelBubble = true;});
 	this.imageView.addEventListener('touchmove', 	function(e){touchmoveHandler(e);e.cancelBubble = true;});		 
};
 

FrameAnimationPlayer.prototype.close = function() 
{
 	//_this.imageView.removeEventListener('touchstart', 	touchstartHandling);
 	//this.imageView.addEventListener('touchend', 		function(e){touchendHandler(e,this);e.cancelBubble = true;});
 	//_this.imageView.removeEventListener('touchmove', 	touchmoveHandling);	
 		
    this.imageView = null;
    this.frameImageNamePrefix = null;
    this.frameStartIndex = null;
    this.frameEndIndex = null;
    this.dipPerFrame = null;
    this.opDirection = null; 
	this.originCoorindates = null;
	this.totalDistance = null;		
};

FrameAnimationPlayer.prototype.getApiName = function() 
{
	return this.apiName;
};
	
exports.FrameAnimationPlayer = FrameAnimationPlayer;
