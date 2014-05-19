console.log("vastaus.js");
function vastaus(){
	 
	
	var listaLuvuista = [];
	var listaAjoista = [];
	var aika = new Date();
	var aloitus = aika.getTime();
	console.log(aloitus); 
	console.log("k vastaus"); 
	
	function kaynnista(){
		
		
		var aloitusRuutu = document.createElement("div");
		aloitusRuutu.setAttribute("id", "a");
		
		document.body.appendChild(aloitusRuutu);
		
		var vastausRuutu = document.createElement("div"); 
		vastausRuutu.setAttribute("id", "vastaus"); 
		
		document.body.appendChild(vastausRuutu);
		
		console.log("k vastaus2"); 
		annaVastaus();
	}
	
	function annaVastaus(){
		console.log("vastaus"); 
		document.getElementById("a").innerHTML= "Anna vastaus";
	}
	
	function lisaa(luku){
		var aika = new Date();
		var nyt = aika.getTime();
		listaLuvuista.push(luku); 
		listaAjoista.push(nyt - aloitus);
		console.log(listaAjoista); 
		document.getElementById("vastaus").innerHTML= listaaAnnetutLuvut(); 
	}
	function poista(){
		listaLuvuista.pop();
		listaAjoista.pop();
		document.getElementById("vastaus").innerHTML= listaaAnnetutLuvut(); 
	}
	
	function listaaAnnetutLuvut(){
		text = "";
		for (var i = 0; i < listaLuvuista.length; i++) {
			text += listaLuvuista[i];
			text += " ";
		}
		
		return text
	}
	
	function lahetaTulosPalvelimelle(){
		console.log("lahetetaan tulos");
		a.kaynnistaSeuraavanToiminnonValinta();
	}

	function nappainPainallus(nappain){
		if(nappain >= 48 && nappain <= 57){
			lisaa(nappain-48);
		}else if(nappain == 8){
			poista();
		}else if(nappain == 13){
			lahetaTulosPalvelimelle();
		}
		
	}
	
	return {
		kaynnista: function (){
			kaynnista();
		},
		lisaa: function (luku){
			lisaa(luku);
		},
		poista: function (){
			poista();
		},
		lahetaTulosPalvelimelle: function (){
			lahetaTulosPalvelimelle();
		},
		nappainPainallus: function (nappain){
			nappainPainallus(nappain);
		}
	}
}
