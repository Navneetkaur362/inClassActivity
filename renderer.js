//List of Quotes
const quotes = [
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Love makes your soul crawl out from its hiding place. - Zora Neale Hurston",
    "Have enough courage to trust love one more time and always one more time. - Maya Angelou",
    "Life is God's novel. Let him write it. - Isaac Bashevis",
    "Never trust anyone completely but God. Love people, but put your full trust only in God. - Lawrence Welk",
    "Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life. - Lisa Weed",
    "The family – that dear octopus from whose tentacles we never quite escape, nor, in our inmost hearts, ever quite wish to. - Dodie Smith"
];
// Code to run on button click
document.getElementById('generate-quote-btn').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];// Getting a random quote
    document.getElementById('quote-display').textContent = randomQuote;// Giving output  of the selected quote
});
