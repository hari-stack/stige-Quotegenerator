// Collection Of Quote
const quotes = [{
    quote: `Motivation is the art of getting people to do what you want them to do because they want to do it.`,
    author: `- Dwight D. Eisenhower`
}, {
    quote: `Be a good person. But don’t waste tiIf you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.`,
    author: `- Jim Rohn`
}, {
    quote: `Success to me is being a good person, treating people well.`,
    author: `- David LaChapelle`
}, {
    quote: `I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.`,
    author: `- Ken Venturi`
}, {
    quote: `Aim for the moon. If you miss, you may hit a star.`,
    author: `- W. Clement Stone`
}, {
    quote: `Life is 10% what happens to you and 90% how you react to it.`,
    author: `- Charles R. Swindoll`
}, {
    quote: `Leap, and the net will appear.`,
    author: `- John Burroughs`
}, {
    quote: `Knowing is not enough; we must apply. Willing is not enough; we must do..`,
    author: `- Johann Wolfgang von Goethe`
}, {
    quote: `It always seems impossible until it's done.`,
    author: `- Nelson Mandela`
}, {
    quote: `When trouble comes, focus on God's ability to care for you.`,
    author: `- Charles Stanley`
}, {
    quote:`Don't watch the clock; do what it does. Keep going.`,
    author:`- Sam Levenson`
}]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})