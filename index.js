// Completar acá.
// Escribir la función textosCortos y pasar el test.
function textosCortos(collection) {
  var respuesta = [];
  for (var i = 0; i < collection.length; i++) {
    CantidadDePalabrasEnTexto = collection[i].texto.split(" ");
    if (CantidadDePalabrasEnTexto.length <= 10) {
      var tituloATrabajar = collection[i].titulo;
      var tituloSinEspacios = tituloATrabajar.trim();
      var tituloEnMayuscula =
        tituloSinEspacios.charAt(0).toUpperCase() + tituloSinEspacios.slice(1);
      var loQueDevuelve = {
        titulo: tituloEnMayuscula,
        texto: collection[i].texto,
      };
      respuesta.push(loQueDevuelve);
    }
  }
  console.log(respuesta);
  return respuesta;
}

// test: no modificar
function testTextosCortos() {
  const textosDePrueba = [
    { titulo: " un titulo ", texto: "uno dos tres cuatro cinco" },
    {
      titulo: "what ever",
      texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
    },
  ];
  const respuesta = textosCortos(textosDePrueba);

  if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
    console.log("testTextosCortos passed");
  } else {
    throw "testTextosCortos failed";
  }
}

function main() {
  testTextosCortos();
  textosCortos(nuevaLista);
}

var nuevaLista = [
  {
    titulo: " goldeneye 007",
    texto: " gran videojuego para la consola de nintendo 64",
  },
  {
    titulo: " kirby",
    texto: "juego mitico de nintendo donde somos un bicho rosa",
  },
];

main();
