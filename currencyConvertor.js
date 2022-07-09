export * from './currencyConvertor.js'


// Načítání elementu z HTML a uložení do proměnných
const inputFirstCurrency = document.querySelector(".inputFirstCurrency");
const inputSecondCurrency = document.querySelector(".inputSecondCurrency");
const selectFirstCurrency = document.querySelector("#selectFirstCurrency > div > input");
const selectSecondCurrency = document.querySelector("#selectSecondCurrency > div > input");
const selectFirstCurrencyOnClick = document.querySelector("#selectFirstCurrency");
const selectSecondCurrencyOnClick = document.querySelector("#selectSecondCurrency");
const arrowImg = document.querySelector(".arrowImg");
const btnSend = document.querySelector(".btnSend");