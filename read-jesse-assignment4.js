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
var myLibrary = new stringLibrary();
console.log("PHONE NUMBER TESTS");
console.log("661-665-5585: " + myLibrary.isPhoneNumber("661-665-5585"));
console.log("661-665-a585: " + myLibrary.isPhoneNumber("661-665-a585"));
console.log("222: " + myLibrary.isPhoneNumber("222"));
console.log("8881115555: " + myLibrary.isPhoneNumber("8881115555"));
