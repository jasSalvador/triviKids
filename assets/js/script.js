//INICIO
//recupera datos desde Session Storage
document.addEventListener("DOMContentLoaded", function () {
    const mensajeElement = document.getElementById("mensaje");
    const mensaje = sessionStorage.getItem("mensaje");
    if (mensaje) {
        mensajeElement.innerHTML = mensaje;
    } else {
        mensajeElement.textContent = "Mensaje no encontrado.";
    }
});

//recuperar datos ingresados, validacion y alerta
function mostrarMensaje() {
    const nombre = document.getElementById("inputNombre").value;
    const seleccionTrivia = document.getElementById("seleccionTrivia");
    const opcionSeleccionada = seleccionTrivia.value;
    console.log(opcionSeleccionada);


    if (nombre && opcionSeleccionada) {
        let redireccion = "";

        if (opcionSeleccionada === "animales") {
            redireccion = "animales.html";
        } else if (opcionSeleccionada === "cuentos") {
            redireccion = "cuentos.html";
        }

        if (redireccion) {
            const mensaje = `Hola <span class="nombre">${nombre}</span>, has ingresado a la trivia de ${opcionSeleccionada}. ¡Mucha suerte!`;
            sessionStorage.setItem("mensaje", mensaje); //guardar mensaje en sessionStorage
            window.location.href = redireccion; // redirigir a la pagina trivia   
        } else {
            alert("Opción no válida. Debes seleccionar una trivia válida.");
        }
    } else {
        // Mensaje alerta
        alert("Debes ingresar ambos datos para continuar.");
    }
}
//boton
const botonMostrarMensaje = document.getElementById("mostrarMensajeButton");
if (botonMostrarMensaje) {
    botonMostrarMensaje.addEventListener("click", mostrarMensaje);
}


//TRIVIAS

//cuentos
function respuestasCuentos() {
    const pregCuento1 = document.querySelector('input[name="pregCuento1"]:checked');
    const pregCuento2 = document.querySelector('input[name="pregCuento2"]:checked');
    const pregCuento3 = document.querySelector('input[name="pregCuento3"]:checked');
    const pregCuento4 = document.querySelector('input[name="pregCuento4"]:checked');
    const pregCuento5 = document.querySelector('input[name="pregCuento5"]:checked');

    let contadorCuentos = 0;

    console.log(pregCuento1.value);

    if (pregCuento1.value === "manzana") {
        contadorCuentos += 10;
        pregCuento1.classList.add('resp-correcta');
    } else {
        pregCuento1.classList.add('resp-incorrecta');

    } if (pregCuento2.value === "voz") {
        contadorCuentos += 10;
        pregCuento2.classList.add('resp-correcta');
    } else {
        pregCuento2.classList.add('resp-incorrecta');

    } if (pregCuento3.value === "mufasa") {
        contadorCuentos += 10;
        pregCuento3.classList.add('resp-correcta');
    } else {
        pregCuento3.classList.add('resp-incorrecta');
    } if (pregCuento4.value === "lampara") {
        contadorCuentos += 10;
        pregCuento4.classList.add('resp-correcta');
    } else {
        pregCuento4.classList.add('resp-incorrecta');
    } if (pregCuento5.value === "pelo") {
        contadorCuentos += 10;
        pregCuento5.classList.add('resp-correcta');
    } else {
        pregCuento5.classList.add('resp-incorrecta');
    }

    console.log(contadorCuentos);

    //ocultamos botón Responder
    document.getElementById("respCuentosBtn").style.display = "none";

    //mostramos respuestas correctas y puntaje
    //mostrar mensaje con puntaje princesas
    const msjPuntajeCuentos = document.getElementById("msjPuntajeCuentos");
    // const mensajeRespuestasCuentos = `Obtuviste ${contadorCuentos} Coronas <span class="corona"> ♛</span>!`;
    const mensajeRespuestasCuentos = `Obtuviste ${contadorCuentos} Coronas <span class="corona">♛</span>!<br><span class="respSmall">Revisa tus respuestas: las correctas están en verde y las incorrectas en rojo.</span>`;


    document.getElementById("msjPuntajeCuentos").innerHTML = mensajeRespuestasCuentos;

    //botón para reiniciar  
    const volverJugarButton = document.getElementById("volverJugarBtn");
    volverJugarButton.style.display = "block";
    volverJugarButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}


//TRIVIA PAISES

//animales
function respuestasAnimales() {
    const pregAnimales1 = document.querySelector('input[name="pregAnimales1"]:checked');
    const pregAnimales2 = document.querySelector('input[name="pregAnimales2"]:checked');
    const pregAnimales3 = document.querySelector('input[name="pregAnimales3"]:checked');
    const pregAnimales4 = document.querySelector('input[name="pregAnimales4"]:checked');
    const pregAnimales5 = document.querySelector('input[name="pregAnimales5"]:checked');

    let contadorAnimales = 0;

    if (pregAnimales1.value === "oveja") {
        contadorAnimales += 10;
        pregAnimales1.classList.add('resp-correcta');
    } else {
        pregAnimales1.classList.add('resp-incorrecta');

    } if (pregAnimales2.value === "zorro") {
        contadorAnimales += 10;
        pregAnimales2.classList.add('resp-correcta');
    } else {
        pregAnimales2.classList.add('resp-incorrecta');

    } if (pregAnimales3.value === "braquiosaurio") {
        contadorAnimales += 10;
        pregAnimales3.classList.add('resp-correcta');
    } else {
        pregAnimales3.classList.add('resp-incorrecta');

    } if (pregAnimales4.value === "leon") {
        contadorAnimales += 10;
        pregAnimales4.classList.add('resp-correcta');
    } else {
        pregAnimales4.classList.add('resp-incorrecta');

    } if (pregAnimales5.value === "orca") {
        contadorAnimales += 10;
        pregAnimales5.classList.add('resp-correcta');
    } else {
        pregAnimales5.classList.add('resp-incorrecta');
    }

    //ocultamos botón Responder
    document.getElementById("respAnimalesBtn").style.display = "none";

    //mostramos respuestas correctas y puntaje
    //mostrar mensaje con puntaje paises
    const msjPuntajeAnimales = document.getElementById("msjPuntajeAnimales");
    const mensajeRespuestasAnimales = `¡Obtuviste ${contadorAnimales} Huellas 🐾!<br><span class="respSmall">Revisa tus respuestas: las correctas están en verde y las incorrectas en rojo.</span>`;

    document.getElementById("msjPuntajeAnimales").innerHTML = mensajeRespuestasAnimales;


    //botón para reiniciar  
    //function reiniciarTrivia(){
    const volverJugarButton = document.getElementById("volverJugarBtn");
    volverJugarButton.style.display = "block";
    volverJugarButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}
