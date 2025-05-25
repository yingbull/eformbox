// ==UserScript==
// @name        FraxCalculator
// @namespace   DavidScripts
// @description UK online calculator
// @include     https://www.shef.ac.uk/FRAX/tool*
// @require   http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version     2
// @grant       none
// ==/UserScript==

window.addEventListener("load",function(){

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!

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

if (QueryString.a > 1) {

$('#ContentPlaceHolder1_toolage').val(QueryString.a);
if (QueryString.b == 1){
$("#ContentPlaceHolder1_sex1").attr('checked', true);
}
if (QueryString.b == 2){
$("#ContentPlaceHolder1_sex2").attr('checked', true);
}
$('#ContentPlaceHolder1_toolweight').val(QueryString.c);
$('#ContentPlaceHolder1_ht').val(QueryString.d);
if (QueryString.e == 1){
$("#ContentPlaceHolder1_previousfracture1").attr('checked', true);
}
if (QueryString.e == 2){
$("#ContentPlaceHolder1_previousfracture2").attr('checked', true);
}
if (QueryString.f == 1){
$("#ContentPlaceHolder1_pfracturehip1").attr('checked', true);
}
if (QueryString.f == 2){
$("#ContentPlaceHolder1_pfracturehip2").attr('checked', true);
}
if (QueryString.g == 1){
$("#ContentPlaceHolder1_currentsmoker1").attr('checked', true);
}
if (QueryString.g == 2){
$("#ContentPlaceHolder1_currentsmoker2").attr('checked', true);
}
if (QueryString.h == 1){
$("#ContentPlaceHolder1_glucocorticoids1").attr('checked', true);
}
if (QueryString.h == 2){
$("#ContentPlaceHolder1_glucocorticoids2").attr('checked', true);
}
if (QueryString.i == 1){
$("#ContentPlaceHolder1_arthritis1").attr('checked', true);
}
if (QueryString.i == 2){
$("#ContentPlaceHolder1_arthritis2").attr('checked', true);
}
if (QueryString.j == 1){
$("#ContentPlaceHolder1_osteoporosis1").attr('checked', true);
}
if (QueryString.j == 2){
$("#ContentPlaceHolder1_osteoporosis2").attr('checked', true);
}
if (QueryString.k == 1){
$("#ContentPlaceHolder1_alcohol1").attr('checked', true);
}
if (QueryString.k == 2){
$("#ContentPlaceHolder1_alcohol2").attr('checked', true);
}

setTimeout(function(){
$('#ContentPlaceHolder1_btnCalculate').click();
	
setTimeout(function(){
var result1 = $('#ContentPlaceHolder1_lbrs1').html();
var result2 = $('#ContentPlaceHolder1_lbrs2').html();

var myPath = window.location.href.split('myPath=')[1];
var myParameterPath = window.location.href.split('?')[1];
var myParameters = myParameterPath.split('myPath=')[0];
window.open('https://184.70.159.90:11042/oscar_crossroads/eform/'+myPath+'?myResults='+result1+'&$'+result2+'&$'+myParameters);
window.close();	
	}, 1000);
}, 1000);
}

}, false);