function MRIForm() {
	$("#mriForm").click();
	}
function NMForm() {
	$("#nmForm").click();
	}
function BDForm() {
	$("#bdForm").click();
	}
function ECHOForm() {
	$("#echoForm").click();
	}

	/****************************
		submit and print functions 
	****************************/
	function printLetter() {
		// Save reminder; allows for validity testing
		document.getElementById('SubmitButton').classList.toggle('attn');
		document.getElementById('ResetButton').style.color = 'black';
		document.getElementById('SubmitButton').style.border = '2px solid red';

		$("#Urgent2").show(); // Shows watermark when printing

		alert("eFORM has NOT been submitted.  If needed, cancel print and complete required fields.  Ensure you click SUBMIT after print.");

		// print the letter
		window.print();
	}

	function submission() {
		$('#counter').val(1); // set eFORM to status 1 for reload purposes; equivalent of setFlag()
		saveSig();
		releaseDirtyFlag();
	}

	/****************************
		Signature functions 
	****************************/
	jQuery(document).ready(function() {
		$("#CanvasSignature1").jSignature({'decor-color':'rgba(255, 255, 255, 0.0)'})
	})

	function saveSig(){
		var $sig=$("#CanvasSignature1");
		var datapair=new Array();
		datapair=$sig.jSignature("getData","base30");
		document.getElementById("StoreSignature1").value=datapair.join(",");
		// signature checker
		if ($('#CanvasSignature1').jSignature('getData', 'base30')[1] == "") {
		document.getElementById("StoreSignature1").value="image/jsignature;base30,0_0";
		}
	}

	function clearSig() {
		$("#CanvasSignature1").jSignature("reset");
	}

	function loadSig() {
		var $sig=$("#CanvasSignature1");
		var data
		data=document.getElementById("StoreSignature1").value;
		$sig.jSignature("setData","data:"+ data);
	}

	/****************************
		Script to enable signature stamps. No Array needed. 
		Signature assigned to ProviderNumber in the format:
		consult_sig_+ProviderNumber+.png
	****************************/
	function SignForm() {
		var ProviderNumber = document.getElementById('current_user_id').value;
		document.getElementById('StampSignature').src = "../eform/displayImage.do?imagefile=consult_sig_"+ProviderNumber+".png";
	}

	/****************************
		Script to add/remove Wet signature option
	****************************/
	function Add_Wet() {
		document.getElementById('CanvasSignature1').className = 'sig';
		document.getElementById('Signature_Stamp').className = 'Hide';
		document.getElementById('Stamp').checked = false;
		document.getElementById('SignatureChoice').value = 'Wet';
	}
	function remove_Wet() {
		document.getElementById('CanvasSignature1').className = 'Hide';
		document.getElementById('SignatureChoice').value = 'None';
	}

	/****************************
		Script to add/remove Stamp signature option
	****************************/
	function Add_Stamp() {
		SignForm();
		document.getElementById('Signature_Stamp').className = 'Show';
		document.getElementById('CanvasSignature1').className = 'Hide';
		document.getElementById('Wet').checked = false;
		document.getElementById('SignatureChoice').value = 'Stamp';
	}
	function remove_Stamp() {
		document.getElementById('Signature_Stamp').className = 'Hide';
		document.getElementById('SignatureChoice').value = 'None';
	}

	/****************************
		Script to load None signature option
	****************************/
	function Add_None() {
		document.getElementById('CanvasSignature1').className = 'Hide';
		document.getElementById('Signature_Stamp').className = 'Hide';
	}

	/****************************
		Script to reload signature option selected on submit
	****************************/
	function reloadSignature() {
		// show chosen signature format on submit: e.g.  Wet, Stamp, None
		var chosenSig = document.getElementById('SignatureChoice').value;
		document.getElementById(chosenSig).checked = true;
		if (chosenSig === 'Stamp') {
			Add_Stamp();
		} else if (chosenSig === 'Wet') {
			Add_Wet();
		} else if (chosenSig === 'None') {
			Add_None();
		}
	}

	/****************************
		Radio-XBox functions 
		Changes function of X_boxes to radio_boxes when the id of the radiobox is passed as x 
		and is named in the convention name_X where X appears in the string defined in scales
		Ensure that the list is sequential. Do no skip numbers. An input can be hidden if appropriate.
	****************************/
	function Radio_Box(x) {
		var scales = ["1", "2", "3", "4", "5", "6", "7"];
		var partA = x.substring(0, x.indexOf("_"));
		var i = x.substring(x.indexOf("_"));
		var j = i.substr(1);

		for (var n in scales) {
			if ( j == scales[n]) {
				for (var m in scales){
					if (m != n) { document.getElementById(partA+"_"+scales[m]).value = ''; }
				}
			}
		}
	return false;
	}

	/****************************
		XBox script
	****************************/
	$(document).ready(function() {
	$('.XBox').prop("readonly", "true");
	$('.XBox').mousedown(function(evt) {
		changeValue(evt.target);
	});
	$('.XBox').keydown(function(evt) {
		displayKeyCode(evt);
	});
	});

	function changeValue(element) {
	if (element.val == undefined) {
		element = $(element); // Convert to jquery element
	}
	if (element.val() == '') {
		element.val('X');
	} else {
		element.val('');
	}
	}
	function displayKeyCode(evt) {
	var charCode = evt.which || evt.keyCode;  // any key press except tab will constitute a value change to the checkbox
	if (charCode != 9) {
		changeValue(evt.target);
		return false;
	}
	}

function CheckCopyTo() {
if (document.getElementById("PhysicianName").value != document.getElementById("PatientMD").value) {
	(document.getElementById("CopyTo").value = document.getElementById("PatientMD").value + '-' + document.getElementById("PatientMD_MSP").value + ', ' + document.getElementById("ReferralMD").value + '-' + document.getElementById("ReferralMD_MSP").value);
	(document.getElementById("CopyTo2").value = document.getElementById("PatientMD").value + '-' + document.getElementById("PatientMD_MSP").value + ', ' + document.getElementById("ReferralMD").value + '-' + document.getElementById("ReferralMD_MSP").value);
} else {
	(document.getElementById("CopyTo").value = document.getElementById("ReferralMD").value + '-' + document.getElementById("ReferralMD_MSP").value);
	(document.getElementById("CopyTo").value = document.getElementById("ReferralMD").value + '-' + document.getElementById("ReferralMD_MSP").value);
	}
}

/****************************
	Script to check for clinical conditions: DM
****************************/
function start() {
	//Check to see if DM
	if ((document.getElementById('DMT').value == '')) {
		document.FormName.DM_2.value = 'X';
	}
	if ((document.getElementById('DMT').value == 'No') || (document.getElementById('DMT').value == 'Yes') || (document.getElementById('DMT').value == 'NotApplicable')) {
		document.FormName.DM_1.value = 'X';
		document.FormName.DM_2.value = '';
	}
	if (document.getElementById("A1C").value > 6.5) {
		document.FormName.DM_1.value = 'X';
		document.FormName.DM_2.value = '';
	}

	//Check if on Insulin
	var Drug = /INSULIN/i;
	var string1 = document.getElementById("Meds").value;
	var match = string1.search(Drug);
	if (match != -1) {
		document.FormName.DM_1.value = 'X';
		document.FormName.DM_2.value = '';
	} 

	//Check to see if CKD
	if (document.getElementById('eGFRResult').value <= 60) {
		document.FormName.RenalDz_1.value = 'X';
		document.FormName.RenalDz_2.value = '';
	} else {
		document.FormName.RenalDz_1.value = '';
		document.FormName.RenalDz_2.value = 'X';
	}
}

