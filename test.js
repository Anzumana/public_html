	function displayTime() {
		var now = new Date();
		var elt = document.getElementById("clock");
		elt.innerHTML = now.toLocaleTimeString();
		setTimeout(displayTime, 1000);
	}
	window.onload = displayTime;
//window.setTimeout(function() {alert("hello")},2000);
/*window.setTimeout(function() {location ="index.html";},4000);*/
do {
// Ask for a string
	var n = prompt("What is your name?");
	var ok = confirm("is " + n + "okay?");
} while(!ok)
alert("hello, " + n);
/*window.location ="http://www.oreilly.com/";
 */
