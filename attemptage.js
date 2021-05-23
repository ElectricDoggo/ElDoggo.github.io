var sage = "";
    document.getElementById('btnAge').addEventListener("click", testFunction);

function testFunction()
 {
    sage = document.getElementById("sage").value;
	document.getElementById("searchage").innerText=sage;
}