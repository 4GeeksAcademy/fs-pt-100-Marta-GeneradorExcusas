/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const generateExcuse = () => {
    const sujeto = ["mi perro", "mi vecino", "el profesor", "el fontanero"];
    const verbo = ["rompió", "enseñó", "arregló", "llamó"];
    const objeto = ["mis deberes", "mi móvil", "el grifo", "la lección"];
    const lugar = ["en el parque", "en mi casa", "en las clases", "en el comedor"];

    const randomGenerator = arr => Math.floor(Math.random() * arr.length);

    const excuse = `${sujeto[randomGenerator(sujeto)]} ${verbo[randomGenerator(verbo)]} ${objeto[randomGenerator(objeto)]} ${lugar[randomGenerator(lugar)]}`;

    document.getElementById("excuse").innerHTML = excuse;
  };

  document.getElementById("generator").addEventListener("click", generateExcuse);
};
