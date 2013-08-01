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
	
	var isURL = function (val) {
		if (val.substr(0, 4) === "http") { 
			if (val.substr(4, 3) === "://" || val.substr(4, 4) === "s://") {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	var isEmailAddress = function (val) {
		if (val.indexOf(".") != -1 && val.indexOf("@") != -1) {
			var topLevel = val.substr(val.indexOf("."), 4);
			switch (topLevel) {
				case ".com":
					break;
				case ".edu": 
					break;
				case ".org":
					break;
				case ".net":
					break;
				default:
					return false;
			}
			var atIndex = val.indexOf("@");
			if (val.substring(0, atIndex) != "") {
				if (val.substring((atIndex + 1), (val.length - 4)) != "") {
					return true;
				} else {
					return false;
				}
			} else {
 				return false; 
			}
		} else {
			return false;
		}
	}
	
	var addArrayNumbers = function (val) {
		var runningTotal = 0;
        val.forEach(function (num) {
        	if (!isNaN(num)) {
	        	runningTotal += num;
        	}
        });
        return runningTotal;
	}
	
	return {
		"isPhoneNumber": isPhoneNumber,
		"isURL": isURL,
		"isEmailAddress": isEmailAddress,
		"addArrayNumbers": addArrayNumbers
	};
}

var myLibrary = new stringLibrary();
console.log("PHONE NUMBER TESTS");
console.log("661-665-5585: " + myLibrary.isPhoneNumber("661-665-5585"));
console.log("661-665-a585: " + myLibrary.isPhoneNumber("661-665-a585"));
console.log("222: " + myLibrary.isPhoneNumber("222"));
console.log("8881115555: " + myLibrary.isPhoneNumber("8881115555"));

console.log("HTTP(S) URL TESTS");
console.log("http://google.com/: " + myLibrary.isURL("http://google.com/"));
console.log("https://fullsail.edu/: " + myLibrary.isURL("https://fullsail.edu/"));
console.log("httpgoogle.com: " + myLibrary.isURL("httpgoogle.com"));
console.log("ftp://fileserver.local: " + myLibrary.isURL("ftp://fileserver.local"));

console.log("EMAIL ADDRESS TESTS");
console.log("jesse@fullsail.edu: " + myLibrary.isEmailAddress("jesse@fullsail.edu"));
console.log("mike@google.radius: " + myLibrary.isEmailAddress("mike@google.radius"));
console.log("georgegmail.com: " + myLibrary.isEmailAddress("georgegmail.com"));
console.log("@gmail.com: " + myLibrary.isEmailAddress("@gmail.com"));
console.log("henry@.com: " + myLibrary.isEmailAddress("henry@.com"));
console.log("jread@applecom: " + myLibrary.isEmailAddress("jread@applecom"));

console.log("ARRAY ADDITION TESTS");
console.log("[0,1,2,3,4]: " + myLibrary.addArrayNumbers([0,1,2,3,4]));
console.log("[1,a,2,3,4]: " + myLibrary.addArrayNumbers([1,"a",2,3,4]));