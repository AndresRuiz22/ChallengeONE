function Comprobar(texto) {
    var acentos = /[À-ÿ]/;
    var mayusculas = /[A-Z]/;
    return acentos.test(texto) || mayusculas.test(texto);
}

function Encriptar() {
    var texto = document.getElementById("input").value;
    if (Comprobar(texto) === false) {
        var textoEncriptado = "";

        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoEncriptado += "ai";
                    break;

                case "e":
                    textoEncriptado += "enter";

                    break;

                case "i":
                    textoEncriptado += "imes";

                    break;

                case "o":
                    textoEncriptado += "ober";

                    break;

                case "u":
                    textoEncriptado += "ufat";

                    break;

                default:
                    textoEncriptado += texto[i];

                    break;
            }
        }

        document.getElementById("contenido").innerHTML =
            "<p id = 'textoSolucionado'>" + textoEncriptado + "</p>";
        document.getElementById("contenido").innerHTML += "<br> <br>";
        document.getElementById("contenido").innerHTML +=
            "<button class='botones' onclick='Copiar()' style='height: 40%;' >Copiar</button>";
    } else {
        document.getElementById("contenido").innerHTML =
            "Solo letras minusculas y sin acentos";
    }
    document
        .getElementsByClassName("section-contenido")[0]
        .querySelector("img").style.display = "none";
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
        document.getElementById("contenido").innerHTML =
            "<p id = 'textoSolucionado'>" + textoDesencriptado + "</p>";
        document.getElementById("contenido").innerHTML += "<br> <br>";
        document.getElementById("contenido").innerHTML +=
            "<button class='botones' onclick='Copiar()' style='height: 40%;' >Copiar</button>";
    } else {
        document.getElementById("contenido").innerHTML =
            "Solo letras minusculas y sin acentos";
    }
    document
        .getElementsByClassName("section-contenido")[0]
        .querySelector("img").style.display = "none";
}

function Copiar() {
    let copyText = document.querySelector("#textoSolucionado").textContent;
    navigator.clipboard.writeText(copyText);
}
