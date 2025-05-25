var cnv = document.getElementById("myCanvas"); 
var jg = new jsGraphics(cnv);
var cnvLeft = parseInt(document.getElementById('myCanvas').style.left); 
var cnvTop = parseInt(document.getElementById('myCanvas').style.top);

var pvcnv = document.getElementById("preview");
var pv = new jsGraphics(pvcnv);

var SubmitData = new Array();
var DrawData  = new Array();
var TempData = new Array();


jg.setPrintable(true);
var StrokeColor = "blue";
var StrokeThickness = 3;
var x0 = 0;
var y0 = 0;
var txt = document.getElementById('TextString').value;
var sym = document.getElementById('Symbol').value;
var FontFamily = "sans-serif";		//sets font
var FontStyle = Font.PLAIN;		//Font.PLAIN, Font.BOLD, Font.ITALIC, Font.ITALIC_BOLD


function SetStrokeColor(c){
	StrokeColor = c;
}

var FontSize = 12;
function SetFontSize(n){
	FontSize = n;
} 

var SymbolSize = 12;
function SetSymbolSize(n){
	SymbolSize = n;
}

var MouseDown = false;
function SetMouseDown(){
	MouseDown = true;
}
function SetMouseUp(){
	MouseDown = false;
}

var DrawSwitch = false;
function SetDrawOn(){
	DrawSwitch = true;
}
function SetDrawOff(){
	DrawSwitch  = false;
}

function SetThickness(x){
	StrokeThickness = parseInt(x);
}

var TextSwitch = false;
var FreehandSwitch = false;
var SymbolPatternSwitch = false;
var CircleSwitch = false;

function SetSwitchesOff(){
	TextSwitch = false;
	FreehandSwitch = false;
	SymbolPatternSwitch = false;
	CircleSwitch = false;
}

var DrawTool = "Circle";
function SetSwitchOn(n){	
	SetSwitchesOff();
	DrawTool = n;
	if (n=="Circle"){
		CircleSwitch = true;
	}else if(n=="Text"){
		TextSwitch = true;
	}else if(n=="Freehand"){
		FreehandSwitch=true;
	}else if(n=="SymbolPattern"){
		SymbolPatternSwitch = true;
	}
}

function SetStart(){
	x0 = (mousex - cnvLeft);
	y0 = (mousey - cnvTop);
	if(FreehandSwitch || SymbolPatternSwitch){
		Xposition.push(x0);
		Yposition.push(y0);
	}
}

function GetTxt(){
	txt = document.getElementById('TextString').value;
}

function GetSymbol(){
	sym = document.getElementById('Symbol').value;
}

function DrawText(canvas,x,y,txt,StrokeColor,FontSize){
	//draws a sting of text
	canvas.setColor(StrokeColor);
	var FontSizePx = FontSize + 'px';
	canvas.setFont(FontFamily,FontSizePx,FontStyle);
	var y1 = y - 10;

	if ((txt != null) && (txt != "")){
		canvas.drawString(txt, x, y1);
		canvas.paint();
		//store parameters in an array 
		if(canvas == jg){
			var Parameter = "Text" + "|" +  x + "|" + y + "|" + txt + "|" +  StrokeColor + "|" + FontSize;
			DrawData.push(Parameter);
			document.getElementById("DrawData").value = DrawData;
		}
	}
}

function DrawCircle(canvas,x1,y1,x2,y2,StrokeColor){
	canvas.setColor(StrokeColor); // set stroke colour
	canvas.setStroke(StrokeThickness); // set stroke thickness
	var xd = x2 - x1;
	var yd = y2 - y1;
	var r2 = Math.pow(xd,2) + Math.pow(yd,2);
	var r = Math.sqrt(r2);
	var diameter = parseInt(r/1.5);
	var x = parseInt(x1 - r/3);
	var y = parseInt(y1 - r/3);
	// draw circle
	canvas.fillEllipse(x, y,diameter,diameter);
	canvas.paint();	

	//store parameters in an array 
	if(canvas == jg){	
		var Parameter = "Circle" + "|" +  x1 + "|" + y1 + "|" + x2 + "|" + y2 + "|" + StrokeColor;
		DrawData.push(Parameter);
		document.getElementById("DrawData").value = DrawData;
	}
}


var Xposition = new Array();
var Yposition = new Array();

function GetXY(x,y){
var s = StrokeThickness;
var l = Xposition.length - 1;	//l = last position
var x = parseInt(x);
var y = parseInt(y);

	if ( (Math.abs(Xposition[l] - x) > s) ||  (Math.abs(Yposition[l] - y) > s)){
		Xposition.push(x);
		Yposition.push(y);
	}
}

