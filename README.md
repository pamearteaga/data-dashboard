

(PARA PROBAR LAS FUNCIONES Y QUE LOS GRAFICOS SEAN DINAMICOS, SE DEBE MODIFICAR LA VARIABLE QUE ESTA UBICADO EN LA LINEA 10 DEL ARCHIVO app.js 
"var generacion")


...Identificamos, cual era la
 prioridad dentro del proyecto y coincidimos en que la base de todo era la recopilacion de los datos, es por eso que desarrollamos primero que todo el app.js para hacer que los datos encontrados en data.js. se resumieran en variables que permitieran trabajar mas comodamante.
<!--Cuandro ENROLLMENT-->
Para esto lo primero fue crear las variables que permitirán almacenar la informacion sobre la cantitdad de inscritas y las bajas por generacion.
Con un For que recorre los datos, le señalamos que si generacion[i].active es igual igual igual a true lasuma a las que siguen inscritas, de lo contrario la resta.

<!---Variable Sprints-->

se  crean las variable para almacenar los datos de cada sprint, por medio de un for se recorren los datos de notas por sprint y por generacion.

Para obetener los datos de tech por generacion, se crean una serie de variables por sprint que permite almacenar datos sober cantiadad de alumans que alcanzaron el porcentaje necesario,alumnas que no lograron el porcentaje, suma de notas y el promedio.......




se realiazan 4 for que permiten obtener la cantidad de alumanas que consiguiron el porsentaje necesario para pasar con exito el sprint.
Se utiliza la formulas del porsentaje del sprint es igual a la meta del sprint por 100 div por el sprint mediante el .lentgh recorremos las variables.


<!--promedio de notas tech-->
Mediante un for para recorrer los array 

<!--variable para Datod de hse por sprint-->


Se crean variables por sprint que permiten almacenar la siguiente info: la misma de antes, pero ahorita para meterla al array del hse.

Con los array ya dispuestos se utilizan for para recorrerlos y asi obtener la acantidad de alumnas que alcanzan la meta por string... y asi sucesivamente.


Con los datos anteriores podemos por fin llegar al promedio de notas (hse y tech), aplicar la formulas para sacar promedio.

<!--armar html-->

Luego comenzamos con el proceso de armar en html, mediante variable vamos incluyendo los distintos metodos que nos permiten llegar al resultado visual.

<!--graficos-->

Graficos sacados de googleChart ingresamos los datos obtenidos en la primera parte.

 
<!--Diseño-->
En cuanto al diseño, decidimos utilizar colores  asociados con antelacion a la marca para tener una correlacion visual.

El diseño para el usuario resulta bastante simple, modificamos algunos graficos para que a la vista de quien no maneja demasiado las estadisticas pueda comprender mejor lo que representan.

Presentamos una estructura amable y facil de leer,principalmente para la comodidad del usuario que tendra que revisar datos en poco tiempo...


<!---fin-->


