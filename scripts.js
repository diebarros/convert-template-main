// cotação de moedas do dia
const USD = 6.08
const EUR = 6.31
const GBP = 7.62

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer") 
const description = document.getElementById("description")
const result = document.getElementById("result")   

//manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "") 
})

// capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD": 
        convertCurrency(amount.value, USD, "US$")
        break

        case "EUR":
        convertCurrency(amount.value, EUR, "€") 
        break
        
        case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break    
    }
}

// Função para converter a moeda. 
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais` 

        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
