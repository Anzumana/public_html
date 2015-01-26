	function displayTime() {
		var now = new Date();
		var elt = document.getElementById("clock");
		elt.innerHTML = now.toLocaleTimeString();
		setTimeout(displayTime, 1000);
	}
	window.onload = displayTime;
//window.setTimeout(function() {alert("hello")},2000);
/*window.setTimeout(function() {location ="index.html";},4000);*/
var a = [1,2,3];
var p = { x:2,y:1};
console.log(a);
console.log(p);
console.log(p.x);

var o = {x:1, y:{z:3}};
console.log(o.x);
console.log(o.y);
console.log(o.y.z);

var i = 1, j = ++i;
console.log(i);
console.log(j);
console.log("second expression");
var i = 1 , j = i++;
console.log(i);
console.log(j);


var rectangle = { upperLeft:{ x:22, y:2}, lowerRight: { x:2, y:5 }} ;

//console.log(rectangle.upperLeft.x);

/*do {
// Ask for a string
	var n = prompt("What is your name?");
	var ok = confirm("is " + n + "okay?");
} while(!ok)
alert("hello, " + n);
/*window.location ="http://www.oreilly.com/";
 */
 
