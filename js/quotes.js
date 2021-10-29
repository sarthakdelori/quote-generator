const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"; 
var quote = document.querySelector('#quote');
var btn = document.querySelector('#btn');
var author = document.querySelector('#author');
var tweetQuote = document.querySelector('#tweet-quote');
var quotesData;

function getQuotes(){
 const promise = fetch(url);
  promise
  .then((res) => res.json())
  .then((data) => {
    quotesData = data;
    var num = Math.floor(Math.random() * quotesData.quotes.length);
    var quoteOutput = quotesData.quotes[num].quote;
    var authorOutput = `${quotesData.quotes[num].author}`;
    tweetQuote.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + quoteOutput + '" - ' + authorOutput;
    setTimeout(function(){quote.innerHTML = quoteOutput;
    author.innerHTML = authorOutput;},500);
  })
}

btn.addEventListener('click', getQuotes);

function toggleTheme(){
  var toggle = document.body;
  toggle.classList.toggle("toggle");
}

toggle.addEventListener('click', toggleTheme)


// function tweeti(){
// }
// tweetQuote.addEventListener('click', tweeti);