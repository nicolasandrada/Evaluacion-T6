//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    tecnicoAsignado()
    calcularServicio()
})

/**
 * 1) Funcion para determinar cual es el especialista que le toca
 */
function tecnicoAsignado(){
    //trae la opcion del dia
    let dia = document.getElementById('dia').value

    //trae la opcion del turno
    let turno = document.getElementById('turno').value

    alert("El tecnico designado es")
}

/**
 * 2) Funcion para calcular el total del servicio
 */
function calcularServicio(){

    //Guarda un arrelo con los servicios adquiridos
    let servicio = []
    document.getElementsByName("servicio[]").forEach(v => {
        servicio.push(v.value)
    })

    let total = 0
    alert("El total del servicio seria "+total)
}