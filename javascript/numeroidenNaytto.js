console.log("numeroidenNaytto.js");
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
	
	function nappainPainallus(nappain){
		
		
	}
	
	

	return {
		kaynnista: function (){
			kaynnista();
		},
		odota: odota,
		vaihdaLukua: vaihdaLukua,
		nappainPainallus: function (nappain){
			nappainPainallus(nappain);
		}
	}
}
