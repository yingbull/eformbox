function autoComp() {
if ($('#Who1').val()) {$('#FHYes').val('X'); $('#FHNo').val('');}
if ($('#MamLocation1').val()) {$('#PreviousMamYes').val('X'); $('#PreviousMamNo').val('');}
if ($('#USLocation1').val()) {$('#PreviousUSYes').val('X'); $('#PreviousUSNo').val('');}
if ($('#FollowUpDetails').val()) {$('#FollowUp').val('X');}
if ( ($('#Mammogram').val() == 'X')||($('#PreviousMamYes').val() == 'X') ) {  // this uses a hidden input to store previous US or mammogram
	$('#PrevMamY').val('X'); // If US or Mammogram is ordered  then the next imaging will indicate this
	$('#PrevMamN').val('');
	} else {
	$('#PrevMamN').val('X');
	$('#PrevMamY').val('');
	}
if ( ($('#BreastUS').val() == 'X')||($('#PreviousUSYes').val() == 'X') ) {
	$('#PrevUSY').val('X');
	$('#PrevUSN').val('');
	} else {
	$('#PrevUSN').val('X');
	$('#PrevUSY').val('');
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

function formReset() {
	$('#FormName').trigger("reset");
	$('#LazySelect').trigger("reset");
}

function Highlight(i) {
	document.getElementById(i).style.border = "2px solid orange";
}

function RemoveHighlight(i) {
	document.getElementById(i).style.borderStyle = "none";
}	

function FollowUpReset() {
	$(".FU").val('');
	return;
}

function setBlack() {
	$(".color").attr('class', 'color black DoNotPrint');
	$(".color").css({ 'font-weight': 'normal' });
	$(".tool").attr('class', 'tool hidden DoNotPrint');
}

function changeClass(n){	
	setBlack();
    $('#' + n).attr('class', 'color blue DoNotPrint');
	$('#' + n).css({ 'font-weight': 'bold' });
	$('#A' + n).attr('class', 'tool visible DoNotPrint');
}
	
$(function() {

	$(".FU").click(function() {  //On clicking one of the FU in boxes, clears the destination and populates
		$(".gr").val('');
		a = $(this).attr('id');
		b = (a.charAt(0));  //M or U or B - modality
		c = (a.charAt(1));  //R or L or B - side
		d = (a.charAt(2));  //3 or 6 or 12 - interval in months

		if (b == 'M') { var t = 'mammogram'};
		if (b == 'U') { var t = 'ultrasound'};
		if (b == 'B') { var t = 'mammogram and ultrasound'};
		if (c == 'R') { var s = 'right'};
		if (c == 'L') { var s = 'left'};
		if (c == 'B') { var s = 'bilateral'};
		if (d == '3') { var e = '91'};
		if (d == '6') { var e = '182'};
		if (d == '1') { var e = '365'; var d = '12'};

		var imgDate = $("#dateI").val();  //date of last imaging
		if (!imgDate) { // no last imaging date input
			alert('Please enter a date for the previous imaging');
			$(".FU").val('');
			return;
		}
		var date1 = new Date(imgDate);
		imgTime = date1.getTime(); //converts date to milliseconds from 1 Jan 1970
		periodDays = e  // lag to next imaging in days
		desiredTime = (imgTime + (periodDays * 1000 * 60 * 60 * 24)); //Adds days in milliseconds
		desiredDate = new Date(desiredTime); //Converts back to a date
		desiredDateOutput = desiredDate.toISOString().split('T')[0]; //This converts the date string to yyyymmdd format, adds a day though because of time zone

		$('#FollowUp').val('X');
		if (b == 'M') { $('#Mammogram').val('X');}
		if (b == 'U') { $('#BreastUS').val('X');}
		if (b == 'B') {  $('#Mammogram').val('X'); $('#BreastUS').val('X');}
		if (c == 'R') { $('#Right').val('X');}
		if (c == 'L') { $('#Left').val('X');}
		if (c == 'B') { $('#Bilateral').val('X');}
		$('#FollowUpDetails').val('Follow-up ' + s + ' ' + t +  ' as per radiologist recommendation in ' + d + ' months, around ' + desiredDateOutput);
	});

$(".Lo").click(function() { 		
		j = $('#' + this.id).val();
		k = this.id
		l = (k.charAt(0));  //N,O/E,A,F,V,T,N,
		m = (k.charAt(2));  //M or U

		if (m == 'M') {
		$('#PreviousMamYes').val('X');$('#PreviousMamNo').val(''); 
		pr = $('#MamLocation1').val(); if (pr) { $('#MamLocation2').val(pr);}
		prd = $('#MamLocation1Date').val(); if (prd) { $('#MamLocation2Date').val(prd);$('#MamLocation1Date').val(' ')}
		if (l == 'F') { $('#MamLocation1').val('Fraser Health'); }
		if (l == 'V') { $('#MamLocation1').val('Vancouver Health'); }
		if (l == 'T') { $('#MamLocation1').val('Interior Health'); }
		if (l == 'S') { $('#MamLocation1').val('Island Health'); }
		if (l == 'N') { $('#MamLocation1').val('Northern Health'); }
		if (l == 'A') { $('#MamLocation1').val('See Attached'); }
		}

		if (m == 'U') {
		$('#PreviousUSYes').val('X'); $('#PreviousUSNo').val('');
		pru = $('#USLocation1').val(); if (pru) { $('#USLocation2').val(pru);}
		prud = $('#USLocation1Date').val(); if (prud) { $('#USLocation2Date').val(prud); $('#USLocation1Date').val(' ');}
		if (l == 'F') { $('#USLocation1').val('Fraser Health'); }
		if (l == 'V') { $('#USLocation1').val('Vancouver Health'); }
		if (l == 'T') { $('#USLocation1').val('Interior Health'); }
		if (l == 'S') { $('#USLocation1').val('Island Health'); }
		if (l == 'N') { $('#USLocation1').val('Northern Health'); }
		if (l == 'A') { $('#USLocation1').val('See Attached'); }
		}
	});

$(".SI").click(function() {
		k = this.id
		l = (k.charAt(0));  //R or L or B
		if (l == 'R') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'Right '); }
		if (l == 'L') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'Left '); }
		if (l == 'B') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'Bilateral '); }
	});

