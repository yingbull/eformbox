<!---------------------- RESIZE WINDOW ON OPENING ------------------------------------>
<!--		top.window.moveTo(0,0);
<!--		if (document.all)
<!--		{
<!--			top.window.resizeTo(screen.availWidth,screen.availHeight);
<!--		}
<!--		else if (document.layers||document.getElementById)
<!--		{
<!--		if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth)
<!--		{
<!--		 top.window.outerHeight = screen.availHeight; <!-- opens fullscreen-->
<!--		 top.window.outerWidth = screen.availWidth; --->
<!--		top.window.outerHeight = 1200; 
<!--		top.window.outerWidth = 1000;  <!-- opens 1000px wide-->
<!--		}
<!--		}
<!---------------------- END: resize window on opening ------------------------------->


<!-- -----------FLOATING BOX SCRIPT ------------------------------------------------------- 
/***********************************************
* Floating Top Bar script- u00A9 Dynamic Drive (www.dynamicdrive.com)
* Sliding routine by Roy Whittle (http://www.javascript-fx.com/)
* This notice must stay intact for legal use.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/-->
var persistclose=0 		//set to 0 or 1. 1 means once the bar is manually closed, it will remain closed for browser session
var startX = 760 		//set x offset of topbar in pixels
var startY = 45			//set y offset of topbar in pixels
var verticalpos="fromtop" 	//enter "fromtop" or "frombottom"

function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}
function get_cookie(Name) {
	var search = Name + "="
	var returnvalue = "";
	if (document.cookie.length > 0) {
	offset = document.cookie.indexOf(search)
	if (offset != -1) {
	offset += search.length
	end = document.cookie.indexOf(";", offset);
	if (end == -1) end = document.cookie.length;
	returnvalue=unescape(document.cookie.substring(offset, end))
			}
		}
	return returnvalue;
	}
function closebar(){
	if (persistclose)
	document.cookie="remainclosed=1"
	document.getElementById("topbar").style.visibility="hidden"
	document.getElementById("topbar").style.display="none"	//so the close box does not take up printed pageu0092s space
	}
function staticbar(){
	barheight=document.getElementById("topbar").offsetHeight
	var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
	var d = document;
  function ml(id){
	var el=d.getElementById(id);
	if (!persistclose || persistclose && get_cookie("remainclosed")=="")
		el.style.visibility="visible"
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x+"px";this.style.top=y+"px";};
		el.x = startX;
		if (verticalpos=="fromtop")
			el.y = startY;
		else{
			el.y = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;
			el.y -= startY;
			}
		return el;
	}
	window.stayTopLeft=function(){
		if (verticalpos=="fromtop"){
			var pY = ns ? pageYOffset : iecompattest().scrollTop;
			ftlObj.y += (pY + startY - ftlObj.y)/8;
			}
		else{
			var pY = ns ? pageYOffset + innerHeight - barheight: iecompattest().scrollTop + iecompattest().clientHeight - barheight;
			ftlObj.y += (pY - startY - ftlObj.y)/8;
			}
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("stayTopLeft()", 10);
	}
	ftlObj = ml("topbar");
	stayTopLeft();
}

if (window.addEventListener)
	window.addEventListener("load", staticbar, false)
	else if (window.attachEvent)
		window.attachEvent("onload", staticbar)
	else if (document.getElementById)
		window.onload=staticbar
function show(x){
	document.getElementById(x).style.display = 'block';
	}
function hide(x){
	document.getElementById(x).style.display = 'none';
	}
function formPrint(){
			window.print();
	} 
;
<!-------------END: floating box script----------------------------------------------->


