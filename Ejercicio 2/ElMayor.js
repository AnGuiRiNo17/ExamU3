console.log("Actividad 2: Haz un script que pida 3 edades y 3 nombres en el teclado e indica el nombre del mayor.  ")

// Solicitar los datos
let nombre1 = prompt("Nombre de la primera persona:");
let edad1 = parseInt(prompt(`Edad de ${nombre1}:`));

let nombre2 = prompt("Nombre de la segunda persona:");
let edad2 = parseInt(prompt(`Edad de ${nombre2}:`));

let nombre3 = prompt("Nombre de la tercera persona:");
let edad3 = parseInt(prompt(`Edad de ${nombre3}:`));

// Determinar quién es el mayor
let theOldestName = nombre1;
let theOldestAge = edad1;

if (edad2 > theOldestAge) {
    theOldestName = nombre2;
    theOldestAge = edad2;
}if (edad3 > theOldestAge) {
    theOldestName = nombre3;
    theOldestAge = edad3;
}

console.log(`La persona con mas tiempo vivido es ${theOldestName} con ${theOldestAge} años.`);

