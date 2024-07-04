let fechaISO = document
  .getElementById("birthDate")
  .getAttribute("data-birthdate");
let fecha = new Date(fechaISO);
let opciones = { year: "numeric", month: "long", day: "numeric" };
document.getElementById("birthDate").innerText = fecha.toLocaleDateString(
  "es-ES",
  opciones
);
