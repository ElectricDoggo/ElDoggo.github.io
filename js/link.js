
	var trigger=0, name, age, sex, education, math, knowjs, tables, database, ranaway; 
		document.getElementById("startTest").addEventListener("click",test) 
		function test(){ 
		name = prompt("Ваше имя?");
		while(!isNaN(name))
		{
			name = prompt("Ваше имя?");
		}
		age = prompt("Ваш возраст?");
		while(isNaN(age))
		{
			age = prompt("Ваш возраст?");
		}
		
		sex = prompt("Ваш пол?");
		while(!(sex.charAt(0) == 'М' || sex.charAt(0) == 'Ж'|| sex.charAt(0) == 'м'|| sex.charAt(0) == 'ж'))
		{
			sex = prompt("Ваш пол?");
		}
		
			education = confirm("У вас есть высше образование?");
			math = confirm("Вы хорошо знаете математику?");
			knowjs = confirm("Вы знаете Java Script?");
			tables = confirm("Вы умеете работать с таблицами?");
			database = confirm("Вы умеете работать с БД?");
			ranaway = confirm("Вы можете сбежать с работы раньще времени?");
			writeToPage();
		}
		function writeToPage(){ 
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#adress").focus();
			document.getElementById("education").checked = education;
			document.getElementById("math").checked = math;
			document.getElementById("knowjs").checked = knowjs;
			document.getElementById("tables").checked = tables;
			document.getElementById("database").checked = database;
			document.getElementById("ranaway").checked = ranaway;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { 
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("math").checked ==true && document.getElementById("database").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">МЫ ВАМ ПЕРЕЗВОНИМ</p>'
		x.innerHTML = text;
			}
			document.getElementById("education").disabled = true;
			document.getElementById("math").disabled = true;
			document.getElementById("knowjs").disabled = true;
			document.getElementById("tables").disabled = true;
			document.getElementById("database").disabled = true;
			document.getElementById("ranaway").disabled = true;
			$("#startTest").hide();
		}
		}
