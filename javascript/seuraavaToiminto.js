console.log("seuraavaToiminto.js");
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
	
	function nappainpainallus(nappain){
		if(nappain == 13){
			a.kaynnistaNumeroidenNayttoTesti();
		}
		
	}
	

	return {
		kaynnista: function (){
			kaynnista();
		},
		nappainpainallus: function (nappain){
			nappainpainallus(nappain);
		}
	}
	
}
