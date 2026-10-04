```javascript
let selectedScore = 0;

const scoreButtons = document.querySelectorAll(".scale button");
const scoreText = document.getElementById("score-text");
const responseBox = document.getElementById("response");

scoreButtons.forEach(button => {

    button.addEventListener("click", () => {

        scoreButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedScore = Number(button.dataset.score);

        if (selectedScore <= 3) {
            scoreText.textContent = "Not great, but you're still standing.";
        } 
        else if (selectedScore <= 6) {
            scoreText.textContent = "Yeah. That's a rough one.";
        } 
        else if (selectedScore <= 8) {
            scoreText.textContent = "That's heavy. Don't deal with it completely alone.";
        } 
        else {
            scoreText.textContent = "This is serious. Please get another person involved right now.";
        }
    });

});


document.getElementById("respond-button").addEventListener("click", () => {

    if (!selectedScore) {
        responseBox.style.display = "block";
        responseBox.textContent =
            "Pick a number first. We need to know how bad today is.";
        return;
    }

    if (selectedScore >= 9) {

        responseBox.style.display = "block";

        responseBox.innerHTML =
            "<strong>Forget motivation for a second.</strong><br><br>" +
            "If you think you might hurt yourself, get around another person now. " +
            "Tell them exactly what's happening. Call 999 or 112 in Kenya, " +
            "or go to the nearest emergency department.";

        return;
    }

    const responses = [

        "You don't need to solve your entire life tonight. Solve the next hour.",

        "Whatever happened already happened. Your next decision is still yours.",

        "You are allowed to have a terrible day without turning it into a terrible life.",

        "Guts didn't survive because everything became easy. He kept moving while it was hard.",

        "You're not required to feel motivated. Sometimes you just keep moving because stopping isn't the answer.",

        "Future-you might look back at this version of you and say: thank God he stayed.",

        "Today doesn't get to decide the rest of your life.",

        "Drink some water. Eat something. Sleep if you can. Tomorrow can argue with you tomorrow."
    ];

    const random =
        responses[Math.floor(Math.random() * responses.length)];

    responseBox.style.display = "block";
    responseBox.textContent = random;

});


const stupidMotivations = [

    "Homer Simpson has survived decades of his own decision-making. You can survive Tuesday.",

    "Peter Griffin is still somehow employed. There is hope for everyone.",

    "You haven't seen everything yet. That's objectively annoying because the good stuff might still be coming.",

    "Don't let a temporary disaster make a permanent decision for you.",

    "Your enemies would probably prefer that you disappear. Inconvenience them.",

    "There are still movies you haven't watched. This is serious.",

    "You could accidentally become the person you always wanted to be. Stick around and find out.",

    "Life is currently winning a round. The fight isn't over."
];

document.getElementById("random-button").addEventListener("click", () => {

    const random =
        stupidMotivations[
            Math.floor(Math.random() * stupidMotivations.length)
        ];

    document.getElementById("random-motivation").textContent = random;

});
```
