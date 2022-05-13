//DOM OBJECTS
const quoteH2 = document.getElementById('quoteH2')
const quoteAuthor = document.getElementById('quoteAuthor')


let quotes = [
    {
        quote: "“When you have a dream, you’ve got to grab it and never let go.”",
        author: "— Carol Burnett"
    },
    {
        quote:"“Nothing is impossible. The word itself says ‘I’m possible!'”",
        author:"— Audrey Hepburn"
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

]


function generateAQuote(){
    let quoteNumber = Math.floor(Math.random() * (quotes.length))
    let selectedQuote = quotes[quoteNumber]
    quoteH2.innerText = selectedQuote.quote
    quoteAuthor.innerText = selectedQuote.author
}