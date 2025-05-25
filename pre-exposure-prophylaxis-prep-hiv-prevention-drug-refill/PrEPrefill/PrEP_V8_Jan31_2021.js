		function himConsult() {
				document.getElementById('PickUpStPauls_2').value = 'X';
				document.getElementById('PickUpStPauls_1').style.background = 'aquamarine';
				document.getElementById('PickUpStPauls_2').style.background = 'aquamarine';
				document.getElementById('PickUp_Location').value = 'New West STI Clinic';
				document.getElementById('PickUp_Location').style.background = 'transparent';
				document.getElementById('clinicAddressLineFull').value = 'C/O New Westminster STI Clinic \nSuite 218 - 610 Sixth St \nNew Westminster, BC, V3L 3C2';
				document.getElementById('clinicPhone').value = '604-777-6740';
				document.getElementById('clinicFax').value = '604-525-0878';
				document.getElementById('subject').value = 'STI Consult ';
			}

		function gpRefill() {
				document.getElementById('PickUpStPauls_1').value = '';
				document.getElementById('PickUpStPauls_1').style.background = 'yellow';
				document.getElementById('PickUpStPauls_2').value = '';
				document.getElementById('PickUpStPauls_2').style.background = 'yellow';
				document.getElementById('PickUp_Location').value = '';
				document.getElementById('PickUp_Location').style.background = 'yellow';
				document.getElementById('clinicAddressLineFull').value = document.getElementById('clinic_addressLineFull').value;
				document.getElementById('clinicPhone').value = document.getElementById('clinic_phone').value;
				document.getElementById('clinicFax').value = document.getElementById('clinic_fax').value;
				document.getElementById('subject').value = 'Routine ReRx ';
			}