function GetXYSym(x,y){
var s2 = SymbolSize/2;
var l = Xposition.length - 1;	//l = last position
var x = parseInt(x);
var y = parseInt(y);

	if ( (Math.abs(Xposition[l] - x) > s2) || (Math.abs(Yposition[l] - y) > s2)){
		Xposition.push(x);
		Yposition.push(y);
	}
}

function ClearXY(){
	Xposition = [];
	Yposition = [];
}

function ArrToStr(Arr,s){
	//convert array values to string
	var Str = "";
	for (n = 0; (n < Arr.length); n++)
	 {
		if (n > 0) 
		{
			Str += s; // each set of data separated by s
		}
		Str += Arr[n]; 
	}
 	return Str;
}

function StrToArr(Str,s){
	//converts string to an array
	var Arr  = Str.split(s);
	for (n=0;n<Arr.length;n++){
		Arr[n] = parseInt(Arr[n]);
	}
	return Arr;
}

function DrawFreehand(canvas,X,Y,StrokeColor,StrokeThickness){
	if (canvas == pv){
		jg.setColor(StrokeColor);
		jg.setStroke(StrokeThickness);
		if (X.length<2){
			var x = X[0];
			var y = Y[0];
				jg.drawLine(x,y,x,y);	//to draw a dot with single click
				jg.paint();
		}
		else if (X.length>1){
			var a = X.length - 2;
			var b = a + 1;
			var x1 = parseInt(X[a]);
			var y1 = parseInt(Y[a]);
			var x2 = parseInt(X[b]);
			var y2 = parseInt(Y[b]);
			jg.drawLine(x1,y1,x2,y2);
			jg.paint();
		}
	} else if (canvas == jg){
		canvas.setColor(StrokeColor);
		canvas.setStroke(StrokeThickness);
		if(X.length > 1){
			canvas.drawPolyline(X,Y);
			canvas.paint();
		}

		//store parameters in an array
		var StrX = ArrToStr(X,':');
		var StrY = ArrToStr(Y,':');

		var Parameter = "Freehand" + "|" +  StrX + "|" + StrY + "|" + StrokeColor + "|" + StrokeThickness;
		DrawData.push(Parameter);
		document.getElementById("DrawData").value = DrawData;
	}
}

function DrawSymbolPattern(canvas,X,Y,sym,StrokeColor,SymbolSize){
	if (canvas == pv){
		jg.setColor(StrokeColor);
		var SymbolSizePx = SymbolSize + 'px';
		jg.setFont(FontFamily,SymbolSizePx,FontStyle);
		
		if ((sym != null) && (sym != "")){
			var l = X.length - 1;	// l = last position
			var x = parseInt(X[l]);
			var y = parseInt(Y[l])-10;
			jg.drawString(sym, x, y);
			jg.paint();
		}
	}
	else if (canvas == jg){
		jg.setColor(StrokeColor);
		var SymbolSizePx = SymbolSize + 'px';
		canvas.setFont(FontFamily,SymbolSizePx,FontStyle);
		if ((sym != null) && (sym != "")){
			for (j=0; (j<X.length); j++){
				var x = parseInt(X[j]);
				var y = parseInt(Y[j])-10;
				canvas.drawString(sym, x, y);
			}
				canvas.paint();
			
			//store parameters in an array
			var StrX = ArrToStr(X,':');
			var StrY = ArrToStr(Y,':');
	
			var Parameter = "SymbolPattern" + "|" +  StrX + "|" + StrY + "|" + sym + "|" + StrokeColor + "|" + SymbolSize;
			DrawData.push(Parameter);
			document.getElementById("DrawData").value = DrawData;
		}
	}
}






function DrawMarker(){
	if(DrawSwitch){
		var x = parseInt(mousex - cnvLeft);	
		var y = parseInt(mousey - cnvTop);
		if(TextSwitch){
			DrawText(jg,x,y,txt,StrokeColor,FontSize);
		}
		else if(FreehandSwitch){
			DrawFreehand(jg,Xposition,Yposition,StrokeColor,StrokeThickness);
			ClearXY();
		}
		else if(SymbolPatternSwitch){
			DrawSymbolPattern(jg,Xposition,Yposition,sym,StrokeColor,SymbolSize);
			ClearXY();
		}
		else if (CircleSwitch){	
			DrawCircle(jg,x0,y0,x,y,StrokeColor);
		}
	}
}

		

