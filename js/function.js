progress = function(id, settings){
id = '#'+id;

var optionalSettings = {
	value:'0',
	duration:'500',
	text:false,
	errors:false,
	goBack:false,
	};
settings = jQuery.extend({},optionalSettings,settings);
//Defining settings which are going to be used.
var value = settings['value'];
var duration = settings['duration'];
var text = settings['text'];
var errors = settings['errors'];
var goBack = settings['goBack'];

var trueWidth = $(id).width()
var parentWidth = $(id).offsetParent().width();
var percWidth = 100*trueWidth/parentWidth;
 
if (goBack === false){ //If we are not allowing go back
	if(value < percWidth){ //Check if width is smaller than current width
		if(errors === true){
			console.log('Cannot go back due to goBack setting.');	//Log if errors are set
			console.log('Set width: '+value+' Current width: '+percWidth);
		}
		var handle = false;
	} else var handle = true;
} else var handle = true;

if(handle === true){
$(id).animate(
{
	width:value+'%'}, 
{
	duration:duration,
	step:function(current){
		if(text === true){
		$(id).text(Math.round(current)+'%');//Show progress of current bar
		}
	} 
 });
}
 
}
