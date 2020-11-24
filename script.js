let currencies = []

class Currency {
    constructor(name, icon, multi) {
        this.name = name;
        this.icon = icon;
        this.multi = multi;
    }
}

const UI = {
    currencySelection: document.getElementsByClassName('currencySelection')
}

function initCurrencies() {
    currencies.push(new Currency('Euro', 'images/flags/eu.svg', 1));
    currencies.push(new Currency('Dollar', 'images/flags/usa.svg', 1.19));
    currencies.push(new Currency('Pound', 'images/flags/uk.svg', 0.89));
}

function displayCurrencies() {
    for (let i in UI.currencySelection) {
        currencies.forEach(currency => {
            UI.currencySelection[i].innerHTML += `
            <div class="currency">
                <img src="${currency.icon}">
                <p>${currency.name}</p>
            <div>`
        });
    }
}

initCurrencies();
displayCurrencies();

console.log(UI.currencySelection)