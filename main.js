var quotes = [{
        "q": `“Be yourself; everyone else is already taken.”`,
        'auther': `― Oscar Wilde`
    },
    {
        "q": `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        'auther': '― Marilyn Monroe'
    },
    {
        "q": `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        'auther': '― Albert Einstein'
    },
    {
        "q": `“So many books, so little time.”`,
        'auther': '― Frank Zappa'
    },
    {
        "q": '“A room without books is like a body without a soul.”',
        'auther': '― Marcus Tullius Cicero'
    },
    {
        "q": `“Be who you are and say what you feel, because those who mind don' t matter,
        and those who matter don 't mind.”`,
        'auther': `― Bernard M. Baruch`
    },
]

// Function to loop on a json to show the quot 
function displayquote() {
    console.log(quotes.length)
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomNumber]['q'];
    document.getElementById('quoteauthor').innerHTML = quotes[randomNumber]['auther'];
    return randomNumber
}