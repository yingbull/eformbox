function createPeadsNote() {
    A = "See Pediatric (Newborn/infant) consult eform for more Details"; 
	A2 = "Demographics: " + $('#ageComplex').val() + " " + $('#PatientGender').val() + " born on " + $('#dob').val();
	B = "Reason for Referral:  "  + $('#ReferrringReason').val();
    C = "Perinatal History:" + "  "  + $('#PerinatalHis').val();
    D = "Maternal age:  "  + $('#Mage').val() + ", Gravida " + $('#Gravida').val() + ", Para " + $('#Para').val() + ", Abortion " + $('#Abortion').val() + ", Maternal Serology " + $('#MSerology').val() + ", Maternal BG " + $('#MBG').val() + ", DAT " + $('#DAT').val();
    E = "BabyBG:  " + $('#BabyBG').val() + ", Bilirubin " + $('#Bilirubin').val() + ", GBS " + $('#GBS').val();
    F = "Perinatal Ultrasound:  " + $('#PUS').val();
    G = "Pregnancy complication(s):  " + $('#Pcomplication').val();
    H = "Mode of Delivery: " +$('#MOD').val() + ", Reason " + $('#Reason').val();
	I = "Birth Weight: " +$('#BWT').val() + ", Discharge Weight: " + $('#DisWt').val() + ", Apgars: " + $('#Apgar').val();
	J = "Complication(s) During delivery:  " +$('#CDelivery').val();
	K = "Feeding  " +$('#Feeding').val() + ", Number of Wet Diapers " + $('#WetD').val() + ", Number and Colour of Stools " + $('#StColour').val();
	L = "Hearing Test:   " +$('#Hearing').val();
	M = "Vitamin D:  " +$('#VitD').val();
	N = "Concerns:  " +$('#Concern').val();
	O = "Physical Exam:  " +$('#PhysicalEx').val();
	P = " Fontanelles: " + $('#Font').val()  + ", Red Reflex: " + $('#Red').val() + ", Palate: " + $('#Palate').val();
	Q = "Chest: " +$('#Chest').val() + ", CVS: " +$('#CVS').val() +", Abdomen: "  +$('#Abdomen').val();
	R = "Genito-Urinary System: "  +$('#GUS').val() +", Spine: "  +$('#Spine').val() +", Hips: "  +$('#Hip').val();
	S = "Central Nervous System Exam: " + $('#CNS').val();
	T = "Pallor: " + $('#Pallor').val() + ", Jaundice: " + $('#Jaun').val();
	U = "Impression: " + $('#Impression').val();
	V = "Plan: " + $('#Plan').val();
    z =  A + "\n" + A2 + "\n" + B + "\n" + C + "\n" + D + "\n" + E + "\n" + F + "\n" + G + "\n" + H + "\n" + I  + "\n" + J  + "\n" + K  + "\n"  + L  + "\n"  + M  + "\n"  + N   + "\n On Examination \n"  + O  + "\n" + P + "\n" + Q + "\n" + R + "\n" + S + "\n" + T + "\n" + U + "\n" + V + "\n" + "\n";
        $('#transferBox').val(z);
     }
	 