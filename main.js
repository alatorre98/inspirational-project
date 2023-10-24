const inspirationalQuotes = [
    {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"},  
    {quote: "If opportunity doesn't knock, build a door.", author: "Milton Berle"},  
    {quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
    {quote: "It is never too late to be what you might have been.", author: "George Eliot"},  
    {quote: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn"},  
    {quote: "To the mind that is still, the whole universe surrenders.", author: "Lao Tzu"},  
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},  
    {quote: "There is nothing impossible to him who will try.", author: "Alexander the Great"}, 
    {quote: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop"},  
    {quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale"}  
];
const inspirationalImages = [];

const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author-text');

let randomQuoteIndex = Math.floor(Math.random() * 10);

quoteText.innerHTML = inspirationalQuotes[randomQuoteIndex].quote;
authorText.innerHTML = inspirationalQuotes[randomQuoteIndex].author;