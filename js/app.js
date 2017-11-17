/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/************ AREQUIPA ************/

// GENERACIÓN 2016-2

/* inscritas y bajas */

var contInsc = document.getElementById("inscritas-bajas");
var incrBajas = document.createElement("li");
var incrBajas2 = document.createElement("li");
var insc = document.createElement("span");
var bajas = document.createElement("span");
var estudiante = data.AQP['2016-2'].students;
var bajasCont = 0;
var inscCont = 0;
var total = 0;
var porcentaje = 0;


for (var i = 0; i < estudiante.length; i++) {
	
	total++;


	if (estudiante[i].active === true ) {
         
        ++inscCont;

	} else if (estudiante[i].active === false) {

		++bajasCont;
	}

}


 porcentaje = parseInt((bajasCont * 100) / total);

  console.log(parseInt(porcentaje));


        // cantidad inscritas
        insc.appendChild(document.createTextNode(inscCont));
        incrBajas.appendChild(insc);
        contInsc.appendChild(incrBajas);
        // frase
        var frase = document.createElement("p");
        var texto = document.createTextNode("# Students currently enrolled");
        frase.appendChild(texto);
        incrBajas.appendChild(frase);

        //porcentaje de deserciones
        bajas.appendChild(document.createTextNode(porcentaje + "%"));
        bajas.setAttribute("class", "red");
        incrBajas2.appendChild(bajas);
        contInsc.appendChild(incrBajas2);

        var frase2 = document.createElement("p");
        var texto2 = document.createTextNode("% Dropout");
        frase2.appendChild(texto2);
        incrBajas2.appendChild(frase2);




/* metas */
        

        








