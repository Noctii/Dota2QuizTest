function getResults(){
	var valueFirst = new Number (document.querySelector('input[name="optradio1"]:checked').value);
	var valueSecond =  new Number (document.querySelector('input[name="optradio2"]:checked').value);
	var valueThird =  new Number (document.querySelector('input[name="optradio3"]:checked').value);
	var valueFourth =  new Number (document.querySelector('input[name="optradio4"]:checked').value);
	var valueFifth = new Number (document.querySelector('input[name="optradio5"]:checked').value);
	var valueSixth = new Number (document.querySelector('input[name="optradio6"]:checked').value);
	var valueSeventh =  new Number (document.querySelector('input[name="optradio7"]:checked').value);
	var valueEighth =  new Number (document.querySelector('input[name="optradio8"]:checked').value);
		var valueSum = valueFirst + valueSecond + valueThird + valueFourth + valueFifth + valueSixth + valueSeventh + valueEighth;
		alert(valueSum);
	if (valueSum <= 8){
		window.open("http://www.dota2.com/hero/Alchemist/");
	}
	else if (valueSum > 8 && valueSum <= 43){
		window.open("http://www.dota2.com/hero/Shadow_Fiend/");
	}
	else if (valueSum > 43 && valueSum <= 78){
		window.open("http://www.dota2.com/hero/Leshrac/");
	} 
	else if (valueSum > 78 && valueSum <= 113){
		window.open("http://www.dota2.com/hero/Ember_Spirit/");
	}
	else if (valueSum > 113 && valueSum <= 148){
		window.open("http://www.dota2.com/hero/Meepo/");
	}
	else if (valueSum > 148 && valueSum <= 183){
		window.open("http://www.dota2.com/hero/Templar_Assassin/");
	}
	else if (valueSum > 183 && valueSum <= 218){
		window.open("http://www.dota2.com/hero/Sniper/");
	}
	else if (valueSum > 218 && valueSum <= 253){
		window.open("http://www.dota2.com/hero/Magnus/");
	}
	else if (valueSum > 253 && valueSum <= 288){
		window.open("http://www.dota2.com/hero/Storm_Spirit/");
	}
	else if (valueSum > 288 && valueSum <= 323){
		window.open("http://www.dota2.com/hero/Tinker/");
	}
	else if (valueSum > 323 && valueSum <= 358){
		window.open("http://www.dota2.com/hero/Lina/");
	}
	else if (valueSum > 358 && valueSum <= 393){
		window.open("http://www.dota2.com/hero/Death_Prophet/");
	}
	else if (valueSum > 393 && valueSum <= 428){
		window.open("http://www.dota2.com/hero/Invoker/");
	}
	else if (valueSum > 428 && valueSum <= 463){
		window.open("http://www.dota2.com/hero/Outworld_Devourer/");
	}
	else if (valueSum > 463 && valueSum <= 498){
		window.open("http://www.dota2.com/hero/Queen_of_Pain/");
	}
	else if (valueSum > 498 && valueSum <= 533){
		window.open("http://www.dota2.com/hero/Puck/");
	}
	else if (valueSum > 533 && valueSum <= 568){
		window.open("http://www.dota2.com/hero/Windranger/");
	}
	else if (valueSum > 568 && valueSum <= 603){
		window.open("http://www.dota2.com/hero/Arc_Warden/");
	}
	else if (valueSum > 603 && valueSum <= 638){
		window.open("http://www.dota2.com/hero/Razor/");
	}
	else if (valueSum > 638 && valueSum <= 673){
		window.open("http://www.dota2.com/hero/Dragon_Knight/");
	}
	else if (valueSum > 673 && valueSum <= 708){
		window.open("http://www.dota2.com/hero/Viper/");
	}
	else if (valueSum > 708 && valueSum <= 743){
		window.open("http://www.dota2.com/hero/Zeus/");
	}

};