jquery_progressBar v1.0
==================

A flexible CSS and jQuery progress bar which allows you to make and customise your own progress bars with ease.
It works with mobile phones too.

WHAT COMES WITH THE PACK
========================
/js/
  -jQuery/
    -jquery.js/ /*Included jQuery 1.11.1 You can, of course, use any jQuery but we suggest this or higher.*/
    
  -function.js/ /*The function itself */
  
/index.html /*Examples and possibilites of the progress bar*/  

HOW TO INSTALL
==============

Inside your head tags include jQuery

  <script src="js/jquery/jquery.js" type="text/javascript"></script>
  
AFTER you have included jQuery, include the function.js file
  
  <script src="js/function.js" type="text/javascript"></script>
  
You are now ready to work.

HOW IT WORKS
============
It stretches an element you've defined from 0 to 100% of it's parent element depending on the value you've set.
Percentage is used for maximum flexibility.

Syntax
------------
progress(id, settings)

id- the id of your element, for example 'p_pr';
settings- objects you can define, if you don't the default will be used.

settings = {
	value:'0', //The percentage of your progress
	duration:'500', //How long it takes to reach the goal percentage in ms(millisecond).
	text:false,//True if you want to display text and progress as well.
	errors:false, //True if you want to log errors in the console.
	goBack:false, //True if you want to disable progress drop (Ex. if you want to go from 100% to 50%).
} THESE VALUES ARE DEFAULT

HOW TO USE
==========
This is completely up to you, this is how I've done it, and I will explain how it works.

Set two divs
  <div id='p_bg'> //This div is the background div, which shows the uncompleted part of the progress.
  <div id='p_pr'></div> //This div is the progress div, which shows the progress itself.
  </div>
  
Calling the function:
  <script>
  //Some action, for ex. a button click
    progress(id,settings);
  </script>
  
============================
CREATED BY spykesz
github.com/spykesz/