function date() { // calculate if eGFR date is fresh, within 90 days
	var dateE = $('#eGFRDate').val(); // most recent eGFR date, in date + time stamp format
	var dateEM = dateE.split(' ')[0]; // removes the time stamp, keeping date only yyyy-mm-dd format
	var date1 = new Date(dateEM);
	var date2 = new Date(); // today in yyyy mm dd format, converted to absolute value in msec
	var timeDiff = (date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // days since last eGFR
	if (diffDays < 91) { // renal function result is fresh
		document.getElementById('eGFRConfirm').className = 'Hide DoNotPrint';
	} else {
		document.getElementById('eGFRConfirm').className = 'Show DoNotPrint';
	}
}

function dateWeight() { // calculate if Wt date is fresh, within 90 days
	var dateWt = $('#WeightDate').val(); // most recent WT date, in date + time stamp format
	var dateWtM = dateWt.split(' ')[0]; // removes the time stamp, keeping date only yyyy-mm-dd format
	var date1 = new Date(dateWtM);
	var date2 = new Date(); // today in yyyy mm dd format, converted to absolute value in msec
	var timeDiff = (date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // days since last eGFR
	if (diffDays < 91) { // renal function result is fresh
		document.getElementById('WeightConfirm').className = 'Hide DoNotPrint';
	} else {
		document.getElementById('WeightConfirm').className = 'Show DoNotPrint';
	}
}

// Alert if trying to close without saving changes
var needToConfirm = false;
document.onkeyup = setDirtyFlag;
function setDirtyFlag() {
needToConfirm = true;
}
function releaseDirtyFlag() {
needToConfirm = false; //Call this function if doesn't requires an alert.
}
window.onbeforeunload = confirmExit;
function confirmExit() {
if (needToConfirm) {
	return "You have attempted to leave this page. If you have made any changes to the fields without clicking the Save button, your changes will be lost. Are you sure you want to exit this page?";
}
}

//This opens the imaging choices popup
function bindPopup() { // needed for ContactBox posting
$(document).ready(function() {
	$('[data-toggle="popover"]').popover({
		html: true,
		placement: "bottom"
	});
});

$(function() { //Starts onload
	$('.box2').prop("readonly", true); //makes the radiologist check boxes read only
	$(".field").each(function() { //color empty demographic fields yellow
		if (($(this).val() == " ")||($(this).val() == "")||($(this).val() == null)) {
			$(this).addClass('yellow');
		}
	});
	//Decide if actively pregnant based on LMP EDC
	var gender = $('#PatientSex').val();
	var PatientAge = $('#ptAge').val();
	if (PatientAge > 54) {
		$("#PregnantNo").val('X');
	}
	if (gender == 'M') {
		$("#PregnantNo").val('X');
	}
	var edcDate = $("#EDC").val(); 
	if (!edcDate) { //This is for the servers that use EDD instead of EDC
	var edcDate = $("#oscarEDD").val();
	}
	var LMP = $("#LMP").val();
	var date1 = new Date(edcDate);
	var date2 = new Date(); //mm dd yyyy
	var timeDiff = (date1.getTime() - date2.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	if ((diffDays >= -14) && (diffDays <= 280)) { //determines patient is pregnant if difference from -14 to 280
		$("#PregnantYes").val('X');
		$("#PregnantNo").val('');
		$("#PregnantYes").css("background-color", "yellow");
		$("#LMP").val(LMP);
		$("#EDC").val(edcDate);
		$("#EDC").css("background-color", "yellow");
	} else {
		pn = $("#PregnantNo").val();
		if (pn != 'X') {
			$("#PregnantNo").css("background-color", "yellow");
		}
	}

/****************************
	OBS US calculators 
****************************/
	// Obestrical US - at specified dates
	$(".obDateMulti").unbind().click(function() {
		var edcDate = $("#EDC").val();
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
		var edcDate = $("#oscarEDD").val();
	}
		var currentPreg = $("#LMP").val();
		if (currentPreg) {
			var date1 = new Date(edcDate);
			(edcTime = date1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone
			GA1 = $("#GA1").val(); GA2 = $("#GA2").val(); GA3 = $("#GA3").val();
			if (GA1) {
			periodWeeks = $("#GA1").val();
			actualPeriod = 40 - periodWeeks;
			periodDays = actualPeriod * 7; //recommendation is 18 to 22 week US so this choses 20 weeks
			desiredTime = (edcTime - (periodDays * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate = new Date(desiredTime); //Converts back to a date
			desiredDateOutput = desiredDate.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone
			$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("For " + periodWeeks + " week US around " + desiredDateOutput + ". ") )
			$("#PregnantNo").val('');
			$("#PregnantNo").css("background-color", "white");
			}
			if (GA2) {
			periodWeeks = $("#GA2").val();
			actualPeriod = 40 - periodWeeks;
			periodDays = actualPeriod * 7; //recommendation is 18 to 22 week US so this choses 20 weeks
			desiredTime = (edcTime - (periodDays * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate = new Date(desiredTime); //Converts back to a date
			desiredDateOutput = desiredDate.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone
			$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("  For " + periodWeeks + " week US around " + desiredDateOutput + ". ") )
			$("#PregnantNo").val('');
			$("#PregnantNo").css("background-color", "white");
			}
			if (GA3) {
			periodWeeks = $("#GA3").val();
			actualPeriod = 40 - periodWeeks;
			periodDays = actualPeriod * 7; //recommendation is 18 to 22 week US so this chooses 20 weeks
			desiredTime = (edcTime - (periodDays * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate = new Date(desiredTime); //Converts back to a date
			desiredDateOutput = desiredDate.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone
			$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("  For " + periodWeeks + " week US around " + desiredDateOutput + ". ") )
			$("#PregnantNo").val('');
			$("#PregnantNo").css("background-color", "white");
			}
			$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("  Thank you. " ) );
			$("#Urgent2").val('');
					} else {
			alert("Please use the Maternity Calendar first to enter the EDC into OSCAR");
		}
	});

	// First Trimester dating US - ideally between 7-10wk
	$(".FTObsUS").unbind().click(function() {
		var edcDate = $("#EDC").val();
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
		var edcDate = $("#oscarEDD").val();
	}
		var currentPreg = $("#LMP").val();
		if (currentPreg) {
			var date1 = new Date(edcDate);
			(edcTime = date1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone

			periodWeeks1 = 7;
			actualPeriod1 = 40 - periodWeeks1;
			periodDays1 = actualPeriod1 * 7; 
			desiredTime1 = (edcTime - (periodDays1 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate1 = new Date(desiredTime1); //Converts back to a date
			desiredDateOutput1 = desiredDate1.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

			periodWeeks2 = 10;
			actualPeriod2 = 40 - periodWeeks2;
			periodDays2 = actualPeriod2 * 7; 
			desiredTime2 = (edcTime - (periodDays2 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate2 = new Date(desiredTime2); //Converts back to a date
			desiredDateOutput2 = desiredDate2.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone
$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("Please book dating US, ideally between " + desiredDateOutput1 + " and "+ desiredDateOutput2 + ". Thank you. ") )
$("#PregnantNo").val('');
$("#PregnantNo").css("background-color", "white");
$("#Urgent2").val('');
// $("#CopyTo").val(($("#CopyTo").val() ) + (", CaseRoom") )
		} else {
			alert("Please use the Maternity Calendar first to enter the EDC into OSCAR");
		}
	});

	// 2nd Trimester detail US - Ideally between 18wk - 22wk6d
	$(".DetailObsUS").unbind().click(function() {
		var edcDate = $("#EDC").val();
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
		var edcDate = $("#oscarEDD").val();
	}
		var currentPreg = $("#LMP").val();
		if (currentPreg) {
			var date1 = new Date(edcDate);
			(edcTime = date1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone

			periodWeeks1 = 18;
			actualPeriod1 = 40 - periodWeeks1;
			periodDays1 = actualPeriod1 * 7; 
			desiredTime1 = (edcTime - (periodDays1 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate1 = new Date(desiredTime1); //Converts back to a date
			desiredDateOutput1 = desiredDate1.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

			periodWeeks2 = 22.86;
			actualPeriod2 = 40 - periodWeeks2;
			periodDays2 = actualPeriod2 * 7; 
			desiredTime2 = (edcTime - (periodDays2 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate2 = new Date(desiredTime2); //Converts back to a date
			desiredDateOutput2 = desiredDate2.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone
$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("For Routine Second Trimester US between " + desiredDateOutput1 + " and "+ desiredDateOutput2 + ". Thank you. ") )
$("#PregnantNo").val('');
$("#PregnantNo").css("background-color", "white");
$("#Urgent2").val('');
// $("#CopyTo").val(($("#CopyTo").val() ) + (", CaseRoom") )
		} else {
			alert("Please use the Maternity Calendar first to enter the EDC into OSCAR");
		}
	});

	// AntePartum Hemorrhage OB US - urgent
	$(".APHObsUS").unbind().click(function() {
		var LMP = $("#LMP").val();
		var APHToday = $("#today").val();
		var edcDate = $("#EDC").val();
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
		var edcDate = $("#oscarEDD").val();
	}
		var currentPreg = $("#LMP").val();
		if (currentPreg) {
		var date1 = new Date(edcDate);
			(edcTime = date1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone
			DisplayEDC = new Date(edcTime).toString('MMM dd, yyyy').substr(4, 11); //Converts back to a date

		var LMPdate = new Date(LMP);
			(lmpTime = LMPdate.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone
			lmpDate = new Date(lmpTime); //Converts back to a date
			DisplayLMP = new Date(lmpDate).toString('MMM dd, yyyy').substr(4, 11); //Converts back to a date

		var today1 = new Date(APHToday);
			(todayTime = today1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone
		var weeks = (todayTime-lmpTime)/(1000*86400*7);
		var days = (weeks - Math.floor(weeks))*7;
		var EGA_wk = weeks.toFixed(0);
		var EGA_d = days.toFixed(0);

$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("Antepartum hemorrhage. LMP is " + DisplayLMP + ", suggesting EGA of " + EGA_wk  + "wk + " + EGA_d + "d. EDC is " + DisplayEDC + ". Thank you. ") )
$("#PregnantNo").val('');
$("#PregnantNo").css("background-color", "white");
$("#Urgent2").val('URGENT');
//$("#CopyTo").val("Maternity");
		} else {
			alert("Please use the Maternity Calendar first to enter the EDC into OSCAR");
		}
	});

	// Obestrical US - NT/Nuchal Translucency - range 11wk to 13wk6d, ideally 12wk to 13wk3d
	$(".NTObsUS").unbind().click(function() {
		var edcDate = $("#EDC").val();
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
		var edcDate = $("#oscarEDD").val();
	}
		var currentPreg = $("#LMP").val();
		if (currentPreg) {
			var date1 = new Date(edcDate);
			(edcTime = date1.getTime() + (1000 * 60 * 60 * 24)); //converts to milliseconds from 1 Jan 1970, need to add 1 day (in millisec for time zone

			periodWeeks1 = 11;
			actualPeriod1 = 40 - periodWeeks1;
			periodDays1 = actualPeriod1 * 7; 
			desiredTime1 = (edcTime - (periodDays1 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate1 = new Date(desiredTime1); //Converts back to a date
			desiredDateOutput1 = desiredDate1.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

			periodWeeks2 = 13.86;
			actualPeriod2 = 40 - periodWeeks2;
			periodDays2 = actualPeriod2 * 7; 
			desiredTime2 = (edcTime - (periodDays2 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate2 = new Date(desiredTime2); //Converts back to a date
			desiredDateOutput2 = desiredDate2.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

			periodWeeks3 = 12;
			actualPeriod3 = 40 - periodWeeks3;
			periodDays3 = actualPeriod3 * 7; 
			desiredTime3 = (edcTime - (periodDays3 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate3 = new Date(desiredTime3); //Converts back to a date
			desiredDateOutput3 = desiredDate3.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

			periodWeeks4 = 13.43;
			actualPeriod4 = 40 - periodWeeks4;
			periodDays4 = actualPeriod4 * 7; 
			desiredTime4 = (edcTime - (periodDays4 * 1000 * 60 * 60 * 24)); //Subtracts days in milliseconds
			desiredDate4 = new Date(desiredTime4); //Converts back to a date
			desiredDateOutput4 = desiredDate4.toString('MMM dd, yyyy').substr(4, 11); //This converts the date string to yyyymmdd format, adds a day though because of time zone

$("#RelevantHistory").val(($("#RelevantHistory").val() ) + ("For NT US between between " + desiredDateOutput1 + " and " + desiredDateOutput2 + ". Ideally between " + desiredDateOutput3 + " and " + desiredDateOutput4 + ". Thank you.") )
$("#PregnantNo").val('');
$("#PregnantNo").css("background-color", "white");
$("#Urgent2").val('');
// $("#CopyTo").val(($("#CopyTo").val() ) + (", CaseRoom") )
		} else {
			alert("Please use the Maternity Calendar first to enter the EDC into OSCAR");
		}
	});

	//Contact information
	var phy = $('#PhysicianName').val();
	phy1 = phy.split(',')[0];
	phy2 = phy1.replace(/[0-9,'/']/g, '');
	var p = ('Dr ' + phy2);
	$('#ContactName').val(p);
	$("#CallPos").click(function() {
		var no = $('#ContactNo').val();
		var doc = $('#ContactName').val();
		if ($("#CallPos").val() == 'X') {
			$("#CallRes").val('')
			$("#FaxPos").val('')
			$("#FaxRes").val('')
			$("#SendER").val('')
			$("#ContactNo").css("background-color", "yellow");

			$('#ContactBox').val('Please call ' + doc + ' at ' + no + ' if results are positive.');
			$('#ContactBox').attr('class', 'border2');
		}
	});
	$("#CallRes").click(function() {
		var no = $('#ContactNo').val();
		var doc = $('#ContactName').val();
		if ($("#CallRes").val() == 'X') {
			$("#CallPos").val('')
			$("#FaxPos").val('')
			$("#FaxRes").val('')
			$("#SendER").val('')
			$("#ContactNo").css("background-color", "yellow");

			$('#ContactBox').val('Please call result to ' + doc + ' at ' + no + ".");
			$('#ContactBox').attr('class', 'border2');
		}
	});
	$("#FaxPos").click(function() {
		var no = $('#faxNo').val();
		var doc = $('#ContactName').val();
		if ($("#FaxPos").val() == 'X') {
			$("#CallPos").val('')
			$("#CallRes").val('')
			$("#FaxRes").val('')
			$("#SendER").val('')
			$("#ContactNo").css("background-color", "transparent");

			$('#ContactBox').val('Please fax results to ' + doc + ' at ' + no + ' if results are positive.');
			$('#ContactBox').attr('class', 'border2');
		}
	});
	$("#FaxRes").click(function() {
		var no = $('#faxNo').val();
		var doc = $('#ContactName').val();
		if ($("#FaxRes").val() == 'X') {
			$("#CallPos").val('')
			$("#CallRes").val('')
			$("#FaxPos").val('')
			$("#SendER").val('')
			$("#ContactNo").css("background-color", "transparent");

			$('#ContactBox').val('Please fax results to ' + doc + ' at ' + no + ".");
			$('#ContactBox').attr('class', 'border2');
		}
	});
	$("#SendER").click(function() {
		var no = $('#ContactNo').val();
		var doc = $('#ContactName').val();
		if ($("#SendER").val() == 'X') {
			$("#CallPos").val('')
			$("#CallRes").val('')
			$("#FaxPos").val('')
			$("#FaxRes").val('')
			$("#ContactNo").css("background-color", "transparent");

			$('#ContactBox').val('Please send patient to ER if results are positive.');
			$('#ContactBox').attr('class', 'border2');
		}
	});
	$("#Clear").click(function() {
			$("#CallPos").val('')
			$("#CallRes").val('')
			$("#FaxPos").val('')
			$("#FaxRes").val('')
			$("#SendER").val('')
			$("#ContactBox").val('')
			$('#ContactBox').attr('class', 'border1');
			$("#ContactNo").css("background-color", "transparent");
	});

	$("#urgentStamp").click(function() {	
		if ($("#urgentStamp").val() == 'X') {
			$("#emergentStamp").val('');
			$("#Priority_2").val('X');
			$("#Priority_1").val('');
			$("#Priority_3").val('');
			$("#Priority_4").val('');
			$("#Priority_5").val('');
			$('#Urgent').val('URGENT');
			$('#Urgent2').val('URGENT');
		}
		else {
			$('#Urgent').val('');
			$('#Urgent2').val('');
			$("#Priority_2").val('');
			$('#CallRad').val('');
			$('#CallRad').hide();
			$("#ContactBox").val('');
			$('#Urgent').attr('class', 'noborder');
		}
	});
	$("#emergentStamp").click(function() {
		if ($("#emergentStamp").val() == 'X') {
			$("#urgentStamp").val('');
			$("#Priority_1").val('X');
			$("#Priority_2").val('');
			$("#Priority_3").val('');
			$("#Priority_4").val('');
			$("#Priority_5").val('');
			$('#Urgent').val('EMERGENT');
			$('#Urgent2').val('EMERGENT');
			$('#CallRad').val('Please call the radiologist to discuss all emergent cases.\n(Click here to close box)');
			$('#CallRad').show();
			$("#SendER").val('X');
			$("#SendER").click();
		}
		else {
			$('#Urgent').val('');
			$('#Urgent2').val('');
			$("#Priority_1").val('');
			$('#CallRad').val('');
			$('#CallRad').hide();
			$("#SendER").val('');
			$("#ContactBox").val('');
		}
	});

/****************************
	$("#labForm").unbind().click(function() {
			$("#labForm").val('X');
			$("#labNowForm").val('');
			$("#ClearLab").val('')
			var gf = 'Patient provided with lab requisition for eGFR.';
			$("#PatientInstructions2").val('When you get your booking you will be told when to go for this test.');
			document.getElementById('PatientInstructions2').style.fontSize = '18px';
			$("#page2").show(); // attaches lab form for eGFR
			$("#printer").val('C'); // used to print XR and Lab pages
			$("#submitDelay").val(3000);
			document.getElementById('AdditionalInstructions2').style.fontSize = '15px';
			$("#AdditionalInstructions2").val('eGFR as required by imaging department and repeated as necessary.');
			$("#Diagnosis2").val('Contrast imaging study');
			$("#RelevantHistoryText").val($("#RelevantHistoryText").val() + "\n" + gf);
	});
	$("#labNowForm").unbind().click(function() {
			$("#labNowForm").val('X');
			$("#labForm").val('');
			$("#ClearLab").val('')
			var hf = 'Patient has been asked to do eGFR';
			document.getElementById('PatientInstructions2').style.fontSize = '16px';
			$("#PatientInstructions2").val('Please go for your lab test as soon as possible as your scan will not be booked until this is done.');
			$("#page2").show(); // attaches lab form for eGFR
			$("#printer").val('C'); // used to print XR and Lab pages
			$("#submitDelay").val(3000);
			document.getElementById('AdditionalInstructions2').style.fontSize = '15px';
			$("#AdditionalInstructions2").val('eGFR as required by imaging department and repeated as necessary.');
			$("#Diagnosis2").val('Contrast imaging study');
			$("#RelevantHistoryText").val($("#RelevantHistoryText").val() + "\n" + hf);
	});
	$("#ClearLab").click(function() {
		if ($("#ClearLab").val() == 'X') {
			document.getElementById('PatientInstructions2').style.fontSize = '16px';
			$("#labForm").val('')
			$("#labNowForm").val('')
			$("#page2").hide(); // closes lab form
		}
	});
****************************/

	$("#CallRad").click(function() {
			$('#CallRad').hide();
	});
	//XBox in the modal window. Need to trigger it through the parent
	$('.mytags').on("click", $('.XBoxM'), function(evt) {
		$('.XBoxM').prop("readonly", "true");
		changeValue(evt.target);

	function changeValue(element) {
		if (element.val == undefined) {
			element = $(element); // Convert to jquery element
		}
		if (element.val() == '') {
			element.val('X');
		} else {
			element.val('');
		}
	}
	}); //Xbox in the modal window end
}); //End onload function

$(function() { //this opens up the needed pages
	var $divs = $(".divs > div")
	$divs.hide();
	$("#page1").show();
	$("#Urgent2").hide();   //hides the urgent/emergent watermark
	$("#CallRad").hide();   //hides the call rad alert box
//	$("#page16").hide();  // Prescriptions
//	$("#page17").hide();
	$(".options").hide();
	$("#xrayForm").click(function() {
		$divs.hide();
			$("#page1").show();
	});
	$(".CL").click(function() {
	$(".empty").css("background", "white");
	$(".modal-launcher").css("background", "white");
	});
	$(".CNS").click(function() {
		$("#CNS").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page3").show();
	});
	$(".HN").click(function() {
		$("#HN").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page4").show();
	});
	$(".spine").click(function() {
		$("#spine").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page5").show();
	});
	$(".msk").click(function() {
		$("#msk").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page6").show();
	});
	$(".cvs").click(function() {
		$("#cvs").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page7").show();
	});
	$(".chest").click(function() {
		$("#chest").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page8").show();
	});
	$(".git").click(function() {
		$("#git").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page9").show();
	});
	$(".gus").click(function() {
		$("#gus").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page10").show();
	});
	$(".obgyn").click(function() {
		$("#obgyn").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page11").show();
	});
	$(".trauma").click(function() {
		$("#trauma").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page12").show();
	});
	$(".ped").click(function() {
		$("#ped").css("background", "#87CEFA");
		$divs.hide();
			$("#page1").show();
		$("#page13").show();
	});

	// These do the prompting for the different decision guidelines bases on area of interest	
	$("#Head").click(function() {
		$("#CNS").css("background", "#87CEFA");
		$("#trauma").css("background", "#87B3F9");
		$("input[value='Headache_Chronic_Recurrent']").css("background", "#87CEFA");
		$("input[value='Head_Injury']").css("background", "#87CEFA");
	});
	$("#knee").click(function() {
		$("#trauma").css("background", "#87B3F9");
		$("#msk").css("background", "#87CEFA");
		$("input[value='Knee_Pain_Non_Traumatic']").css("background", "#87CEFA");
		$("input[value='Knee_Injury']").css("background", "#87CEFA");
	});
	$("#Sinuses").click(function() {
		$("#HN").css("background", "#87CEFA");
		$("input[value='Sinus_Disease']").css("background", "#87CEFA");
	});
	$("#Carotids").click(function() {
		$("#CNS").css("background", "#87B3F9");
		$("#HN").css("background", "#87CEFA");
		$("input[value='TIA']").css("background", "#87CEFA");
		$("input[value='Carotid_Bruit_Asymptomatic']").css("background", "#87CEFA");
	});
	$("#Chest").click(function() {
		$("#chest").css("background", "#87CEFA");
	});
	$("#Abdomen").click(function() {
		$("#gus").css("background", "#87B3F9");
		$("#git").css("background", "#87CEFA");
		$("#cvs").css("background", "#87B3F9");
	});
	$("#Renal").click(function() {
		$("#gus").css("background", "#87B3F9");
	});
	$("#Pelvis").click(function() {
		$("#obgyn").css("background", "#87CEFA");
	});
	$("#Obstetrical").click(function() {
		$("#obgyn").css("background", "#87CEFA");
	});
	$("#cspine").click(function() {
		$("#spine").css("background", "#87CEFA");
		$("#trauma").css("background", "#87B3F9");
		$("input[value='Neck_Pain']").css("background", "#87CEFA");
		$("input[value='Neck_Injury_Pain']").css("background", "#87CEFA");
	});
	$("#Tspine").click(function() {
		$("#spine").css("background", "#87CEFA");
		$("input[value='Mid_Back_Pain']").css("background", "#87CEFA");
	});
	$("#Lspine").click(function() {
		$("#spine").css("background", "#87CEFA");
		$("input[value='Lower_Back_Pain']").css("background", "#87CEFA");
	});
	$("#shoulder").click(function() {
		$("#msk").css("background", "#87CEFA");
		$("input[value='Shoulder_Pain']").css("background", "#87CEFA");
		$("input[value='Shoulder_Instability']").css("background", "#87CEFA");
	});
	$("#Scaphoid").click(function() {
		$("#trauma").css("background", "#87CEFA");
		$("input[value='Scaphoid_Injury']").css("background", "#87CEFA");
	});
	$("#Wrist").click(function() {
		$("#trauma").css("background", "#87CEFA");
		$("input[value='Scaphoid_Injury']").css("background", "#87CEFA");
	});
	$("#Ankle").click(function() {
		$("#trauma").css("background", "#87CEFA");
		$("input[value='Ankle_Injury']").css("background", "#87CEFA");
	});
	$("#Foot").click(function() {
		$("#msk").css("background", "#87CEFA");
		$("input[value='Foot_Pain_Chronic']").css("background", "#87CEFA");
	});
	$("#Hip").click(function() {
		$("#msk").css("background", "#87CEFA");
		$("#trauma").css("background", "#87B3F9");
		$("input[value='Hip_Pain_Non_Traumatic']").css("background", "#87CEFA");
		$("input[value='Hip_Injury']").css("background", "#87CEFA");
	});
	$("#Doppler").click(function() {
		$("#cvs").css("background", "#87CEFA");
		$("#CNS").css("background", "#87B3F9");
		$("input[value='Deep_Vein_Thrombosis']").css("background", "#87CEFA");
		$("input[value='TIA']").css("background", "#87CEFA");
	});
	$("#Leg").click(function() {
		$("#cvs").css("background", "#87CEFA");
		$("input[value='Deep_Vein_Thrombosis']").css("background", "#87CEFA");
	});
	
});

$(function() {
	var $divs = $(".divs > div")
	$(".XR").click(function() {
	$("#submitDelay").val(2500);

		$(".Inv").val(" "); //clears previous checks
		$(".box2").val(" ");
		a = $(this).attr('class');
		t = a.split(' ')[0]; // extracts first class eg CT, US, Xray
		c = a.split(' ')[1]; // extracts expected duration to test
		d = a.split(' ')[2]; // looking for CN or NC which indicates contrast
		o = a.split(' ')[3]; // looking for OC or NO which indicates oral contrast
		e = a.split(' ')[4]; // looking for anything extra for reason eg ?SOL or DO Have to watch for undefined 
		r = c.split('_')[0]; // extracts number eg 3
		s = c.split('_')[1]; // extracts letter eg D or M
		b = t.split('_')[0]; // extracts the first part of the first class eg US_A  would give US
		u = t.split('_')[1]; // extracts the second part of the first class eg US_A  would give A

		var g = '';
		if ((d == 'CN') && ((r == '1') || (r == '2') )) { //If test to be done in 4 weeks or less
			g = 'Patient has been asked to do eGFR';
			$("#PatientInstructions2").val('Please go for your lab test as soon as possible as your scan will not be booked until this is done');
		//	$("#page2").show(); // attaches lab form for eGFR
			$("#printer").val('C'); // used to print XR and Lab pages
			$("#submitDelay").val(3000); // sets submission delay
			document.getElementById('AdditionalInstructions2').style.fontSize = '15px';
			$("#AdditionalInstructions2").val('eGFR as required by imaging department and repeated as necessary.');
			$("#Diagnosis2").val('Contrast imaging study');
		}
		if ((d == 'CN') && ((r == '3') || (r == '4') || (r == 'N')) ) { //If there will be more than 4 weeks before test
			g = 'Patient provided with lab requisition for eGFR.';
			$("#PatientInstructions2").val('When you get your booking you will be told when to go for this test.');
		//	$("#page2").show(); // attaches lab form for eGFR
			$("#printer").val('C'); // used to print XR and Lab pages
			$("#submitDelay").val(3000);
			document.getElementById('AdditionalInstructions2').style.fontSize = '15px';
			$("#AdditionalInstructions2").val('eGFR as required by imaging department and repeated as necessary.');
			$("#Diagnosis2").val('Contrast imaging study');
		}
		if (d == 'NC') {
				}
		if (b == 'CT') {
			$("#CT").val('X');
		}
		if (b == 'US') {
			$("#Ultrasound").val('X');
		}
		if (b == 'XRAY') {
			$("#Xray").val('X');
		}
		if (b == 'IR') {
			$("#SpecialProcedures").val('X');
			document.FormName.AnticoagulantNo.value = '';
		}
		if (u == 'A') {
		 $('#US_Abdomen').click();
		}
		if (u == 'AP') {
		 $('#US_Abd_Pel').click();
		}
		if (u == 'R') {
		 $('#US_Renal').click();
		}
		if (u == 'PO') {
		 $('#US_Pel_Obs').click();
		}
		if (u == 'TBS') {
		 $('#US_Thyroid_Breast_Scrotal_Other').click();
		}
		m = $(this).val();
		n = $(this).closest('.modal-content').attr('id');
		o = n.replace(/_/g, ' ');
		p = '';
		if ((e !== 'XR') && (e != 'DO') && (e != undefined)) { // DO indicates it is a doppler request
			p = e; // p is extra text that can be added to support a request
		}

		var dd = $("#DDR").val();
		var regEx = /</g;
		var match = dd.search(regEx);
		var ddre = 0;
		if (match != -1) { //This looks for prescence of < symbol which means the result is negative. Answer minus one means symbol not found
			var ddre = 1; // if ddre is 1 then then is a less than symbol so ddimer is negative.
		}
		if (e == 'DO') { //indicates this is a doppler request
			WellScore = $('#WellsS').val();
			WellInter = $('#WellsI').val();
			Ddimer = $("#DDR").val();
			DDInter = $('#DDI').val();
			//Ddimer = '400';
			//DDInter = 'neg';

			if (!WellScore) {
				return confirm("Please start with a Wells score.");
			}
			if ((WellScore < 1) && (((Ddimer < 500) && (Ddimer > 0)) || (ddre == 1))) {
				return confirm("In a low risk patient by Wells Criteria with a negative D-dimer test the risk of DVT is very low.\nIn general doppler US is not indicated.\nIf you still wish to proceed with a doppler US you will need to call the radiologist.");
			}
			if (((WellScore < 3) && (!Ddimer))) {
				return confirm("As per local protocol, in low and moderate risk patient by Wells Criteria,\na D-dimer is required before proceeding with a doppler US.\nIf there are special circumstances you need to call the radiologist.");
			}
			if ((((WellScore < 3) && (WellScore > 0)) && (Ddimer > 499)) || (WellScore > 2)) {
				if (!Ddimer) {
					$("#RelevantHistoryText").html(o + '\n' + 'Wells score: ' + WellScore + '  &nbsp&nbsp&nbsp' + WellInter).prop('readonly', true);
				} else {
					$("#RelevantHistoryText").html(o + '\n' + 'Wells score: ' + WellScore + '  &nbsp&nbsp&nbsp' + WellInter + '\n' + 'D-Dimer: ' + Ddimer + ' &nbsp&nbsp' + DDInter).prop('readonly', true);
				}
			}
			if (((WellScore < 3) && (WellScore > 0)) && (((Ddimer < 500) && (Ddimer >= 0) && (Ddimer != '')) || (ddre == 1))) {
				$("#RelevantHistoryText").html(o + '\n' + 'Wells score: ' + WellScore + '  &nbsp&nbsp&nbsp' + WellInter + '\n' + 'D-Dimer: ' + Ddimer + ' &nbsp&nbsp' + DDInter + '\n' + 'Ongoing clinical concern despite the -ve Ddimer.').prop('readonly', true);
			}
		} else {
			$("#RelevantHistoryText").html(o + ' ' + p + '\n' + g).prop('readonly', true);
		}

		$(".modal-content").removeClass("active");
		$("#ExamRequestedText").val(m);
		if (r == 'N') {
		   r = 0;
		   }
		$("#priorityScore").val(r);
		$("#priorityScore").prop('readonly', true);
		if (r == '1') {
			 $("#emergentStamp").val('X');
			 $("#emergentStamp").click();
			 var $exam = $('#ExamRequestedText');
			 $exam.val($exam.val() + ' - Please do emergently');
		}
		if (r == '2') {
			 $("#urgentStamp").val('X');
			 $("#urgentStamp").click();
			 var $exam = $('#ExamRequestedText');
			 $exam.val($exam.val() + ' - Please try to do within 7 days');
		}
		if (r == 'U2') {
			 $("#urgentStamp").val('X');
			 $("#urgentStamp").click();
			 var $exam = $('#ExamRequestedText');
			 $exam.val($exam.val() + ' - Please try to do within 2 business days');
		}
		$("#GuideConfirm").html('&#164').prop('readonly', true);
		$('#RelevantHistory').focus();
	});
});

//This opens the grey imaging choices popup for CAR cues
$(function() {
	$(".modal-launcher").click(function() {
		$(".modal-content").removeClass("active");
		var content = $(this).val();
		var t = "#" + content;
		$(t).toggleClass("active");
	});
	$(".modal-close").click(function() {
		$(".modal-content").removeClass("active");
	});
	$('.mytags').on("click", $('.XBoxM'), function() {
		DDInter = $('#DDI').val();
		var w = 0;
		if ($('#Wells1').val() == 'X') {
			w += 1;
		}
		if ($('#Wells2').val() == 'X') {
			w += 1;
		}
		if ($('#Wells3').val() == 'X') {
			w += 1;
		}
		if ($('#Wells4').val() == 'X') {
			w += 1;
		}
		if ($('#Wells5').val() == 'X') {
			w += 1;
		}
		if ($('#Wells6').val() == 'X') {
			w += 1;
		}
		if ($('#Wells7').val() == 'X') {
			w += 1;
		}
		if ($('#Wells8').val() == 'X') {
			w += 1;
		}
		if ($('#Wells9').val() == 'X') {
			w += -2;
		}
		if ($('#Wells10').val() == 'X') {
			w += 0;
		}
		$('#WellsS').val(w);

		if (w < 1) {
			$('#WellsI').val('Low Risk (3%)');
			$('#WellsA').val('Consider ordering a D-dimer and if negative consider reassuring patient.');
			$("#DDButton").css("background-color", "yellow");
			$("#DVTDoppler").css("background-color", "transparent");
			$("#DVTDopplerR").css("background-color", "transparent");
			$("#DVTDopplerL").css("background-color", "transparent");
		}
		if ((w == 1) || (w == 2)) {
			$('#WellsI').val('Moderate Risk (17%)');
			$('#WellsA').val('Consider ordering a D-dimer. If postitive proceed with doppler. If negative reassess patient and if ongoing clinical concern consider a doppler');
			$("#DDButton").css("background-color", "yellow");
			$("#DVTDoppler").css("background-color", "transparent");
			$("#DVTDopplerR").css("background-color", "transparent");
			$("#DVTDopplerL").css("background-color", "transparent");
		}
		if (w > 2) {
			$('#WellsI').val('High Risk (53 - 75%)');
			$('#WellsA').val('Comsider anticoagulation and ordering a doppler. If doppler is negative consider doing a D-dimer (and if D-dimer is positive consider reassessing patient and repeating doppler in one week.)');
			$("#DDButton").css("background-color", "transparent");
			$("#DVTDoppler").css("background-color", "yellow");
			$("#DVTDopplerR").css("background-color", "yellow");
			$("#DVTDopplerL").css("background-color", "yellow");
		}
		if ( ((w > 0)&&(w <3)) && (DDInter == 'Neg') ) {
			$('#WellsA').val('DDimer is negative and Wells Score is moderate, so risk for DVT is low. Reassess patient and if there remains high clinical suspicion for DVT, consider ordering a doppler.');
			$("#DDButton").css("background-color", "transparent");
			$("#DVTDoppler").css("background-color", "#EEE8AA");
			$("#DVTDopplerR").css("background-color", "#EEE8AA");
			$("#DVTDopplerL").css("background-color", "#EEE8AA");
		}
		if ( (w < 1) && (DDInter == 'Neg') ) {
			$('#WellsA').val('D-Dimer is negative and Wells Score is low, so risk for DVT is very low. Further investigation is unlikely to be helpful unless there ia a change in clinical condition.');
		}
		if  (DDInter == 'Pos') {
			$('#WellsA').val('D-Dimer is positive. Please complete the Wells score and then consider ordering a doppler.');
			$("#DDButton").css("background-color", "transparent");
			$("#DVTDoppler").css("background-color", "yellow");
			$("#DVTDopplerR").css("background-color", "yellow");
			$("#DVTDopplerL").css("background-color", "yellow");
		}
	});

	$('.mytags').on("click", $('.XBoxM'), function() { //This checks to see if there is a D-dimer result done within 4 days
		var d = $('#DD').val();
		var e = $('#DDDate').val();
		var dd = $("#DD").val();
		var regEx = /</g;
		var match = dd.search(regEx);
		var ddre = 0;
		if (match != -1) { //This looks for prescence of < symbol which means the result is negative. Answer minus one means symbol not found
			var ddre = 1; // if ddre is 1 then then is a less than symbol so D-dimer is negative.
		}
		var date1 = new Date(e);
		var date2 = new Date(); //mm dd yyyy 
		var timeDiff = (date2.getTime() - date1.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
		if (diffDays < 5) {
			$('#DDR').val(d);
			if ((d < 500) || (ddre == 1)) {
				$('#DDI').val('Neg');
				$("#DDButton").css("background-color", "transparent");
			}
			if (d > 499) {
				$('#DDI').val('Pos');
				$("#DVTDoppler").css("background-color", "yellow");
				$("#DVTDopplerR").css("background-color", "yellow");
				$("#DVTDopplerL").css("background-color", "yellow");
				$("#DDButton").css("background-color", "transparent");
				$('#WellsA').val('Comsider anticoagulation and getting an urgent doppler US.');
			}
		}
	});

	$("#DDButton").click(function() {
		$("#printer").val('D');
		$("#PatientInstructions2").val('PLEASE GO FOR THIS TEST AS SOON AS POSSIBLE!');
		$("#AdditionalInstructions2").val('D-Dimer');
		$("#Diagnosis2").val('Rule out DVT');
		$("#page1").hide();
	//	$("#page2").show();
		$(".modal-content").removeClass("active");
	});
	// Here is the text in the modal popup window. You can insert as text or html if you want to format it
	$('#Congenital_Brain_Disorder1').text('MRI is the best imaging modality for malformations of the brain.');
	$('#TIA1').text('Urgent imaging should be performed in all cases of high risk TIA.');
	$('#TIA2').text('US carotids can be effective for screening the cervical common carotid and proximal internal carotid arteries but does not show the intracranial circulation. It is operator dependant.');
	$('#TIA3').text('CTA can be useful to show the intracranial circulation');
	$('#Dementia1').text('CT head is indicated to screen for common causes.');
	$('#Dementia2').text('CT head with contrast is indicated if there is a history of malignancy and if you suspect a metastasis.');
	$('#Psychosis_New1').text('CT head is indicated to screen for common causes.');
	$('#Psychosis_New2').text('CT head with contrast is indicated if there is a history of malignancy and if you suspect a metastasis.');
	$('#Epilepsy0').text('Imaging is generally not required for idiopathic generalized epilepsy.').css('font-weight', 'bold');
	$('#Epilepsy1').text('If needed use MRI.');
	$('#Headache_Chronic_Recurrent1').text('IN THE ABSENCE OF FOCAL FEATURES IMAGING IS NOT OFTEN HELPFUL.').css('font-weight', 'bold');
	$('#Headache_Chronic_Recurrent3').text('If there are no hard neurological findings then start with a non contrast CT.');
	$('#Headache_Chronic_Recurrent4').text('In the presence of hard neurological findings on examination or a history of malignancy and you are concerned about metastatic disease, a contrast CT may be more appropriate.');
	$('#Headache_Chronic_Recurrent2').text('Features that justify a CT include\n1) Recent onset and rapidly increasing frequency and severity\n2) Headache waking patient from sleep\n3) Associated dizziness, lack of coordination, paraesthesias or new neurologic deficits\n4) New onset of headache with history of malignancy or immunodeficiency.');
	$('#Headache_Low_Pressure1').text('Headache that is intermittent and happens when upright and resolves when recumbent.\nMRI is best modality if available.');
	$('#Headache_Low_Pressure2').text('CT if MRI not available.');
	$('#Hydrocephalus_suspect_shunt_malfunction1').text('Symptoms include:\n-Headaches\n-Vomiting\n-Lethargy (sleepiness)\n-Irritability\n-Swelling or redness along the shunt tract\n-Periods of confusion\n-Seizures').css('font-weight', 'bold');
	$('#Sinus_Disease1').text('Acute sinusitis can be diagnosed clinically and generally does not require imaging.').css('font-weight', 'bold');
	$('#Sinus_Disease2').text('If the symptoms persist for more than 10 days on appropriate treatment, low dose CT of the sinuses may be required.\nCT is also indicated if there are orbital signs or symptoms or if the patient is immunocompromised.');
	$('#Sinus_Disease3').text('Low dose CT is the examination of choice in acute sinusitis,but XR is a reasonable option if CT is unavailable');
	$('#Headache_Suspect_SAH0').text('Send to ER. CT should be obtained urgently.').css('font-weight', 'bold');
	$('#Headache_Suspect_SAH1').text('CT should be obtained urgently.');
	$('#Headache_Suspect_SAH2').text('CTA should be used to identify an aneurysm or other vascular malformation if there is a subarachnoid hemorrhage identified on CT. ');
	$('#Pituitary0').text('Xray is not indicated.').css('font-weight', 'bold');
	$('#Pituitary1').text('Patients who require investigation need MRI or CT.');
	$('#Pituitary2').text('CT can be used if MRI is unavailable or contraindicated.\nIf vision is stable can do electively.');
	$('#Pituitary3').text('If vision is objectively affected (blindness,diploplia,visual field loss) the examination should be done as soon as possible. An urgent ophthalmological consultation may be helpful.');
	$('#Posterior_Fossa1').text('MRI is the imaging modality of choice to investigate suspected posterior fossa lesions.');
	$('#Posterior_Fossa2').text('CT is an acceptable alternative if MRI is unavailable or contraindicated.\nIf considering a CVA or cerebellar atrophy, start with a non contrast CT');
	$('#Posterior_Fossa3').text('If considering a tumor:\nPrimary (haemangioblastoma)\nMetastatic (lung,breast,melanoma,thyroid,renal)\nOrder a contrast CT');
	$('#SNHL_Acoustic_Neuroma0').text('Referral to a specialist should precede imaging.').css('font-weight', 'bold');
	$('#SNHL_Acoustic_Neuroma1').text('MRI is preferred modality if investigation is required.');
	$('#SNHL_Acoustic_Neuroma2').text('CT is an acceptable alternative if MRI is unavailable or contraindicated.\nRight sided symptoms');
	$('#SNHL_Acoustic_Neuroma3').text('Left sided symptoms.');
	$('#Vertigo_Middle_Inner_Ear1').text('Referral to a specialist should precede imaging, as these symptoms requires ENT, neurological, or neurosurgical expertise.').css('font-weight', 'bold');
	$('#Multiple_Sclerosis1').text('MRI is the best imaging modality for diagnosis and follow-up of multiple sclerosis and for investigating other forms of white matter disease.');
	$('#Stroke_Acute1').text('Time is critical. Consider calling 911 and sending to ER.').css('font-weight', 'bold');
	$('#Stroke_Acute2').text('Appropriate investigations in the ER include urgent CT and CTA of the head.');
	$('#Visual_Disturbance0').text('Refer to ophthalmology urgently. Specialist can diagnose many cases without imaging.').css('font-weight', 'bold');
	$('#Visual_Disturbance1').text('However, if imaging is indicated, MRI is the best imaging modality.');
	$('#Visual_Disturbance2').text('CT may be used if MRI is unavailable or contraindicated.');
	$('#Carotid_Bruit_Asymptomatic1').text('Although US can detect carotid stenosis, it is not usually indicated because surgery is not recommended for asymptomatic carotid stenosis.').css('font-weight', 'bold');
	$('#Dry_Mouth_CTD1').text('Radionuclide sialoscintigraphy is a useful test to document the function of the major salivary glands');
	$('#Hyperparathyroidism1').text('The imaging modality used is dependent on local experience and expertise.');
	$('#Hyperparathyroidism2').text('A parathyroid scan can help distinguish between parathyroid adenoma and hyperplasia in patients with a high clinical suspicion of hyperfunctioning parathyroid tissue.');
	$('#Hyperparathyroidism3').html('<b>Specialist request</b>\nCT may be useful where the parathyroid scan is negative and to improve localization of parathyroid adenoma.');
	$('#Hyperparathyroidism4').html('<b>Specialist request</b>\nMRI may be useful where the parathyroid scan is negative and to improve localization of parathyroid adenoma.');
	$('#Neck_Mass1').text('US is the best initial imaging modality for assessing a neck mass.\nDepending on results one can proceed to FNAC.');
	$('#Neck_Mass2').text('CT could be used to determine the full extent of large lesions not fully visualized by US.');
	$('#Neck_Mass3').text('MRI could be to determine the full extent of large lesions is not fully visualized by US.');
	$('#Orbital_Lesions1').text('MRI is the modality of choice for investigating problems such as proptosis.');
	$('#Orbital_Lesions2').text('CT may be used if MRI is unavailable and may complement MRI in the characterization of lesions, e.g. calcification.');
	$('#Orbital_Lesions0').html('<b>X-ray is not a sufficiently sensitive modality to justify its use for this condition.</b>');
	$('#Orbital_Lesion_Trauma1').text('CT is indicated when an orbital fracture is suspected.');
	$('#Orbital_Lesion_FB1').text('XR is the only imaging required to exclude a metallic foreign body.').css('font-weight', 'bold');
	$('#Orbital_Lesion_FB2').text('CT is indicated when XR does not show a foreign body but one, which may not be metallic, is strongly suspected, when multiple foreign bodies are present, or when it is not certain whether a foreign body is intraocular.');
	$('#Orbital_Lesion_FB3').text('US can also be used for radiolucent foreign bodies or where XR is difficult');
	$('#Salivary_Mass1').text('US is the best initial imaging modality for a suspected salivary mass; proceed to FNAC if necessary');
	$('#Salivary_Mass2').text('If extension into deep spaces of the neck is suspected, MRI or CT should be carried out.');
	$('#Swallowed_FB0').text('If the clinical history and findings suggest the presence of a foreign body, direct examination of the oropharynx, laryngoscopy, and endoscopy are the investigations of choice.').css('font-weight', 'bold');
	$('#Swallowed_FB1').text('XR Only indicated if a radio-opaque foreign body is suspected.');
	$('#TMJ_Dysfunction1').text('MRI is the best imaging modality to show internal derangement of the temperomandibular joint, but it should only be ordered by a specialist or after consultation with a radiologist.');
	$('#TMJ_Dysfunction2').text('XRay is not usually helpful because it shows only late bony changes not the internal derangement which causes the symptoms.').css('font-weight', 'bold');
	$('#Thyroid_Nodule1').text('In patients with a palpable thyroid nodule and a normal or high serum TSH, US should be performed to confirm the presence of a nodule and to determine if there are multiple nodules.');
	$('#Thyroid_Nodule2').text('Thyroid scanning is indicated in patients with a palpable nodule and a low serum TSH. Cold nodules should be assessed with US.\nA thyroid scan is also effective for locating ectopic thyroid tissue.');
	$('#Thyroid_Nodule3').text('FNAB indicated in all nodules >1-1.5 cm. following US assessment, unless they have a typically benign appearance.');
	$('#Thyrotoxicosis1').text('A thyroid uptake and scan is often required to determine the underlying cause of hyperthyroidism and to guide treatment decisions.');
	$('#Salivary_Obstruction1').text('Imaging is indicated to assess possible salivary obstruction in patients with intermittent, food-related swelling. The choice of imaging depends on local experience and expertise.');
	$('#Salivary_Obstruction2').text('XR can be used to rule out a salivary duct calculusin the floor of the mouth.');
	$('#Atlanto_Axial_Instability1').text('Lateral cervical spine XRs in flexion and extension are the appropriate imaging to assess possible cervical spine instability in patients with rheumatoid arthritis, Downs syndrome, etc.');
	$('#Atlanto_Axial_Instability2').text('MRI is valuable to show cord damage secondary to chronic atlanto-axial instability.');
	$('#Myelopathy1').text('MRI is the best imaging modality for evaluating suspected spinal cord lesions and possible cord compression');
	$('#Myelopathy2').text('CT is usually indicated only if better bony detail is required.');
	$('#Myelopathy3').text('CT myelography may be required if MRI is contraindicated or a diagnostic dilemma remains after CT or MRI.');
	$('#Discitis_or_Osteomyelitis1').text('MRI is the best imaging modality for evaluating suspected discitis or osteomyelitis.');
	$('#Discitis_or_Osteomyelitis2').text('CT is usually indicated only if better bony detail is required.');
	$('#Discitis_or_Osteomyelitis3').text('If MRI is contraindicated or the findings equivocal, a combined bone and gallium scintigraphy is helpful. The combination of bone and gallium scanning is more specific than MRI especially in the postoperative or post instrumentation setting. It can also be used to assess the presence of residual infection after therapy.');
	$('#Neck_Pain1').text('Xray is generally not indicated as degenerative changes begin to appear on Xray in early middle age and are usually unrelated to the patients symptoms.').css('font-weight', 'bold');
	$('#Neck_Pain2').text('Imaging is only indicated when there are neurological signs or symptoms, or if pain persists after conservative management for more than four weeks.');
	$('#Neck_Pain3').text('CT is indicated only when MRI is contraindicated or not available.');
	$('#Mid_Back_Pain1').text('XR may be used if a compression fracture or a metastasis is suspected. However, it does not distinguish between an acute and an old fracture and it is not as sensitive as MRI for metastases.');
	$('#Mid_Back_Pain2').text('When malignancy is suspected or known, in osteoporotic patients especially to determine age of compression fractures, to aid in selection of vertebral levels for vertebroplasty, to evaluate patients in whom other investigations of the T-Spine are negative (assessment of chest wall, ribs etc), consider bone scan with SPECT (+/-CT)');
	$('#Mid_Back_Pain3').text('If there is clinical concern about an epidural abscess or hematoma which may be present with acute pain but no neurological symptoms, urgent MRI imaging is required. Imaging is otherwise only indicated when there are neurological signs or symptoms, or if pain persists after conservative management for more than four weeks.\nCT is only indicated if MRI is contraindicated or unavailable, or if more bony detail is necessary.');
	$('#Lower_Back_Pain1').html('Imaging is only indicated if there are red flag indications:\n1) Suspected cancer\n2) Suspected infection\n3) Cauda equina syndrome\n4) Severe or progressive neurologic deficit\n5) Suspected compression fracture\n\nIf there is clinical concern about an epidural abscess or hematoma which may present with acute pain but no neurological symptoms, urgent imaging is required.\n\nIn patients with suspected uncomplicated herniated disc or spinal stenosis imaging is only indicated after an unsuccessful 4-6 week trial of conservative management.\n\n <a href="http://www.choosingwiselycanada.org/materials/imaging-tests-for-lower-back-pain-when-you-need-them-and-when-you-dont/" target="_blank">Choosing Wisely:Imaging for LBP</a> ').css('font-weight', 'bold');
	$('#Lower_Back_Pain2').text('If imaging is indicated, MRI is the best modality.CT is only indicated if MRI is contraindicated or unavailable. CT can provide excellent imaging. In very large patients, image noise can be a problem. The radiation dose is also a consideration.');
	$('#Lower_Back_Pain3').text('XRay may be used if a compression fracture or a metastasis is suspected. However, it does not distinguish between an acute and an old fracture and it is not as sensitive as MRI for metastases.');
	$('#Lower_Back_Pain4').text('When malignancy is suspected or known, in osteoporotic patients especially to determine age of compression fractures, to aid in selection of vertebral levels for vertebroplasty, or to evaluate patients in whom other investigations of the L-Spine are negative. NM can be useful to localize fractures not visible on conventional X-Ray.');
	$('#Osteomyelitis1').text('XR is indicated for initial imaging.');
	$('#Osteomyelitis2').text('MRI is an excellent imaging modality to assess osteomyelitis and associated soft tissue abnormalities, especially in the spine.');
	$('#Osteomyelitis3').text('Bone scan (Two- or three-phase skeletal scintigraphy) is useful after a normal or equivocal x-ray if osteomyelitis is suspected as a normal bone scan makes osteomyelitis very unlikely. If osteomyelitis is suspected but there are no localizing signs or symptoms, skeletal scintigraphy is useful; however, findings are not specific.\nTc-99-HMPAO and In-111-labelled white cell scans are an alternative to MRI. Gallium-67 Citrate imaging is useful for vertebral osteomyelitis and chronic infections. In-111-labelled white cells are useful for infections in bones or joints. Combined leukocyte and marrow imaging is currently the technique of choice for peri-prosthetic infection (see also painful prosthesis D22). The use of those specialized techniques is usually reserved for cases with abnormal bone scans.');
	$('#Osteomyelitis4').html('<b>CT is only used when the above tests have been performed</b>\nCT is useful to guide soft tissue and bone biopsy and is the best imaging modality to evaluate for sequestra in chronic osteomyelitis.');
	$('#Primary_Bone_Tumour1').text('XR should be performed when there is bone pain that is not resolving, and it may be the only imaging required for some benign bone lesions.');
	$('#Primary_Bone_Tumour2').text('If the XR appearances are suggestive of a malignant bone tumour, referral to a specialist centre should not be delayed. MRI is the best imaging modality for local staging.');
	$('#Primary_Bone_Tumour3').text('If the XR appearances are suggestive of a primary bone tumour, obtaining skeletal scintigraphy should not delay referral to a specialist centre. NM is primarily used for evaluating the skeleton for additional sites of involvement; the bone scan may overestimate the local tumour extent. In most circumstances, a normal bone scan excludes malignancy. The role of FDG-PET remains to be clarified and may have a role for identification of distant metastasis (bone and non-bone). PET/CT fusion images may be helpful for targeting areas with more cellular metabolic activity (although biopsy should be carried out in specialized bone tumour centres where histological expertise and knowledge of surgical approach is available).');
	$('#Primary_Bone_Tumour4').text('CT may be useful in some tumours, such as osteoid osteoma, and can demonstrate intratumoral calcification and ossification better than MRI, but it should only be ordered by a specialist or after consultation with a radiologist.');
	$('#Skeletal_Metastases1').text('Bone scintigraphy is useful for assessing the presence and extent of skeletal metastases in patients with known primary cancers both at initial presentation and in follow-up. Its sensitivity and specificity is increased by using SPECT (and SPECT-CT whenever available). It is more sensitive for osteoblastic metastases and relatively insensitive in assessing the extent of multiple myeloma and purely osteolytic metastases. It is moderately specific and may require correlation with other imaging modalities. Bone scintigraphy may also be used to assess response to treatment, although the flare phenomena may suggest progression if bone scans are performed too soon after the initiation of systemic therapy (< 3 months).');
	$('#Skeletal_Metastases2').text('MRI is useful to assess and characterize skeletal metastases, particularly in the axial skeleton. It may underestimate peripheral lesions that are not included in the field of view but whole-body examinations using diffusion-weighted sequences are becoming more widespread. Its sensitivity is lower for small osteoblastic metastases.');
	$('#Skeletal_Metastases3').text('XRs are only useful for the assessment of focal symptomatic sites or for correlation with a NM examination.');
	$('#Soft_Tissue_Mass1').text('MRI is the best imaging modality for evaluating soft tissue masses and in some cases may provide a specific diagnosis.');
	$('#Soft_Tissue_Mass2').text('US is useful for distinguishing between solid and cystic masses. It can be used to determine appropriate evolution of a presumed hematomas or follow other probably benign lesions. Percutaneous biopsy under US guidance can be carried out in specialized bone tumour centres where histological expertise and knowledge of surgical approach is available.');
	$('#Soft_Tissue_Mass3').text('XR can identify calcified (and sometimes fatty) tumor matrix and underlying osseous abnormalities. CT may also be useful in this regard.');
	$('#Bone_Pain1').text('XR is an important first step in evaluation of focal bone pain.');
	$('#Bone_Pain2').text('Bone scan is indicated if pain persists with normal XR or equivocal and abnormal XR. Bone scans are commonly positive in patients with persistent bone pain and may be helpful in directing more specific studies.');
	$('#Bone_Pain3').text('MRI is an appropriate imaging modality if pain persists and XR and NM are normal. MRI may also provide further information when XR and/or NM findings are abnormal.');
	$('#Bone_Pain4').html('<b>CT is only used to clarify an Xray finding.</b>\nCT can assist in further characterization of bony abnormalities identified on XR, NM/MRI. It may be useful in planning bone biopsy.');
	$('#Myeloma1').text('XR indicated for initial staging and planning for possible radiation therapy. Follow up of abnormalities can be limited to specific sites.');
	$('#Myeloma2').text('MRI screening examination of the of the axial skeleton (spine, pelvis, proximal femora) is very sensitive, and particularly useful in patients with diffuse osteopenia or known nonsecretory myeloma. It may be used for evaluation of a focal mass or follow up of disease extent.');
	$('#Myeloma3').text('NM has a limited senstivity and may not detect all sites of involvement.');
	$('#Metabolic_Bone_Disease1').text('XR is the best imaging modality for identifying the characteristic features of some metabolic bone diseases such as hyperparathyroidism and osteomalacia. It may also identify new vertebral compression fractures in patients with osteoporosis.\nCorrelation with NM may be required.');
	$('#Metabolic_Bone_Disease2').text('DEXA is the standard technique to determine bone density.Quantitative CT can also accurately measure bone density.');
	$('#Metabolic_Bone_Disease3').text('NM can help determine some causes of hypercalcemia (e.g. hyperparathyroidism, certain metastases), and of raised alkaline phosphatase (e.g. Pagets disease, some metastases). Bone scans can also differentiate new from old vertebral fractures.');
	$('#Osteomalacia_With_Pain1').text('XR is the best initial imaging modality to establish a cause of local pain or to assess an equivocal lesion identified on NM.');
	$('#Osteomalacia_With_Pain2').text('NM may demonstrate abnormal increased activity and associated complications (e.g. pseudo-fractures).');
	$('#Osteomalacia_With_Pain3').text('MRI may be used to establish the cause of local bone pain not shown on XR or to assess equivocal XR findings. May also be used in evaluation of complications, dating of fractures and identification of occult fractures if X Rays negative.');
	$('#Painful_Osteoporotic_Compression_Fracture1').text('Xray indicated to demonstrate compression fractures, but cannot always distinguish acute from old fractures without previous imaging for comparison.');
	$('#Painful_Osteoporotic_Compression_Fracture2').text('NM or MRI are more useful in distinguishing between recent and old fractures and can help exclude pathological fractures.');
	$('#Painful_Osteoporotic_Compression_Fracture3').text('MRI is the best imaging modality for distinguishing between acute and chronic osteoporotic collapse, which is important for pre-vertebroplasty or kyphoplasty assessment. It is also the best modality for distinguishing between osteoporotic and malignant vertebral collapse.');
	$('#Arthritis_Presentation1').text('XR may be helpful to determine the type of arthritis, although visible bony changes are often a relatively late feature.\nIn suspected rheumatoid arthritis, XR of the feet may show erosions in asymptomatic as well as symptomatic feet, even when symptomatic hands often appear normal.\nOnly symptomatic joints should be x-rayed unless otherwise indicated by other clinical investigations.');
	$('#Arthritis_Presentation2').text('MRI can show acute synovitis, articular cartilage damage, early erosions and bone marrow edema better than XR.');
	$('#Arthritis_Presentation3').text('NM can show acute synovitis and its distribution.');
	$('#Arthritis_Followup1').text('XR is the investigation of choice.');
	$('#Arthritis_Followup2').text('MRI or US may be used by a specialist to assist management decisions.');
	$('#Shoulder_Pain1').text('XR may demonstrate acromioclavicular osteoarthrosis and acromial enthesophytes, subacromial space narrowing, tendon calcification, and glenohumeral osteoarthrosis.');
	$('#Shoulder_Pain2').text('US provides dynamic assessment of shoulder impingement and demonstrates rotator cuff tears or tendinopathy. It requires a trained-operator.');
	$('#Shoulder_Pain3').text('MRI allows precise assessment of the extent of rotator cuff tears, and it also shows bursal inflammatory changes and other associated abnormalities.');
	$('#Shoulder_Instability1').text('Xray is indicated to assess glenohumeral congruence and demonstrates bony abnormalities (Bankart and Hill-Sachs fractures).');
	$('#Shoulder_Instability2').text('MRI arthrogram  can be used in certain circumstances  to assess glenoid labrum, glenohumeral ligaments, cartilage and synovial cavity.');
	$('#Shoulder_Instability3').text('CT arthrogram can be used in certain circumstnces to assess glenoid labrum, glenohumeral ligaments, cartilage and synovial cavity.');
	$('#Sacroiliac_Pain1').text('XR is usually the first initial imaging modality for the assessment of sacroiliitis in patients with seronegative arthropathy.');
	$('#Sacroiliac_Pain2').text('MRI is the imaging modality of choice when strong suspicion of early sacroiliitis exists and the XR is normal.');
	$('#Sacroiliac_Pain3').text('MRI is more sensitive than CT for early sacroiliitis, but CT may suffice if MRI is not readily available. CT may demonstrate early erosions when XR is normal.');
	$('#Sacroiliac_Pain4').text('MRI is preferred over NM for early sacroiliitis, but NM may suffice if MRI is not readily available.');
	$('#Hip_Pain_Non_Traumatic1').text('XR is indicated as the initial imaging modality for persistent pain.');
	$('#Hip_Pain_Non_Traumatic2').text('MRI is the best modality for further evaluation of persistent hip pain if the XR is normal. MRI arthrography is indicated for suspected labral tears.');
	$('#Hip_Pain_Non_Traumatic3').text('MRI is preferred over NM since NM is less specific, but NM may suffice if MRI is not readily available.\nMay be a screening tool before MRI, especially in older patients (osteoporotic fractures).\nIt should be noted that SPECT (or SPECT-CT whenever available) should be used.\nBone scans may show pathology that may cause referred pain.');
	$('#Avascular_Necrosis1').text('XR is indicated as the initial imaging modality, but it only becomes abnormal in established disease and may be negative within the first 6-9 months.');
	$('#Avascular_Necrosis2').text('MRI is the most sensitive imaging modality for the detection of early avascular necrosis and will show the extent of necrosis. MRI is useful to detect occult avascular necrosis in the contralateral hip. It may be required for surgical planning.');
	$('#Avascular_Necrosis3').text('NM can be used if MRI is not readily available.');
	$('#Avascular_Necrosis4').text('CT is not as sensitive but may be used if MRI is not readily available.');
	$('#Knee_Pain_Non_Traumatic0').html('<b>Generally Xrays are not indicated unless they may change the management of the patient.\nSymptoms frequently arise from soft tissues which will not show on Xray, and osteoarthritic changes are common.</b>');
	$('#Knee_Pain_Non_Traumatic1').html('<b>Xray is indicated in the following circumstances:\n1) Sudden onset or exacerbation of pain;\n2) Pain persisting more than 6 weeks in children and young adults;\n3) Suspected intra-articular bodies (Xray will only identify radio-opaque intra-articular bodies);\n4) For pre-operative evaluation for knee replacement surgery.</b>');
	$('#Knee_Pain_Non_Traumatic2').text('MRI is the best imaging modality for the assessment of internal knee derangement (eg. meniscal tears, intra-articular bodies).');
	$('#Knee_Pain_Non_Traumatic3').text('US is indicated to diagnose a Bakers cyst.\nFor most other indications MRI is generally preferred over US because it evaluates the entire knee and it is not operator-dependent.');
	$('#Knee_Pain_Non_Traumatic4').text('NM can be useful in identifying referred pain, stress fractures and other bone lesions.');
	$('#Foot_Pain_Chronic1').text('Most patients should be managed on the basis of clinical findings without need for imaging. The cause of pain is rarely detectable on XR however XR is the first-line investigation for the imaging work-up of chronic foot pain. Pre-operative and post-operative evaluation of hallux valgus is best performed with weight-bearing AP and lateral XR of the feet. ');
	$('#Foot_Pain_Chronic2').text('If XR is unremarkable or equivocal and suspect tarsal coalition, plantar fasciitis, tarsal tunnel syndrome, painful accessory navicular, Mortons neuroma, or inflammatory arthropathy.');
	$('#Foot_Pain_Chronic3').text('If proper expertise is available, US can be used in place of MRI to investigate tendinopathy, plantar fasciitis, tarsal tunnel syndrome, suspected inflammatory arthropathy, or Mortons neuroma.');
	$('#Foot_Pain_Chronic4').text('Nuclear medicine can be used if suspect reflex sympathetic dystrophy, synovitis, stress or insufficiency fractures, or enthesopathy, and XR is negative or equivocal.');
	$('#Foot_Pain_Chronic5').html('<b>CT is only used to clarify an Xray finding.</b>\nCT can be used if suspect tarsal coalition and XR is unremarkable or equivocal.');
	$('#Painful_Prosthesis1').text('XR is indicated as the initial imaging to detect established loosening.');
	$('#Painful_Prosthesis2').text('NM is valuable for the investigation of late complications. Imaging should be discussed with a NM specialist to determine the most appropriate procedure.');
	$('#Painful_Prosthesis3').text('Image guided aspiration is particularly helpful if there is concern about infection.');
	$('#Painful_Prosthesis4').text('US is indicated if a peri-prosthetic abscess or superficial infection is suspected.');
	$('#Painful_Prosthesis5').text('MRI is indicated if there is concern about peri-prosthetic soft tissue abnormalities.');
	$('#Aortic_Dissection0').text('Aortic dissection is an emergency.\nConsider urgent transfer to the Emergency Department').css('font-weight', 'bold');
	$('#Aortic_Dissection1').text('A CXR is indicated primarily to exclude other causesof chest pain. It is rarely diagnostic of aortic dissection.');
	$('#Aortic_Dissection2').text('CT with IV contrast is readily accessible, rapid and accurate. Cardiac gating should be considered to minimize pulsation artefact and for assessment of the aortic root, sinuses and coronaries.');
	$('#Aortic_Dissection3').text('TEE is a useful and accurate portable technique for unstable patients, but it is not as good as CT for diagnosing aortic arch or abdominal aorta dissection. It can assess root and provides dynamic information including presence of aortic regurgitation and it accurately identifies the true lumen.');
	$('#Aortic_Dissection4').text('MRI is accurate, but practical difficulties limit its use in critically ill or unstable patientsIt is most appropriate for assessing stable patients with chronic dissection, and it is Useful for follow-up. It assesses any change in longitudinal extent and but practical difficulties can limit imaging potential in critically ill or unstable patients. Can provide dynamic information including the presence of aortic regurgitation.');
	$('#Pulmonary_Embolism1').text('Start with a risk assessment using the Wells criteria and D-dimer.\nThe Wells criteria for clinical likelihood of PE is extensively validated and triages patients into three pre-test probability groups: low, intermediate and high. A PE can be safely excluded in patients with a low or moderate pre-test probability and a negative ELISA D-dimer.').css('font-weight', 'bold');
	$('#Pulmonary_Embolism2').text('CXR is the best initial imaging modality to demonstrate consolidation and pleural effusion. A CXR might suggest a pulmonary embolus, but does not exclude a pulmonary embolus.');
	$('#Pulmonary_Embolism3').text('CTPA is the best imaging modality for the detection of pulmonary emboli,. It is the best modality for patients with COPD or an abnormal CXR, and may be used following a non-diagnostic V: Q scintigram.');
	$('#Pulmonary_Embolism4').text('Planar and SPECT Ventilation / perfusion (V:Q) scintigraphy is diagnostic if used selectively in patients without COPD or consolidation on CXR (Normal CXR) A normal perfusion scintigram excludes clinically significant pulmonary emboli. Can be used when CTPA is contraindicated such as contrast allergy or elevated serum creatinine. Should be used for follow up assessment of pulmonary embolism.');
	$('#Pulmonary_Embolism5').text('MRA may be considered when there is a contraindication to CTPA and abnormal CXR making ventilation / perfusion scintigraphy unlikely to be diagnostic.');
	$('#Pericarditis1').text('ECHO is the best initial imaging modality. It can diagnose and assess the size of a pericardial effusion and suitability for drainage. It is also the best modality for follow-up.');
	$('#Pericarditis2').text('CXR is indicated to diagnose concomitant pathology (e.g. tumour) or calcification in the pericardium. It should include a left lateral view.');
	$('#Pericarditis3').text('CT may be ordered to assess pericardial thickening +/- calcification, pericardial effusions and other relevant thoracic pathology.');
	$('#Pericarditis4').text('Will show thickening, effusion and can assess for functional impact of pericardial disease and other important cardiac and thoracic findings. Less sensitive for identification of pericardial calcification than CT.');
	$('#Valvular_Disease1').text('CXR is indicated for an initial assessment and when there is a change in the clinical picture such as signs suggesting heart failure.');
	$('#Valvular_Disease2').text('ECHO is the best imaging modality for initial assessment and for follow-up. TEE may be needed to assess prosthetic valves, suspected endocarditis or if there is a poor acoustic window.');
	$('#Valvular_Disease3').text('MRI is complementary to echo especially if difficulty with acoustic windows. Can assess severity of valvular regurgitation and is the most accurate method for assessment of ventricular volumes, function and mass. Rarely contraindicated for prosthetic valves.');
	$('#Valvular_Disease4').text('CT can assess valve area and degree of valvular calcification with ECG Gated CT . Useful for assessment of aortic root and ascending aortic size.');
	$('#Cardiomyopathy_Myocarditis1').text('CXR used for initial assessment and when there is a change in the clinical picture such as suggestion of new heart failure.');
	$('#Cardiomyopathy_Myocarditis2').text('ECHO is the best modality, allowing clear assessment of dilated, hypertrophic, and constrictive or restrictive cardiomyopathy and associated cardiac abnormalities. It is not as useful for arrhythmogenic RV dysplasia. TEE may be required to distinguish constrictive from restrictive cardiomyopathy.');
	$('#Cardiomyopathy_Myocarditis3').text('MRI may be ordered for differentiating ischemic from non-ischemic cardiomyopathies and for identifying specific etiologies such as sarcoidosis, amyloidosis, Arrhythmogenic Right Ventricular Cardiomyopathy , noncompaction and iron overload. It is the best imaging modality for demonstrating myocarditis, and it is useful for detecting myocardial scars.');
	$('#Cardiomyopathy_Myocarditis4').text('Myocardial perfusion imaging may help to differentiate ischemic and dilated cardiomyopathy and to assess myocardial ischemia in hypertrophic cardiomyopathy.');
	$('#Cardiomyopathy_Myocarditis5').text('Rest radionuclide angiography is indicated in the determination of initial and serial LV and RV performance in patients with myocarditis or dilated, hypertrophic and restrictive cardiomyopathy and in patients receiving chemotherapy with doxorubicin.');
	$('#Congenital_Heart_Disease1').text('Cardiac configuration, pulmonary vascularity and other thoracic findings may suggest diagnosis.');
	$('#Congenital_Heart_Disease2').text('ECHO is the best initial imaging modality. It provides anatomic and functional information, and is useful for follow-up.');
	$('#Congenital_Heart_Disease3').text('MRI may be requested to supplement ECHO, particularly for assessment of complex congenital heart disease. It can also be used for valvular assessment and shunt quantification, and it is the most accurate modality for assessment and follow-up of ventricular size, mass and function.');
	$('#Congenital_Heart_Disease4').text('CT can also be used for defining complex congenital disease in patients where MRI is contraindicated, but it provides limited functional data compared to ECHO and MRI. It should be used judiciously and with appropriate dose reduction protocols in the newborn or pediatric age group.\nAdult imaging done at RCH and Pediatric imaging at BCCH');
	$('#Thoracic_Aneurysm1').text('CXR is not indicated as it has a low diagnostic accuracy. Imaging surveillance is based on size criteria, interval growth and co-existing surgical  conditions. If present in isolation, surgical correction is warranted for thoracic aneurysms >5.5-6.0 cm or growing >0.5cm/year. If present with co-existing surgical conditions (CAD, valve disease), surgical correction warranted for thoracic aneurysms > 4.5 cm.').css('font-weight', 'bold');
	$('#Thoracic_Aneurysm2').text('Helical multidetector CT allows accurate, reproducible short-axis measurements. Gated study accurately measures root and sinuses. Can also assess for presence of CAD and morphology of aortic valve.');
	$('#Thoracic_Aneurysm3').text('MRI is used for younger patients in whom radiation exposure is a concern. Can provide dynamic information including valve morphology and presence of aortic regurgitation.');
	$('#Thoracic_Aneurysm4').text('ECHO/TEE is not initially indicated. Limited acoustic window limits visualization of aortic arch. Can provide dynamic information including valve morphology and presence of aortic regurgitation.');
	$('#Abdominal_Aneurysm1').text('Xray not indicated as it has a low diagnostic accuracy.\nImaging screening based on age, gender and family history.\nImaging surveillance based on size criteria.').css('font-weight', 'bold');
	$('#Abdominal_Aneurysm2').text('US is useful for screening, but it can be limited in obese patients and those with bowel gas. It is imprecise in assessing relationship to renal vessels and measuring aneurysm size for surveillance, but it is portable and low cost. CT is preferable for a suspected leak.');
	$('#Abdominal_Aneurysm3').text('CT is accurate for assessing relationship to renal and iliac vessels to guide percutaneous management. High reproducibility is advantageous for surveillance. Accurately assesses rupture.');
	$('#Abdominal_Aneurysm4').text('MRI is similar in accuracy to CT.');
	$('#Deep_Vein_Thrombosis0').html('Wells Criteria (risk score for DVT)\n<input name="Wells1" id="Wells1" type="text" class="XBoxM box1"/> &nbsp&nbsp Active cancer (on treatment for last 6 months or palliative)\n<input name="Wells2" id="Wells2" type="text" class="XBoxM box1"/> &nbsp&nbsp Paralysis, paresis or plaster immobilization of lower extremity\n<input name="Wells3" id="Wells3" type="text" class="XBoxM box1"/> &nbsp&nbsp Immobilization previous 4 days or major surgery within 4 weeks\n<input name="Wells4" id="Wells4" type="text" class="XBoxM box1"/> &nbsp&nbsp Localized tenderness along the distribution of the deep venous system\n<input name="Wells5" id="Wells5" type="text" class="XBoxM box1"/>  &nbsp&nbsp Entire leg swollen\n<input name="Wells6" id="Wells6" type="text" class="XBoxM box1"/> &nbsp&nbsp Calf swollen by more than 3 cm &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp D-dimer: <input readonly name="DDR" id="DDR" type="text" class="dimer"/> &nbsp&nbsp&nbsp&nbsp <input readonly name="DDI" id="DDI" type="text" class="dimer"/> \n<input name="Wells7" id="Wells7" type="text" class="XBoxM box1"/> &nbsp&nbsp Pitting edema\n<input name="Wells8" id="Wells8" type="text" class="XBoxM box1"/> &nbsp&nbsp Collateral superficial veins (non-varicose)\n<input name="Wells9" id="Wells9" type="text" class="XBoxM box1"/> &nbsp&nbsp Probable alternative diagnosis\n<input name="Wells10" id="Wells10" type="text" class="XBoxM box1"/> &nbsp&nbsp None of the above &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Wells Score: &nbsp&nbsp&nbsp&nbsp <input name="WellsS" id="WellsS" type="text" class="Wells" /> &nbsp&nbsp&nbsp&nbsp  <input name="WellsI" id="WellsI" type="text" class="WellsI" />\n\n<textarea name="WellsA" id="WellsA" class="WellsC"></textarea>').css('font-weight', 'bold');
	$('#Deep_Vein_Thrombosis1').text('The Wells criteria for DVT extensively triages patients in the outpatient population into High and Low pre-test probability groups. Patients with a low pre-test probability and a negative ELISA D-dimer do not require further investigation.').css('font-weight', 'bold');
	$('#Deep_Vein_Thrombosis2').text('Compression US is the best initial imaging modality for the diagnosis of DVT. It may also show other lesions.');
	$('#Deep_Vein_Thrombosis3').text('CTA may be required in cases not technically assessable or equivalent by compression/Doppler ultrasound.');
	$('#Deep_Vein_Thrombosis4').text('MRA may be required in cases not technically assessable or equivalent by compression/Doppler ultrasound.');
	$('#Deep_Vein_Thrombosis5').text('Venography may be required in cases not technically assessable or equivalent by compression/Doppler ultrasound.');
	$('#Peripheral_Vascular_Disease1').text('Start with ABI and then consider referral to vascular surgery if positive.');
	$('#Peripheral_Vascular_Disease2').text('CTA and MRA are increasingly used for diagnosis.');
	$('#Upper_Respiratory_Tract_Infection1').text('There is no evidence that a CXR is of value in the management of upper respiratory tract infection. ').css('font-weight', 'bold');
	$('#Upper_Respiratory_Tract_Infection2').text('CXR should be reserved for patients with clinical suspicion of pneumonia, acute tracheobronchitis with other comorbid conditions and those with symptoms persisting for longer than 3 weeks.');
	$('#Asthma_Excacerbation1').text('CXR not indicated unless there is pyrexia, leukocytosis, persistent chest pain, other features of pneumonia, suspected pneumothorax, pneumomediastinum or need for hospitalization.').css('font-weight', 'bold');
	$('#Asthma_Excacerbation2').text('Diagnostic Imaging should be guided by clinical concern for complications');
	$('#COPD_Excacerbation1').text('CXR not indicated unless there is history of CAD, CHF, findings of pyrexia, leukocytosis, persistent chest pain, other features of pneumonia, suspected pneumothorax, pneumomediastinum or need for hospitalization.').css('font-weight', 'bold');
	$('#COPD_Excacerbation2').text('Diagnostic Imaging should be guided by clinical concern for complications.');
	$('#COPD_Excacerbation3').text('Should only be considered in rare circumstances where management might be altered.');
	$('#Pneumonia0').text('Diagnostic Imaging should be guided by clinical findings.\nCXR should not be performed if pre-test probability is very high and a negative CXR would not preclude management.').css('font-weight', 'bold');
	$('#Pneumonia1').text('CXR is imaging modality of choice when pneumonia is suspected.');
	$('#Pneumonia2').text('Consider CT in cases of severe pneumonia, complicated pneumonia or possible atypical organisms. May help to diagnose pneumonia complicated with empyema and guide thoracentesis.');
	$('#Pneumonia_Follow_Up1').text('A follow up CXR is recommended after at least six weeks for all patients who have persistent symptoms or physical signs or who are at higher risk of underlying malignancy (especially smokers and patients > 50 years), whether or not they are admitted to hospital.');
	$('#Pneumonia_Follow_Up2').html('<b>CT is indicated only in cases with no radiological or clinical resolution within the expected time.</b>\nThe majority of patients with community-acquired pneumonia will show radiological resolution in 4-6 weeks, but this may be prolonged in the elderly, in smokers and in those with chronic airway disease.');
	$('#Febrile_Neutropenia1').text('CXR is initial imaging modality of choice; detects abnormalities and guides management in most cases. However, CXR may be normal in HIV and febrile neutropenic patients with pulmonary infection.');
	$('#Febrile_Neutropenia2').text('CT is indicated when CXR is normal or equivocal in patients with high clinical suspicion for pulmonary infection. CT is accurate in the diagnosis of specific infections (PCP, fungal pneumonia, TB) and may alter patients management. HRCT with expiratory views is indicated in patients post bone marrow transplant with suspected obliterative bronchiolitis.');
	$('#Pleural_Effusion1').text('A CXR can detect small quantities of pleural fluid (PA view: 175ml, lateral: 75ml, lateral decubitus: 10ml). More than 1cm thickness in lateral view allows safe diagnostic thoracentesis with no imaging guidance.');
	$('#Pleural_Effusion2').text('CT scan may be ordered by a specialist or in consultation with a radiologist to further characterize pleural fluid and allow visualization of underlying lung and pleural pathology. CT with contrast may help in the diagnosis of suspected empyema, empyema versus lung abscess and pleural malignancy. However, CT attenuation value is not reliable for differentiating exudate from transudate.');
	$('#Pleural_Effusion3').text('US is indicated to confirm the presence of pleural fluid and is superior to CT in the detection of loculations and septations. Useful to guide diagnostic and therapeutic thoracentesis (more complicated procedures such as pleural biopsy or small empyema drainage may require CT guidance).');
	$('#Pleural_Effusion4').text('MRI may be superior to CT in the differentiation of benign and malignant pleural disease and may help in the characterization of fluid content. However, it is not routinely used and does not replace diagnostic interventional procedures.');
	$('#Pleural_Effusion5').text('PET/CT could help to characterize pleural effusion in a patient with suspected or known cancer, especially mesothelioma. PET/CT could indentify metastatic pleural implants and guide biopsy.');
	$('#Hemoptysis_Nonsmoker1').text('All patients presenting with hemoptysis should have a CXR.');
	$('#Hemoptysis_Nonsmoker2').text('CT is only indicated for patients with severe hemoptysis or other risk factors.');
	$('#Hemoptysis_Smoker1').text('All patients presenting with hemoptysis should have a CXR. If this is normal but the hemoptysis is significant or recurrent and occurs without a concurrent chest infection, further investigation is indicated especially if the patient is older than 40yrs.');
	$('#Hemoptysis_Smoker2').html('<b>Please do a CXR before considering a CT.</b><br>CT should be used to investigate the majority of high risk patients with hemoptysis. CT may detect malignancy not identified on CXR. CT (with contrast if not contraindicated) often detects the cause and site of bleeding. HRCT is indicated in the investigation of bronchiectasis. If CT is normal, fails to demonstrate the site of bleeding or demonstrates central tumor, bronchoscopy is indicated.');
	$('#Hemoptysis_Massive1').text('Massive hemoptysis is >300ml in 24hrs.').css('font-weight', 'bold');
	$('#Hemoptysis_Massive2').text('If patient is stable, CXR is indicated for initial evaluation.');
	$('#Hemoptysis_Massive3').text('CT is indicated if clinically feasible and if patient is stable. CT with contrast (if not contraindicated), may show source of bleeding and be helpful especially before bronchial artery embolization. Bronchoscopy is indicated in all patients with massive hemoptysis.');
	$('#Interstitial_Lung_Disease1').text('CXR is useful as initial imaging modality and to help direct further investigations. However, normal CXR does not rule out interstitial/diffuse lung disease.');
	$('#Interstitial_Lung_Disease2').text('HRCT  is the imaging modality of choice in evaluation of interstitial/diffuse lung disease and provides valuable information about disease reversibility and prognosis. Additional expiratory scans often help in the differential diagnosis. Prone HRCT may be indicated when asbestosis is suspected. Because of the higher radiation dose, use of HRCT should be weighed against radiation risk in young patients, particularly females.');
	$('#Solitary_Pulmonary_Nodule1').text('CXR may be the first modality to demonstrate a solitary pulmonary nodule (SPN)  but is very limited in the characterization and final diagnosis.');
	$('#Solitary_Pulmonary_Nodule2').text('CT may demonstrate definite findings of benignity such as central calcification or fat which preclude further investigation For indeterminate solid nodules on CT, management varies depending upon risk factors for malignancy as recommended by the Fleischner Society Guidelines for Follow up and Management of Nodules.');
	$('#Solitary_Pulmonary_Nodule3').text('More sensitive than CT in the detection of malignancy in nodules larger than 8 mm. Characterization of solid nodules 8 mm and greater that are indeterminate on CT. May help in staging for these nodules proven to be malignant.');
	$('#Solitary_Pulmonary_Nodule4').html('<b>Fleischner Society Guideline Recommendations for FU of Nodules < 8mm</b><br><b>Nodule <4mm:</b> No follow-up needed in low risk patient and in high risk patient(eg smoker) follow-up CT at 12 months; if unchanged, no further follow-up needed.<br><b>Nodule 4-6mm:</b> For low risk patient, follow-up CT at 12 months; if unchanged, no further follow-up and in high risk patient (eg smoker) initial follow-up CT at 6-12 months then at 18-24 months if no change.<br><b>Nodule 6-8mm</b>For low risk patient, initial follow-up CT at 6-12 months then at 18-24 months if no change. and in high risk patient (eg smoker) initial follow-up CT at 3-6 months then at 9-12 months and 24 months if no change.<br><b>Nodule >8mm:</b> For both low and high risk patient,follow-up CT at around 3, 9 and 24 months<br>Consider dynamic contrast-enhanced CT, PET, and/or biopsy.<br><b>Nonsolid (ground-glass) or partly solid nodules may require longer follow-up to exclude indolent adenocarcinoma.</b>');
	$('#Subsolid_Nodules1').text('Ground glass and part-solid nodules');
	$('#Subsolid_Nodules2').text('Chest radiograph may be the first modality to demonstrate a subsolid nodule but is very limited in the characterization and final diagnosis. Pure ground-glass nodules usually are not seen on chest radiograph.');
	$('#Subsolid_Nodules3').html('CT (especially HRCT) is much more accurate in the detection of ground-glass (GG) and part solid (PS) nodules and to demonstrate multicentric disease. No consensus in the literature yet regarding management of GG/PS nodules (Fleischner Society Guidelines for Nodules is not applied for these lesions). Interim guidelines published in 2010 suggest:<br> <b>Solitary lesions:</b><br>GG nodule < 5 mm: no follow up or work up is required<br>GG nodule 5- 10 mm: CT in 3-6 months, annually for minimal 3 years if stable. Increase in size or solid component: surgical resection.<br>GG nodule > 10 mm: CT in 3-6 months, surgical resection if persistent or enlarging<br>PS solid lesion any size: percutaneous biopsy or surgical resection. (Role of percutaneous biopsy is less clear because of sampling errors).<br><b>Multiple lesions:</b><br>GG nodules < 10mm: CT in 1 year<br>If any GG nodule > 10mm or PS nodule: CT follow up and surgical resection (sparing resection)');
	$('#Subsolid_Nodules4').text('PET of questionable diagnostic value for pure GG nodules, especially when < 1cm. Indicated for PS lesions because of greater likelihood of invasive malignancy and for detection of metastasis and preoperative staging.');
	$('#Pulmonary_Metastases1').text('CXR is first line of investigation for most malignancies.');
	$('#Pulmonary_Metastases2').text('CT chest/abdomen/pelvis recommended for primary cancers that frequently metastasize to the thorax and / or those with a satisfactory response to surgical metastatectomy e.g. sarcomas, melanoma, colon, testicle.');
	$('#Pulmonary_Metastases3').text('PET/CT may assist with whole body staging and may identify lung metastases when greater than 8 mm. FDG PET/CT allows assessment of operability of solitary pulmonary metastasis by excluding/identifying extra-pulmonary metastases.');
	$('#Mediastinal_Lesion1').text(' Suspected mediastinal lesion on CXR').css('font-weight', 'bold');
	$('#Mediastinal_Lesion2').text('CT is very sensitive in the detection of mediastinal lesions and provides information to help in the differential diagnosis. CT may guide percutaneous biopsy. Optionally gated for paracardiac lesions.');
	$('#Mediastinal_Lesion3').text('MRI accurately differentiates solid and cystic lesions and is superior to CT in the detection of invasion of mediastinal structures. Optionally gated if paracardiac.');
	$('#Mediastinal_Lesion4').text('US may be warranted depending on suspicion of paracardiac lesion.');
	$('#Mediastinal_Lesion5').text('FDG PET/CT should be performed only after CT scan is performed. Can identify biopsy site, identify extra-thoracic disease easier to biopsy, may prevent futile biopsy in a non FDG-avid lesion, identify a benign lesion (i.e. thymic hyperplasia), provides staging when a malignant chest lesion is confirmed.');
	$('#Suspected_Lymphadenopathy1').html('<b>Suspected lympadenopathy on CXR or clinical examination.</b>\nDiagnostic imaging should be guided by clinical findings and biomarkers.');
	$('#Suspected_Lymphadenopathy2').text('CXR has limited sensitivity in detection of mediastinal and hilar adenopathy.');
	$('#Suspected_Lymphadenopathy3').text('CT done if lymphadenopathy is suspected and is very sensitive in the detection of mediastinal and hilar adenopathy and provides information that may help in the diagnosis (i.e. calcification, necrosis, nodal enhancement and parenchymal abnormality). CT may guide percutaneous biopsy depending on clinical concern.');
	$('#Suspected_Lymphadenopathy4').text('PET/CT can identify biopsy site, identify extra-thoracic disease easier to biopsy, may prevent futile biopsy of non FDG-avid lymph nodes, and can help in staging when a malignant lymph node is confirmed. It does not replace biopsy.');
	$('#Diaphragm_Elevated1').text('Elevated diaphram noted on standard CXR').css('font-weight', 'bold');
	$('#Diaphragm_Elevated2').text('Decubitus CXR may increase accuracy in detection of effusion as the cause of apparent elevation of the diaphragm.');
	$('#Diaphragm_Elevated3').text('CT can be helpful to rule out mediastinal lesion involving phrenic nerve when CXR is negative. When CXR demonstrates mediastinal abnormality, CT is indicated for further characterization (see Mediastinal Lesion).');
	$('#Diaphragm_Elevated4').text('U/S can detect and evaluate pleural effusion and diaphragmatic motion in real time. May be more sensitive than fluoroscopy.');
	$('#Diaphragm_Elevated5').text('Fluoroscopy "sniff " test is accurate for evaluation of diaphragmatic motion in real time and to detect paralysis and paradoxical movement.');
	$('#Dysphagia_High1').html('<b>Specialist request</b>\nBa esophagogram is the best investigative modality for diagnosing motility disorders. It is also useful for demonstrating webs and pouches and may show subtle strictures not seen at endoscopy');
	$('#Dysphagia_Low1').text('Endoscopy should be performed initially.').css('font-weight', 'bold');
	$('#Dysphagia_Low2').html('<b>Specialist request</b>\nBa esophagogram should only be performed if endoscopy normal used to demonstrate a motility disorder or a subtle stricture.');
	$('#GERD1').text('Reflux is common and can usually be diagnosed clinically.\nInvestigation is only indicated when medical therapy fails.\npH monitoring is the gold standard for the diagnosis of reflux, but endoscopy will show early changes of reflux esophagitis and allow biopsy of metaplasia.').css('font-weight', 'bold');
	$('#GERD2').html('<b>Specialist request</b>\nBa esophagogram may be ordered by a surgeon to assess esophageal motility prior to anti-reflux surgery.');
	$('#Esophageal_Perforation0').html('<b>This is generally an emergency. Consider sending to the hospital.</b>');
	$('#Esophageal_Perforation1').text('A pneumomediastinum is present in only 60% of cases, but other suggestive abnormalities may also be seen on a CXR.');
	$('#Esophageal_Perforation2').text('CT is the best imaging modality for diagnosing esophageal perforation and for the detection of mediastinal and pleural complications.');
	$('#Esophageal_Perforation3').text('May be used if CT is not immediately available, but if no leak is seen then proceed to immediate CT.');
	$('#Upper_Git_Bleed1').text('Endoscopy is the appropriate diagnostic modality for most cases of upper GI bleeding and can be used to deliver hemostatic therapy. No indication for abdominal Xray or Ba studies').css('font-weight', 'bold');
	$('#Upper_Git_Bleed2').text('In cases of uncontrollable bleeding angiography is indicated and transcatheter embolization may be used as the primary treatment.');
	$('#Upper_Git_Bleed3').text('Abdominal US can be used to diagnose chronic liver disease and varices.');
	$('#Dyspepsia_Under_451').text('Most patients < 45 years should be treated without investigations and if symptoms recur or persist, the Helicobacter pylori status should be assessed.\nDiagnostic investigation is indicated if there are symptoms such as:\n1) Weight loss\n2) Anorexia\n3) iron deficiency anemia\n4) Severe pain\n5) Non-steroid anti- inflammatory drug use\n\nEndoscopy is the investigation of choice if investigation is required.').css('font-weight', 'bold');
	$('#Dyspepsia_Under_452').text('Ba studiescan be used to demonstrate a motility disorder or a subtle stricture, if endoscopy normal.');
	$('#Dyspepsia_Under_453').html('<b>Specialist request</b>\nNuclear medicine useful in stable patients when surgery and/or angiography are not indicated to determine the origin/intensity of bleeding.');
	$('#Dyspepsia_Over_451').text('Endoscopy should be the initial investigation to facilitate the early detection of cancer.').css('font-weight', 'bold');
	$('#Dyspepsia_Over_452').html('<b>Specialist request</b>\nIf endoscopy is negative and symptoms persist, then Ba studies should be considered to rule out an unrecognized cancer or a motility disorder.');
	$('#Dyspepsia_Over_453').html('<b>Specialist request</b>\nGastric emptying with a solid meal can establish the diagnosis of gastroparesis particularly in patients with diabetes.');
	$('#Ulcer_FU1').text('If follow-up is required endoscopy is most accurate to confirm complete healing and to obtain biopsies where necessary because residual scarring precludes accurate assessment by Ba studies.').css('font-weight', 'bold');
	$('#Anastomotic_Leak1').html('<b>Specialist request</b>\nWater-soluable contrast should be used as the contrast agent, because Ba will interfere with a CT study and therefore should not be used.');
	$('#Anastomotic_Leak2').html('<b>Specialist request</b>\nIf the contrast study does not demonstrate a leak at the anastomotic site and there is a continuing clinical concern, then immediate CT should be performed as it is more sensitive.');
	$('#Small_Bowel_Obstruction_Acute1').text('Xray is Often the first line investigation to detect the presence of obstruction.');
	$('#Small_Bowel_Obstruction_Acute2').text('CT is the best imaging modality for diagnosing acute small bowel obstruction. It indicates the level and may show cause.');
	$('#Small_Bowel_Obstruction_Acute3').text('Contrast studies may be helpful if CT is unavailable or contraindicated.');
	$('#Small_Bowel_Obstruction_Recurrent1').text('CT will be as diagnostic as a small bowel enema, but may be a better guide to management in complex cases, e.g. in patients with a previous malignancy or following complicated abdominal surgery.');
	$('#Small_Bowel_Obstruction_Recurrent2').text('Ba studies indicted if CT is unavailable or contraindicated. Will confirm the presence and the level of obstruction in most cases and may suggest a cause.');
	$('#Crohns_Disease_SB1').text('CT, where available, is indicated as the investigation of choice.');
	$('#Crohns_Disease_SB2').text('US can be helpful in assessing the bowel in children and young patients with lean body habitus');
	$('#Crohns_Disease_SB3').text('MRI may be ordered by a specialist to help in the assessment of disease activity or to assess extramural complications, particularly in young patients');
	$('#Crohns_Disease_SB4').text('If CT is unavailable or contraindicated this can be used for the diagnosis of small bowel disease, including Crohns disease.to avoid the radiation burden.');
	$('#Crohns_Disease_SB5').text('This technique is more effective than a small bowel follow through in establishing the extent of disease prior to surgery, in diagnosing a fistula, and in determining the cause of obstructive symptoms in patients with known Crohns disease.');
	$('#Changed_Bowel_Habit1').text('Colonoscopy is the current investigation of choice for concern regarding colorectal neoplasia.').css('font-weight', 'bold');
	$('#Changed_Bowel_Habit2').html('<b>Specialist request</b>\nCT Colonoscopy is the first radiological investigation of choice when optical colonoscopy is not performed. Standard CT of the abdomen and pelvis can miss colon cancer but it may be used to determine the extent of known disease.');
	$('#Large_Bowel_Obstruction1').text('Xray may be used as an initial examination to help establish the diagnosis and to indicate the likely level.');
	$('#Large_Bowel_Obstruction2').text('CT may be ordered by a specialist as an alternative to a contrast enema, particularly in sick and very frail patients.');
	$('#Large_Bowel_Obstruction3').html('<b>Specialist request</b>\nBa enema may be used for problem solving if CT is not available or equivocal.');
	$('#Inflammatory_Bowel_Disease_LB1').text('Xray is a useful initial examination and may be sufficient to determine disease severity and extent.');
	$('#Inflammatory_Bowel_Disease_LB2').text('CT is the preferred modality to diagnose complications of inflammatory bowel disease of the colon. Endoscopy is the method of choice for diagnosis.');
	$('#Inflammatory_Bowel_Disease_LB3').text('MRI is preferable to CT in young patients. It may also be ordered by a specialist to guide surgical management of patients with anorectal sepsis.');
	$('#Acute_Abdomen1').text('Xray is useful as an initial investigation if obstruction or perforation is suspected, particularly if CT or US is unavailable.');
	$('#Acute_Abdomen2').text('CT is the most comprehensive imaging modality.');
	$('#Acute_Abdomen3').text('US is the most appropriate imaging modality for the diagnosis of cholelithiasis and acute gynecological emergencies.');
	$('#Palpable_Abdominal_Mass1').text('CT is the best initial imaging modality.');
	$('#Palpable_Abdominal_Mass2').text('US is also an appropriate initial imaging modality, particularly in females and children.');
	$('#Constipation1').text('Xray may be useful in geriatric and psychiatric patients to show extent of fecal impaction.');
	$('#Constipation2').text('Evacuation proctography may be ordered by a specialist to assess a disorder of evacuation.');
	$('#Abdominal_Abscess1').text('CT is the best imaging modality for overall assessment.');
	$('#Abdominal_Abscess2').text('US is also an appropriate imaging modality, particularly when there are localizing signs. It is especially good for subphrenic/ subhepatic spaces and pelvis.');
	$('#Abdominal_Abscess3').text('NM is useful when there are no localizing features. The appropriate NM examination should be chosen in consultation with a nuclear medicine specialist.');
	$('#Solitary_Hepatic_Lesion_US1').text('MRI is the technique of choice. It is the most sensitive and specific radiological investigation to characterize liver lesions.');
	$('#Solitary_Hepatic_Lesion_US2').text('CT is less sensitive than MR but can be performed if MRI is not available.');
	$('#Solitary_Hepatic_Lesion_US3').text('If problem solving is required in large lesions equivocal on MRI, NM imaging may be considered in consultation with a Nuclear Medicine specialist.');
	$('#Cirrhosis_Complications1').text('US is very sensitive for ascites. It may show evidence of portal hypertension and is the initial screening test hepatoma.');
	$('#Cirrhosis_Complications2').text('MRI may be ordered by a specialist for the diagnosis of hepatoma and for treatment planning.');
	$('#Cirrhosis_Complications3').text('If MRI is unavailable or contraindicated, CT may be used for the diagnosis of hepatoma.');
	$('#Jaundice1').text('US is the appropriate imaging modality for differentiating between obstructive and non- obstructive jaundice. If obstructive jaundice is diagnosed, further investigation will depend on the level and suspected cause of the obstruction, and should be planned in consultation with a radiologist. ERCP is the most accurate method for detection of small duct stones and small papillary or peri-ampullary tumours. It allows biopsy of pancreas without risk of tumor seeding.');
	$('#Jaundice2').text('CT may be considered following US for obstructive jaundice, particularly if the level of obstruction is below the hilum. It is particularly useful for detecting and staging peri-ampullary malignancies.');
	$('#Jaundice3').text('If US shows obstruction at the level of the hilum or above, MRCP (magnetic resonance cholangiopancreatography) is now the investigation of choice if further imaging is indicated.');
	$('#Gallstones1').text('US is the best imaging modality for the demonstration or exclusion of gallstones and acute cholecystitis. It is the appropriate initial investigation for biliary pain but cannot reliably exclude common duct stones. Cholecystography has been replaced by ultrasound in the investigation of biliary disease.');
	$('#Gallstones2').html('<b>Specialist request</b>\nCT has a limited role in assessing cholelithiasis. CT may be ordered by a specialist for the evaluation of gallbladder wall and gallbladder masses.');
	$('#Gallstones3').html('<b>Specialist request</b>\nMRCP may be ordered by a specialist to assess possible duct calculi not confirmed by US, and in the investigation of post-cholecystectomy pain.');
	$('#Gallstones4').html('<b>Specialist request</b>\nBiliary scintigraphy shows cystic duct obstruction in acute cholecystitis, chronic cholecystitis, CBD obstruction, gallbladder and sphincter of Oddi dysfunction.');
	$('#Post_Op_Biliary_Leak1').text('US is the best initial investigation of a suspected biliary leak.');
	$('#Post_Op_Biliary_Leak2').text('CT can adequately demonstrate perihepatic collections.');
	$('#Post_Op_Biliary_Leak3').text('Hepato-specific contrast agents with biliary excretions can be used to show ductal anatomy and leak.');
	$('#Post_Op_Biliary_Leak4').text('HIDA scan will show activity at site of leak.');
	$('#Pancreatitis_Acute1').text('US is indicated to identify patients with gallstones, indicating a diagnosis of gallstone pancreatitis. It can also be used to monitor pseudocysts.');
	$('#Pancreatitis_Acute2').text('CT is indicated in severe cases to assess the extent of necrosis, and to detect and monitor complications such as pseudocysts.');
	$('#Pancreatitis_Acute3').text('MRCP may be ordered by a specialist to detect choledocholithiasis not seen on US.');
	$('#Pancreatitis_Acute4').text('Abdominal XRay is only indicated to exclude other causes of abdominal pain if laboratory test are not available to confirm the diagnosis.');
	$('#Pancreatitis_Chronic1').text('CT is the best imaging modality, particularly for assessing pancreatic calcification.');
	$('#Pancreatitis_Chronic2').text('US is also appropriate, particularly in thin patients.');
	$('#Pancreatitis_Chronic3').text('MRCP or ERCP may be ordered by a specialist to to show ductal changes.');
	$('#Pancreatic_Tumor1').text('US may be helpful in localizing the primary lesion for biopsy. The decision to biopsy is best undertaken by a multidisciplinary hepato- pancreatico-biliary team.');
	$('#Pancreatic_Tumor2').text('CT is the technique of choice for detection and characterization of pancreatic adenocarcinoma, and reliably predicts unresectability.');
	$('#Pancreatic_Tumor3').text('MRI and MRCP are the imaging modalities of choice for the detection and characterization of cystic neoplasms.');
	$('#Adrenal_Mass1').text('If adrenal mass is incidentally seen on imaging can proceed with CT Adrenal Mass Protocol to work up further.');
	$('#Hematuria1').text('US is indicated after a thorough clinical workup if microscopic hematuria persists and the diagnosis is still uncertain.\nUS may miss some upper tract pathology, including some calculi.\nBladder US may detect bladder tumours but cystoscopy is more sensitive.');
	$('#Hematuria2').html('In patients over the age of 40yrs, if US does not reveal a cause and there is ongoing concern, consider CT IVP as this is a more sensitive test for TCC.');
	$('#Hypertension1').text('Imaging is not indicated if there is no evidence of renal disease.').css('font-weight', 'bold');
	$('#Hypertension_Unresponsive0').text('Start with renal US');
	$('#Hypertension_Unresponsive1').html('<b>Specialist request</b>\nCaptopril renography is best to check for functionally significant renal artery stenosis, if interventional procedure or surgery is contemplated.');
	$('#Hypertension_Unresponsive2').html('<b>Specialist request</b>\nCTA is the imaging study of choice for visualizing the renal arteries.');
	$('#Hypertension_Unresponsive3').html('<b>Specialist request</b>\nMRA may be performed where CTA is contraindicated.');
	$('#Hypertension_Unresponsive4').html('<b>Specialist request</b>\nDoppler US can be used in centers where the expertise is available.');
	$('#Renal_Failure1').text('US is the best initial imaging modality in patients with renal failure to determine if there is an obstructive cause.');
	$('#Renal_Colic1').text('Low dose unenhanced CT is the preferred imaging modality for the detection of urinary tract calculi.');
	$('#Renal_Colic2').text('Combined US and abdominal XR may be used where CT is not available or under special circumstances such as pregnancy to reduce radiation exposure. US and abdominal XRay are less sensitive than unenhanced CT.');
	$('#Renal_Calculi_FU1').text('If follow up of known renal stones is required, abdominal XRay may be sufficient for those visible on XRay.');
	$('#Renal_Calculi_FU2').text('If XR does not show a calculus, CT is indicated if there is strong clinical suspicion.');
	$('#Renal_Calculi_FU3').text('US may be used if CT is not available or to reduce radiation exposure (eg younger age <30yrs, female patients in childbearing age).\nUS is less sensitive than either abdominal XR or CT for detecting urinary tract calculi.');
	$('#Renal_Calculi_FU4').text('Nuclear Medicine can be used to assess the function of a kidney that may be damaged by chronic renal calculi.');
	$('#Renal_Mass1').text('US is indicated as an initial imaging modality for a suspected renal mass.');
	$('#Renal_Mass2').text('CT without and with contrast enhancement is indicated as the primary imaging modality for evaluating solid renal masses.');
	$('#Renal_Mass3').text('MRI may help to assess a renal mass not adequately characterized by CT or if CT is contraindicated, e.g., known allergy to CT contrast.');
	$('#Renal_Mass4').text('Nuclear medicine can be used to assess renal function prior to surgery for renal mass.');
	$('#Urinary_Tract_Obstruction1').text('Ultrasound is the modality of choice for the initial investigation.');
	$('#Urinary_Tract_Obstruction2').text('A diuretic renal scan may be useful to confirm the presence and level of a urinary tract obstruction.');
	$('#Urinary_Tract_Obstruction3').text('CT may be required for further investigation if an obstruction is identified.');
	$('#UTI_Adult0').text('US imaging is not indicated initially for adults with a urinary tract infection.').css('font-weight', 'bold');
	$('#UTI_Adult1').text('US is indicated\n(1) if infection does not resolve with appropriate antibiotic therapy\n(2) in men following one proven UTI or in women with a proven recurrence of UTI.');
	$('#UTI_Adult2').text('CT may be ordered if a severe infection does not respond to treatment, or if an abscess or other complication is suspected.');
	$('#Transplanted_Kidney1').text('US is the modality of choice for initial evaluation for complications in a transplanted kidney and can be used for biopsy guidance.');
	$('#Transplanted_Kidney2').text('TC99m mag 3 with effective renal plasma flow (eRPF) may also be useful for evaluation of renal transplant complications.');
	$('#Scrotal_Problems1').html('<b>For acute emergent problems consider sending to the Emergency Department</b>\nUS is the best imaging modality for evaluating scrotal swelling and/or scrotal pain. US can differentiate testicular from extra-testicular lesions.');
	$('#Testicular_Torsion1').html('<b>If torsion is suspected consider sending patient to the Emergency Department</b>\nTesticular torsion can be diagnosed clinically. If imaging is required US is the best modality, and must be performed emergently.');
	$('#Testicular_Torsion2').text('NM can be used when US is not available or inconclusive.');
	$('#Symptomatic_Early_Pregnancy1').text('US is indicated if early pregnancy is symptomatic: pain, vaginal bleeding, or excessive vomiting.');
	$('#Symptomatic_Early_Pregnancy2').text('In a normal pregnancy, an embryo should be present when the mean diameter of the gestational sac measures > 16 mm and an embryonic heartbeat detected when the embryonic crown-rump length measures >5 mm. Lack of these findings suggest a non-viable pregnancy. However, these findings should be correlated with quantitative hcg levels. In a normal pregnancy, hcg has a doubling time of approximately 2 days. In a non-viable pregnancy, hcg will decrease. When there is any doubt, a repeat US within a week should be done, prior to any intervention in a desired pregnancy.').css('font-weight', 'bold');
	$('#Ectopic_Pregnancy1').text('The uterus should be thoroughly scanned for the presence of a gestational sac.\nAn intrauterine gestational sac should be seen when the quantitative hcg is >2000 IU.\nHowever many intrauterine or extrauterine pregnancies can be detected by US at much lower hcg levels.\nTherefore, if an intrauterine gestational sac is not identified, the adnexa should be thoroughly scanned for the presence of a mass.\nIf there is no US evidence of either intra or extrauterine pregnancy, correlation should be made with serial hcg levels.\nIn patients undergoing assisted reproduction techniques, the adnexa should be should be scanned thoroughly even in the presence of an intrauterine pregnancy, as the incidence of heterotopic pregnancy is much higher in these patients.\nSerial quantitative hcg in an ectopic pregnancy is variable (may be similar to normal pregnancy, increase less than normal pregnancy, decrease or show a fluctuating increase, decrease, increase pattern)');
	$('#Postmenopausal_Bleeding1').text(' Endometrial thickening of 5 mm or greater is considered abnormal and warrants further clinical investigation. Focal endometrial thickening or mass may require hysterosonography or hysteroscopy for further evaluation. Doppler may be useful in diagnosing an endometrial polyp by showing a feeding vessel.');
	$('#Adnexal_Mass1').text(' Combination of transabdominal and transvaginal US is often required. US should confirm the presence of a lesion and determine the likely organ of origin. Transvaginal scanning should be used to better characterize the internal morphology of the lesion. MRI is the best second-line investigation, although CT is still widely used but is not recommended in premenopausal age group.');
	$('#Acute_Pelvic_Pain1').text('Where a gynaecological cause and etiology are highly suspected and serum hCG negative, US is indicated, especially when clinical examination is difficult or impossible. US can diagnose cyst leak or haemorrhage. Focal uterine tenderness can be elicited by the transvaginal probe with focal palpation of the uterus in some cases of adenomyosis. Doppler exam can be an aid to diagnosis of torsion along with the 2D ultrasound. US has a poor predictive power when diagnosing pelvic inflammatory disease and some forms of endometriosis.');
	$('#Acute_Pelvic_Pain2').html('<b>Specialist request</b>\nCT may be requested by a specialist for further investigation in assessing pelvic masses and other pathologies such as abscesses but should be avoided in the reproductive age group.');
	$('#Acute_Pelvic_Pain3').html('<b>Specialist request</b>\nMRI can be useful to localize the larger foci of endometriosis or other ovarian pathology when US inconclusive.');
	$('#Lost_IUCD1').text('To confirm or refute the presence of the IUCD in uterus, and to check for position. 3D US with coronal reconstruction is valuable in determining location of IUCD.');
	$('#Lost_IUCD2').text('Xray indicated only when IUCD is not seen in uterus on US.');
	$('#Recurrent_Miscarriages1').text('US will show the major uterine congenital and acquired problems and is useful to identify ovarian pathology. 3D US with coronal reconstruction is valuable in detecting congenital uterine abnormalities.');
	$('#Recurrent_Miscarriages2').text('MRI supplements US for uterine anatomy.');
	$('#Infertility1').text('US should be used to confirm the presence of normal uterus and ovaries.');
	$('#Ovarian_Cyst1').text('US is the appropriate initial imaging modality for following up simple ovarian cysts when this is indicated. The indications are:\n1) Cysts > 5 cm and < 7 cm in the reproductive age group should have yearly follow-up.\n2) Cysts > 1 cm and < 7 cm in the postmenopausal age group should have yearly follow-up.\n\nSmaller cysts do not need any follow-up.\n\nHemorrhagic cysts > 5 cm. should be have a follow-up examination in 6-12 weeks at a different stage of the menstrual cycle.\n\nIn patients with pelvic pain and hemorrhagic cysts < five cm, a follow up ultrasound is recommended to rule out endometriosis.');
	$('#Polycystic_Ovarian_Syndrome1').text('Imaging is not indicated.\n\nDefinitive diagnosis of this syndrome is made by laboratory tests. Although characteristic sonographic abnormalities can be seen in some patients with polycystic ovarian syndrome, not all patients have these findings.').css('font-weight', 'bold');
	$('#Head_Injury1').text('There is poor correlation between the presence of a skull fracture and a clinically significant head injury. The only indications for skull x-rays in the setting of trauma are suspected open or depressed skull fractures, if CT is not available and suspected child abuse.').css('font-weight', 'bold');
	$('#Head_Injury2').text(' CT is indicated in all patients with a severe head injury(GCS <13).\nIn patients with a minor head injury (GCS 13-15 and witnessed loss of consciousness or disorientation or definite amnesia) CT is indicated to rule out an injury requiring neurosurgical intervention if there is:1) GCS <15 2 hours after the injury\n2) Suspected open or depressed skull fracture\n3)Any sign of a basal skull fracture\n4) Two or more episodes of vomiting\n5)Age > 65 years\nTo rule out any other clinically significant intracranial injury, the following additional risk factors justify obtaining CT:\n6) Amnesia for before the impact lasting > 30 minutes\n7)  Dangerous mechanism of injury (motor vehicle accident or fall from> 3 feet or 5 stairs or more).');
	$('#Head_Injury3').text('CTA should be performed with presentation of high energy transfer mechanism or if associated with any of the following:\n1) Displaced mid-face fracture\n2) Basilar skull fracture with carotid canal involvement\n3) Focal neurological deficit\n4) Cervical vertebral body or transverse foramen fracture\n5) Fracture at C1-C3\n6) Clothes line type injury or seat belt abrasion with significant swelling/pain\n7) Altered mental status');
	$('#Nasal_Trauma1').text('Xrays are not generally indicated as they are unreliable in diagnosing/characterizing nasal bone fractures and do not alter management.').css('font-weight', 'bold');
	$('#Nasal_Trauma2').html('<b>Specialist request</b>\nCT may be indicated if requested by a referral service to plan for management.');
	$('#Orbital_Trauma_Blunt1').text('CT is indicated when an orbital fracture or globe injury is suspected.');
	$('#Orbital_Trauma_Blunt2').text('Xray may be used if CT is not available.');
	$('#Orbital_Trauma_Penetrating1').text('XR is the only imaging required to exclude a metallic foreign body.');
	$('#Orbital_Trauma_Penetrating2').text('CT is indicated when an orbital fracture or globe in jury is suspected. CT is also indicated when XR does not show a foreign body but one, which may not be metallic, is strongly suspected, when multiple foreign bodies are present, or when it is not certain whether a foreign body is intraocular.');
	$('#Orbital_Trauma_Penetrating3').text('US can also be used for radiolucent foreign bodies or where XRay is difficult');
	$('#Middle_Third_Facial_Injury1').text('Patient cooperation is essential to obtain views of diagnostic quality. Consider delay if patient is uncooperative. Should be considered in setting of abnormal XR, suspected fracture, foreign body, or hematoma, and acute diploplia.');
	$('#Middle_Third_Facial_Injury2').text('Discuss with maxillofacial surgeon, who may request low dose CT at an early stage in management of complex injuries. Although plain x-rays have had a historical role, CT with reformats provides superior evaluation and should be the imaging modality of choice when available.');
	$('#Mandibular_Trauma1').html('If Xray is negative and there remains clinical suspicion of a fracture, consider CT\nCT with reformats should be performed where available for superior fracture detection.');
	$('#Mandibular_Trauma2').text('Start with a mandibular Xray.');
	$('#Neck_Injury_Pain0').html('<b>Acute significant neck injuries should generally be assessed in the Emergency Department</b>');
	$('#Neck_Injury_Pain1').text('CT is indicated to characterize both bony and soft-tissue injury.');
	$('#Neck_Injury_Pain2').text('MRI may be valuable in specialized situations where CT is negative and a purely ligamentous injury is suspected, or to further characterize injury already seen on CT.');
	$('#Neck_Injury_Pain3').text('Xray is inferior to CT but can be used as the initial investigation when clinical suspicion is low.');
	$('#Fall_Pelvic_Pain1').text('Xray is indicated as an initial imaging modality if a pelvic or femoral neck fracture is suspected.');
	$('#Fall_Pelvic_Pain2').text('CT is indicated if XR shows no fracture but there is ongoing pain or inability to weight bear. CT may also be indicated to further characterize fractures seen on XR.');
	$('#Fall_Pelvic_Pain3').text('NM bone scan should performed at least 48-72 hours post-injury to maximize sensitivity.');
	$('#Shoulder_Injury1').text('Xray is the appropriate initial imaging modality.');
	$('#Elbow_Injury1').text('Xray is the appropriate initial imaging modality.');
	$('#Scaphoid_Injury1').text('Xray is the appropriate initial imaging modality. If a scaphoid fracture is suspected a scaphoid view should be requested. Delayed XR (at least ten days) is appropriate if there is a high suspicion of a scaphoid fracture but a normal initial Xray.');
	$('#Scaphoid_Injury2').text('If a scaphoid fracture or other carpal fracture is suspected and the XR is normal CT is appropriate for further evaluation');
	$('#Scaphoid_Injury3').text('If a scaphoid fracture is suspected and the XR is normal and early diagnosis is required, MRI is the preferred modality for further evaluation.');
	$('#Scaphoid_Injury4').text('If a scaphoid fracture is suspected and the XR is normal and early diagnosis is required NM can be used for further evaluation but NM bone scan should performed at least 48-72 hours post-injury to maximize sensitivity.');
	$('#Knee_Injury1').text('Xray is the appropriate initial imaging modality. It is indicated if any of the following risk factors are present:\n1) Age > 55 years\n2)Tenderness over the head of the fibula\n3) Isolated tenderness of the patella\n4) Inability to flex to 90 degrees\n5) Inability to weight bear 4 steps immediately and in the office');
	$('#Ankle_Injury1').text('Xray is the appropriate initial imaging modality. It is indicated if any of the following risk factors are present :\n1) inability to weight-bear four steps immediately and in the emergency room\n2)point tenderness over the medial malleolus, and/or\n3) the posterior edge and distal tip of the lateral malleolus.');
	$('#Ankle_Injury2').text(' CT is indicated to rule out an occult fracture is there is:\n1) An ankle effusion in the setting of normal x-rays and combined effusion (anterior to posterior) of greater then 13mm with ongoing suspicion of fracture;\n2) Ongoing pain or inability to weight bear.');
	$('#Ankle_Injury3').text('MRI is indicated if there is a suspected isolated soft-tissue injury, occult fracture not seen on CT, or to further characterize fractures seen on CT.');
	$('#Stress_Fracture1').text('Xray is the preferred initial imaging modality if stress fracture is suspected and can be repeated in 10 days to increase sensitivity.');
	$('#Stress_Fracture2').text('CT is indicated if there are ongoing symptoms and a negative Xray.');
	$('#Stress_Fracture3').text('MRI is the superior modality for detecting early undisplaced stress fractures which may be occult on CT and Xray.');
	$('#Stress_Fracture4').text('NM studies may be useful for further evaluation of a suspected stress fracture not visible on XR.');
	$('#Hip_Injury1').text('Xray is the preferred initial imaging modality.');
	$('#Hip_Injury2').text('CT is indicated if there is ongoing inability to weight bear and/or a high suspicion for fracture despite a negative XR.');
	$('#Hip_Injury3').text('MRI is indicated for ongoing suspicion of hip fracture in the setting of a normal XR or CT, especially if a stress fracture is suspected.');
	$('#Hip_Injury4').text('NM bone scan can be performed where MRI is unavailable or contraindicated. NM bone scan should performed at least 48-72 hours post-injury to maximize sensitivity.');
	$('#Foreign_Body1').text('Xray is the appropriate initial imaging modality.');
	$('#Foreign_Body2').text('US may be indicated if glass or wood foreign body is suspected and XR is normal.');
	$('#Spinal_Dysraphism1').text('Xray lumbar spine has the poorest diagnostic performance and exposes children to radiation. It should therefore not be used as a screening modality for spinal dysraphism.').css('font-weight', 'bold');
	$('#Spinal_Dysraphism2').text('Infants with lumbosacral dimple, hairy patch, hemangioma or anorectal/cloacal malformation are at higher risk of spinal dysraphism. US should be sufficient to rule out spinal dysraphism in infants presenting with only a lumbosacral dimple.\nUS should be performed before 6 months of age, because visualization becomes progressively more difficult with ossification of the posterior elements.');
	$('#Spinal_Dysraphism3').text('MRI requires sedation, and the strength of the clinical indication must be weighed against the risk of sedation in consultation with a neurosurgeon. MRI should be considered when the risk of spinal dysraphism is high despite a negative US, or when the child is too old to have US.');
	$('#Hip_Pain1').text('Xray is the most appropriate first imaging examination for suspected avascular necrosis and slipped capital femoral epiphysis. AP and frog leg lateral views of the pelvis and both hips should be performed, with gonadal shielding on one of these views.');
	$('#Hip_Pain2').html('<b>Specialist request</b>\nUS is the most appropriate initial imaging examination for suspected septic arthritis, transient synovitis, juvenile idiopathic arthritis or hemarthrosis. US has high sensitivity for the detection of hip effusion, but cannot distinguish reliably among the different causes.');
	$('#Hip_Pain3').html('<b>Specialist request</b>\nMRI is now considered the modality of choice to assess the severity and complications of avascular necrosis. MRI can also be helpful in assessing inflammatory arthropathies. MRI may require sedation and should be performed in consultation with an orthopaedic surgeon or rheumatologist.');
	$('#Hip_Pain4').html('<b>Specialist request</b>\nNM bone scan with pinhole views of the hips may also be used to assess avascular necrosis if MRI is not available.');
	$('#Unlocalised_Limping_Child1').text('In the initial evaluation, XR of the tibia and fibula may identify a toddlers fracture.');
	$('#Unlocalised_Limping_Child2').html('<b>Specialist request</b>\nUS may identify hip pathology. In the initial evaluation, US has high sensitivity for the detection of hip effusion, but cannot distinguish reliably among the different causes.');
	$('#Unlocalised_Limping_Child3').html('<b>Specialist request</b>\nNM is moderately indicated following a negative XR and US. NM bone scan has a higher radiation dose than the above combination of XR and US. Therefore, NM should be considered as a second-line investigation if XR and US fail to localize the pathology and symptoms persist.');
	$('#Unlocalised_Limping_Child4').html('<b>Specialist request</b>\nMRI may be used instead of NM or as an adjunct to NM at some centres, depending on availability and local expertise.');
	$('#Hip_Dysplasia1').text('US is the examination of choice in the newborn period. XR provides no significant added information and exposes infants to radiation.\nWhere clinical suspicion is strong even if imaging is negative, consideration should be given to direct referral to orthopaedics.').css('font-weight', 'bold');
	$('#Hip_Dysplasia2').text('US is the examination of choice in the newborn with risfactors for Developmental Dysplasia of the Hip (DDH) (e.g. family history, primiparous mother, female gender, breech presentation, oligohydramnios, club foot, genu recurvatum, torticollis).\nUS should be performed between 4 and 6 weeks of age to reduce the false positive rate resulting from physiological laxity in the newborn period.\nTreatment of DDH within 6 to 8 weeks after birth is associated with significantly improved outcomes.');
	$('#Hip_Dysplasia3').text('Between 3-6months, US visualization may be compromised by ossification of the femoral head in some infants and XR may be more useful to depict ossification of the femoral head, contour of the acetabulum and alignment of the hip.');
	$('#Hip_Dysplasia4').text('Greater than 6 months of age, Xray is imaging of choice').css('font-weight', 'bold');
	$('#Osgood_Schlatter1').text('Osgood-Schlatter disease is a clinical diagnosis. XR findings of Osgood-Schlatter disease overlap with normal findings. XR may be considered if the diagnosis is uncertain, or if more serious bone pathology is being considered.').css('font-weight', 'bold');
	$('#Stridor_Stable_Child1').text('Frontal and lateral XR of the neck allows evaluation of the epiglottis, glottis and subglottic airway and may be of value to confirm suspected obstructing foreign body or retropharyngeal abscess.');
	$('#Pyloric_Stenosis1').text('Pyloric stenosis presents as non-bilious vomiting in an infant and has a differential diagnosis of GERD. Bilious vomiting is an emergency and should precipitate a transfer to the hospital for further investigation. ').css('font-weight', 'bold');
	$('#Pyloric_Stenosis2').text('US is the preferred modality to identify HPS in term infants as well as preterm infants. US screening for associated urinary tract anomalies in children with proven HPS is not worthwhile.');
	$('#Pyloric_Stenosis3').text('Upper GI studies may be used to assess for HPS when US is non-diagnostic, or when US is not available.\nThis is done at BCCH');
	$('#Impalpable_Testes1').text('US is the best initial imaging modality.');
	$('#Impalpable_Testes2').html('<b>Specialist request</b>\nIf US fails to reveal testes in the inguinal canal, MRI can be used to locate intra-abdominal testes. MRI should be considered in consultation with a surgeon, because laparoscopy without further imaging is a reasonable alternative.');
	$('#Impalpable_Testes3').html('<b>Specialist request</b>\nIf US fails to reveal testes in the inguinal canal, CT can be used to locate intra-abdominal testes. CT should be considered in consultation with a surgeon, because laparoscopy without further imaging is a reasonable alternative..');
	$('#Febrile_UTI_Uncomplicated_Under2yrs1').text('US of kidneys and bladder should be performed to rule out anatomical anomalies and hydronephrosis, to assess renal parenchyma and renal size. The yield of US for significant abnormalities in this setting is low, but non-invasiveness and lack of radiation exposure argue in favour of performing the test. US should not be performed during the acute illness, as transient dilation of the renal collecting system and swelling of the renal parenchyma may be misleading.');
	$('#Febrile_UTI_Uncomplicated_Under2yrs2').text('Renal DMSA scan does not contribute to management decisions in uncomplicated UTI and should be reserved for cases of complicated or recurrent UTI, where the risk of renal parenchymal scarring is higher.');
	$('#Febrile_UTI_Uncomplicated_Under2yrs3').text('Antibiotic prophylaxis has not been shown to prevent recurrent UTI or pyelonephritis in infants without vesicoureteral reflux (VUR) or with grade I-IV VUR.');
	$('#Febrile_UTI_Complicated_Under2yrs1').text('UTI is considered complicated if any of the following apply:\n1) Very ill child\n2) Evidence of sepsis\n3) Low urine output\n4) Raised serum creatinine\n5) Abdominal/pelvic mass\n6) Infection with organisms other than E. coli and/or failure to respond to appropriate antibiotics within 48 hours.\nIn such cases, urgent US is indicated to assess for pyonephrosis, renal abscess or perirenal abscess.');
	$('#Febrile_UTI_Complicated_Under2yrs2').text('DMSA renal scan is the most sensitive modality for the detection of pyelonephritis and renal scarring.');
	$('#Febrile_UTI_Complicated_Under2yrs3').text('VCUG may be considered to rule out high grade VUR in this setting. VCUG should be performed after the active infection has settled..');
	$('#Recurrent_UTI_Under2yrs0').text('Start with an ultrasound if not already done.');
	$('#Recurrent_UTI_Under2yrs1').text('The type of renal scan (e.g. DMSA, MAG3) should be determined in consultation with a pediatric nephrologist/ nephrologist/nuclear medicine physician.');
	$('#Recurrent_UTI_Under2yrs2').text('VCUG is indicated to identify high grade VUR in children with recurrent UTI and in children with US findings of hydronephrosis and/or scarring.');
	$('#GER1').text('History and physical examination should be sufficient to diagnose uncomplicated GER and initiate therapy in most infants.').css('font-weight', 'bold');
	$('#GER2').html('<b>Specialist request</b>\nHowever, UGI is appropriate for GER with the following features:\n1) Failure to resolve with medical management by 18-24 months\n2) Associated with poor weight gain\n3) Any child > 2 years of age\n4) Any child with dysphagia or odynophagia.\n\nUGI has lower sensitivity for GER than pH monitoring and lower sensitivity for esophagitis than endoscopy.');
	$('#GER3').html('<b>Specialist request</b>\nA NM reflux scan may be used in tandem with UGI to document reflux, if pH monitoring is not available.');
	$('#Scoliosis_Idiopathic_Adolescent0').text('The presence of scoliosis should be established by physical examination.').css('font-weight', 'bold');
	$('#Scoliosis_Idiopathic_Adolescent1').text('The purpose of radiographs is to quantify the scoliosis and to assess for malsegmentation. Frontal view should be performed in PA projection in all cases.\nLateral view should be performed for scoliosis greater than 10 degrees.');
	$('#Scoliosis_Non_Idiopathic1').text(' PA and lateral views may be performed for initial localization and characterization of pathology in patients with suspected non-idiopathic scoliosis\ne.g.\n1) Onset before 11 years of age,\n2) Rapid progression\n3) Curve > 45 degrees\n4) Apex left thoracic curve\n5) Apex right lumbar curve\n6) Short segment scoliosis\n7) Associated pain\n8) Neurological findings or midline cutaneous anomalies.');
	$('#Scoliosis_Non_Idiopathic2').text('Should be performed for initial localization if vertebral tumour is suspected.');
	$('#Scoliosis_Non_Idiopathic3').text('Should be targeted to focal bone pathology identified by XR or NM examinations.');
	$('#Scoliosis_Non_Idiopathic4').text('Should include sequences targeted to the pathology, as well as sequences covering the whole spine for adequate assessment of cord, conus and cauda equina.');
	$('#Read_Me1').html('<b>New features;</b>\n1) <b>Interventions module:</b> click on the blue <b>Interventional Procedures/Angio</b> to access. This will help advise on the location of the procedure, medications (DepoMedrol vs Triamcilone) and lab work, if needed.\n2) <b>Location choices:</b> click on <b>Choose a location</b> top of blue area.\n3) <b>Guidelines:</b> Click on one of the categories at the bottom of the blue box. There are over 160 embedded guidelines which provide advice on appropriate imaging choices including the need for contrast and lab work. Do not use the guideline ordering if your patient does not fit into the topic, instead order manually as before. \n4) <b>Test preparation:</b> see bottom of the grey box.\n5) <b>Urgent ordering:</b> Please review the handout that has been sent out. If the test does not have to be done immediately and you would have phoned the radiologist to expedite, you can now submit this by fax with your request in the Exam Requested box, eg <b>CT Head - please do within 2 weeks</b>. To highlight this request, apply the URGENT banner and the radiologist will review the history you have provided and come to a decision. You will then receive a return fax with the date of the test. If you feel that the timing is not appropriate you have the option to call the radiologist.\n6) <b>DVT Module:</b> is accessible through the CVS guidelines. If you have done a D-dimer, complete the Wells score and the D-dimer will autopopulate.<br><br><br>To help with workflow, this form <b>autopopulates</b> some of the checkboxes.\n<b>There is a risk for error and it is the responsibility of the user to verify the results.</b>\n1) For <b>pregnancy</b> if the patient is male or over 54 yo the computer will check negative.\nIf there is an EDC and we are within -280 to +14 days of this date, the computer will check positive.\nIf the patient miscarries and you do not adjust the EDC, then for the gestation period the computer will consider the patient pregnant.\n2) For <b>diabetes</b> the computer looks for a diabetic flow sheet or an A1c more than 6.2. If neither is found it will check negative.\n3) For <b>dialysis</b> if eGFR is more than 14 it will check negative.\n4) For <b>Metformin</b> the computer looks for a CURRENT Metformin prescription. If not found it will check negative.\n5) For <b>anticoagulation</b> the computer looks for a CURRENT prescription for Warfarin, Dabigatran, Rivaroxaban or Apixaban. If none is found it will check negative. If the prescription is not entered properly, for example not entering the frequency and time period, it will default to negative. <b>Correct Rx:</b> Warfarin 5MG: Use as directed <b>OD</b> for <b>3 months</b>\n6) <b>Isolation</b> is automaticaly checked standard.');
	$('#PJI0').html('<b><u>PERIPHERAL JOINT</u></b>'); 
	$('#PJI1').html('<pre class="ippre"><u>CGH</u><br><br><br><br>Knee Left <input id="Knee_Left" type="text" class="boxIP box1 cgh peripheral" >     Knee Right <input id="Knee_Right" type="text" class="boxIP box1 cgh peripheral" ><br><br>Hip Left <input id="Hip_Left" type="text" class="boxIP box1 cgh peripheral" >      Hip Right <input id="Hip_Right" type="text" class="boxIP box1 cgh peripheral" ><br><br>Shoulder Left <input id="Shoulder_Left" type="text" class="boxIP box1 cgh peripheral" >      Shoulder Right <input id="Shoulder_Right" type="text" class="boxIP box1 cgh peripheral" ><br><br>Wrist Left <input id="Wrist_Left" type="text" class="boxIP box1 cgh peripheral" >      Wrist Right <input id="Wrist_Right" type="text" class="boxIP box1 cgh peripheral" ><br><br>Coccyx <input id="Coccyx" type="text" class="boxIP box1 cgh peripheral" ><br><br><br><br><u>ARH</u><br><br><br><br>Sacroiliac Left <input id="Sacroiliac_Left" type="text" class="boxIP box1 arh peripheral" >      Sacroiliac Right <input id="Sacroiliac_Right" type="text" class="boxIP box1 arh peripheral" ><br><br>Facet Left <input id="Facet_Left" type="text" class="boxIP box1 arh spine" >      Facet Right <input id="Facet_Right" type="text" class="boxIP box1 arh spine" ><br><br>Nerve Root Block <input id="Nerve_Root_Block" type="text" class="boxIP box1 arh spine" ></pre>');
	$('#SB0').html('<b><u>SUPERFICIAL BIOPSY</u></b>');
	$('#SB1').html('<pre class="ippre"><u>CGH</u><br><br><br><br>Breast Left <input id="Breast_Left" type="text" class="boxIP box1 cgh" >     Breast Right <input id="Breast_Right" type="text" class="boxIP box1 cgh" ><br><br>Extremeties Left <input id="Extremeties_Left" type="text" class="boxIP box1 cgh" >      Extremeties Right <input id="Extremeties_Right" type="text" class="boxIP box1 cgh" ><br><br>Lymph Nodes Left <input id="Lymph_Nodes_Left" type="text" class="boxIP box1 cgh" >      Lymph Nodes Right <input id="Lymph_Nodes_Right" type="text" class="boxIP box1 cgh" ><br><br>Thyroid Left <input id="Thyroid_Left" type="text" class="boxIP box1 cgh" >      Thyroid Right <input id="Thyroid_Right" type="text" class="boxIP box1 cgh" ><br><br>Abscess Left <input id="Abscess_Left" type="text" class="boxIP box1 cgh" >      Abscess Right <input id="Abscess_Right" type="text" class="boxIP box1 cgh" ><br><br>Cyst Left <input id="Cyst_Left" type="text" class="boxIP box1 cgh" >      Cyst Right <input id="Cyst_Right" type="text" class="boxIP box1 cgh" ></pre>');
	$('#CB0').html('<b><u>CORE BIOPSY</u></b>');
	$('#CB1').html('<pre class="ippre"><u>CGH</u><br><br><br><br>Breast Left <input id="Breast_Left" type="text" class="boxIP box1 cgh" >     Breast Right <input id="Breast_Right" type="text" class="boxIP box1 cgh" ><br><br>Liver Left <input id="Liver_Left" type="text" class="boxIP box1 cgh" >     Liver Right <input id="Liver_Right" type="text" class="boxIP box1 cgh" ><br><br>Abdominal Left <input id="Abdominal_Left" type="text" class="boxIP box1 cgh" >     Abdominal Right <input id="Abdominal_Right" type="text" class="boxIP box1 cgh" ><br><br>Chest Wall Left <input id="Chest_Wall_Left" type="text" class="boxIP box1 cgh" >     Chest Wall Right <input id="Chest_Wall_Right" type="text" class="boxIP box1 cgh" ><br><br>Prostate Left <input id="Prostate_Left" type="text" class="boxIP box1 cgh" >     Prostate Right <input id="Prostate_Right" type="text" class="boxIP box1 cgh" ><br><br>Lung Left <input id="Lung_Left" type="text" class="boxIP box1 cgh" >     Lung Right <input id="Lung_Right" type="text" class="boxIP box1 cgh" ><br><br><br><br><u>ARH</u><br><br>Renal Left <input id="Renal_Left" type="text" class="boxIP box1 arh" >     Renal Right <input id="Renal_Right" type="text" class="boxIP box1 arh" ></pre>');
	$('#CI0').html('<b><u>CATHETER INSERTIONS AND EXCHANGES</u></b>');
	$('#CI1').html('<pre class="ippre">Catheter insertions and exchanges are all done at ARH<br>Tube placement checks by contrast injection are done at CGH (eg Nephrostogram)<br><br><br><br>Cholecystostomy/Biliary Drainage <input id="Cholecystostomy/Biliary_Drainage" type="text" class="boxIP box1 cgh" > <br><br>Gastrostomy/Gastrojejunostomy <input id="Gastrostomy/Gastrojejunostomy" type="text" class="boxIP box1 cgh" > <br><br>Nephrostomy <input id="Nephrostomy" type="text" class="boxIP box1 cgh" ></pre>');
	$('#Misc0').html('<b><u>MISCELLANEOUS</u></b>');
	$('#Misc1').html('<pre class="ippre"><u>CGH</u><br><br><br><br>Thoracentesis Left <input id="Thoracentesis_Left" type="text" class="boxIP box1 cgh int" >       Thoracentesis Right <input id="Thoracentesis_Right" type="text" class="boxIP box1 cgh" ><br><br>Paracentesis <input id="Paracentesis" type="text" class="boxIP box1 cgh" ><br><br>Lumbar Puncture <input id="Lumbar_Puncture" type="text" class="boxIP box1 cgh" ><br><br>Hysterosalpingogram <input id="Hysterosalpingogram" type="text" class="boxIP box1 cgh hsg"><br><br><br><br><u>ARH</u><br><br><br><br>Epidural <input id="Epidural" type="text" class="boxIP box1 arh spine" ><br><br>GI Tract Stenting  <input id="GI_Tract_Stenting" type="text" class="boxIP box1 arh" ></pre>');
	$('#Vasc0').html('<b><u>VASCULAR EXAMINATIONS AND INTERVENTIONS</u></b>');
	$('#Vasc1').html('<pre class="ippre"><u>ARH</u><br><br><br><br>Diagnostic Venography/Angiography <input id="Diagnostic_Venography/Angiography" type="text" class="boxIP box1 arh" ><br><br>Balloon Angioplasty(peripheral)  <input id="Balloon_Angioplasty(peripheral)" type="text" class="boxIP box1 arh" ><br><br>Stent insertion(peripheral)  <input id="Stent insertion(peripheral)" type="text" class="boxIP box1 arh" ><br><br>PICC Line <input id="PICC_Line" type="text" class="boxIP box1 arh" >     Portocath <input id="Portocath" type="text" class="boxIP box1 arh" >     Tunneled CVC <input id="Tunneled_CVC" type="text" class="boxIP box1 arh" ><br><br>IVC Filter Insertion  <input id="IVC_Filter_Insertion" type="text" class="boxIP box1 arh" >    IVC Filter Removal  <input id="IVC_Filter_Removal" type="text" class="boxIP box1 arh" ><br><br>Transjugular Liver Biopsy <input id="Transjugular_Liver_Biopsy" type="text" class="boxIP box1 arh" ><br><br>Varicocoele Embolisation  <input id="Varicocoele_Embolisation" type="text" class="boxIP box1 arh" ><br><br>Uterine Fibroid Embolisation  <input id="Uterine_Fibroid_Embolisation" type="text" class="boxIP box1 arh" ><br><br>TIPS  <input id="TIPS" type="text" class="boxIP box1 arh" ></pre>');
	$('#BloodThinners1').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
	$('#BloodThinners2').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
	$('#BloodThinners3').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
	$('#BloodThinners4').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
	$('#BloodThinners5').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
	$('#BloodThinners6').html('<b>Unless discussed with the radiologist, all blood thinners with the exception of ASPIRIN 81MG OD are required to be held before the procedure.\n\nCLOPIDOGREL (Plavix) hold for 5 days prior to procedure.\nLMWH (Low molecular weight heparin) hold for one dose prior to procedure.\nWARFARIN hold for 5 days then do INR,PTT and repeat 24hrs prior to procedure.\nNOAC hold for 3 days prior to high risk procedure or 2 days prior to moderate or low risk procedure. Restart two days after procedure.</b>');
});

if ($('#counter').val() == '2') {   //this only works if the form is being opened after submission
 var pages = $('#printer').val();
 if (pages == 'C') {
 $("#page1").show();
// $("#page2").show();
} 
 if (pages == 'D') {
 $("#page1").hide();
// $("#page2").show();
}
 if (pages == 'IP') {
 $("#page1").show();
// $("#page2").show();
// $("#page16").show();
} 
 if (pages == 'SP') {
 $("#page1").show();
// $("#page2").show();
// $("#page16").show();
}
 if (pages == 'PE') {
 $("#page1").show();
// $("#page17").show();
}
}

}; 