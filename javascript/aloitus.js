console.log("aloitus.js");


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
	
	function nappainpainallus(nappain){
			console.log("asd");
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
