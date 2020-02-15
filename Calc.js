function plus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 + num2;
	document.getElementById('result').innerHTML = result;
}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 - num2;
	document.getElementById('result').innerHTML = result;
}

function multiply() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 * num2;
	document.getElementById('result').innerHTML = result;
}
function division() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	if (num2==0) {
		alert("Sandy 0-ge boluge bolmaidy!")	
	}
	
	result = num1 / num2;
	document.getElementById('result').innerHTML = result;
}