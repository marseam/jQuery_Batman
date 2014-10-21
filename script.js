// Call Tool Tips plugin to display tool tips
  $(function() {
    $( document ).tooltip();
  });

//navigation between tabs - CSS changes when tab is clicked ie. background transparent
jQuery(document).ready(function() 
{
    jQuery('.tabs .tab-links a').on('click', function(e)  
	{
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400); //Animation when you click on the tabs
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();//This means that clicked anchors will not take the browser to a new URL
		});
    });
 
 //Toggle Class of tab1 Content to blue style
 $(document).ready(function(){
  $("#button1").click(function(){
    $("#tab1").toggleClass("blue");
  });
  //Hides the content of the paragraph
  $("#hide").click(function(){
    $("p").hide();
  });
  //Brings the content back
  $("#show").click(function(){
    $("p,#batman").show();
	});
	//Fades out the batman image
	$( "#fade" ).click(function() {
  $( "#batman" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});
});
 
 //Show the accordion ie. drop down of text
$(document).ready(function(){
  $(function() {
    $( "#accordion" ).accordion();
	 heightStyle: "content"
    });
});
   
 //Add the villians to jail
$(document).ready(function () {  //When the document is ready call the function
    $(document).on('click', '.block-add', function () { //On click 
        var a = $(this); //a is = to the Dom image you have clicked 
		a.hide();//Hides a with the jQuery hide Function
        var src = a.find('img:first').attr('src');//Find the First image with the src
        var elem = $('<div class="container"><img src="' + src + '" class="blocks" /></div>');//elem is equal to the images in container with the class blocks
        $('.block').append(elem);// add the Image to the block
        elem.draggable();//make the images draggable with jQuery UI
        elem.find('.blocks:first').resizable();//Make the images resizeable with jQuery UI
        return false;// Don't return the Villians		
    });
});
 
 //Load the Flex Slider Plugin
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide" //Slide animation 
  }); 
});
 
  //For moving Batman with the keyboard
  $(document).ready(function() {
    $(document).keydown(function(e) {

  var position = $("#player").position();// get the players position
		 switch (e.keyCode)
		 {
		 case 65:
		 $("#player").css('left', position.left - 20 + 'px'); //move batman left (a)
		 break;
		 case 87:
		 $("#player").css('top', position.top - 20 + 'px');//move batman up (w)
		 break;
		 case 68:
		 $("#player").css('left', position.left + 20 + 'px');//move batman right (d)
		 break;
		 case 83:
		 $("#player").css('top', position.top + 20 + 'px');//move batman down (s)
		 }
		 });
	});
	  
      function showOverlap(event,ui)
      {
	      $(".overlap").remove();
        var overlap = $("#player").collision( ".obstacle", { as: "<div/>" } );// Was Planning on adding obstacles here to navigate around but did not have time
        overlap.addClass("overlap").appendTo("body");
        var breakable = $("#player").collision( ".breakable" ); // When Batman and Joker collide - remove Joker
		breakable.remove();
      }
	  	  
	  //Make images draggable
      $(function() {
            $( ".draggable" ).each(function(){$(this).draggable({ containment: "#board" });});//Contains the draggable images to the board drawn
            $( ".draggable" ).each(function(){$(this).bind("dragstart",showOverlap);})
            $( ".draggable" ).each(function(){$(this).bind("dragstop", showOverlap);})
            $( ".draggable" ).each(function(){$(this).bind("drag",     showOverlap);})
      });
     