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

			setDocumentTitle('Atrial Fibrillation Stroke Risk Advisor', document.getElementById('PtName').value);
			setDefaults();			
		}
		
		function setDocumentTitle(Title,PtName) {
			// set document title
			document.title = Title + '_' + PtName;
		}
		
		function setDefaults()
		{	            
			// check the newform flag to ensure this is the initial load of the form
			if (document.getElementById("newForm").value == 'True') {
				//document.getElementById('').value = '1';	
			}   
		}

		/****************************
			submit and print functions 
		****************************/
		function printSubmit() {
			printLetter();
			submission();
		}

		function printLetter() {
			// Only print selected sections
			printSelected();
			// print the letter
			window.print();
			// Show all sections before submitting
			viewAll();
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
		
		function showButtons() {
			//show the bottom buttons if they are hidden
			if (document.getElementById('BottomButtons').style.display == 'none')
				document.getElementById('BottomButtons').style.display = '';
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

<!-- scripts to confirm closing of window if it has not been saved yet -->

//keypress events trigger dirty flag
var needToConfirm = false;
document.onkeyup=setDirtyFlag;
function setDirtyFlag(){
		needToConfirm = true;
}
function releaseDirtyFlag(){
		needToConfirm = false; //Call this function if doesn't requires an alert.
//this could be called when save button is clicked
}
window.onbeforeunload = confirmExit;
function confirmExit(){
	 if (needToConfirm){
		 return "You have attempted to leave this page. If you have made any changes to the fields without clicking the Save button, your changes will be lost. Are you sure you want to exit this page?";
	 }
}

	 top.window.moveTo(0,0);
	 if (document.all) {
	 top.window.resizeTo(screen.availWidth,screen.availHeight);
	 }
	 else if (document.layers||document.getElementById) {
	 if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth){
		 top.window.outerHeight = screen.availHeight;
		 top.window.outerWidth = screen.availWidth;
	}
}

 function totalScore() {
      allscore();
      framinghamresults();       
 } 
 
function passAge() {
         if (document.getElementById("PatientAge").value >= 75){
               document.getElementById("Age1").value= 'X';
         }
         if ((document.getElementById("PatientAge").value >= 65)&& (document.getElementById("PatientAge").value <= 75)){
               document.getElementById("Age651").value= 'X';
         }
         if (document.getElementById("PatientAge").value >= 65){
               document.getElementById("HBElderly1").value= 'X';
         }
}

function passGender() {
         if (document.getElementById("SexGender").value == 'F'){
               document.getElementById("Female1").value= 'X';
               document.getElementById("Female3").value= 'X';
         }
}

 function UpdateBP(){
	var ref=document.getElementById('BP').value.toString(); 
	var mySplitResult = ref.split('/');
	var y= mySplitResult[0];
 	document.getElementById('SystolicBP').value = y;
        if (y > 160) {
               document.getElementById("HBHypertension1").value= 'X';
      }
 }

function checkLab() {
         if (document.getElementById("CREATININE2").value > 200){
               document.getElementById("AbnRF1").value= 'X';
               document.getElementById("CREATININE2").style.background='yellow';
        }
 
         if ((document.getElementById("BILI2").value > 34)&& (document.getElementById("ALT2").value > 108)){
               document.getElementById("AbnLF1").value= 'X';
               document.getElementById("BILI2").style.background='yellow';
               document.getElementById("ALT2").style.background='yellow';
        }

		 if ((document.getElementById("eGFR2").value < 30)&&(document.getElementById("eGFR2").value > 0)){
               document.getElementById("eGFR2").style.background='yellow';
			   document.getElementById("Dabigatran110Div").style.background='grey';
			   document.getElementById("Dabigatran150Div").style.background='grey';
			   document.getElementById("Rivaroxaban20Div").style.background='grey';
               document.getElementById("Apixaban5Div").style.background='grey';				   
         }
}

function start(){
alert("WARNING:\nTHE USE OF THIS TOOL IS AT YOUR OWN RISK!\nAlthough effort has been made to make this eForm as accurate as possible this is not a guarantee. Also the tools themselves have significant inaccuracies inherent in their results.\nThis eForm does autopopulate some of the data and this autopopulation uses free text translation which brings in another possible area of error.\nThe use of this eForm is at the risk of the user, and you remain responsible to use appropriate clinical acumen and verification from other risk calculators as needed. You also need to verify that the data inputted is accurate.\nPlease notify the author of any errors you find.\nClicking on the 'OK' button constitutes your acceptance of these conditions.");
   if (document.getElementById("CHADSCounter").value == '1') {
       document.getElementById("CHA2DS2VASCSwitch").style.background='yellow';
	   document.FormName.CHADS2Type.value= '"CHA2DS2 VASC"';
	}

        document.getElementById('searchbox').value = "";
	
	var history1 = document.getElementById('history1').value;
        var history1Split = history1.split("]]-----");
        var History1 = history1Split.pop().toUpperCase();

	var history2 = document.getElementById('history2').value;
        var history2Split = history2.split("]]-----");
        var History2 = history2Split.pop().toUpperCase();

	var meds = document.getElementById('Meds').value;
        var medsSplit =meds.split("]]-----");
        var Meds = medsSplit.pop().toUpperCase();

        var all=History1+'\n'+History2+'\n'+'\n'+'MEDICATIONS:'+'\n'+Meds;
        document.getElementById('searchbox').value = all;
}

 function search() {
       //Search free text box for medical history
	 	 
	var FreeText = /CHF|Congestive heart failure|heart failure|LVF|RVF|Systolic dysfunction|Diastolic dysfunction|pulmonary edema|pulmonary oedema|\sHF\s/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('CHF1').value= 'X';
	}

	var FreeText = /CVATIA|CVA|cerebrovascular accident|stroke|CV accident|\sTIA\s|transient ischemic attack|transient ischaemic attack|cerebral atherosclerosis|cerebrovascular disease/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('TIA3').value= 'X';
		document.getElementById('TIA1').value= 'X';
		document.getElementById('HBStroke1').value= 'X';
	}

	var FreeText = /DiabetesMellitus|Diabetes|NIDDM|IDDM|\sDM\s|T2DM|T1DM|type 2 DM|type2 DM|type1 DM|type 1 DM|T2DM|T2 DM|\sDM2\s/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('DM1').value= 'X';
		document.getElementById('DM3').value= 'X';
	} 
	 
	var FreeText = /HBP|Hypertension|Elevated BP|\sBP\s|\sHTN\s/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('HBP1').value= 'X';
	} 
	 
	var FreeText = /\sPE\s|PulmonaryEmbolus|pulmonary embolus|pulm embolus|pulmonary embolism|\sPTE\s/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('TIA3').value= 'X';
		document.getElementById('TIA1').value= 'X';
		document.getElementById('HBStroke1').value= 'X';
	}

	var FreeText = /PVD|peripheral vascular disease|atheroclerosis|buerger's disease|peripheral arterial disease|\sPAD\s|claudication/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('MI1').value= 'X';
	}

	var FreeText = /\sVTE\s|Venous thromboembolism|\sPE\s|Pulmonary Embol/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('TIA3').value= 'X';
		document.getElementById('TIA1').value= 'X';
		document.getElementById('HBStroke1').value= 'X';
	}

	var FreeText = /indomethacin|ketorolac|ibuprofen|ketoprofen|naproxen|diclofenac|piroxicam|oxaprozin/i;
	var string = document.getElementById("searchbox").value;
	var match = string.search(FreeText);

	if (match != -1){
		document.getElementById('NSAID1').value= 'X';
	}
}

