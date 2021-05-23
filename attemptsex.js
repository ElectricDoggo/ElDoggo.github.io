var ssex = "";
    document.getElementById('btnSex').addEventListener("click", testFunction);
function testFunction()
 {
    ssex = document.getElementById("ssex").value;
   // var x = "Errrr";
	document.getElementById("searchsex").innerText = ssex;
}