//arreglo para saber cuales divs ya estan ocupados
let arreglo = ["","",""];

//funcion que evita que se abra como enlace al soltar un elemento
function allowDrop(ev){
   ev.preventDefault();
}

//que sucede cuando se arrastra un elemento
function drag(ev){
   //metodo que establece el tipo de datos y el valor de dato arrastrado en este caso el dato es texto y el valor es el id del elemento arrastrado: "gato"
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
   //mediante ev.target.id tomo el nombre del id del div que puede ser 0 o 1 o 2 si el arreglo en dicha posicion esta vacio, significa que no tiene, osea puedo soltar alli. caso contrario, ya tiene un elemento
   arreglo.forEach(function(elemento,nro,a){
      //esta parte limpia el arreglo cuando se hacen correcciones
      if(elemento==ev.dataTransfer.getData("text")){a[nro]="";}
   })
   if(arreglo[parseInt(ev.target.id)]==""){
      //obtengo los datos arrastrados con el metodo dataTransfer.getData(). Este metodo devolverá cualquier dato que se haya establecido en el mismo tipo en metodo setData(). En este ejemplo data quedara con gato o perro o loro
      var data = ev.dataTransfer.getData("text");
      //agrego al arreglo el nombre del id
      arreglo[parseInt(ev.target.id)] = data;
      //agregue el elemento arrastrado al elemento soltado
      ev.target.appendChild(document.getElementById(data));
   }

   //controlo que ya esten arrastradas todos los elementos
   if(arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != ""){
      //controlo si hay coincidencia
      if(arreglo[0]=="fotografo" && arreglo[1]=="diseñadora" && arreglo[2]=="programador"){
         document.querySelector("h2").innerHTML = "MUY BIEN!!!";
      }else{
         document.querySelector("h2").innerHTML = "INTANTA DE NUEVO!!!";
      }
   }
}

function reiniciarPag(){
   location.reload();
}