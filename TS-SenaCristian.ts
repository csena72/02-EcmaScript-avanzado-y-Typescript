const operacion = async (
  numero1: number,
  numero2: number,
  operacion: string
) => {
  let resultado: number = 0;
  operacion = operacion.toLowerCase().trim();

  if (operacion === "suma") {
    const moduloSuma = "./Suma";
    await import(moduloSuma).then((moduloSuma) => {
      resultado = new moduloSuma.Suma(numero1, numero2).resultado();
    });
  } else if (operacion === "resta") {
    const moduleResta = "./Resta";
    await import(moduleResta).then((moduleResta) => {
      resultado = new moduleResta.Resta(numero1, numero2).resultado();
    });
  } else {
    throw new Error(`Error: La operación ${operacion} no esta disponible!`);
  }

  return resultado;
};

const operaciones = () => {
  operacion(2, 3, "suma")
    .then((respuesta) => {
      console.log("2 + 3 = ", respuesta);
    })
    .catch((error) => {
      console.log(error.message);
    });

  operacion(32, 3, "resta")
    .then((respuesta) => {
      console.log("32 - 3 = ", respuesta);
    })
    .catch((error) => {
      console.log(error.message);
    });

  operacion(20, 3, "Resta")
    .then((respuesta) => {
      console.log("20 - 3 = ", respuesta);
    })
    .catch((error) => {
      console.log(error.message);
    });

  operacion(10, 3, "  resta")
    .then((respuesta) => {
      console.log("10 - 3 = ", respuesta);
    })
    .catch((error) => {
      console.log(error.message);
    });

  operacion(4, 3, "multiplicacion")
    .then((respuesta) => {
      console.log("4 * 3 = ", respuesta);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

operaciones();
