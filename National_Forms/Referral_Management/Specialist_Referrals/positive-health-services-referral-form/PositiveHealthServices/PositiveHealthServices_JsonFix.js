		/****************************
			Additional Hx Info
		****************************/
		function Add_Meds() {
				document.getElementById('Medications').value += document.getElementById('PMHx_Meds').value;
		}

		function Add_Allergy() {
				document.getElementById('Allergies').value += document.getElementById('PMHx_Allergy').value;
		}

		function Add_PMHx() {
				document.getElementById('PMHx').value += 'Medical Hx: ' + document.getElementById('PMHx_Hx').value + '\n\n';
		}

		function Add_FHx() {
			
			var fhx_object = {};
			var fhx_object_array = [];
			var fhx_string = '';
			try 
			{
				/* convert potential incoming JSON from the given hidden element 
				 * into an array of note objects.
				 * This process will fail if the JSON structure from the family_history_json
				 * oscarDB tag is changed. 
				 * Expected: 
				 * array(object(note->String))
				 */ 
				fhx_object_array = JSON.parse(document.getElementById('PMHx_FHx').value);
				
				for(i = 0; i < fhx_object_array.length; i++)
				{
					fhx_object = fhx_object_array[i];
					fhx_string += fhx_object.note + '; '; 
				}
				
				fhx_string = 'Family Hx: ' + fhx_string;
			}
			catch(e)
			{
				console.log('error with Family Hx JSON conversion. Using raw value ' + e);
				
				/* use the actual string value of the hidden element if the JSON 
				 * conversion fails.
				 */  
				fhx_string = 'Family Hx: ' + document.getElementById('PMHx_FHx').value + '\n\n';
			}
				
			// add final contents of fhx_string to the requesting element.
			document.getElementById('PMHx').value += fhx_string  + '\n\n';
		}

		function Add_SHx() {
				document.getElementById('PMHx').value += 'Social Hx: ' + document.getElementById('PMHx_SHx').value + '\n\n';
		}

		function RestartReason() {
				document.getElementById('Reason').value = '';
		}
		function RestartMed() {
				document.getElementById('Medications').value = '';
		}
		function RestartAllergies() {
				document.getElementById('Allergies').value = '';
		}
		function RestartPMHx() {
				document.getElementById('PMHx').value = '';
		}