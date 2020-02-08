var mes =10; 

switch(mes){
	case 1:
		alert("Enero");
		break;

	case 2:
		alert("Febrero");
		break;

	case 3:
		alert("Marzo");
		break;

	case 4:
		alert("Abril");
		break;

	case 5:
		alert("Mayo");
		break;

	case 6:
		alert("Junio");
		break;
	case 7:
		alert("Julio");
		break;

	case 8:
		alert("Agosto");
		break;

	case 9:
		alert("Septiembre");
		break;

	case 10:
		alert("Octubre");
		break;

	case 11:
		alert("Noviembre");
		break;

	case 12:
		alert("Diciembre");
		break;


	default:
		alert("Escriba correctamente el identificador del mes");
		break;

}

if (mes==12) {
	document.write("Es invierno");
};

if (mes==1) {
	document.write("Es invierno");

};

if (mes==2) {
	document.write("Es invierno");
};


if (mes>=3 & mes<5) {
	document.write("Es primavera");
};


if (mes>=6 & mes<9) {
	document.write("Es verano");
} else {mes>=9 & mes<12
	document.write("Es otoño");

	};


// Para imprimir en pantalla
document.write("\n Nombre: Kikab Joaquin Francisco Yat Paau \n No. Carné: 18001573");




// Para imprimir en consola

console.log("Nombre: Kikab Joaquin Francisco Yat Paau");
console.log("No. Carné: 18001573");