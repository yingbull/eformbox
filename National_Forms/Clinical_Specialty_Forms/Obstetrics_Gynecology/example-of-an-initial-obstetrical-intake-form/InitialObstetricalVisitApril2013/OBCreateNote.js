function obnote() {
    A = "See Initial OB Hx eform for more Details"; 
	A2 = "Demographics: " + $('#age').val() + "yo G" + $('#G').val() + " P" + $('#P').val() + " SA" + $('#SA').val() + " TOP" + $('#TOP').val();
	A3 = "LNMP: " + $('#LMP').val() + ", EDC: " + $('#EDD').val() + ", U/S: " + $('#USdates').val() + ", EGA: " + $('#EGA').val() + ", Blood Type: " + $('#BloodType').val() + ", GBS Status: " + $('#GBSStatus').val();
	B = "CC:" + "  "  + $('#CC').val();
    C = "HPI:" + "  "  + $('#HPI').val();
    G = "Occupation:" + "  " + $('#Occupation').val();
    H = "PMHx: " + "  " +$('#MedicalHistory').val();
	I = "GA prob? "   + "  " +$('#AnestheticProblems').val();
	J = "Transfusions? "   + "  " +$('#transfusions').val();
	K = "Sleep Apnea? "   + "  " +$('#SLAP').val();
	L = "Medications: "   + "  " +$('#druglist_generic').val();
	M = "Allergies: "   + "  " +$('#Allergies').val();
	N = "Latex Allergy: "   + "  " +$('#Latex').val();
	O = "Adverse Reactions: "   + "  " +$('#AdverseReactions').val();
	P = $('#CigPerDay').val() + " Cigarettes per day, " + $('#Caffeine').val()  + " Caffeinated beverages per day, " + $('#DRPW').val() + " Alcoholic Drinks per week, Recreational Drug intake Y/N - " + $('#Drugs').val() + ", Present or past abuse Y/N - " + $('#ASLT').val() + ", Counselling Y/N - " +  $('#Counselling').val();
	Q = "Ht =  "   +$('#HT').val() +"cm, Wt = " +$('#WT').val() +"Kg, BMI = "  +$('#BMI').val() +"Kg/m2";
	R = "BP = "  +$('#BP').val();
	S = "Head and Neck exam is " + $('#HN').val() + ", Chest is " + $('#CHST').val();
	T = "Cardiovascular exam is " + $('#CVS').val() + ", Abdomen is " + $('#ABD').val();
	S2 = "Symphysis Fundal Height: " + $('#SFH').val() + ", Fetal Heart Rate: " + $('#FHR').val();
	U = "Pelvic exam results: " + $('#PELV').val();
	W = "Assessment: " + $('#Assessment').val();
	X = "Plan: " + $('#PLAN').val();
    z =  A + "\n" + A2 + "\n" + A3 + "\n" + B + "\n" + C + "\n" + G + "\n" + H + "\n" + I  + "\n" + J  + "\n" + K  + "\n"  + L  + "\n"  + M  + "\n"  + N  + "\n" + O  + "\n" + P  + "\n On Examination \n" + Q + "\n" + R + "\n" + S + "\n" + T + "\n" + S2 + "\n" + U + "\n" + W + "\n" + X + "\n";
        $('#transferBox').val(z);
     }