'use strict'
const quotes = [
    {
        quote : "It's too late to think it's too late.",
        author : "Park Myung Su, Infinite Challenge"
    },
    {
        quote : "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
        author : "Ratatouille"
    },
    {
        quote : "Life is a journey to be experienced, not a problem to be solved.",
        author : "Winnie the Pooh"
    },
    {
        quote : "Sometimes we only see how people are different from us. But if you look hard enough, you can see how much we're all alike.",
        author : "Aladdin"
    },
    {
        quote : "It is not our abilities that show what we truly are, it is our choices.",
        author : "Dumbledore, Harry Potter"
    },
    {
        quote : "Of course you are afraid. It will be hard, it will be more than hard. But you will make it through, you.",
        author : "Monster Call"
    },
    {
        quote : "There is always something authentic consealed in every forge.",
        author : "The Best Offer"
    },
    {
        quote : "You're a very loving person and your life will be filled with romance.",
        author : "The Snoopy"
    },
    {
        quote : "If you come at 4 o'clock, I will be happy from 3 o'clock.",
        author : "The Little Prince"
    },
    {
        quote : "Banana!!!",
        author : "Minions"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
