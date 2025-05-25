
		/****************************
		startup functions 
		****************************/
		function startUp() {			
			// shows the forms on development machine from notepad ++ - saves you from uploading to the server to input alignments
			var strLoc = window.location.href.toLowerCase();
			if(strLoc.indexOf("https") == -1) {
				// page1
				var src = document.getElementById('BGImage').src;				
				document.getElementById('BGImage').src = src.replace('$%7Boscar_image_path%7D','');
			}
			// setDefaults();	
		}
		
		function setDocumentTitle(Title,PtName) {
			// set document title
			document.title = Title + '_' + PtName;					
		}
		

		/****************************
			submit and print functions 
		****************************/
		function printSubmit() {
			printLetter();
			submission();
		}

		function printLetter() {
			// print the letter
			window.print();
		} 

		function submission() {
			setFlag();
			releaseDirtyFlag();			
			setTimeout('document.FormName.submit()',2000);			
		}

		function setFlag() {
		// indicate that the form has been submitted
		if (document.getElementById("newForm").value == 'True')
			document.getElementById("newForm").value = 'False';
		}
		
		
		/****************************
			checkbox functions 
		****************************/
		function changeValue(x) {
			if (document.getElementById(x).value == '')
				document.getElementById(x).value = 'X';
			else
				document.getElementById(x).value = '';
		}

		function displayKeyCode(evt,x) {
			var charCode = (evt.which) ? evt.which :event.keyCode
			// any key press except tab will constitute a value change to the checkbox
			if (charCode != 9) {
				changeValue(x);
				return false;
			}
		}

		/****************************
			scripts to confirm closing of window if have not saved yet
		****************************/
			//keypress events trigger dirty flag
			var needToConfirm = true;
			document.onkeyup=setDirtyFlag;

		function setDirtyFlag() {
			needToConfirm = true;
		}

		function releaseDirtyFlag() {
			needToConfirm = false; //Call this function if does not require an alert.
			//this could be called when save button is clicked
		}
			window.onbeforeunload = confirmExit;

		function confirmExit() {
			if (needToConfirm) {
		return "You have attempted to leave this page. If you have made any changes to the fields without clicking the Save button, your changes will be lost. Are you sure you want to exit this page?";
			}
		}

 
  function start(){
alert("WARNING:\nTHE USE OF THIS TOOL IS AT YOUR OWN RISK!\nThis tool is to aid patients to make an informed decision regarding CPR.\nThe tools used here have significant inaccuracies inherent in their results and are to be used as a rough guide only.\nThis eForm does autopopulate some of the data and this autopopulation uses free text translation which brings in another possible area of error.\nThe use of this eForm is at the risk of the user, and you remain responsible to use appropriate clinical acumen and verification from other risk calculators as needed. Please notify the author of any errors you may find.\nYou need to verify that the data inputted is accurate.\nClicking on the 'OK' button constitutes your acceptance of these conditions.  ");

	var history1 = document.getElementById('history1').value;
        var history1Split = history1.split("]]-----");
        var History1 = history1Split.pop().toUpperCase();

	var history2 = document.getElementById('history2').value;
        var history2Split = history2.split("]]-----");
        var History2 = history2Split.pop().toUpperCase();


	var history4 = document.getElementById('Meds').value;
        var history4Split = history4.split("]]-----");
        var History4 = history4Split.pop().toUpperCase();

        var all=History1+'\n'+History2+'\n'+'\n'+'MEDICATIONS'+'\n'+History4;
        document.getElementById('searchbox').value = all;
}
 
  function search(){
       //Search free text box for medical history
	 	 
	 var FreeText = /CHF|Congestive heart failure|heart failure|LVF|RVF|Systolic dysfunction|Diastolic dysfunction|pulmonary edema|pulmonary oedema|\sHF\s/i;
var string = document.getElementById("searchbox").value;
var match = string.search(FreeText);
if(match != -1){
 	 document.getElementById('CHF1').value= 'X';
	} 
	var FreeText = /Dementia|Alzheimer's|alzheimers/i;
var string = document.getElementById("searchbox").value;
var match = string.search(FreeText);
if(match != -1){
 	 document.getElementById('Dementia1').value= 'X';
	 }
	 var FreeText = /ASHD|\sIHD\s|Angina|\sCAD\s|Coronary artery disease|Ischemic heart disease|Coronary atherosclerosis|Myocardial infarction|Heart attack|ASCHD|\sCHD\s|\sMI\s|myocardial infarction|myocardial infarct/i;
var string = document.getElementById("searchbox").value;
var match = string.search(FreeText);
if(match != -1){
 	 document.getElementById('IHD1').value= 'X';
	 }
	 var FreeText = /Cirrhosis of liver|Liver failure|Hepatic encephalopathy|Alcohol induced cirrhosis|Alcoholic cirrhosis|Liver cirrhosis/i;
var string = document.getElementById("searchbox").value;
var match = string.search(FreeText);
if(match != -1){
 	 document.getElementById('Cirrhosis1').value= 'X';
	 }
	 
	 if (document.getElementById("CREATININE2").value > 130){
               document.getElementById("Creatinine1").value= 'X';
               document.getElementById("CREATININE2").style.background='yellow';
         }
		 if (document.getElementById("CREATININE2").value > 220){
               document.getElementById("Creatinine21").value= 'X';
               document.getElementById("CREATININE2").style.background='yellow';
         }
}
 
