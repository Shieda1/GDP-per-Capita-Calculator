// https://www.omnicalculator.com/finance/gdp-per-capita

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GDPpercapitaRadio = document.getElementById('GDPpercapitaRadio');
const realGDPRadio = document.getElementById('realGDPRadio');
const populationRadio = document.getElementById('populationRadio');

let GDPpercapita;
let realGDP = v1;
let population = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GDPpercapitaRadio.addEventListener('click', function() {
  variable1.textContent = 'Real GDP';
  variable2.textContent = 'Population';
  realGDP = v1;
  population = v2;
  result.textContent = '';
});

realGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP per capita';
  variable2.textContent = 'Population';
  GDPpercapita = v1;
  population = v2;
  result.textContent = '';
});

populationRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP per capita';
  variable2.textContent = 'Real GDP';
  GDPpercapita = v1;
  realGDP = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GDPpercapitaRadio.checked)
    result.textContent = `GDP per capita = ${computeGDPpercapita().toFixed(2)}`;

  else if(realGDPRadio.checked)
    result.textContent = `Real GDP = ${computerealGDP().toFixed(2)}`;

  else if(populationRadio.checked)
    result.textContent = `Population = ${computepopulation().toFixed(2)}`;
})

// calculation

function computeGDPpercapita() {
  return Number(realGDP.value) / Number(population.value);
}

function computerealGDP() {
  return Number(GDPpercapita.value) * Number(population.value);
}

function computepopulation() {
  return Number(realGDP.value) / Number(GDPpercapita.value);
}