function allscore(){
// CHADS VASc Score
     var n = document.getElementById("CHF1").value
	if(n == 'X'){ 
       document.FormName.CHF2.value=1;
      }
     else{
       document.FormName.CHF2.value=0;
     }
	 
     var o = document.getElementById("HBP1").value
	 
	if(o == 'X'){
       document.FormName.HBP2.value=1;
      }
     else{
       document.FormName.HBP2.value=0;
     }

     var p = document.getElementById("Age1").value
	if(p == 'X'){
       document.FormName.Age2.value=2;
      }
     else{
       document.FormName.Age2.value=0;
     }

     var q = document.getElementById("DM1").value
	if(q == 'X'){
       document.FormName.DM2.value=1;
      }
     else{
       document.FormName.DM2.value=0;
     }

     var r = document.getElementById("TIA1").value
	if(r == 'X'){
       document.FormName.TIA2.value=2;
      }
     else{
       document.FormName.TIA2.value=0;
     }

     var s = document.getElementById("Age651").value
	if(s == 'X'){
       document.FormName.Age652.value=1;
      }
     else{
       document.FormName.Age652.value=0;
     }
	 
     var t = document.getElementById("Female3").value
	if(t == 'X'){
       document.FormName.Female4.value=1;
      }
     else{
       document.FormName.Female4.value=0;
     }

     var u = document.getElementById("MI1").value
	if(u == 'X'){
       document.FormName.MI2.value=1;
      }
     else{
       document.FormName.MI2.value=0;
     }	 
	 
	var i = 0;

	i += document.getElementById("CHF2").value*1;
	i += document.getElementById("HBP2").value*1;
	i += document.getElementById("Age2").value*1;
	i += document.getElementById("DM2").value*1;
	i += document.getElementById("TIA2").value*1;
	i += document.getElementById("Age652").value*1;
	i += document.getElementById("Female4").value*1;
	i += document.getElementById("MI2").value*1;
	document.FormName.CHA2DS2VASC.value = i;
	
	// CHADS2 Score
     var nc = document.getElementById("CHF1").value
	if(nc == 'X'){ 
       document.FormName.CHF2.value=1;
      }
     else{
       document.FormName.CHF2.value=0;
     }
	 
     var oc = document.getElementById("HBP1").value
	 
	if(oc == 'X'){
       document.FormName.HBP2.value=1;
      }
     else{
       document.FormName.HBP2.value=0;
     }

     var pc = document.getElementById("Age1").value
	if(pc == 'X'){
       document.FormName.Age2.value=1;
      }
     else{
       document.FormName.Age2.value=0;
     }


     var qc = document.getElementById("DM1").value
	if(qc == 'X'){
       document.FormName.DM2.value=1;
      }
     else{
       document.FormName.DM2.value=0;
     }

     var rc = document.getElementById("TIA1").value
	if(rc == 'X'){
       document.FormName.TIA2.value=2;
      }
     else{
       document.FormName.TIA2.value=0;
     }
	 
	var ia = 0;

	ia += document.getElementById("CHF2").value*1;
	ia += document.getElementById("HBP2").value*1;
	ia += document.getElementById("Age2").value*1;
	ia += document.getElementById("DM2").value*1;
	ia += document.getElementById("TIA2").value*1;
	document.FormName.CHADS2.value = ia;

// HAS BLED Score
	
	 var nb = document.getElementById("AbnRF1").value
	if(nb == 'X'){ 
       document.FormName.AbnRF2.value=1;
      }
     else{
       document.FormName.AbnRF2.value=0;
     }
	 
     var ob = document.getElementById("AbnLF1").value
	 
	if(ob == 'X'){
       document.FormName.AbnLF2.value=1;
      }
     else{
       document.FormName.AbnLF2.value=0;
     }

     var pb = document.getElementById("MajorBleed1").value
	if(pb == 'X'){
       document.FormName.MajorBleed2.value=1;
      }
     else{
       document.FormName.MajorBleed2.value=0;
     }


     var qb = document.getElementById("LabileINR1").value
	if(qb == 'X'){
       document.FormName.LabileINR2.value=1;
      }
     else{
       document.FormName.LabileINR2.value=0;
     }

     var rb = document.getElementById("Alcohol1").value
	if(rb == 'X'){
       document.FormName.Alcohol2.value=1;
      }
     else{
       document.FormName.Alcohol2.value=0;
     }
	 
	 var sb = document.getElementById("HBHypertension1").value
	if(sb == 'X'){
       document.FormName.HBHypertension2.value=1;
      }
     else{
       document.FormName.HBHypertension2.value=0;
     }
	 
	var ub = document.getElementById("HBStroke1").value
	if(ub == 'X'){
       document.FormName.HBStroke2.value=1;
      }
     else{
       document.FormName.HBStroke2.value=0;
     }
	 
	var vb = document.getElementById("HBElderly1").value
	if(vb == 'X'){
       document.FormName.HBElderly2.value=1;
      }
     else{
       document.FormName.HBElderly2.value=0;
     }
	  
	  var tb = document.getElementById("NSAID1").value
	if(tb == 'X'){
       document.FormName.NSAID2.value=1;
      }
     else{
       document.FormName.NSAID2.value=0;
     }
	 
	var ib = 0;

	ib += document.getElementById("AbnRF2").value*1;
	ib += document.getElementById("AbnLF2").value*1;
	ib += document.getElementById("MajorBleed2").value*1;
	ib += document.getElementById("LabileINR2").value*1;
	ib += document.getElementById("Alcohol2").value*1;
	ib += document.getElementById("HBHypertension2").value*1;
	ib += document.getElementById("HBStroke2").value*1;
	ib += document.getElementById("HBElderly2").value*1;
	ib += document.getElementById("NSAID2").value*1;
	
	document.FormName.HASBLED.value = ib;
	 
 // Framingham Score
  	 var fage = document.getElementById("PatientAge").value;

	    if((fage <'55')&&(fage >'0')){
		alert('This patient is too young for the Framingham calculator, the Framingham Afib Stroke risk results may be invalid');
       document.FormName.PatientAge2.value=0;
	   } 
	    if((fage >='55')&&(fage <='59')){
       document.FormName.PatientAge2.value=0;
	   }
 	    if((fage >='60')&&(fage <='62')){
       document.FormName.PatientAge2.value=1;
	   }
	    if((fage >='63')&&(fage <='66')){
       document.FormName.PatientAge2.value=2;
	   }
	    if((fage >='67')&&(fage <='71')){
       document.FormName.PatientAge2.value=3;
	   }
	    if((fage >='72')&&(fage <='74')){
       document.FormName.PatientAge2.value=4;
	   }
	    if((fage >='75')&&(fage <='77')){
       document.FormName.PatientAge2.value=5;
	   }
	    if((fage >='78')&&(fage <='81')){
       document.FormName.PatientAge2.value=6;
	   }
	    if((fage >='82')&&(fage <='85')){
       document.FormName.PatientAge2.value=7;
	   }
	    if((fage >='86')&&(fage <='90')){
       document.FormName.PatientAge2.value=8;
	   }
	    if((fage >='91')&&(fage <='93')){
       document.FormName.PatientAge2.value=8;
	   }
	    if(fage >'93'){
       document.FormName.PatientAge2.value=10;
	   }
  
   	   var fsystolic = document.getElementById("SystolicBP").value; 
  
  	    if((fsystolic <'120')&&(fsystolic >'0')){
       document.FormName.SystolicBP2.value=0;
	   }
	   	if((fsystolic  >='120')&&(fsystolic  <='139')){
       document.FormName.SystolicBP2.value=1;
	   }
	   	if((fsystolic  >='140')&&(fsystolic  <='159')){
       document.FormName.SystolicBP2.value=2;
	   }
	   	if((fsystolic  >='160')&&(fsystolic  <='179')){
       document.FormName.SystolicBP2.value=3;
	   }
	   	if(fsystolic  >='179'){
       document.FormName.SystolicBP2.value=4;
	   }
  
       var fsex = document.getElementById("Female1").value;
	   
	    if( fsex == 'X'){
       document.FormName.Female2.value=6;
      }
        else{
       document.FormName.Female2.value=0;
     }
	 
       var fdiabetes = document.getElementById("DM3").value;
	   
	    if( fdiabetes == 'X'){
       document.FormName.DM4.value=5;
      }
        else{
       document.FormName.DM4.value=0;
     }
	 
       var fstroke = document.getElementById("TIA3").value;
	   
	    if( fstroke == 'X'){
       document.FormName.TIA4.value=6;
      }
        else{
       document.FormName.TIA4.value=0;
     }
   
  	var fram = 0;

	fram += document.getElementById("PatientAge2").value*1;
	fram += document.getElementById("SystolicBP2").value*1;
	fram += document.getElementById("Female2").value*1;
	fram += document.getElementById("DM4").value*1;
	fram += document.getElementById("TIA4").value*1;
	
  	document.FormName.FRAMINGHAMAFIB.value = fram;
}
  
  function duplicate(){
  kk = document.getElementById('DM1').value
  document.getElementById('DM3').value = kk
  ll = document.getElementById('TIA1').value
  document.getElementById('TIA3').value = ll
  document.getElementById('HBStroke1').value = ll
  mm = document.getElementById('Female1').value
  document.getElementById('Female3').value = mm
  }
  
    function duplicate2(){
  kkk = document.getElementById('DM3').value
  document.getElementById('DM1').value = kkk
  lll = document.getElementById('TIA3').value
  document.getElementById('TIA1').value = lll
  document.getElementById('HBStroke1').value = lll
  mmm = document.getElementById('Female3').value
  document.getElementById('Female1').value = mmm
  }
  
      function duplicate3(){
  llll = document.getElementById('HBStroke1').value
  document.getElementById('TIA1').value = llll
  document.getElementById('TIA3').value = llll
  }
  
   function clear65(){
     document.getElementById('Age651').value = "";
	 }
  function clear75(){
     document.getElementById('Age1').value = "";
	 }
	 
