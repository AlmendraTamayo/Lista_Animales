"use strict";

(() => {
  class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
      this.nombrePropietario = nombrePropietario;
      this.direccion = direccion;
      this.telefono = telefono;
    }

    datosPropietario() {
      return `El nombre del dueño es ${this.nombrePropietario}. El domicilio es: ${this.direccion} y el número telefónico de contacto: ${this.telefono}`;
    }
  }

  class Animal extends Propietario {
    constructor(
      tipo,
      nombrePropietario,
      direccion,
      telefono
    ) {
      super(nombrePropietario, direccion, telefono);
      this.tipo = tipo;
    }

    getTipo() {
      return `El tipo de animal es un: ${this.tipo}`;
    }
  }

  class Mascota extends Animal {
    constructor(
      nombreMascota,
      enfermedad,
      tipo,
      nombrePropietario,
      direccion,
      telefono
    ) {
      super(
        tipo,
        nombrePropietario,
        direccion,
        telefono
      );

      this._nombreMascota = nombreMascota;
      this._enfermedad = enfermedad;
    }

    get nombre() {
      return this._nombreMascota;
    }

    set nombre(nuevoNombre) {
      this._nombreMascota = nuevoNombre;
    }

    get enfermedad() {
      return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
      this._enfermedad = nuevaEnfermedad;
    }
  }


  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();


    const nombrePropietario = document.querySelector("#propietario");
    const telefono = document.querySelector("#telefono");
    const direccion = document.querySelector("#direccion");
    const nombreMascota = document.querySelector("#nombreMascota");
    const tipo = document.querySelector("#tipo");
    const enfermedad = document.querySelector("#enfermedad");



    const mascota = new Mascota(
      nombreMascota.value,
      enfermedad.value,
      tipo.value,
      nombrePropietario.value,
      direccion.value,
      telefono.value
    );

    function enviarResultado(mascota) {
      const resultado = document.querySelector("#resultado");
      resultado.innerHTML = `
            <ul>
              <li>${mascota.datosPropietario()}</li>
              <li>${mascota.getTipo()}, mientras que el nombre de la mascota es: ${mascota.nombre} y la enfermedad es: ${mascota.enfermedad}</li>
            </ul>
          `;
    }

    switch (tipo.value) {
      case "perro":
        {
          const Perro = mascota;
          enviarResultado(Perro);
        }
        break;

      case "gato":
        {
          const Gato = mascota;
          enviarResultado(Gato);
        }
        break;

      case "conejo":
        {
          const Conejo = mascota;
          enviarResultado(Conejo);
        }
        break;

      default:
        console.error("Error! Vuelve a revisar los datos ingresados");
    }
  });
})();
