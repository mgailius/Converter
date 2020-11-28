let currencies = []

class Currency {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

const UI = {
    input: document.getElementsByTagName('input'),
    currency: document.getElementsByClassName('currency')
}

function initCurrencies() {
    currencies.push(new Currency('Euro', 'images/flags/eu.svg'));
    currencies.push(new Currency('Dollar', 'images/flags/usa.svg'));
    currencies.push(new Currency('Pound', 'images/flags/uk.svg'));
}

function displayCurrencies() {
    for (let i = 0; i < UI.currency.length; i++) {
        UI.currency[i].innerHTML = `
            <img src="${currencies[i].icon}">
            <p>${currencies[i].name}</p>
        `
    }
}

//functionality

UI.input[0].addEventListener("focus", () => {UI.input[0].addEventListener("keyup", () => {convertFromEuro();});});
UI.input[1].addEventListener("focus", () => {UI.input[1].addEventListener("keyup", () => {convertFromDollar();});});
UI.input[2].addEventListener("focus", () => {UI.input[2].addEventListener("keyup", () => {convertFromPound();});});

function convertFromEuro() {
    if (!UI.input[0].value) {
        UI.input[1].value = "";
        UI.input[2].value = "";
    } else {
        UI.input[1].value = (UI.input[0].value * 1.20).toFixed(2);
        UI.input[2].value = (UI.input[0].value * 0.90).toFixed(2);
    } 
}

function convertFromDollar() {
    if (!UI.input[1].value) {
        UI.input[0].value = "";
        UI.input[2].value = "";
    } else {
        UI.input[0].value = (UI.input[1].value * 0.84).toFixed(2);
        UI.input[2].value = (UI.input[1].value * 0.75).toFixed(2);
    }
}

function convertFromPound() {
    if (!UI.input[2].value) {
        UI.input[1].value = "";
        UI.input[0].value = "";
    } else {
        UI.input[0].value = (UI.input[2].value * 1.11).toFixed(2);
        UI.input[1].value = (UI.input[2].value * 1.33).toFixed(2);
    }
}

initCurrencies();
displayCurrencies();