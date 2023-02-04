var texto;

function Comprobar(texto) {
    var acentos = /[À-ÿ]/;
    var mayusculas = /[A-Z]/;
    return acentos.test(texto) || mayusculas.test(texto);
}

function Encriptar() {
    texto = document.getElementById("input").value;
    if (Comprobar(texto) === false) {
        var textoEncriptado = "";
        var encriptacion = {
            a: "ai",
            e: "enter",
            i: "imes",
            o: "ober",
            u: "ufat",
        };

        for (let i = 0; i < texto.length; i++) {
            textoEncriptado += encriptacion[texto[i]] || texto[i];
        }

        mostrarTexto(textoEncriptado);
    } else {
        mostrarMensaje("Solo letras minusculas y sin acentos");
    }
}

function Desencriptar() {
    var texto = document.getElementById("input").value;
    if (Comprobar(texto) === false) {
        var textoDesencriptado = "";

        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    if (texto[i] + texto[i + 1] == "ai") {
                        textoDesencriptado += "a";
                        i += 1;
                    } else {
                        textoDesencriptado += texto[i];
                    }
                    break;

                case "e":
                    if (
                        texto[i] +
                            texto[i + 1] +
                            texto[i + 2] +
                            texto[i + 3] +
                            texto[i + 4] ==
                        "enter"
                    ) {
                        textoDesencriptado += "e";
                        i += 4;
                    } else {
                        textoDesencriptado += texto[i];
                    }
                    break;

                case "i":
                    if (
                        texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] ==
                        "imes"
                    ) {
                        textoDesencriptado += "i";
                        i += 3;
                    } else {
                        textoDesencriptado += texto[i];
                    }
                    break;

                case "o":
                    if (
                        texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] ==
                        "ober"
                    ) {
                        textoDesencriptado += "o";
                        i += 3;
                    } else {
                        textoDesencriptado += texto[i];
                    }
                    break;

                case "u":
                    if (
                        texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] ==
                        "ufat"
                    ) {
                        textoDesencriptado += "u";
                        i += 3;
                    } else {
                        textoDesencriptado += texto[i];
                    }
                    break;

                default:
                    textoDesencriptado += texto[i];
                    break;
            }
        }
        mostrarTexto(textoDesencriptado);
    } else {
        mostrarMensaje("Solo letras minusculas y sin acentos");
    }
}

function mostrarTexto(textoEncriptado) {
    document.getElementById("contenido").innerHTML =
        "<p id = 'textoSolucionado'>" + textoEncriptado + "</p>";
    document.getElementById("contenido").innerHTML += "<br> <br>";
    document.getElementById("contenido").innerHTML +=
        "<button class='botones' onclick='Copiar()' style='height: 40%;' >Copiar</button>";
}

function mostrarMensaje(mensaje) {
    document.getElementById("contenido").innerHTML = mensaje;
}

function Copiar() {
    let copyText = document.querySelector("#textoSolucionado").textContent;
    navigator.clipboard.writeText(copyText);
}