function totalScore(){
// Scores
          var j = document.getElementById("PatientAge1").value
        if(j== 'X'){ 
       document.FormName.PatientAge2.value=0; document.FormName.PatientAge3.value=2; document.FormName.PatientAge4.value=1;
      }
     else{
       document.FormName.PatientAge2.value=0;document.FormName.PatientAge3.value=0;document.FormName.PatientAge4.value=0;
     }
	      var k= document.getElementById("SystolicBP1").value
        if(k == 'X'){ 
       document.FormName.SystolicBP2.value=3; document.FormName.SystolicBP3.value=0; document.FormName.SystolicBP4.value=3;
      }
     else{
       document.FormName.SystolicBP2.value=0;document.FormName.SystolicBP3.value=0;document.FormName.SystolicBP4.value=0;
     }

          var l = document.getElementById("Creatinine1").value
        if(l == 'X'){ 
       document.FormName.Creatinine2.value=0; document.FormName.Creatinine3.value=3; document.FormName.Creatinine4.value=0;
      }
     else{
       document.FormName.Creatinine2.value=0;document.FormName.Creatinine3.value=0;document.FormName.Creatinine4.value=0;
     }
	           var m = document.getElementById("Creatinine21").value
        if(m == 'X'){ 
       document.FormName.Creatinine22.value=3; document.FormName.Creatinine23.value=3; document.FormName.Creatinine24.value=2;
      }
     else{
       document.FormName.Creatinine22.value=0;document.FormName.Creatinine23.value=0;document.FormName.Creatinine24.value=0;
     }
          var n = document.getElementById("CHF1").value
        if(n == 'X'){ 
       document.FormName.CHF2.value=1; document.FormName.CHF3.value=0; document.FormName.CHF4.value=1;
      }
     else{
       document.FormName.CHF2.value=0;document.FormName.CHF3.value=0;document.FormName.CHF4.value=0;
     }
	      var o = document.getElementById("Pneumonia1").value
        if(o == 'X'){ 
       document.FormName.Pneumonia2.value=3; document.FormName.Pneumonia3.value=3; document.FormName.Pneumonia4.value=2;
      }
     else{
       document.FormName.Pneumonia2.value=0;document.FormName.Pneumonia3.value=0;document.FormName.Pneumonia4.value=0;
     }
	      var p = document.getElementById("MI1").value
        if(p == 'X'){ 
       document.FormName.MI2.value=1; document.FormName.MI3.value= -2; document.FormName.MI4.value=0;
      }
     else{
       document.FormName.MI2.value=0;document.FormName.MI3.value=0;document.FormName.MI4.value=0;
     }
	      var q = document.getElementById("HomeBound1").value
        if(q == 'X'){ 
       document.FormName.HomeBound2.value=3; document.FormName.HomeBound3.value=5; document.FormName.HomeBound4.value=2;
      }
     else{
       document.FormName.HomeBound2.value=0;document.FormName.HomeBound3.value=0;document.FormName.HomeBound4.value=0;
     }
	      var r = document.getElementById("MI21").value
        if(r == 'X'){ 
       document.FormName.MI22.value=1; document.FormName.MI23.value=-2; document.FormName.MI24.value=1;
      }
     else{
       document.FormName.MI22.value=0;document.FormName.MI23.value=0;document.FormName.MI24.value=0;
     }
	       var s = document.getElementById("Sepsis1").value
        if(s == 'X'){ 
       document.FormName.Sepsis2.value=1; document.FormName.Sepsis3.value=5; document.FormName.Sepsis4.value=1;
      }
     else{
       document.FormName.Sepsis2.value=0;document.FormName.Sepsis3.value=0;document.FormName.Sepsis4.value=0;
     }
	      var t = document.getElementById("CancerMetastatic1").value
        if(t == 'X'){ 
       document.FormName.CancerMetastatic2.value=3; document.FormName.CancerMetastatic3.value=10; document.FormName.CancerMetastatic4.value=2;
      }
     else{
       document.FormName.CancerMetastatic2.value=0;document.FormName.CancerMetastatic3.value=0;document.FormName.CancerMetastatic4.value=0;
     }
	      var u = document.getElementById("CancerNonMetastatic1").value
        if(u == 'X'){ 
       document.FormName.CancerNonMetastatic2.value=3; document.FormName.CancerNonMetastatic3.value=3; document.FormName.CancerNonMetastatic4.value=2;
      }
     else{
       document.FormName.CancerNonMetastatic2.value=0;document.FormName.CancerNonMetastatic3.value=0;document.FormName.CancerNonMetastatic4.value=0;
     }
	      var v = document.getElementById("CVA1").value
        if(v == 'X'){ 
       document.FormName.CVA2.value=1; document.FormName.CVA3.value=0; document.FormName.CVA4.value=2;
      }
     else{
       document.FormName.CVA2.value=0;document.FormName.CVA3.value=0;document.FormName.CVA4.value=0;
     }
	      var w = document.getElementById("Gallop1").value
        if(w == 'X'){ 
       document.FormName.Gallop2.value=1; document.FormName.Gallop3.value=0; document.FormName.Gallop4.value=1;
      }
     else{
       document.FormName.Gallop2.value=0;document.FormName.Gallop3.value=0;document.FormName.Gallop4.value=0;
     }
	      var x= document.getElementById("Cirrhosis1").value
        if(x == 'X'){ 
       document.FormName.Cirrhosis2.value=1; document.FormName.Cirrhosis3.value=0; document.FormName.Cirrhosis4.value=0;
      }
     else{
       document.FormName.Cirrhosis2.value=0;document.FormName.Cirrhosis3.value=0;document.FormName.Cirrhosis4.value=0;
     }
	      var y= document.getElementById("Oliguria1").value
        if(y == 'X'){ 
       document.FormName.Oliguria2.value=1; document.FormName.Oliguria3.value=0; document.FormName.Oliguria4.value=1;
      }
     else{
       document.FormName.Oliguria2.value=0;document.FormName.Oliguria3.value=0;document.FormName.Oliguria4.value=0;
     }
	      var z= document.getElementById("Dementia1").value
        if(z == 'X'){ 
       document.FormName.Dementia2.value=0; document.FormName.Dementia3.value=0; document.FormName.Dementia4.value=2;
      }
     else{
       document.FormName.Dementia2.value=0;document.FormName.Dementia3.value=0;document.FormName.Dementia4.value=0;
     }
	      var a= document.getElementById("Ventilated1").value
        if(a == 'X'){ 
       document.FormName.Ventilated2.value=1; document.FormName.Ventilated3.value=0; document.FormName.Ventilated4.value=1;
      }
     else{
       document.FormName.Ventilated2.value=0;document.FormName.Ventilated3.value=0;document.FormName.Ventilated4.value=0;
     }
	      var b= document.getElementById("Coma1").value
        if(b == 'X'){ 
       document.FormName.Coma2.value=1; document.FormName.Coma3.value=0; document.FormName.Coma4.value=1;
      }
     else{
       document.FormName.Coma2.value=0;document.FormName.Coma3.value=0;document.FormName.Coma4.value=0;
     }
	      var c= document.getElementById("IHD1").value
        if(c == 'X'){ 
       document.FormName.IHD2.value=1; document.FormName.IHD3.value=0; document.FormName.IHD4.value=1;
      }
     else{
       document.FormName.IHD2.value=0;document.FormName.IHD3.value=0;document.FormName.IHD4.value=0;
     }

	var d = 0;
	d += document.getElementById("CHF2").value*1;
	d += document.getElementById("PatientAge2").value*1;
	d += document.getElementById("Sepsis2").value*1;
	d += document.getElementById("SystolicBP2").value*1;
	d += document.getElementById("Pneumonia2").value*1;
	d += document.getElementById("Creatinine2").value*1;
	d += document.getElementById("Creatinine22").value*1;
	d += document.getElementById("MI2").value*1;
	d += document.getElementById("MI22").value*1;
	d += document.getElementById("HomeBound2").value*1;
	d += document.getElementById("Cirrhosis2").value*1;
	d += document.getElementById("Oliguria2").value*1;
	d += document.getElementById("Dementia2").value*1;
	d += document.getElementById("Ventilated2").value*1;
	d += document.getElementById("Coma2").value*1;
	d += document.getElementById("CancerMetastatic2").value*1;
	d += document.getElementById("CancerNonMetastatic2").value*1;
	d += document.getElementById("CVA2").value*1;
	d += document.getElementById("Gallop2").value*1;
	d += document.getElementById("IHD2").value*1;

	document.FormName.PAM.value = d;
	if(d > 6){
       document.FormName.PAMScore.value="CPR unlikely to be successful";
	   document.FormName.PAMScore.style.background="yellow";
	   document.FormName.PAM.style.background="yellow";
      }
	if(d < 7){
       document.FormName.PAMScore.value="";
	   document.FormName.PAMScore.style.background="";
	   document.FormName.PAM.style.background="";
      }

	var e = 0;
	e += document.getElementById("CHF3").value*1;
	e += document.getElementById("PatientAge3").value*1;
	e += document.getElementById("Sepsis3").value*1;
	e += document.getElementById("SystolicBP3").value*1;
	e += document.getElementById("Pneumonia3").value*1;
	e += document.getElementById("Creatinine3").value*1;
	e += document.getElementById("Creatinine23").value*1;
	e += document.getElementById("MI3").value*1;
	e += document.getElementById("MI23").value*1;
	e += document.getElementById("HomeBound3").value*1;
	e += document.getElementById("Cirrhosis3").value*1;
	e += document.getElementById("Oliguria3").value*1;
	e += document.getElementById("Dementia3").value*1;
	e += document.getElementById("Ventilated3").value*1;
	e += document.getElementById("Coma3").value*1;
	e += document.getElementById("CancerMetastatic3").value*1;
	e += document.getElementById("CancerNonMetastatic3").value*1;
	e += document.getElementById("CVA3").value*1;
	e += document.getElementById("Gallop3").value*1;
	e += document.getElementById("IHD3").value*1;

	document.FormName.PAR.value = e;	
    if(e > 7){
       document.FormName.PARScore.value="CPR unlikely to be successful";
	   document.FormName.PARScore.style.background="yellow";
	   document.FormName.PAR.style.background="yellow";
      }
	 if(e < 8){
       document.FormName.PARScore.value="";
	   document.FormName.PARScore.style.background="";
	   document.FormName.PAR.style.background="";
      }
	  
	var f = 0;
	f += document.getElementById("CHF4").value*1;
	f += document.getElementById("PatientAge4").value*1;
	f += document.getElementById("Sepsis4").value*1;
	f += document.getElementById("SystolicBP4").value*1;
	f += document.getElementById("Pneumonia4").value*1;
	f += document.getElementById("Creatinine4").value*1;
	f += document.getElementById("Creatinine24").value*1;
	f += document.getElementById("MI4").value*1;
	f += document.getElementById("MI24").value*1;
	f += document.getElementById("HomeBound4").value*1;
	f += document.getElementById("Cirrhosis4").value*1;
	f += document.getElementById("Oliguria4").value*1;
	f += document.getElementById("Dementia4").value*1;
	f += document.getElementById("Ventilated4").value*1;
	f += document.getElementById("Coma4").value*1;
	f += document.getElementById("CancerMetastatic4").value*1;
	f += document.getElementById("CancerNonMetastatic4").value*1;
	f += document.getElementById("CVA4").value*1;
	f += document.getElementById("Gallop4").value*1;
	f += document.getElementById("IHD4").value*1;

	document.FormName.MPI.value = f;
    if(f > 6){
       document.FormName.MPIScore.value="CPR unlikely to be successful";
	   document.FormName.MPIScore.style.background="yellow";
	   document.FormName.MPI.style.background="yellow";
      }
	 if(f < 7){
       document.FormName.MPIScore.value="";
	   document.FormName.MPIScore.style.background="";
	   document.FormName.MPI.style.background="";
      }	
	  

    if ((document.getElementById("PAMScore").value=='')||(document.getElementById("PARScore").value=='')||(document.getElementById("MPIScore").value=='')){
        document.getElementById("scoreDiv").style.display = "none";
       }
    if ((document.getElementById("PAMScore").value=='CPR unlikely to be successful')||(document.getElementById("PARScore").value=='CPR unlikely to be successful')||(document.getElementById("MPIScore").value=='CPR unlikely to be successful')){
        document.getElementById("scoreDiv").style.display = "inline";
       }
	 
	  
  }   

 function hideScore(){
    if ((document.getElementById("PAMScore").value=='')||(document.getElementById("PARScore").value=='')||(document.getElementById("MPIScore").value=='')){
		document.getElementById("riskfactorsDiv").style.display = "none";
       }
    if ((document.getElementById("PAMScore").value=='CPR unlikely to be successful')||(document.getElementById("PARScore").value=='CPR unlikely to be successful')||(document.getElementById("MPIScore").value=='CPR unlikely to be successful')){
		document.getElementById("riskfactorsDiv").style.display = "inline";
       }  
	}


   function clear1(){
     document.getElementById('MI1').value = "";
	 }
   function clear2(){
     document.getElementById('MI21').value = "";
	 }
   function clearCancerNon(){
     document.getElementById('CancerNonMetastatic1').value = "";
	 }
   function clearCancerMet(){
     document.getElementById('CancerMetastatic1').value = "";
	 }
   function clearCreat130(){
     document.getElementById('Creatinine1').value = "";
	 }
   function clearCreat220(){
     document.getElementById('Creatinine21').value = "";
	 }
	 
 function UpdateBP(){
	var ref=document.getElementById('BP').value.toString(); 
	var mySplitResult = ref.split('/');
	var y= mySplitResult[0];
 	document.getElementById('BP2').value = y;
        if ((y < 90)&&(y > 0)) {
               document.getElementById("SystolicBP1").value= 'X';
			   document.getElementById("BP2").style.background='yellow';
      }

 }

	   function outHospital(){
       var ah= document.getElementById("PatAge").value;
	   
	   if ((ah < 40)&&(ah >0)){
	   document.FormName.OutofHospitalArrest.value=">10%";
	 } 
	   if ((ah > 39)&&(ah < 60)){
	   document.FormName.OutofHospitalArrest.value="10%";
	 }
	    if ((ah >59)&&(ah < 70)){
	   document.FormName.OutofHospitalArrest.value="8.1%";
	 }
	    if ((ah > 69)&&(ah < 80)){
	   document.FormName.OutofHospitalArrest.value="7.1%";
	 }
	    if ((ah > 79)&&(ah < 89)){
	   document.FormName.OutofHospitalArrest.value="3.3%";
	 }
	    if (ah > 89){
	   document.FormName.OutofHospitalArrest.value="1%";
	 }	   	 
  }
  
   function passAge() {
        var aa= document.getElementById("PatAge").value;
         if (aa > 70){
               document.getElementById("PatientAge1").value= 'X';
         }
}

function onLoad(){
	if (document.getElementById("counter").value =='') {
		(document.getElementById("counter").value = 1);
		start();
		search();
		UpdateBP();
		outHospital();
		passAge();
		setDocumentTitle('CPR Advisor',document.getElementById('PtName').value);
	
		//optimize window size/width
		top.window.resizeTo(1100, screen.availHeight);
     }
}
