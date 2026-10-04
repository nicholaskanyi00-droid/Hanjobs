const input = document.getElementById("userInput");
const scale = document.getElementById("severity");
const scaleValue = document.getElementById("severityValue");
const responseBox = document.getElementById("response");
const motivationBox = document.getElementById("motivation");

const responses = {
money: [
"Okay. Money problems are fucking exhausting. Let's not try to solve your entire life in one sitting.",
"Being broke can make every other problem feel ten times bigger. Let's deal with one thing at a time.",
"Your bank account may currently be fighting for its life. You don't have to.",
"Money is a problem. It is NOT a measurement of your worth."
],

work: [
"Job hunting can turn a perfectly normal person into a professional email-refreshing machine.",
"Getting rejected doesn't mean you're useless. It means one door said no. Annoying, but not the end of the building.",
"So work is kicking your ass. Fair enough. Let's figure out what part is actually hurting.",
"You don't need your whole career figured out today."
],

relationship: [
"Ah. Romance. Humanity's longest-running source of unnecessary suffering.",
"Heartbreak can make your entire world feel smaller. It won't always feel this fucking heavy.",
"Someone leaving your life doesn't mean your life is over.",
"Right now it hurts. That's real. But pain is not a permanent address."
],

family: [
"Family problems hit differently because you can't always just block the whole bloodline.",
"You can love people and still be completely exhausted by them.",
"You don't have to solve your entire family tonight.",
"That's a lot to carry. Let's separate what you can control from what you can't."
],

lost: [
"You don't need to know exactly where you're going to take the next step.",
"Sometimes you're not lazy or broken. You're just fucking tired.",
"Being lost is a situation, not an identity.",
"Let's make the problem smaller. What is actually hurting the most right now?"
]
};

const followUps = [
"Important question: is this a genuine disaster or just a particularly disrespectful Tuesday?",
"Before we continue: when was the last time something actually made you laugh?",
"Would Luffy quit his dream because things got difficult? Exactly.",
"If your life had a blooper reel right now, what would be playing?",
"Be honest. Have you eaten today, or are you surviving entirely on stress?",
"At what point did life decide to start acting like a badly written TV show?",
"If future-you could walk through that door for five minutes, what would you ask them?",
"Okay, but how fucked is it on a scale from 1 to 'my M-Pesa balance is personally insulting me'?"
];

const motivations = [
"Luffy has a ridiculous dream and somehow keeps moving toward it. You don't have to abandon yours today.",
"Guts has had approximately zero peaceful days and still keeps swinging.",
"Homer Simpson has survived decades of decisions that should probably have ended his career.",
"You haven't seen the next chapter yet. That's a pretty good reason to keep reading.",
"Maybe your life isn't finished. Maybe this is just the extremely shitty middle part.",
"You don't need to feel motivated. Sometimes you just need to keep going while motivation catches up.",
"There are people you haven't met yet, places you haven't seen, and stupid things you haven't laughed at yet.",
"Future-you might be extremely grateful that present-you stayed."
];

function getCategory(text) {
const lower = text.toLowerCase();

if (
lower.includes("money") ||
lower.includes("broke") ||
lower.includes("debt") ||
lower.includes("rent") ||
lower.includes("jobless") ||
lower.includes("no job") ||
lower.includes("salary")
) {
return "money";
}

if (
lower.includes("job") ||
lower.includes("work") ||
lower.includes("school") ||
lower.includes("exam") ||
lower.includes("career")
) {
return "work";
}

if (
lower.includes("breakup") ||
lower.includes("relationship") ||
lower.includes("girlfriend") ||
lower.includes("boyfriend") ||
lower.includes("love") ||
lower.includes("lonely")
) {
return "relationship";
}

if (
lower.includes("family") ||
lower.includes("mum") ||
lower.includes("mom") ||
lower.includes("dad") ||
lower.includes("parent")
) {
return "family";
}

return "lost";
}

function isImmediateDanger(text) {
const lower = text.toLowerCase();

const dangerWords = [
"kill myself",
"suicide",
"end my life",
"take my life",
"want to die",
"going to die",
"hurt myself",
"harm myself",
"end it tonight",
"kill me"
];

return dangerWords.some(word => lower.includes(word));
}

function showResponse() {
const text = input.value.trim();
const level = Number(scale.value);

if (!text) {
responseBox.innerHTML = "Tell me what's going on first. I can't read minds. Yet.";
return;
}

if (isImmediateDanger(text) || level >= 9) {
responseBox.innerHTML = `       <strong>Okay. No jokes for this part.</strong><br><br>
      If you think you might hurt yourself right now, get around another person.
      Tell them directly: <strong>"I'm not safe by myself right now."</strong><br><br>
      In Kenya, call <strong>999</strong> or <strong>112</strong>, or go to the nearest emergency department.
      Don't stay alone with this.
    `;

```
motivationBox.innerHTML = "Right now, the goal isn't to fix your life. It's to get you through this moment safely.";
return;
```

}

const category = getCategory(text);
const categoryResponses = responses[category];

const response =
categoryResponses[Math.floor(Math.random() * categoryResponses.length)];

const followUp =
followUps[Math.floor(Math.random() * followUps.length)];

const motivation =
motivations[Math.floor(Math.random() * motivations.length)];

responseBox.innerHTML = `     ${response}<br><br>     <strong>${followUp}</strong>
  `;

motivationBox.innerHTML = motivation;
}

function updateScale() {
scaleValue.textContent = scale.value;
}

scale.addEventListener("input", updateScale);

document.getElementById("submitBtn").addEventListener("click", showResponse);

input.addEventListener("keydown", event => {
if (event.key === "Enter") {
showResponse();
}
});

updateScale();
