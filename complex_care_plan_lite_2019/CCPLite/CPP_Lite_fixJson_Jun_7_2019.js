/*!
 * Script to extract note times from Json-enabled datafields, as per K Yap; fields identified with class FindAndReplaceJson
 * Script to removing extra punctuations from non-Json-enabled datafields - comma separated itmems, as per J Yap
 * As per K Yap
 * file name CPP_Lite_2019.js
 * Script to combine ongoing concerns and PMHx_Hx into the MedicalHx textarea - must be in image library because of \n\n
 */

		function fixJson() {
			/* converts Json array such as [{"note": 123123123}, {"note": ABC}] to display as:
				* 123123123
				* ABC
			*/
			var jsonReplaces = Array.from(document.getElementsByClassName('FindAndReplaceJson'));
				jsonReplaces.forEach(el => {
				var data = JSON.parse(el.innerHTML);
				var output = data.map(entry => "* " + entry['note']).join('\n')
				el.innerHTML = output
			})

		/****************************
			Script to removing extra punctuations from non-Json-enabled datafields - comma separated items, as per J Yap
			Separate with a linefeed.
		****************************/
			document.getElementById("Meds").innerHTML = document.getElementById("Meds").innerHTML.replace(/, /g , '\n');
			document.getElementById("OtherMeds").innerHTML = document.getElementById("OtherMeds").innerHTML.replace(/, /g , '\n');
			document.getElementById("Allergies").innerHTML = document.getElementById("Allergies").innerHTML.replace(/, /g , '\n');

		/****************************
			Script to combine ongoing concerns and PMHx_Hx into the MedicalHx textarea
		****************************/
				if (document.getElementById("ongoingconcerns").innerHTML == '') {
						document.getElementById("ongoingconcerns").value = '';
				} else {
					document.getElementById("ongoingconcerns").innerHTML = '* ' + document.getElementById("ongoingconcerns").innerHTML;
					document.getElementById("ongoingconcerns").innerHTML = document.getElementById("ongoingconcerns").innerHTML.replace(/\., /g , '\.\n* ');
					document.getElementById("ongoingconcerns").innerHTML = document.getElementById("ongoingconcerns").innerHTML.replace(/\;, /g , '\.\n* ');
				}

				if (document.getElementById("PMHx_Hx").innerHTML == '') {
						document.getElementById("PMHx_Hx").value = '';
				} else {
					document.getElementById("PMHx_Hx").innerHTML = '* ' + document.getElementById("PMHx_Hx").innerHTML;
				 	document.getElementById("PMHx_Hx").innerHTML = document.getElementById("PMHx_Hx").innerHTML.replace(/\., /g , '\.\n* ');
					document.getElementById("PMHx_Hx").innerHTML = document.getElementById("PMHx_Hx").innerHTML.replace(/\;, /g , '\.\n* ');
				}
			document.FormName.MedicalHx.value = document.getElementById("ongoingconcerns").innerHTML + '\n\n';
			document.FormName.MedicalHx.value += document.getElementById("PMHx_Hx").innerHTML;
		}