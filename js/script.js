// import * as data from "../data.json";

const botoes = document.querySelectorAll(".botoes__botao");
const infoCurrentWork = document.querySelector("#info_horas_work");
const infoPreviousWork = document.querySelector("#info_previous_work");
const infoCurrentPlay = document.querySelector("#info_horas_play");
const infoPreviousPlay = document.querySelector("#info_previous_play");
const infoCurrentStudy = document.querySelector("#info_horas_study");
const infoPreviousStudy = document.querySelector("#info_previous_study");
const infoCurrentExercice = document.querySelector("#info_horas_exercice");
const infoPreviousExercice = document.querySelector("#info_previous_exercice");
const infoCurrentSocial = document.querySelector("#info_horas_social");
const infoPreviousSocial = document.querySelector("#info_previous_social");
const infoCurrentSelfCare = document.querySelector("#info_horas_self_care");
const infoPreviousSelfCare = document.querySelector("#info_previous_self_care");

let lista = [];
// let listaFormatada = [];

lista = await fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data); // Aqui você pode usar os dados JSON
    // lista = data;
    return data;
    // console.log("listaFormatada => ", listaFormatada);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON', error);
    return error;
  });

const work = lista[0].timeframes;
const play = lista[1].timeframes;
const study = lista[2].timeframes;
const exercise = lista[3].timeframes;
const social = lista[4].timeframes;
const selfCare = lista[5].timeframes;

infoCurrentWork.innerHTML = work.daily.current;
infoCurrentPlay.innerHTML = play.daily.current;
infoCurrentStudy.innerHTML = study.daily.current;
infoCurrentExercice.innerHTML = exercise.daily.current;
infoCurrentSocial.innerHTML = social.daily.current;
infoCurrentSelfCare.innerHTML = selfCare.daily.current;
infoPreviousWork.innerHTML = work.daily.previous;
infoPreviousPlay.innerHTML = play.daily.previous;
infoPreviousStudy.innerHTML = study.daily.previous;
infoPreviousExercice.innerHTML = exercise.daily.previous;
infoPreviousSocial.innerHTML = social.daily.previous;
infoPreviousSelfCare.innerHTML = selfCare.daily.previous;

botoes[0].addEventListener("click", () => {
  infoCurrentWork.innerHTML = work.daily.current;
  infoCurrentPlay.innerHTML = play.daily.current;
  infoCurrentStudy.innerHTML = study.daily.current;
  infoCurrentExercice.innerHTML = exercise.daily.current;
  infoCurrentSocial.innerHTML = social.daily.current;
  infoCurrentSelfCare.innerHTML = selfCare.daily.current;
  infoPreviousWork.innerHTML = work.daily.previous;
  infoPreviousPlay.innerHTML = play.daily.previous;
  infoPreviousStudy.innerHTML = study.daily.previous;
  infoPreviousExercice.innerHTML = exercise.daily.previous;
  infoPreviousSocial.innerHTML = social.daily.previous;
  infoPreviousSelfCare.innerHTML = selfCare.daily.previous;
});

botoes[1].addEventListener("click", () => {
  infoCurrentWork.innerHTML = work.weekly.current;
  infoCurrentPlay.innerHTML = play.weekly.current;
  infoCurrentStudy.innerHTML = study.weekly.current;
  infoCurrentExercice.innerHTML = exercise.weekly.current;
  infoCurrentSocial.innerHTML = social.weekly.current;
  infoCurrentSelfCare.innerHTML = selfCare.weekly.current;
  infoPreviousWork.innerHTML = work.weekly.previous;
  infoPreviousPlay.innerHTML = play.weekly.previous;
  infoPreviousStudy.innerHTML = study.weekly.previous;
  infoPreviousExercice.innerHTML = exercise.weekly.previous;
  infoPreviousSocial.innerHTML = social.weekly.previous;
  infoPreviousSelfCare.innerHTML = selfCare.weekly.previous;
});

botoes[2].addEventListener("click", () => {
  infoCurrentWork.innerHTML = work.monthly.current;
  infoCurrentPlay.innerHTML = play.monthly.current;
  infoCurrentStudy.innerHTML = study.monthly.current;
  infoCurrentExercice.innerHTML = exercise.monthly.current;
  infoCurrentSocial.innerHTML = social.monthly.current;
  infoCurrentSelfCare.innerHTML = selfCare.monthly.current;
  infoPreviousWork.innerHTML = work.monthly.previous;
  infoPreviousPlay.innerHTML = play.monthly.previous;
  infoPreviousStudy.innerHTML = study.monthly.previous;
  infoPreviousExercice.innerHTML = exercise.monthly.previous;
  infoPreviousSocial.innerHTML = social.monthly.previous;
  infoPreviousSelfCare.innerHTML = selfCare.monthly.previous;
});

// Daily
// Weekly
// Monthly