function DrawPreview(){
	pv.clear();
	var x = parseInt(mousex-cnvLeft);
	var y = parseInt(mousey-cnvTop);
	if (MouseDown){
		if(TextSwitch){
			DrawText(pv,x,y,txt,StrokeColor,FontSize);
		}
		else if(FreehandSwitch){
			GetXY(x,y);
			DrawFreehand(pv,Xposition,Yposition,StrokeColor,StrokeThickness);
		}
		else if(SymbolPatternSwitch){
			GetXYSym(x,y);
			DrawSymbolPattern(pv,Xposition,Yposition,sym,StrokeColor,SymbolSize);
		}
		else if(CircleSwitch){
			DrawCircle(pv,x0,y0,x,y,StrokeColor);
		}
	}
}


function RedrawImage(RedrawParameter){
		var DrawingType = RedrawParameter[0];
		if(DrawingType == "Text"){
			var x = parseInt(RedrawParameter[1]);
			var y = parseInt(RedrawParameter[2]);
			var txt = RedrawParameter[3];
			StrokeColor = RedrawParameter[4];
			FontSize = RedrawParameter[5];
			DrawText(jg,x,y,txt,StrokeColor,FontSize);
		}
		else if(DrawingType == "Freehand"){
			var X = StrToArr(RedrawParameter[1],':');
			var Y = StrToArr(RedrawParameter[2],':');
			StrokeColor = RedrawParameter[3];
			StrokeThickness = RedrawParameter[4];
			DrawFreehand(jg,X,Y,StrokeColor,StrokeThickness);
		}
		else if (DrawingType == "SymbolPattern"){
			var X = StrToArr(RedrawParameter[1],':');
			var Y = StrToArr(RedrawParameter[2],':');
			var sym = RedrawParameter[3];
			StrokeColor = RedrawParameter[4];
			SymbolSize = parseInt(RedrawParameter[5]);
			DrawSymbolPattern(jg,X,Y,sym,StrokeColor,SymbolSize);
		}
		else if (DrawingType  == "Circle") {
			var x1 = parseInt(RedrawParameter[1]);
			var y1 = parseInt(RedrawParameter[2]);
			var x2 = parseInt(RedrawParameter[3]);
			var y2 = parseInt(RedrawParameter[4]);
			StrokeColor = RedrawParameter[5];
			DrawCircle(jg,x1,y1,x2,y2,StrokeColor);	
		}
}


function Undo(){
	jg.clear();
	TempData = DrawData;
	DrawData = new Array();
	document.getElementById("DrawData").value = "";

	for (i=0; (i < (TempData.length - 1) ); i++){
		var Parameters = TempData[i].split("|");
		RedrawImage(Parameters);
	}
}

function RecallImage(){
	for (i=0; (i < TempData.length);i++){
		var Parameters = new Array();
		Parameters =  TempData[i].split("|");
		RedrawImage(Parameters);
	}
}

function Clear(){
	jg.clear();
	TempData = [];
	DrawData = [];
	SubmitData = [];
	document.getElementById("TempData").value = "";
	document.getElementById("DrawData").value = "";
	document.getElementById("SubmitData").value = "";
	Xposition = [];
	Yposition = [];
	txt = document.getElementById('TextString').value;
	sym = document.getElementById('Symbol').value;
}

function ClearExceptSubmit(){
	jg.clear();
	TempData = [];
	DrawData = [];
	document.getElementById("TempData").value = "";
	document.getElementById("DrawData").value = "";
	Xposition = [];
	Yposition = [];
	txt = document.getElementById('TextSymbol').value;
	sym = document.getElementById('Symbol').value;
}

function SubmitImage(){
	EncodeData();
}

function EncodeData(){
	var packed = "";  // Initialize packed or we get the word 'undefined'
	//Converting image data in array into a string
	for (i = 0; (i < DrawData.length); i++)
	 {
		if (i > 0) 
		{
			packed += ","; // each set of data separated by comma
		}
		packed += escape(DrawData[i]); 	//'escape' encodes dataset into unicode
	}
	document.getElementById("SubmitData").value = packed;  //stores image data into hidden form field
}

function DecodeData(){
	var query = document.getElementById("SubmitData").value;
	var data = query.split(',');
	for (i = 0; (i < data.length); i++)
	{
		data[i] = unescape(data[i]);
	}
	TempData = data;
	DrawData = new Array();
	document.getElementById("DrawData").value = document.getElementById("SubmitData").value;
	document.getElementById("SubmitData").value = "";
}

function ReloadImage(){
	DecodeData();
	RecallImage();
}