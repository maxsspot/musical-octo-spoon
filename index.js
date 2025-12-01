const rulesFull = document.getElementById("coverBg");
const rulesBox = document.getElementById("rules");

function openRules() {
    rulesFull.style.opacity="1";
    rulesFull.style.pointerEvents="all";
    rulesBox.style.top="20px";
}

function closeRules() {
    rulesFull.style.opacity="0";
    rulesFull.style.pointerEvents="none";
    rulesBox.style.top="-20px";
}
