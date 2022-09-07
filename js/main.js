let listaCompetidores = [];
let botonSubmit = document.getElementById("botonSubmit");

botonSubmit.addEventListener("click", addCompetidor);

function addCompetidor(){
    let nombre = document.getElementById('nombre').value;
    let estilo = document.getElementById('estilo').value;
    let distancia = document.getElementById('distancia').value;

    listaCompetidores.push({
        nombre: nombre,
        estilo: estilo,
        distancia: distancia,
    })

    console.log(listaCompetidores);
}