function framinghamresults(){
var myFramRisk=["5","5","6","6","7","8","9","9","11","12","13","14","16","18","19","21","24","26","28","31","34","37","41","44","48","51","55","59","63","67","71","75"];
var Framscore = document.getElementById("FRAMINGHAMAFIB").value;

	var i = myFramRisk[Framscore] ;
    document.getElementById("FiveYearRiskNoTherapy").value=i;
	
var myChadVascRisk=["0.7","1.5","2.9","4.3","6.5","10","12.5","14","14.1","15.9"];
var myChads2Risk=["1.2","3.6","5.4","9.9","13.7","12.6","17.2"];
var ChadVascscore = document.getElementById("CHA2DS2VASC").value;
var Chads2score = document.getElementById("CHADS2").value;

   if (document.getElementById("CHADSCounter").value =='1') {
	   var ic = myChadVascRisk[ChadVascscore] ;
	}
   if (document.getElementById("CHADSCounter").value =='2') {
	   var ic = myChads2Risk[Chads2score] ;
	}
    document.getElementById("AnnualRiskNoTherapy").value=ic;
	document.getElementById("AnnualRiskAspirin").value=Math.round((ic*0.78)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskAspirinPlavix").value=Math.round((ic*0.56)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskWarfarin").value=Math.round((ic*0.34)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskDabigatran150").value= Math.round((ic*0.34*0.66)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskDabigatran110").value=Math.round((ic*0.34)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskRivaroxaban20").value=Math.round((ic*0.34)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskApixaban5").value= Math.round((ic*0.34*0.79)*Math.pow(10,1))/Math.pow(10,1);
	
	document.getElementById("AbsoluteRiskReductionAspirin").value=Math.round((ic*0.22)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionAspirinPlavix").value=Math.round((ic*0.44)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionWarfarin").value=Math.round((ic*0.66)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionDabigatran150").value=Math.round((ic*0.78)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionDabigatran110").value=Math.round((ic*0.66)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionRivaroxaban20").value=Math.round((ic*0.66)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AbsoluteRiskReductionApixaban5").value=Math.round((ic*0.74)*Math.pow(10,1))/Math.pow(10,1);
	
	document.getElementById("ChanceofBenefitPerYearAspirin").value=Math.round((100/(ic*0.22))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearAspirinPlavix").value=Math.round((100/(ic*0.44))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearWarfarin").value=Math.round((100/(ic*0.66))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearDabigatran150").value=Math.round((100/(ic*0.78))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearDabigatran110").value=Math.round((100/(ic*0.66))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearRivaroxaban20").value=Math.round((100/(ic*0.66))*Math.pow(10,0))/Math.pow(10,0);
	document.getElementById("ChanceofBenefitPerYearApixaban5").value=Math.round((100/(ic*0.74))*Math.pow(10,0))/Math.pow(10,0);

var HasBledRisk=["1.2","2.2","3.1","5.6","9.4","8.6","10","10","10","10"];
var HasBledscore = document.getElementById("HASBLED").value;

	var ih = HasBledRisk[HasBledscore] ;
	document.getElementById("AnnualRiskBleedAspirinPlavix").value=ih;
	document.getElementById("AnnualRiskBleedWarfarin").value=ih;
	document.getElementById("AnnualRiskBleedDabigatran150").value= ih;
	document.getElementById("AnnualRiskBleedDabigatran110").value=Math.round((ih*0.8)*Math.pow(10,1))/Math.pow(10,1);
	document.getElementById("AnnualRiskBleedRivaroxaban20").value=ih;
	document.getElementById("AnnualRiskBleedApixaban5").value= Math.round((ih*0.69)*Math.pow(10,1))/Math.pow(10,1);	
}
  
function printSelected() {
    if (document.getElementById("IntroSelect").value==''){
        document.getElementById("heading").style.display = "none";
    }
	if (document.getElementById("RiskFactorsSelect").value==''){
        document.getElementById("riskfactorsDiv").style.display = "none";
    }
	if (document.getElementById("NoTherapySelect").value==''){
        document.getElementById("notherapyDiv").style.display = "none";
    }
	if (document.getElementById("AspirinSelect").value==''){
        document.getElementById("aspirinDiv").style.display = "none";
    }
	if (document.getElementById("AspirinPlavixSelect").value==''){
        document.getElementById("aspirinPlavixDiv").style.display = "none";
    }
	if (document.getElementById("WarfarinSelect").value==''){
        document.getElementById("warfarinDiv").style.display = "none";
    }
	if (document.getElementById("Dabigatran110Select").value==''){
        document.getElementById("Dabigatran110Div").style.display = "none";
    }
	if (document.getElementById("Rivaroxaban20Select").value==''){
        document.getElementById("Rivaroxaban20Div").style.display = "none";
    }
	if (document.getElementById("Apixaban5Select").value==''){
        document.getElementById("Apixaban5Div").style.display = "none";
    }
	if (document.getElementById("Dabigatran150Select").value==''){
        document.getElementById("Dabigatran150Div").style.display = "none";
    }
	if (document.getElementById("GeneralNotesSelect").value==''){
        document.getElementById("GeneralNotesDiv").style.display = "none";
    }
}

function viewAll() {
	document.getElementById("heading").style.display = "inline";
	document.getElementById("riskfactorsDiv").style.display = "inline";
	document.getElementById("notherapyDiv").style.display = "inline";
	document.getElementById("aspirinDiv").style.display = "inline";
	document.getElementById("aspirinPlavixDiv").style.display = "inline";
	document.getElementById("warfarinDiv").style.display = "inline";
	document.getElementById("Dabigatran110Div").style.display = "inline";
	document.getElementById("Rivaroxaban20Div").style.display = "inline";
	document.getElementById("Apixaban5Div").style.display = "inline";
	document.getElementById("Dabigatran150Div").style.display = "inline";
	document.getElementById("GeneralNotesDiv").style.display = "inline"; 
	document.getElementById("BottomButtons").style.display = "inline";		
}

function switchCHADS2() {
	document.getElementById("CHADS2Switch").style.background='yellow';
	document.getElementById("CHA2DS2VASCSwitch").style.background='';
	document.FormName.CHADSCounter.value = 2;
	document.FormName.CHADS2Type.value = '"CHADS2"';
}

function switchCHA2DS2VASC() {
	document.getElementById("CHA2DS2VASCSwitch").style.background='yellow';
	document.getElementById("CHADS2Switch").style.background='';
	document.FormName.CHADSCounter.value = 1;
	document.FormName.CHADS2Type.value = '"CHA2DS2 VASC"';
}