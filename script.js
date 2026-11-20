function validarNombre() {
  let input = document.getElementById("nombre");
  input.value = input.value.toUpperCase().replace(/[^A-ZÁÉÍÓÚÑ ]/g, "");
  let e = document.getElementById("errorNombre");
  if (input.value.trim() === "") {
    e.textContent = "Error: El nombre solo debe tener letras.";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarPaterno() {
  let input = document.getElementById("paterno");
  input.value = input.value.toUpperCase().replace(/[^A-ZÁÉÍÓÚÑ ]/g, "");
  let e = document.getElementById("errorPaterno");
  if (input.value.trim() === "") {
    e.textContent = "Error: El apellido paterno solo debe tener letras.";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarMaterno() {
  let input = document.getElementById("materno");
  input.value = input.value.toUpperCase().replace(/[^A-ZÁÉÍÓÚÑ ]/g, "");
  let e = document.getElementById("errorMaterno");
  if (input.value.trim() === "") {
    e.textContent = "Error: El apellido materno solo debe tener letras.";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarEdad() {
  let input = document.getElementById("edad");
  input.value = input.value.replace(/[^0-9]/g, "").slice(0, 3);
  let e = document.getElementById("errorEdad");
  if (!/^[0-9]{1,3}$/.test(input.value)) {
    e.textContent = "Edad incorrecta. Solo números, máximo 3 dígitos.";
    input.className = "invalido";
    return false;
  }

// Solo mayores de edad
if (parseInt(input.value) < 18) {
    e.textContent = "Debes ser mayor de edad (18 años o más)";
    input.className = "invalido";
    return false;
}

e.textContent = "";
input.className = "valido";
return true;
}


 
function validarFecha() {
  let input = document.getElementById("fecha");
  let e = document.getElementById("errorFecha");
  if (input.value === "") {
    e.textContent = "Error: Debes elegir tu fecha de nacimiento.";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarTarjeta() {
  let input = document.getElementById("tarjeta");
  // Solo deja números y solo 16, y los separa de 4 en 4
  input.value = input.value.replace(/[^0-9]/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  let e = document.getElementById("errorTarjeta");
  let soloNumeros = input.value.replace(/ /g, "");
  if (soloNumeros.length !== 16) {
    e.textContent = "Error: Solo numeros,máximo 16 dígitos.";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarEmail() {
  let input = document.getElementById("email");
  let e = document.getElementById("errorEmail");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    e.textContent = "Error: El correo debe llevar @ y .com";
    input.className = "invalido";
    return false;
  }
  e.textContent = "";
  input.className = "valido";
  return true;
}

function validarTodo() {
  let resultado = document.getElementById("resultado");

  if (validarNombre() && validarPaterno() && validarMaterno() && validarEdad() && validarEmail() && validarFecha() && validarTarjeta()) {
    resultado.textContent = "¡Suscripción Exitosa!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Error: Te faltan datos por llenar.";
    resultado.style.color = "red";
  }
}
function abrirMenu() {
  var menu = document.getElementById("miMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
let dia = document.getElementById("dia");
for(let i=1; i<=31; i++){
  dia.innerHTML += "<option value='"+i+"'>"+i+"</option>";
}
let mes = document.getElementById("mes");
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for(let i=0; i<12; i++){
  mes.innerHTML += "<option value='"+(i+1)+"'>"+meses[i]+"</option>";
}
let anio = document.getElementById("anio");
for(let i=2008; i>=1920; i--){
  anio.innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

function validarFecha() {
  let d = document.getElementById("dia");
  let m = document.getElementById("mes");
  let a = document.getElementById("anio");
  let e = document.getElementById("errorFecha");
  if (d.value === "" || m.value === "" || a.value === "") {
    e.textContent = "Error: Debes elegir tu fecha de nacimiento.";
    d.className = "invalido"; m.className = "invalido"; a.className = "invalido";
    return false;
  }
  e.textContent = "";
  d.className = "valido"; m.className = "valido"; a.className = "valido";
  return true;
}
