var sname = "";
    document.getElementById('btnName').addEventListener("click", testFunction);
function testFunction()
 {
    sname = document.getElementById("sname").value;
	document.getElementById("surname").innerText = sname;
}