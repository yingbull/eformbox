// ==UserScript==
// @name        PEERS Cardiovascular Risk Tool
// @namespace   DavidScript
// @include     https://decisionaid.ca/cvd*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @version     1
// ==/UserScript==
 
 
window.addEventListener("load",function(){
var QueryString = function () {  // This function is anonymous, is executed immediately and the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();
 

$('#be_in_age').val(QueryString.a);
var sex = QueryString.b; 
var femaleRadio = document.getElementById('rdoSelect_gender_1');
if (sex == 'F') {
     femaleRadio.checked = true;
     var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
     femaleRadio.dispatchEvent(event);
     }
var smoker = QueryString.c;
var smokerRadio = document.getElementById('rdoSelect_smoker_1');
if (smoker == 'Yes') { 
     smokerRadio.checked = true;
     var smokingQuestion = document.querySelector('#smoker .beTitle');
     if (smokingQuestion) {
            smokingQuestion.style.color = 'red';
     }
     var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
     smokerRadio.dispatchEvent(event);
     }
var diabetes = QueryString.d; 
var diabetesRadio = document.getElementById('rdoSelect_diabetes_1');
if (diabetes == '1') {
     diabetesRadio.checked = true;
     var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
     diabetesRadio.dispatchEvent(event);
     }
var BP1 = QueryString.e;
var BP = BP1.split('/')[0];
$('#be_in_SBP').val(BP);
  
var BPMed = QueryString.f; 
var BPMedRadio = document.getElementById('rdoSelect_if_bp_treatment_1');
if (BPMed == '1') {
     BPMedRadio.checked = true;
     var BPMedQuestion = document.querySelector('#if_bp_treatment .beTitle');
     if (BPMedQuestion) {
            BPMedQuestion.style.color = 'red';
     }
     var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
     BPMedRadio.dispatchEvent(event);
     }
$('#be_in_total_cholesterol').val(QueryString.g);
$('#be_in_HDL').val(QueryString.h);
$('#be_in_egfr').val(QueryString.i);
$('#be_in_acr').val(QueryString.j);
$('#be_in_a1c').val(QueryString.k);

 
}, false);
