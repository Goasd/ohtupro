
var a = function (){
 
	var tila = 0;
	var harjoitus;
	
	var aloita;
	var vastauksenAnto;
	var seuraava;
	
	function kaynnistaAloitus(){
		nollaa();
		tila = 1;
		aloita = new aloitus();
		aloita.kaynnista();
	}
	
	function kaynnistaNumeroidenNayttoHarjoitus(){
		harjoitus = true;
		kaynnistaNumeroidenNaytto();
	}
	function kaynnistaNumeroidenNayttoTesti(){
		harjoitus = false;
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
		vastauksenAnto = new vastaus();
		vastauksenAnto.kaynnista();
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
		if(tila == 1){
			aloita.nappainPainallus(key); 
		}else if(tila == 2){
			// 
		}else if(tila == 3){
			vastauksenAnto.nappainPainallus(key);
		}else if(tila == 4){
			seuraava.nappainPainallus(key);
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
