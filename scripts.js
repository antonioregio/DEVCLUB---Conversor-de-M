const button = document.getElementsByTagName('button') [0]
const select = document.getElementById("currency-select")

const dolar = 4.87
const euro = 5.34
const bitcoin = 146942.79

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    currencyValueText.innerHTML = inputReais / dolar

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if(select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if(select.value === "£ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if(select.value === "BTC Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = './assets/USD.png'
    }

    if(select.value === '£ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = './assets/euro.png'
    }

    if(select.value === 'BTC Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = './assets/Bitcoin.png'
    }

    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)