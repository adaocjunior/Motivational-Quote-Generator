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
    {
        quote:"“There is nothing impossible to they who will try.”",
        author:"— Alexander the Great",
    },
    {
        quote:"“The bad news is time flies. The good news is you’re the pilot.”",
        author:"— Michael Altshuler",
    },
    {
        quote:"“Life has got all those twists and turns. You’ve got to hold on tight and off you go.”",
        author:"— Nicole Kidman",
    },
    {
        quote:"“Keep your face always toward the sunshine, and shadows will fall behind you.”",
        author:"— Walt Whitman",
    },
    {
        quote:"“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
        author:"– Winston Churchill",
    },
    {
        quote:"“You define your own life. Don’t let other people write your script.”",
        author:"— Oprah Winfrey",
    },
    {
        quote:"“You are never too old to set another goal or to dream a new dream.”",
        author:"— Malala Yousafzai",
    },
    {
        quote:"“Weaknesses are just strengths in the wrong environment.”",
        author:"— Marianne Cantwell",
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.”",
        author:"— Dr. Seuss",
    },
    {
        quote:"“Keep your eyes on the stars and your feet on the ground.”",
        author:"— Theodore Roosevelt",
    },
    {
        quote:"“Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.”",
        author:"— Harvey Fierstein",
    },
    {
        quote:"“Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.”",
        author:"— C.S. Lewis",
    },
    {
        quote:"“A man who flies from his fear may find that he has only taken a shortcut to meet it.”",
        author:"— Sador",
    },
    {
        quote:"“Life's too mysterious to take too serious.”",
        author:"— Mary Engelbreit",
    },
    {
        quote:"“No one can make you feel inferior without your consent.”",
        author:"— Eleanor Roosevelt",
    },
    {
        quote:"“The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.”",
        author:"— Albert Einstein",
    },
    {
        quote:"“It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.”",
        author:"— Rocky Balboa",
    },
    {
        quote:"“If you want to go fast, go alone. If you want to go far, go together.”",
        author:"— African proverb",
    },
    {
        quote:"“Believe you can and you're halfway there.”",
        author:"— T. Roosevelt",
    },
    {
        quote:"“May I never be complete. May I never be content. May I never be perfect.”",
        author:"— Chuck Palahniuk",
    },
    {
        quote:"“Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.”",
        author:"— José Luís Borges",
    },
    {
        quote:"“It does not do to dwell on dreams and forget to live.”",
        author:"— Albus Dumbledore",
    },
    {
        quote:"“Don't sweat the petty things and don't pet the sweaty things.”",
        author:"— George Carlin",
    },
    {
        quote:"“Do what you feel in your heart to be right, for you'll be criticized anyway.”",
        author:"— Eleanor Roosevelt",
    },
    {
        quote:"“Never cowardly or cruel. Never give up, never give in.”",
        author:"— Doctor Who",
    },
    {
        quote:"“Do not go where the path may lead, go instead where there is no path and leave a trail.”",
        author:"— Ralph Waldo Emerson",
    },
    {
        quote:"“Love all, trust a few, do wrong to none.”",
        author:"— William Shakespeare",
    },
    {
        quote:"“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”",
        author:"— Aristotle",
    }   
]

function generateAQuote(){
    let quoteNumber = Math.floor(Math.random() * (quotes.length))
    let selectedQuote = quotes[quoteNumber]
    quoteH2.innerText = selectedQuote.quote
    quoteAuthor.innerText = selectedQuote.author
}