//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", () => {
    tecnicoAsignado()
    calcularServicio()
})

/**
 * 1) Funcion para determinar cual es el especialista que le toca
 */
function tecnicoAsignado() {
    //trae la opcion del dia
    let dia = document.getElementById('dia').value

    //trae la opcion del turno
    let turno = document.getElementById('turno').value
    console.log(dia, turno)
    let tecnico = "x"

    if (dia == "Lunes" || dia == "Miercoles") {
        if (turno == "Mañana") {
            tecnico = "Jorge Estanciero"
        }
    }
    if (dia == "Viernes") {
        if (turno == "Tarde") {
            tecnico = "Jorge Estanciero"
        }
    }
    if (dia == "Martes") {
        if (turno == "Mañana") {
            tecnico = " Maria Ocampos"
        }
    }
    if (dia == "Lunes" || dia == "Jueves") {
        if (turno == "Tarde") {
            tecnico = "Maria Ocampos"
        }
    }
    if (dia == "Martes" || dia == "Miercoles") {
        if (turno == "Tarde") {
            tecnico = "Luis Sanchez"
        }
    }
    if (dia == "Jueves" || dia == "Viernes") {
        if (turno == "Mañana") {
            tecnico = "Luis Sanchez"
        }
    }

    alert("El tecnico designado es: " + tecnico)
}

/**
 * 2) Funcion para calcular el total del servicio
 */
function calcularServicio() {

    //Guarda un arrelo con los servicios adquiridos
    let servicio = []
    let cont = 0
    document.getElementsByName("servicio[]").forEach(v => {
        servicio.push(v.checked)
        if (v.checked) {
            cont++
        }
    })
    let total = 0
    let desc = 0
    let precio_total = 0
    if (servicio[0]) {
        total = total + 4000
    }
    if (servicio[1]) {
        total = total + 1500
    }
    if (servicio[2]) {
        total = total + 2000
    }
    if (cont == 2) {
        desc = 0.1
    }
    if (cont == 3) {
        desc = 0.25
    }
    precio_total = total - (total * desc)

    alert("El total del servicio seria " + precio_total)
}