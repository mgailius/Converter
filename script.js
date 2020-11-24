let currencies = []

class Currency {
    constructor(name, icon, rate) {
        this.name = name;
        this.icon = icon;
        this.rate = rate;
    }
}

const UI = {
    form: document.getElementsByClassName('.form'),
    currencySelection: document.getElementsByClassName('currencySelection'),
    currentCurrency: document.getElementsByClassName('currentCurrency'),
    selectedCurrency: document.getElementsByClassName('selectedCurrency')
}

function initCurrencies() {
    currencies.push(new Currency('Euro', 'images/flags/eu.svg', 1));
    currencies.push(new Currency('Dollar', 'images/flags/usa.svg', 1.19));
    currencies.push(new Currency('Pound', 'images/flags/uk.svg', 0.89));
    currencies.push(new Currency('Yuan', 'images/flags/china.svg', 7.83));
}

function displayCurrencies() {
    for (let i = 0; i < UI.currencySelection.length; i++) {
        currencies.forEach(currency => {
            UI.currencySelection[i].innerHTML += `
            <div onClick="selectCurrency(this)" class="currency ${i}">
                <img src="${currency.icon}">
                <p>${currency.name}</p>
            </div>`
        });
        UI.currentCurrency[i].innerHTML = `
        <div class="selectedCurrency ${i}">
            <img src="${currencies[i].icon}">
            <p>${currencies[i].name}</p>
        </div>`
    }
}

function selectCurrency(element) {
    for (let i = 0; i < UI.selectedCurrency.length; i++) {
        if(UI.selectedCurrency[i].classList[1] == element.classList[1]) {
            UI.selectedCurrency[i].innerHTML = element.innerHTML;
        }
    }
}

function updateConversion() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < currencies.length; j++) {
            if(UI.selectedCurrency[i].children[1].innerHTML == currencies[j].name) {
                //konversijos logika ?
                //debug
                console.log(currencies[j].name)
                console.log(currencies[j].rate)
            }
        }
    }
}

initCurrencies();
displayCurrencies();

//debug
document.addEventListener("keydown", updateConversion);