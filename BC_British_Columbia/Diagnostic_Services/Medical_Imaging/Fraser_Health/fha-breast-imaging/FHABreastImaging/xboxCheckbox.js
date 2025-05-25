        $(document).ready(function() {
		    //This enables radio xboxes- simply add radio followed by group name to class. Eg add   'radio one'  to the class and all the xboxes 
			//with class 'radio one' will behave like radio xboxes.
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
			 var classList = $(element).attr("class").split(' ');  //this bit of code enables the radio box functionality by clearing the Xs
              for (var i = 0; i < classList.length; i++) {
              if (classList[i] === 'radio') {
			  $('.' + classList[i+1]).val('');
                }
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
		
	    function check() {
	   //This enables field checking to see if form complete. The class before class chk/chk2 will be used as the group and an alert thrown 
       //if there is no entry in one of the members of the group eg "one chk". 
       //chk2 is if there is a dependancy within the group- eg if Other(specify) is checked then the text box with details needs to be completed.
	   //eg "one chk other chk2"
       //chk3 is a custom checker for the mammogram form (needed to check for html rather than value)
       //Need to have a function printDocument(), submitDocument and  printSubmit() that prints the form in the main html. See mammogram form and end of this for example	   
	   
		$('.chk3').removeClass("missing");
		$("#diagram").css("color", "black");
	    $('.chk3').each(function() {
         var classList = $(this).attr("class").split(' ');
         for (var i = 0; i < classList.length; i++) {
	     if (classList[i] === 'chk3') {
		 var d = (classList[i-1]);
		 z = $(this).val(); y = $(this).html().length;		 
		 if ($(this).val()) {
		 $("#diagram").css("color", "red");
		 $("#myCanvas").css("outline", "4px solid yellow");
		 $("." + d).addClass("missing");
		 $("." + d).each(function() {
         var classList = $(this).attr("class").split(' ');
         for (var i = 0; i < classList.length; i++) {
	     if (classList[i] === 'chk3') {
		 var e = (classList[i-1]);
		 if  (($(this).html().length > 13 )) {
		 $("#diagram").css("color", "black");
		 $("#myCanvas").css("outline", "none");
		 $("." + d).removeClass("missing");
		        }
               }
              }   	   
            })
		 }
        }
       }  	   
     })
	   
	    $('.chk2').css("background-color", "white");
		$('.chk2').removeClass("missing");
	    $('.chk2').each(function() {
         var classList = $(this).attr("class").split(' ');
         for (var i = 0; i < classList.length; i++) {
	     if (classList[i] === 'chk2') {
		 var b = (classList[i-1]);
		 if ($(this).val()) {
		 $("." + b).each(function() {
         var classList = $(this).attr("class").split(' ');
         for (var i = 0; i < classList.length; i++) {
	     if (classList[i] === 'chk2') {
		 var c = (classList[i-1]);
		 if (!$(this).val()) {
		 $("." + c).css("background-color", "yellow");
		 $("." + c).addClass("missing");
		        }
               }
              }   	   
            })
		 }
        }
       }   	   
     })	   
	   
	    $('.chk').css("background-color", "yellow");
		$('.chk').addClass("missing");
	    $('.chk').each(function() {
         var classList = $(this).attr("class").split(' ');
         for (var i = 0; i < classList.length; i++) {
	     if (classList[i] === 'chk') {
		 var a = (classList[i-1]);
		 var values = $(this).val();
		 if ($.trim(values)) {                          //trim removes whitespaces
		 $("." + a).css("background-color", "white");
		 $("." + a).removeClass("missing");
		 }
        }
       }   	   
     })   
	        // this is the code that directs to either printing, submiting or both. That code is specific to the form so may vary
	        option = $('#printOption').val();
			if (option == 'P') {
			 if ($(".missing")[0]){
                var r = confirm("Please completed the missing information.\nClick OK to ignore this message and proceed to printing\nClick Cancel to return to the form.");
                if (r == true) {
                  printDocument();
                }
            } else {
			printDocument();
			}
		   }
		     if (option=='PS') {
			 if ($(".missing")[0]){
                var r = confirm("Please completed the missing information.\nClick OK to ignore this message and proceed to printing\nClick Cancel to return to the form.");
                if (r == true) {
                  printSubmit();
                }
            } else {
			printSubmit();
			}
		   }
		     if (option=='S') {
			 if ($(".missing")[0]){
                var r = confirm("Please completed the missing information.\nClick OK to ignore this message and proceed to printing\nClick Cancel to return to the form.");
                if (r == true) {
                  submitDocument();
                }
            } else {
			submitDocument();
			}
		   }
			
        
/* Example in html		
function printDocument() {
SubmitImage();
window.print();
}

function submitDocument() {
SubmitImage();
releaseDirtyFlag();
document.BreastImagingForm.submit();
}

function printSubmit() {
SubmitImage();
window.print();
releaseDirtyFlag();
setTimeout('document.BreastImagingForm.submit()',2000);
}
*/
		
		
		
	}