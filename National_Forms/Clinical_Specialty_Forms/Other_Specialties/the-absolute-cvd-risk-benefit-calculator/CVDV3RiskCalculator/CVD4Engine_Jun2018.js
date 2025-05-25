function passGender() {
         if (document.getElementById("SexGender").value == 'F'){
			document.getElementById("female").className = "active";
			document.getElementById("male").className = "";
         }
         if (document.getElementById("SexGender").value == 'M'){
			 document.getElementById("male").className = "active";
			 document.getElementById("female").className = "";
         }
         if (document.getElementById("SexGender").value == ''){
			document.getElementById("female").className = "active";
			document.getElementById("male").className = "";
 	        document.getElementById("female2").style.color = "red";
         }

}
 function UpdateBP(){
	var ref=document.getElementById('PatBP').value.toString(); 
	var mySplitResult = ref.split('/');
	var y= mySplitResult[0];
        document.getElementById("sbp").value= y;

        if ((y<110)){
        document.getElementById("sbp").value= 110;
        }
        if (y>190){
        document.getElementById("sbp").value= 190;
        }
        if (y==''){
         document.getElementById("sbp").value= 120;
 	 document.getElementById("sbp2").style.color = "red";
        }
        document.getElementById("sbp").onchange();

 }
function passAge(){
	var Age=document.getElementById("PatAge").value;
        document.getElementById("age").value= Age;
        if ((Age<40)){
        document.getElementById("age").value= 40;
 	document.getElementById("age2").style.color = "red";
        }
        if (Age>80){
        document.getElementById("age").value= 80;
 	document.getElementById("age2").style.color = "red";
        }
        if (Age==''){
        document.getElementById("age").value= 50;
 	document.getElementById("age2").style.color = "red";
        }
        document.getElementById("age").onchange();
}
function Diabetes(){
       var DM=document.getElementById("DisReg").value;
       var FreeText = /DIABETES MELLITUS*/i;
       var match = DM.search(FreeText);
          if(match != -1){
	    document.getElementById("diabetes_yes").className = "active";
	    document.getElementById("diabetes_no").className = "";
         }
          if(match == -1){
	    document.getElementById("diabetes_yes").className = "";
	    document.getElementById("diabetes_no").className = "active";
         }
}
function CurrentSmoker(){
       var CS=document.getElementById("DisReg").value;
       var FreeText = /TOBACCO USE DISORDER/i;
       var match = CS.search(FreeText);
          if(match != -1){
	    document.getElementById("smoker_yes").className = "active";
	    document.getElementById("smoker_no").className = "";
	    document.getElementById("DrugQuitSmoking").style.background="#35994F";
         }
          if(match == -1){
	    document.getElementById("smoker_yes").className = "";
	    document.getElementById("smoker_no").className = "active";
         }
}
function chol(){
	    var tChol=document.getElementById("TotChol").value;
	    var tHDL=document.getElementById("TotHDL").value;

		document.getElementById("chol_mmol").value= tChol;
        if (tChol<3){
        document.getElementById("chol_mmol").value= 3;
        }
        if (tChol>8){
        document.getElementById("chol_mmol").value= 8;
        }
        if (tChol==''){
        document.getElementById("chol_mmol").value= 3;
		document.getElementById("chol2").style.color = "red";
        }
        document.getElementById("chol_mmol").onchange();

        document.getElementById("hdl_mmol").value= tHDL;
        if (tHDL<0.5){
        document.getElementById("hdl_mmol").value= 0.5;
        }
        if (tHDL>2){
        document.getElementById("hdl_mmol").value= 2;
        }
        if (tHDL==''){
        document.getElementById("hdl_mmol").value= 1.3;
 	    document.getElementById("hdl2").style.color = "red";
        }
        document.getElementById("hdl_mmol").onchange();	
 }
 
function htwt(){
        var Qht=document.getElementById("HT").value;
	    var Qwt=document.getElementById("WT").value;
		document.getElementById("height_cm_label").value= Qht;
		document.getElementById("weight_kg_label").value= Qwt;

}


		
		
