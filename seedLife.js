//called when everything is loaded
if (document.addEventListener) {                
// For all major browsers, except IE 8 and earlier
    document.addEventListener("DOMContentLoaded", allLoaded);
} else if (document.attachEvent) {              
// For IE 8 and earlier versions
    document.attachEvent("onreadystatechange", allLoaded);
}

function allLoaded(event) {
//console.log("DOM fully loaded and parsed");

 	var topPic = document.getElementById("top");
 	topPic.addEventListener("mouseover", function(){
	 	topPic.style.opacity=1;
 	})
	  	topPic.addEventListener("mouseout", function(){
	 	topPic.style.opacity=.5;
 	})
	  	topPic.addEventListener("touchstart", function(){
	 	topPic.style.opacity=1;
 	})
	  	topPic.addEventListener("touchend", function(){
	 	topPic.style.opacity=.5;
 	})
	 
	//hamburger stuff
var hamburger = document.getElementById("burger"),
	menu = document.querySelector("nav");
//console.log(menu);
 //console.log(hamburger);

hamburger.addEventListener("click",function(e){ 
  if (menu.style.height==="0px"|| menu.style.height===""){
    menu.style.height="200px";
    hamburger.style.transform="rotate(90deg)";
  }else{
    menu.style.height="0px"; 
    hamburger.style.transform="rotate(0deg)";
  }
});
}
 
	 
	

