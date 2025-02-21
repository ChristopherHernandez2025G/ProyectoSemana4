var precio_base = 2000;

var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;

var recargo = 0;
var recargo_total = 0;

var precio_final = 0;

var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");

var edad_numero = parseInt(edad);

if (edad_numero < 18) {
  alert("Lo sentimos, debe ser mayor de edad para cotizar el seguro.");
} else {
  var casado = prompt("¿Está casado actualmente? (si/no)");
  var edad_conyuge_numero = 0;
  if ("SI" === casado.toUpperCase()) {
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
    edad_conyuge_numero = parseInt(edad_conyuge);
  }

  var hijos = prompt("¿Tiene hijos o hijas? (si/no)");
  var cantidad_hijos = 0;
  if ("SI" === hijos.toUpperCase()) {
    cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
  }

  if (edad_numero >= 18 && edad_numero < 25) {
    recargo = precio_base * edad_18;
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo = precio_base * edad_25;
  } else if (edad_numero >= 50) {
    recargo = precio_base * edad_50;
  }
  recargo_total += recargo;

  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo = precio_base * casado_18;
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo = precio_base * casado_25;
  } else if (edad_conyuge_numero >= 50) {
    recargo = precio_base * casado_50;
  }
  recargo_total += recargo;

  recargo_total += cantidad_hijos * (precio_base * hijos_recargo);

  precio_final = precio_base + recargo_total;

  alert("Para el asegurado " + nombre);
  alert("El recargo total será de: " + recargo_total);
  alert("El precio final será de: " + precio_final);
}
