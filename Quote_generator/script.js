const button = document.querySelector('#new-quote');
const span_quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quotes = [
    {quote:`"Be yourself; everyone else is already taken."`,
    author: "Oscar Wilde"
    },

    {quote:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    author:"Marilyn Monroe"
    },

    {quote: `"Two things are infinite: the universe and human stupidity, and I'm not sure about the universe."`,
    author:"Albert Einstein"
    },

    {quote:`"Live as if you were to die tomorrow. Learn as if you were to live forever."` ,
     author:"Mahatma Ghandi"   
    }
];



button.addEventListener('click', () =>{
    number = Math.floor(Math.random() * quotes.length);
    span_quote.innerText = quotes[number].quote;
    author.innerText = quotes[number].author;
});