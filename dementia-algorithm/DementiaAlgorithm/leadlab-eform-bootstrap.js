/*!
 * LeadLab eForm Bootstrap Template v1.0.1
 * Copyright 2016 LeadLab
 * Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported License
 */
$(document).ready(function(){
	/* Show eForm Form */
	$("#eform-form").removeClass("hidden");

	/* Set Window Size */
	top.window.moveTo(0,0);
	top.window.outerHeight = screen.availHeight;
	if(screen.availWidth > 1100) {
		top.window.outerWidth = 1100;
	} else {
		top.window.outerWidth = screen.availWidth;
	}

	/* Set Tooltip */
	$("[data-toggle='tooltip']").tooltip();

	/* Resize textarea height based on content */
	$("textarea.autoExpand").keyup(function(){
		autoHeight(this);
	});

	/* Standard Buttons */
	$(".btn-save").click(function(){
		// Nothing needed when input type is submit
	});
	$(".btn-reset").click(function(){
		history.go(0);
	});
	$(".btn-print").click(function(){
		window.print();
	});
	$(".btn-about").click(function(){
		$("#about-modal").modal("show");
	});

	/* Demographic Data */
	var demographicNo = getDemographicNo();
	var patientName = getPatientName();

	/* OSCAR Link Buttons */
	$(".btn-allergy").click(function(){
		window.open("../oscarRx/showAllergy.do?demographicNo=" + demographicNo);
	});
	$(".btn-billing").click(function(){
		window.open("../billing.do?billRegion=BC&demographic_no=" + demographicNo);
	});
	$(".btn-consult").click(function(){
		window.open("../oscarEncounter/oscarConsultationRequest/ConsultationFormRequest.jsp?de=" + demographicNo);
	});
	$(".btn-diseasereg").click(function(){
		window.open("../oscarResearch/oscarDxResearch/setupDxResearch.do?providerNo=&quickList=&demographicNo=" + demographicNo);
	});
	$(".btn-documents-all").click(function(){
		window.open("../dms/documentReport.jsp?view=all&function=demographic&functionid=" + demographicNo);
	});
	$(".btn-documents-consult").click(function(){
		window.open("../dms/documentReport.jsp?view=consult&function=demographic&functionid=" + demographicNo);
	});
	$(".btn-labgrid").click(function(){
		window.open("../lab/CumulativeLabValues3.jsp?demographic_no=" + demographicNo);
	});
	$(".btn-labs").click(function(){
		window.open("../lab/DemographicLab.jsp?demographicNo=" + demographicNo);
	});
	$(".btn-oscarmsg").click(function(){
		window.open("../oscarMessenger/SendDemoMessage.do?demographic_no=" + demographicNo);
	});
	$(".btn-prevention").click(function(){
		window.open("../oscarPrevention/index.jsp?demographic_no=" + demographicNo);
	});
	$(".btn-rx").click(function(){
		window.open("../oscarRx/choosePatient.do?demographicNo=" + demographicNo);
	});
	$(".btn-tickler").click(function(){
		var temp = window.open();
		temp.open("../tickler/ticklerAdd.jsp?name=" + patientName + "&bFirstDisp=false&demographic_no=" + demographicNo);
		temp.close();
	});

	/* OSCAR Flowsheets */
	$(".btn-flowsheet-chf").click(function(){
		window.open("../oscarEncounter/oscarMeasurements/TemplateFlowSheet.jsp?template=chf&demographic_no=" + demographicNo);
	});
	$(".btn-flowsheet-dm").click(function(){
		window.open("../oscarEncounter/oscarMeasurements/TemplateFlowSheet.jsp?template=diab2&demographic_no=" + demographicNo);
	});
	$(".btn-flowsheet-hbp").click(function(){
		window.open("../oscarEncounter/oscarMeasurements/TemplateFlowSheet.jsp?template=hyptension&demographic_no=" + demographicNo);
	});

	/* Untested Link Buttons */
	$(".btn-egfr").click(function(){
		window.open("../oscarEncounter/oscarMeasurements/SetupDisplayHistory.do?type=EGFR");
	});
});

/* Get demographicNo from location bar or from input field if possible */
function getDemographicNo() {
	var demographicNo = "";
	try {
		var pattern = /[?&](?:demographic_no|demographicNo)=(\d+)/i;
		var match = pattern.exec(window.opener.location.search);
		demographicNo = match[1];
	} catch(e) {
		demographicNo = $("[oscardb='patient_id']:first").val();
		if (typeof demographicNo === "undefined") {
			demographicNo = "";
		}
	}
	return demographicNo;
}

/* Get patient name from input field if possible */
function getPatientName() {
	var patientName = $("[oscardb='patient_name']:first").val();
	if (typeof patientName === "undefined") {
		patientName = "";
	}
	return patientName;
}

/* Appends Encounter Note with fieldId's value */
function UpdateEncounter(fieldId) {
	try {
		var notes = document.getElementById(fieldId).value;
		var win = window.parent.opener;
		
		// Traverse up window parent opener
		while (win != null) {
			if (win.document.forms["caseManagementEntryForm"] != undefined) {
				break;
			}
			win = win.parent.opener;
		}

		// Copy to Encounter
		win.document.getElementById("newNoteImg").onclick();
		var textAreaId = win.document.getElementsByTagName("textarea")[0];
		var encounterArea = win.document.getElementById(textAreaId.id);
		encounterArea.value = encounterArea.value + "\r\n" + notes;
		encounterArea.style.height = encounterArea.scrollHeight + "px";
	} catch(e) {
		alert("Error: Unable to copy to encounter note");
	}
}

/* Add Local Time to fieldId textarea */
function AppendLocalTime(fieldId) {
	var notes = document.getElementById(fieldId);
	notes.value = notes.value + " " + new Date().toLocaleTimeString();
}

/* Dynamically resize textarea a to content */
function autoHeight(a) {
    if (!$(a).prop('scrollTop')) {
        do {
            var b = $(a).prop('scrollHeight');
            var h = $(a).height();
            $(a).height(h - 5);
        }
        while (b && (b != $(a).prop('scrollHeight')));
    };
    $(a).height($(a).prop('scrollHeight') + 20);
}

