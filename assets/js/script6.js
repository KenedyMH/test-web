var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

var total = 0;

btn.onclick = function(){
    if(inputTarea.value == ""){
        return;
    }
    var elemento = inputTarea.value;
    var li = document.createElement("li");
    li.textContent = elemento;

    listado.appendChild(li);

    total++;
    cantidad.innerHTML = total;

    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function(){
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    inputTarea.value = "";
}

inputTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Cancelar la acción por defecto
        event.preventDefault();
        // Simular un clic en el botón
        btn.onclick();
    }
});