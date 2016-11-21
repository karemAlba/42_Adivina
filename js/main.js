function makeArray(n) {
	this.length = n;
	for (var i=1; i<=n; i++) {
		this[i] = ""; 
	}
	return this;
}
var i;
//Arreglo de MExico
function imagealeatoireM() {
	i = Math.floor(3 * Math.random() + 1);
	return imageM[i].foto;
}
imageM = new makeArray(3);
imageM[1]= {
	nombre : "Drooppy",
	foto : "img/mexico/img1.png"
};
imageM[2]={
	nombre : "Dipple",
	foto : "img/mexico/img2.png"
};
imageM[3]={
	nombre : "Spyke",
	foto : "img/mexico/img3.png"
};

//Arreglo de Colombia
function imagealeatoireC() {
	i = Math.floor(3 * Math.random() + 1);
	return imageC[i].foto;
}
imageC = new makeArray(3);
imageC[1]= {
	nombre : "Leon",
	foto : "img/colombia/img1.png"
};
imageC[2]={
	nombre : "Mono",
	foto : "img/colombia/img2.png"
};
imageC[3]={
	nombre : "raton",
	foto : "img/colombia/img3.png"
};

//Arreglo de Lima
function imagealeatoireL() {
	i = Math.floor(3 * Math.random() + 1);
	return imageL[i].foto;
}
imageL = new makeArray(3);
imageL[1]= {
	nombre : "Bob",
	foto : "img/lima/img1.png"
};
imageL[2]={
	nombre : "Patricio",
	foto : "img/lima/img2.png"
};
imageL[3]={
	nombre : "Pinocho",
	foto : "img/lima/img3.png"
};

//Arreglo de Chile
function imagealeatoireCh() {
	i = Math.floor(3 * Math.random() + 1);
	return imageCh[i].foto;
}
imageCh = new makeArray(3);
imageCh[1]= {
	nombre : "Mickey",
	foto : "img/chile/img1.png"
};
imageCh[2]={
	nombre : "Donald",
	foto : "img/chile/img2.png"
};
imageCh[3]={
	nombre : "Goofy",
	foto : "img/chile/img3.png"
};
function pais(){
	var pais = document.getElementById("pais").selectedIndex;
	switch(pais){
		case 1 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoireL() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 

		case 2 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoireC() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 

		case 3 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoireM() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 

		case 4 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoireCh() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 
        }

		
}


function nombre(){
	var nombre=document.getElementById("name").value;
	switch(nombre){
		case imageM[i].nombre:
			var mensaje = getElementById("mensaje");
			mensaje.innerHTML = "Muy bien felicidades";
		break;
		case imageM[i].foto:
			var mensaje = getElementById("mensaje");
			mensaje.innerHTML = "Muy bien felicidades";
		break;
		case imageM[i].foto:
			var mensaje = getElementById("mensaje");
			mensaje.innerHTML = "Muy bien felicidades";
		break;
		
			
	}
}


