// import * as data from "../data.json";

const botoes = document.querySelectorAll(".botoes__botao");
const info_horas_work = document.querySelector("#info_horas_work");
const info_horas_play = document.querySelector("#info_horas_play");
const info_horas_study = document.querySelector("#info_horas_study");
const info_previous_study = document.querySelector("#info_previous_study");
const info_horas_exercice = document.querySelector("#info_horas_exercice");
const info_previous_exercice = document.querySelector("#info_previous_exercice");
const info_horas_social = document.querySelector("#info_horas_social");
const info_previous_social = document.querySelector("#info_previous_social");
const info_horas_self_care = document.querySelector("#info_horas_self_care");
const info_previous_self_care = document.querySelector("#info_previous_self_care");

let lista = [];

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Aqui você pode usar os dados JSON
    lista = data;
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON', error);
  });

botoes[0].addEventListener("click", () => {
  // alert("Daily");
  console.log(lista[0]);
});

botoes[1].addEventListener("click", () => {
  // alert("Weekly");
});

botoes[2].addEventListener("click", () => {
  // alert("Monthly");
});

// Daily
// Weekly
// Monthly