var precio_base = 2000;
var edad_18 = 0.1, edad_25 = 0.2, edad_50 = 0.3;
var casado_18 = 0.1, casado_25 = 0.2, casado_50 = 0.3;
var hijos_recargo = 0.2;
var propiedad_recargo = 0.35;
var ingresos_recargo = 0.05;

while (true) {
    var nombre = prompt("Ingrese su nombre o escriba 'Salir' para terminar");
    if (nombre.toUpperCase() === "SALIR") break;
    
    var edad = parseInt(prompt("¿Cuántos años tiene?"));
    if (edad < 18) {
        alert("Debe ser mayor de edad para cotizar el seguro.");
        continue;
    }
    
    var casado = prompt("¿Está casado actualmente? (si/no)").toUpperCase();
    var edad_conyuge = 0;
    if (casado === "SI") {
        edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
    }
    
    var hijos = prompt("¿Tiene hijos o hijas? (si/no)").toUpperCase();
    var cantidad_hijos = hijos === "SI" ? parseInt(prompt("¿Cuántos hijos tiene?")) : 0;
    
    var propiedades = parseInt(prompt("¿Cuántas propiedades posee? solo numeros"));
    var ingresos = parseFloat(prompt("¿Cuáles son sus ingresos mensuales? solo numeros"));
    
    var recargo_total = 0;
    
    if (edad >= 18 && edad < 25) recargo_total += precio_base * edad_18;
    else if (edad >= 25 && edad < 50) recargo_total += precio_base * edad_25;
    else if (edad >= 50) recargo_total += precio_base * edad_50;
    
    if (edad_conyuge >= 18 && edad_conyuge < 25) recargo_total += precio_base * casado_18;
    else if (edad_conyuge >= 25 && edad_conyuge < 50) recargo_total += precio_base * casado_25;
    else if (edad_conyuge >= 50) recargo_total += precio_base * casado_50;
    
    recargo_total += cantidad_hijos * (precio_base * hijos_recargo);
    recargo_total += propiedades * (precio_base * propiedad_recargo);
    recargo_total += ingresos * ingresos_recargo;
    
    var precio_final = precio_base + recargo_total;
    
    alert(`Para el asegurado ${nombre}\nRecargo total: ${recargo_total}\nPrecio final: ${precio_final}`);
}
