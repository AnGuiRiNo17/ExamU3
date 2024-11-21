console.log("Actividad 1: Hacer un script que pida el número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas se escribirá un número consecutivo en orden  descendente. Si, por ejemplo, la tabla es de 5×5, los números irán del 25 al 1.");

// Solicitar filas y columnas
let Filas = parseInt(prompt("Número de filas:"));
let Columnas = parseInt(prompt("Número de columnas:"));

// Calcular el total de celdas
let Total = Filas * Columnas;

// Crear la tabla
document.write("<table border='1'>");
for (let i = 1; i <= Filas; i++) {
    document.write("<tr>");
    for (let j = 1; j <= Columnas; j++) {
        document.write(`<td>${Total}</td>`);
        Total--;
    }
    document.write("</tr>");
}
document.write("</table>");
