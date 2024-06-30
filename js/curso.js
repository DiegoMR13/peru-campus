
/*
 *OCULTAR CONTENIDO DE LOS MÓDULOS
 */

let modulo_contenido = document.getElementsByClassName("modulo-contenido");

function ocultarContenido () {
    for (let i = 0; i < modulo_contenido.length; i++) {
        const element = modulo_contenido[i];
        element.style.display = "none";
    }
}

ocultarContenido();

/*
 * MOSTRAR / OCULTAR CADA CONTENIDO
 */

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let titulo4 = document.getElementById("titulo4");
let titulo5 = document.getElementById("titulo5");
let titulo6 = document.getElementById("titulo6");

let contenido1 = document.getElementById("contenido1");
let contenido2 = document.getElementById("contenido2");
let contenido3 = document.getElementById("contenido3");
let contenido4 = document.getElementById("contenido4");
let contenido5 = document.getElementById("contenido5");
let contenido6 = document.getElementById("contenido6");

function mostrarContenido1 () {
    if (contenido1.style.display == "") {
        contenido1.style.display = "none";
    } else if (contenido1.style.display == "none") {
        contenido1.style.display = "";
    }
}

function mostrarContenido2 () {
    if (contenido2.style.display == "") {
        contenido2.style.display = "none"
    } else if (contenido2.style.display == "none") {
        contenido2.style.display = ""
    }
}

function mostrarContenido3 () {
    if (contenido3.style.display == "") {
        contenido3.style.display = "none"
    } else if (contenido3.style.display == "none") {
        contenido3.style.display = ""
    }
}

function mostrarContenido4 () {
    if (contenido4.style.display == "") {
        contenido4.style.display = "none"
    } else if (contenido4.style.display == "none") {
        contenido4.style.display = ""
    }
}

function mostrarContenido5 () {
    if (contenido5.style.display == "") {
        contenido5.style.display = "none"
    } else if (contenido5.style.display == "none") {
        contenido5.style.display = ""
    }
}

function mostrarContenido6 () {
    if (contenido6.style.display == "") {
        contenido6.style.display = "none"
    } else if (contenido6.style.display == "none") {
        contenido6.style.display = ""
    }
}

titulo1.addEventListener("click", mostrarContenido1);
titulo2.addEventListener("click", mostrarContenido2);
titulo3.addEventListener("click", mostrarContenido3);
titulo4.addEventListener("click", mostrarContenido4);
titulo5.addEventListener("click", mostrarContenido5);
titulo6.addEventListener("click", mostrarContenido6);