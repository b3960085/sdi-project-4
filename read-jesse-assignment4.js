/*  Jesse Read
    Project 4
    08/01/13 */
   
var stringLibrary = function () {
	var isPhoneNumber = function (val) {
		var inputLength = val.length;
		var dashPosition = [];
		if (inputLength === 12) {
			for (i = 0; i < inputLength; i++) {
				if(isNaN(val[i]) && val[i] != "-") {
					return false;
				} else {
					if(val[i] === "-") {
						dashPosition.push(i);
					}
				}
			}
			console.log();
			if (JSON.stringify(dashPosition) === JSON.stringify([3,7])) {
				return true;
			} else {
				return false;
			}
		} else { 
			return false;
		}
	}
	return {
		"isPhoneNumber": isPhoneNumber,
	};
}
