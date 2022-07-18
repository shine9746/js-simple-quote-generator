var quotesContainer = document.querySelector('.quote');
var color1 = "#495867";
var color2 = "#577399";
var color3 = "#475B5A";
var color4 = "#586F7C";
var color5 = "#37393A";
var color6 = "004F2D";
var colors = [color1, color2, color3, color4, color5.color6];
var LaoTzu = "The journey of a thousand miles begins with one step.-Lao Tzu";
var FriedrichNietzsche = "That which does not kill us makes us stronger-Friedrich Nietzsche";
var JohnLennon = "Life is what happens when you’re busy making other plans.-John Lennon";
var JoeKennedy = "When the going gets tough, the tough get going.-Joe Kennedy";
var MahatmaGandhi = "You must be the change you wish to see in the world.-Mahatma Gandhi";
var MaeWest = "You only live once, but if you do it right, once is enough.-Mae West";
var RobertHSchuller = "Tough times never last but tough people do.-Robert H. Schuller";
var StephenKing = "Get busy living or get busy dying.-Stephen King";
var HenryFord = "Whether you think you can or you think you can’t, you’re right.-Henry Ford";
var AlrdedLordTennyson = "Tis better to have loved and lost than to have never loved at all.-Alrded Lord Tennyson";
var quotesArray = [LaoTzu, FriedrichNietzsche, JohnLennon, JoeKennedy, MahatmaGandhi, MaeWest, RobertHSchuller, StephenKing, HenryFord, AlrdedLordTennyson];

function generateQuote() {
    quotesContainer.textContent = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    console.log(quotesContainer);
    document.body.style.backgroundColor = randomPalattes();
}

function randomPalattes() {
    var colorPatterns = colors[Math.floor(Math.random() * colors.length)];
    return colorPatterns;
}

window.setInterval(function () {
    generateQuote();
}, 10000);







