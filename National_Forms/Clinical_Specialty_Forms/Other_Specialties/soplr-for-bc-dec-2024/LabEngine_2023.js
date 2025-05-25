/**
 *   Main data fetching function
 *   @param numberFormat Object containing the string id for each lab type. eg {Hb:"718-7", "EGFR": ["33914-3", "1234-5"]};
 *   @param onAllResultsFetched A callback function that is passed an object with a value and date for each different measure requested
 *   @param returnAll  If true, returns each lab value as an array of numbers sorted by newest to oldest. If false, returns an array with only the latest value
 *
 *   The example above would return an object that could be accessed like so
 *      data.Hb.value, data.Hb.date, data.EGFR.value, data.EGFR.date
 */

const labReqEngine = (function () { // This is 'closure'. It returns labReqEngine at the end, and everything else is hidden from the rest of the program

	// Returns a jquery deferred object.
	function labReqEngine(loinc, testName, onAllResultsFetched) {
		let result = {};
		getLabValueObject(loinc, result);

		/*
		 * The STORED_MEASUREMENTS map contains details
		 * for each lab value. This is used to display lab
		 * details to the user when requested.
		 */
		if(Object.values(result).length !== 0 && loinc.length === 1) {
			// STORED MEASUREMENTS contains the full details of each lab to be looked up later.
			STORED_MEASUREMENTS.set(loinc[0], result);
			onAllResultsFetched(result);
		}
	}

	/*
	 * Search the LAB_VALUE_DICTIONARY for results related to the given loinc code.
	 */
	function getLabValueObject(loinc, result) {
		LAB_VALUE_DICTIONARY.labValues.forEach(labvalue => {
			loinc.forEach(code => {
				if(labvalue.loincCode === code) {
					result.patientId = DEMOGRAPHIC_NO;
					result.value = labvalue.measurementValue;
					result.date = labvalue.dateObserved;
					result.months = labvalue.monthsAgo;
					result.abnormal = labvalue.abnormal;
					result.unit = labvalue.unit;
					result.labNo = labvalue.labNo;
					result.type = labvalue.type;
					result.name = labvalue.name;
					result.loincCode = labvalue.loincCode;
					result.range = labvalue.range;

					// return shortcuts the loop
					return;
				}
			})
		})
	}

	return labReqEngine;
})();