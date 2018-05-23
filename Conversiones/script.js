 function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "area" ){
		var optionArray = ["----|----","metro2|Metro Cuadrado","kilometro2|Kilómetro Cuadrado","pie2|Pie Cuadrado"];
	} else if(s1.value == "energia"){
		var optionArray = ["----|----","julio|Julio","kilojoule|Kilojoule","kilocaloria|Kilocaloría"];
	} else if(s1.value == "longitud"){
		var optionArray = ["----|----","metro|Metro","centimetro|Centímetro","kilometro|Kilómetro","milimetro|Milímetro","pie|Pie", "pulgada|Pulgada"];
	}else if(s1.value == "masa"){
		var optionArray = ["----|----","gramo|Gramo","libra|Libra","kilogramo|Kilogramo","tonelada|Tonelada"];
	}else if(s1.value == "presion"){
		var optionArray = ["----|----","atmosfera|Atmosfera","bar|Bar","pascal|Pascal","psia|Libra por Pulgada Cuadrada"];
	}else if(s1.value == "temperatura"){
		var optionArray = ["----|----","celsius|Grado Ceslsius","farenheit|Grado Farenheit","kelvin|Kelvin","rankine|Rankine"];
	}else if(s1.value == "tiempo"){
		var optionArray = ["----|----","segundo|Segundo","minuto|Minuto","hora|Hora","semana|Semana","dia|Día","mes|Mes","año|Año"];
	}else if(s1.value == "volumen"){
		var optionArray = ["----|----","metro3|Metro Cúbico","litro|Litro","mililitro|Mililitro","pie3|Pie Cúbico","pulgada3|Pulgada Cúbica"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};
$(function() {
    $("#convert").click(function(e){
        let valueOne = $("#valueOne").val();
        let valueTwo = $("#valueTwo").val();
		let inputOne = $("#inputOne").val();

		//area
		if ($("#valueOne").val()=="metro2" && $("#valueTwo").val()=="metro2" ) {
		resultado=inputOne;
		document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro2" && $("#valueTwo").val()=="kilometro2"){
			resultado=inputOne/Math.pow(1000,2);
			document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro2" && $("#valueTwo").val()=="pie2"){
			resultado=inputOne*10.7639;
			document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kilometro2" && $("#valueTwo").val()=="kilometro2" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilometro2" && $("#valueTwo").val()=="metro2"){
			resultado=inputOne*Math.pow(1000,2);
			document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilometro2" && $("#valueTwo").val()=="pie2"){
			resultado=inputOne*10763910.41671;
			document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pie2" && $("#valueTwo").val()=="pie2" ) {
				resultado=inputOne;
				document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie2" && $("#valueTwo").val()=="metro2"){
			resultado=inputOne/10.7639;
			document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie2" && $("#valueTwo").val()=="kilometro2"){
			resultado=inputOne/10763910.41671;
			document.getElementById("inputTwo").value=resultado;
		}

		//energia
		if ($("#valueOne").val()=="julio" && $("#valueTwo").val()=="julio" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="julio" && $("#valueTwo").val()=="kilojoule"){
		    resultado=inputOne/1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="julio" && $("#valueTwo").val()=="kilocaloria"){
		    resultado=inputOne*0.000239006;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kilojoule" && $("#valueTwo").val()=="kilojoule" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilojoule" && $("#valueTwo").val()=="julio"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilojoule" && $("#valueTwo").val()=="kilocaloria"){
		    resultado=inputOne*0.23900573613767;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kilocaloria" && $("#valueTwo").val()=="kilocaloria" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilocaloria" && $("#valueTwo").val()=="julio"){
		    resultado=inputOne*4184;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilocaloria" && $("#valueTwo").val()=="kilojoule"){
		    resultado=inputOne*4.184;
		    document.getElementById("inputTwo").value=resultado;
		}

		//longitud
		if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="metro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="centimetro"){
		    resultado=inputOne*100;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="kilometro"){
		    resultado=inputOne/1000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="milimetro"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="pie"){
		    resultado=inputOne*3.28084;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro" && $("#valueTwo").val()=="pulgada"){
		    resultado=inputOne*39.37008;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="kilometro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="metro"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="centimetro"){
		    resultado=inputOne*100000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="milimetro"){
		    resultado=inputOne*1000000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="pie"){
		    resultado=inputOne*3280.84;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilometro" && $("#valueTwo").val()=="pulgada"){
		    resultado=inputOne*39370.1;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="centimetro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="metro"){
		    resultado=inputOne*0.01;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="kilometro"){
		    resultado=inputOne*0.00001;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="milimetro"){
		    resultado=inputOne*10;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="pie"){
		    resultado=inputOne*0.0328084;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="centimetro" && $("#valueTwo").val()=="pulgada"){
		    resultado=inputOne*0.393701;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="milimetro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="metro"){
		    resultado=inputOne*0.001;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="centimetro"){
		    resultado=inputOne*0.1;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="kilometro"){
		    resultado=inputOne*0.000001;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="pie"){
		    resultado=inputOne*0.00328084;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="milimetro" && $("#valueTwo").val()=="pulgada"){
		    resultado=inputOne*0.0393701;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="pie" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="metro"){
		    resultado=inputOne*0.3048;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="centimetro"){
		    resultado=inputOne*30.48;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="milimetro"){
		    resultado=inputOne*304.8;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="kilometro"){
		    resultado=inputOne*0.0003048;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie" && $("#valueTwo").val()=="pulgada"){
		    resultado=inputOne*12;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="pulgada" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="metro"){
		    resultado=inputOne*0.0254;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="centimetro"){
		    resultado=inputOne*2.54;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="milimetro"){
		    resultado=inputOne*25.4;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="kilometro"){
		    resultado=inputOne*0.00000254;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pulgada" && $("#valueTwo").val()=="pie" ) {
			resultado=inputOne*0.0833333;
			document.getElementById("inputTwo").value=resultado;
		}
		
		//Masa
		if ($("#valueOne").val()=="gramo" && $("#valueTwo").val()=="gramo" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="gramo" && $("#valueTwo").val()=="libra"){
		    resultado=inputOne*0.00220462;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="gramo" && $("#valueTwo").val()=="kilogramo"){
		    resultado=inputOne*0.001;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="gramo" && $("#valueTwo").val()=="tonelada"){
		    resultado=inputOne*0.000001;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="libra" && $("#valueTwo").val()=="libra" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="libra" && $("#valueTwo").val()=="gramo"){
		    resultado=inputOne*453.592;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="libra" && $("#valueTwo").val()=="kilogramo"){
		    resultado=inputOne*0.453592;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="libra" && $("#valueTwo").val()=="tonelada"){
		    resultado=inputOne*0.000453592;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kilogramo" && $("#valueTwo").val()=="kilogramo" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilogramo" && $("#valueTwo").val()=="gramo"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kilogramo" && $("#valueTwo").val()=="libra"){
		    resultado=inputOne*2.20462;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kilogramo" && $("#valueTwo").val()=="tonelada"){
		    resultado=inputOne*0.001;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="tonelada" && $("#valueTwo").val()=="tonelada" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="tonelada" && $("#valueTwo").val()=="gramo"){
		    resultado=inputOne*0.000001;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="tonelada" && $("#valueTwo").val()=="libra"){
		    resultado=inputOne*2204.62;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="tonelada" && $("#valueTwo").val()=="kilogramo"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
		}

		//presión

		if ($("#valueOne").val()=="atmosfera" && $("#valueTwo").val()=="atmosfera" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="atmosfera" && $("#valueTwo").val()=="bar"){
		    resultado=inputOne*1.01325;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="atmosfera" && $("#valueTwo").val()=="pascal"){
		    resultado=inputOne*101325;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="atmosfera" && $("#valueTwo").val()=="psia"){
		    resultado=inputOne*14.6959;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="bar" && $("#valueTwo").val()=="bar" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="bar" && $("#valueTwo").val()=="atmosfera"){
		    resultado=inputOne*0.986923;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="bar" && $("#valueTwo").val()=="pascal"){
		    resultado=inputOne*100000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="bar" && $("#valueTwo").val()=="psia"){
		    resultado=inputOne*114.5038;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pascal" && $("#valueTwo").val()=="pascal" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pascal" && $("#valueTwo").val()=="atmosfera"){
		    resultado=inputOne*0.00000986923;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pascal" && $("#valueTwo").val()=="bar"){
		    resultado=inputOne*0.00001;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pascal" && $("#valueTwo").val()=="psia"){
		    resultado=inputOne*0.000145038;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="psia" && $("#valueTwo").val()=="psia" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="psia" && $("#valueTwo").val()=="atmosfera"){
		    resultado=inputOne*0.068046;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="psia" && $("#valueTwo").val()=="bar"){
		    resultado=inputOne*0.0689476;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="psia" && $("#valueTwo").val()=="pascal"){
		    resultado=inputOne*6894.76;
		    document.getElementById("inputTwo").value=resultado;
		}

		//Temperatura

		if ($("#valueOne").val()=="celsius" && $("#valueTwo").val()=="celsius" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="celsius" && $("#valueTwo").val()=="farenheit"){
		    resultado=(inputOne*1.8)+32;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="celsius" && $("#valueTwo").val()=="kelvin"){
		    resultado=Number(inputOne)+273.15;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="celsius" && $("#valueTwo").val()=="rankine"){
		    resultado=((inputOne*1.8)+32)+491.67;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="farenheit" && $("#valueTwo").val()=="farenheit" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="farenheit" && $("#valueTwo").val()=="celsius"){
		    resultado=(inputOne-32)/1.8;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="farenheit" && $("#valueTwo").val()=="kelvin"){
		    resultado=(Number(inputOne)+4)/1.8;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="farenheit" && $("#valueTwo").val()=="rankine"){
		    resultado=Number(inputOne)+491.67;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="kelvin" && $("#valueTwo").val()=="kelvin" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kelvin" && $("#valueTwo").val()=="celsius"){
		    resultado=inputOne-273.15;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="kelvin" && $("#valueTwo").val()=="farenheit"){
		    resultado=(inputOne*1.8)-459.67;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="kelvin" && $("#valueTwo").val()=="rankine"){
		    resultado=((inputOne-273.15)*1.8)+491.67;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="rankine" && $("#valueTwo").val()=="rankine" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="rankine" && $("#valueTwo").val()=="celsius"){
		    resultado=(inputOne-491.67)/1.8;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="rankine" && $("#valueTwo").val()=="farenheit"){
		    resultado=inputOne-459.67;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="rankine" && $("#valueTwo").val()=="kelvin"){
		    resultado=((inputOne-491.67)/1.8)+273.15;
		    document.getElementById("inputTwo").value=resultado;
		}

		//tiempo

		if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="segundo" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne/60;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne/3600;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne/86400;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/604800;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne/2628002.88;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="segundo" && $("#valueTwo").val()=="año"){
		    resultado=inputOne/(2628002.88*12);
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="minuto" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*60;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne/60;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne/1440;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/10080;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne/43800.048;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="minuto" && $("#valueTwo").val()=="año"){
		    resultado=inputOne/(43800.048*12);
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="hora" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne*60;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*3600;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne/24;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/168;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne/730.0008;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="hora" && $("#valueTwo").val()=="año"){
		    resultado=inputOne/(730.0008*12);
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="dia" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne*1440;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*86400;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne*24;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/7;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne/30.4167;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="dia" && $("#valueTwo").val()=="año"){
		    resultado=inputOne/(30.4167*12);
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="semana" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne*10080;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*604800;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne*168;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne*7;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne*(7/30.4167);
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="semana" && $("#valueTwo").val()=="año"){
		    resultado=inputOne*(7/(30.4167*12));
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="mes" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne*43800.048;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*2628002.88;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne*730.0008;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne*30.4167;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/(7/30.4167);
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mes" && $("#valueTwo").val()=="año"){
		    resultado=inputOne/12;
		    document.getElementById("inputTwo").value=resultado;
		}


		if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="año" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="minuto"){
		    resultado=inputOne*(43800.048*12);
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="segundo"){
		    resultado=inputOne*(2628002.88*12);
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="hora"){
		    resultado=inputOne*(730.0008*12);
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="dia"){
		    resultado=inputOne*(30.4167*12);
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="semana"){
		    resultado=inputOne/(7/(30.4167*12));
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="año" && $("#valueTwo").val()=="mes"){
		    resultado=inputOne*12;
		    document.getElementById("inputTwo").value=resultado;
		}

		//volumen

		if ($("#valueOne").val()=="metro3" && $("#valueTwo").val()=="metro3" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="metro3" && $("#valueTwo").val()=="litro"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="metro3" && $("#valueTwo").val()=="mililitro"){
		    resultado=inputOne*1000000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro3" && $("#valueTwo").val()=="pie3"){
		    resultado=inputOne*35.3147;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="metro3" && $("#valueTwo").val()=="pulgada3"){
		    resultado=inputOne*61023.7;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="litro" && $("#valueTwo").val()=="litro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="litro" && $("#valueTwo").val()=="metro3"){
		    resultado=inputOne/1000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="litro" && $("#valueTwo").val()=="mililitro"){
		    resultado=inputOne*1000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="litro" && $("#valueTwo").val()=="pie3"){
		    resultado=inputOne*0.0353147;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="litro" && $("#valueTwo").val()=="pulgada3"){
		    resultado=inputOne*61.0237;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="mililitro" && $("#valueTwo").val()=="mililitro" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="mililitro" && $("#valueTwo").val()=="metro3"){
		    resultado=inputOne/1000000;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="mililitro" && $("#valueTwo").val()=="litro"){
		    resultado=inputOne/1000;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mililitro" && $("#valueTwo").val()=="pie3"){
		    resultado=inputOne*0.0000353147;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="mililitro" && $("#valueTwo").val()=="pulgada3"){
		    resultado=inputOne*0.0610237;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pie3" && $("#valueTwo").val()=="pie3" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pie3" && $("#valueTwo").val()=="metro3"){
		    resultado=inputOne*0.0283168;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pie3" && $("#valueTwo").val()=="litro"){
		    resultado=inputOne*28.3168;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie3" && $("#valueTwo").val()=="mililitro"){
		    resultado=inputOne*28316.8;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pie3" && $("#valueTwo").val()=="pulgada3"){
		    resultado=inputOne*1728;
		    document.getElementById("inputTwo").value=resultado;
		}

		if ($("#valueOne").val()=="pulgada3" && $("#valueTwo").val()=="pulgada3" ) {
			resultado=inputOne;
			document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pulgada3" && $("#valueTwo").val()=="metro3"){
		    resultado=inputOne*0.000016387;
		    document.getElementById("inputTwo").value=resultado;
	    }else if ($("#valueOne").val()=="pulgada3" && $("#valueTwo").val()=="litro"){
		    resultado=inputOne*0.0163871;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pulgada3" && $("#valueTwo").val()=="mililitro"){
		    resultado=inputOne*16.3871;
		    document.getElementById("inputTwo").value=resultado;
		}else if ($("#valueOne").val()=="pulgada3" && $("#valueTwo").val()=="pie3"){
		    resultado=inputOne*0.000578704;
		    document.getElementById("inputTwo").value=resultado;
		}
















	});
	
});


