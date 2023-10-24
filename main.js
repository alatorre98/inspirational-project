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

const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author-text');
const inspirationalImageElement = document.getElementById('inspo-img');
const moreInspirationButton = document.getElementById('inspo-btn');

let inspirationalImagesIndex = Math.floor(Math.random() * 5) + 1;
let inspirationalImage = `img${inspirationalImagesIndex}`;
let randomQuoteIndex = Math.floor(Math.random() * 10);

quoteText.innerHTML = inspirationalQuotes[randomQuoteIndex].quote;
authorText.innerHTML = "- " + inspirationalQuotes[randomQuoteIndex].author;
inspirationalImageElement.src = "./resources/images/" + inspirationalImage + ".jpg";

const newInspiration = () => {
    inspirationalImagesIndex = Math.floor(Math.random() * 5) + 1;
    inspirationalImage = `img${inspirationalImagesIndex}`;
    randomQuoteIndex = Math.floor(Math.random() * 10);

    quoteText.innerHTML = inspirationalQuotes[randomQuoteIndex].quote;
    authorText.innerHTML = "- " + inspirationalQuotes[randomQuoteIndex].author;
    inspirationalImageElement.src = "./resources/images/" + inspirationalImage + ".jpg";
};

moreInspirationButton.addEventListener('click', newInspiration)