$(".SU").click(function() {
		k = this.id
		l = (k.charAt(0));  //E or N or M
		if (l == 'E') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'excision biopsy '); }
		if (l == 'N') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'needle biopsy '); }
		if (l == 'M') { $('#PreviousBiopsy').val($('#PreviousBiopsy').val() + 'mastectomy '); }
	});

$(".dateP").click(function() {
		j =$(this).val();
		$('#PreviousBiopsy').val($('#PreviousBiopsy').val() + j + ' ');
	});

$(".clr").click(function() {
		$('#PreviousBiopsy').val(' ');
	});
		 
$(".meno").click(function() {
		stage = $(this).attr('id');
		$("#LMPDate").val(stage);
	});

$(".Td").click(function() {
		n = $("#dateToday").val();
		$("#dateI").val(n);
	});

		//Decide if actively pregnant based on LMP EDC
		var gender = $('#PatientSex').val();
		var PatientAge = $('#ptAge').val();
		if (gender == 'M') {
			$("#LMPDate").val('Male');
		}
		if ((PatientAge > 54) && (gender =='F')) {
			$("#LMPDate").val('Menopausal');
		}

		var edcDate = $("#oscarEDC").val(); //2016-04-20   calculate the difference between todays date and the edc
		if (!edcDate) { //This is for the servers that use EDD instead of EDC
			var edcDate = $("#oscarEDD").val();
		}
		var date1 = new Date(edcDate);
		var date2 = new Date(); //mm dd yyyy          
		var timeDiff = (date1.getTime() - date2.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		if ((diffDays >= -14) && (diffDays <= 280)) { //determines patient is pregnant if difference from -14 to 280
			$("#LMPDate").val("PREGNANT EDC " + edcDate );
			$("#LMPDate").css("background-color", "yellow");
		}
	}); 