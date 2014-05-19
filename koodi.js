
var a = function (){

	var luku = 0;
	var luvut = new Array(1,2,4,4,2,2);
	var aloita = new aloitus();
	var v = new vastaus();
	var tila = 0;
	var harjoitus;
	var seuraava;
	
	function kaynnistaAloitus(){
		nollaa();
		tila = 1;
		aloita = new aloitus();
		aloita.kaynnista();
	}
	
	function kaynnistaNumeroidenNayttoHarjoitus(){
		harjoitus = false;
		kaynnistaNumeroidenNaytto();
	}
	function kaynnistaNumeroidenNayttoTesti(){
		harjoitus = true;
		kaynnistaNumeroidenNaytto();
	}
	function kaynnistaNumeroidenNaytto(){ 
		nollaa();
		tila = 2; 
		
		var numeroNaytto = new numeroidenNaytto();
		if(numeroNaytto.kaynnista()){
			kaynnistaVastauksenAnto();
		}
	}
	
	function kaynnistaVastauksenAnto(){
		nollaa();
		tila = 3;
		v = new vastaus();
		v.kaynnista();
	}
	
	function kaynnistaSeuraavanToiminnonValinta(){
		nollaa();
		tila = 4;
		seuraava = new seuraavaToiminto();
		seuraava.kaynnista();
	}
	
	function nollaa(){
		document.body.innerHTML = "";
	}
	
		  
	window.onkeypress = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;

		console.log(key);
		if(key >= 48 && key <= 57 && tila == 3){
			v.lisaa(key-48);
		}else if(key == 8 && tila == 3){
			v.poista();
		}else if(key == 13 && tila == 3){
			v.lahetaTulosPalvelimelle()
		}else if(key == 13 && tila == 1){
			a.kaynnistaNumeroidenNayttoTesti();
		}
	}

  
	
	return {
		kaynnista: function (){
			kaynnistaAloitus();
		},
		
		kaynnistaNumeroidenNayttoTesti: function (){
			kaynnistaNumeroidenNayttoTesti();
		},
		
		kaynnistaNumeroidenNayttoHarjoitus: function (){
			kaynnistaNumeroidenNayttoHarjoitus();
		},
		
		kaynnistaVastauksenAnto: function (){
			kaynnistaVastauksenAnto();
		},
		
		lahetaTulosPalvelimelle: function (){
			lahetaTulosPalvelimelle();
		},
		
		kaynnistaSeuraavanToiminnonValinta: function (){
			kaynnistaSeuraavanToiminnonValinta();
		}
	} 
}();
 
 


function aloitus(){
		  
	function kaynnista(){
		var aloitusRuutu = document.createElement("div");
		aloitusRuutu.setAttribute("id", "a"); 
			
			 
			
		var ul = document.createElement("ul");
			
		var li = document.createElement("li");
		var li2 = document.createElement("li");
	
		var aloitusHarjoitus = document.createElement("a");
			
		var aloitusTesti = document.createElement("a");
			
		aloitusTesti.setAttribute("onclick", "a.kaynnistaNumeroidenNayttoTesti()");
			
		var harjoitus = document.createTextNode("Harjoittele");
			
		aloitusHarjoitus.setAttribute("onclick", "a.kaynnistaNumeroidenNayttoHarjoitus()");
		
		var testi = document.createTextNode("Tee testi");
			
		li.appendChild(aloitusHarjoitus);
		li2.appendChild(aloitusTesti);
			
		ul.appendChild(li);
		ul.appendChild(li2);
		aloitusRuutu.appendChild(ul);
			
		aloitusHarjoitus.appendChild(harjoitus);
		aloitusTesti.appendChild(testi);
			
		document.body.appendChild(aloitusRuutu)
			
		console.log("aloitus2");
		
				
	}
	
			
	return {
		kaynnista: function (){
			kaynnista();
		}
	}
	 
}




function numeroidenNaytto(){
	var luku = 0;
	var luvut = new Array(1,2,4,4,2,2);
	console.log("nNaytto");
		
	function kaynnista(){
		console.log("numeroidenNaytto");
		var aloitusRuutu = document.createElement("div");
		aloitusRuutu.setAttribute("id", "a"); 
		document.body.appendChild(aloitusRuutu);
		 
		vaihdaLukua(); 
		console.log("numeroidenNaytto2");
			
	}
		
		
	function vaihdaLukua(){
		console.log("vaihdaLukua");
		if (luku>=luvut.length){
			console.log("vaihdaLukualoppu");
			console.log(a);
			a.kaynnistaVastauksenAnto();
			return true;
		}else{
			document.getElementById("a").innerHTML= luvut[luku];
			luku+=1 
			setTimeout(function() {
				odota();
				},1000);
			console.log("vaihdaLukua2");
		}
	}

	function odota(){
		console.log("odota");
		document.getElementById("a").innerHTML= " ";
		setTimeout(function() {
				vaihdaLukua();
				},100);
	}
	
	

	return {
		kaynnista: function (){
			kaynnista();
		},
		odota: odota,
		vaihdaLukua: vaihdaLukua,
	}
}

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
		}
	}
}

function seuraavaToiminto(){
	
	function kaynnista(){
		var seuraavaToimintoRuutu = document.createElement("div");
		seuraavaToimintoRuutu.setAttribute("id", "a"); 
		
		
		var ul = document.createElement("ul");
			
		var li = document.createElement("li");
		var li2 = document.createElement("li");
	
		var aloitusHarjoitus = document.createElement("a");
			
		var aloitusTesti = document.createElement("a");
			
		aloitusTesti.setAttribute("onclick", "a.kaynnistaNumeroidenNayttoTesti()");
			
		var harjoitus = document.createTextNode("Harjoittele");
			
		aloitusHarjoitus.setAttribute("onclick", "a.kaynnistaNumeroidenNayttoHarjoitus()");
		
		var testi = document.createTextNode("Tee testi");
			
		li.appendChild(aloitusHarjoitus);
		li2.appendChild(aloitusTesti);
			
		ul.appendChild(li);
		ul.appendChild(li2);
		seuraavaToimintoRuutu.appendChild(ul);
			
		aloitusHarjoitus.appendChild(harjoitus);
		aloitusTesti.appendChild(testi);
			
		document.body.appendChild(seuraavaToimintoRuutu)
			
		
	}

	return {
		kaynnista: function (){
			kaynnista();
		}
	}
	
}
