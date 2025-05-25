var theEDocuments;
if(document.location.protocol=='file:'){
}
else{
	var theScripts = document.getElementsByTagName('script'),
	theLastScriptURL = theScripts[theScripts.length-1].src;
	var EFORM_ADD='eform/efmformadd_data.jsp';
	var EFORM_SHOW='eform/efmshowform_data.jsp';
	var flgContinue;
	var theContextRoot;
	var theURL;
	var theProvider;
	switch(true){
		case document.location.pathname.lastIndexOf(EFORM_ADD)==document.location.pathname.length-EFORM_ADD.length:
		    theURL=document.location.href.split('?')[0];
		    theContextRoot=theURL.substring(0,theURL.lastIndexOf(EFORM_ADD));
		    flgContinue=true;
		    break;
		case document.location.pathname.lastIndexOf(EFORM_SHOW)==document.location.pathname.length-EFORM_SHOW.length:
		    theURL=document.location.href.split('?')[0];
		    theContextRoot=theURL.substring(0,theURL.lastIndexOf(EFORM_SHOW));
		    flgContinue=true;
		    break;
		default:
		    flgContinue=false;
	}
	function loadEDocsList(){
		theEDocuments=[];
		var request=new XMLHttpRequest();
		request.open('GET', theContextRoot+'dms/documentReport.jsp', false);
		request.send();
		if (request.status==200) {
			var theString=request.responseText;//.substring(request.responseText.indexOf('Public Documents'));
			var theExpression =/<input[^>]*?name="docCreator"[^>]*?value="([^>]*?)"[^>]*?>/gim;
			var theMatches= theExpression.exec(theString);//theString.match(theExpression);
			theProvider=theMatches[1];
		}	    
		var request=new XMLHttpRequest();
		request.open('GET', theContextRoot+'dms/documentReport.jsp?function=provider&functionid=', false);
		request.send();
		if (request.status==200) {
			var theString=request.responseText.substring(request.responseText.indexOf('Public Documents'));
			var theExpression =/<a[^>]*?href="([^>]*?)"[^>]*?_blank[^>]*?>([^<]*?)<\/a>/gim;
			var theMatches= theString.match(theExpression);
			var theComponents;
			var theDocument;                
			for(var index=0;index<theMatches.length;index++){
			    theExpression =/<a[^>]*?href="([^>]*?)"[^>]*?_blank[^>]*?>([^<]*?)<\/a>/gim;
			    theComponents=theExpression.exec(theMatches[index]);
			    theDocument=[];theDocument.push(theComponents[2].trim(),theComponents[1]);
			    theEDocuments.push(theDocument);
			}
			theEDocuments.sort();
		}	
	}	
    if(flgContinue){
	loadEDocsList();
    }
	function copyToEDocFromImageDirectoryAndOpen(theDocumentName){
		var theIncomingRequest = new XMLHttpRequest();
		theIncomingRequest.open("GET", theContextRoot+"eform/displayImage.do?imagefile="+theDocumentName+".pdf.bmp", true);
		theIncomingRequest.responseType = "blob";
		theIncomingRequest.onload=function(){
			var theIncomingBlob = theIncomingRequest.response;
			var theForm = new FormData();
			theForm.append('function','provider')
			theForm.append('functionId',theProvider)
			theForm.append('functionid',theProvider)
			theForm.append('parentAjaxId','')
			theForm.append('curUser','')
			theForm.append('appointmentNo','0')
			theForm.append('docType','others');
			theForm.append('docPublic','checked');
			theForm.append('docDesc',theDocumentName);
			theForm.append('docCreator',theProvider);
			theForm.append('observationDate',(new Date().getFullYear())+'/'+(new Date().getMonth()+1)+'/'+(new Date().getDate()));
			window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
			var theOutgoingBlob;
			if (window.BlobBuilder){
				var theBlobBuilder = new BlobBuilder();
				theBlobBuilder.append(theIncomingBlob);
				theOutgoingBlob = theBlobBuilder.getBlob('application/pdf');
			}else{
				theOutgoingBlob = new Blob(theIncomingBlob,{type:'application/pdf'});
			}
			theForm.append("docFile", theOutgoingBlob, "filename.pdf");
			theForm.append('docClass','');
			theForm.append('docSubClass','');
			theForm.append('mode','add');
			var theOutgoingRequest = new XMLHttpRequest();
			theOutgoingRequest.open("POST", theContextRoot+"dms/addEditDocument.do");
			theOutgoingRequest.send(theForm);
			 loadEDocsList();
			oscarOpenPublicEDoc(theDocumentName);
		}
		theIncomingRequest.send();
	}    
	function oscarOpenPublicEDoc(theDocumentName){
		var theUpperBound = theEDocuments.length - 1;
		var theLowerBound = 0;
		var theCursorIndex;
		var theTargetIndex=-1;
		while (theLowerBound <= theUpperBound) {
		    theCursorIndex = parseInt((theLowerBound + theUpperBound) / 2)
		    if (theEDocuments[theCursorIndex][0] > theDocumentName) {
			theUpperBound = theCursorIndex - 1;
		    } else if (theEDocuments[theCursorIndex][0] < theDocumentName) {
			theLowerBound = theCursorIndex + 1;
		    } else {
			theTargetIndex=theCursorIndex;
			break;
		    }
		}
		if(theTargetIndex==-1){
			var theProbeRequest = new XMLHttpRequest();
			theProbeRequest.open("HEAD", theContextRoot+"eform/displayImage.do?imagefile="+theDocumentName+".pdf.bmp", false);
			theProbeRequest.send();			
			if (theProbeRequest.status==200) {
				if(confirm("'"+theDocumentName+"' was not found in EDocs but is present in the image directory.\nWould you like to copy it to EDocs and open it?")){
					copyToEDocFromImageDirectoryAndOpen(theDocumentName);
				}
				else{
				}
			}
			else{		    
				alert("Sorry, the document '"+theDocumentName+"' was not found!");
			}
		}
		else{
		    window.open(theContextRoot+'dms/'+theEDocuments[theCursorIndex][1]);
		}
	}
}

