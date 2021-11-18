class Materia {
  constructor(nombreApellido, asignatura, nota1, nota2, nota3, conducta) {
    this.nombreApellido = nombreApellido;
    this.asignatura = asignatura;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.conducta = conducta;
  }
  promedio() {
    console.log(
      "El promedio del alumno " +
        this.nombreApellido +
        " es: " +
        (this.nota1 + this.nota2 + this.nota3) / 3 +
        " en la materia de " +
        this.asignatura
    );
  }
}

alumnos = prompt("Ingresar Nombre y Apellido");
asignatura1 = prompt("Ingresar Materia");
notaIngresada1 = prompt("Ingresar nota N°1");
notaingresada2 = prompt("Ingresar nota N°2");
notaIngresada3 = prompt("Ingresar nota N°3");
alumno1 = new Materia(
  alumnos,
  asignatura1,
  parseInt(notaIngresada1),
  parseInt(notaingresada2),
  parseInt(notaIngresada3)
);
alumno1.promedio();
