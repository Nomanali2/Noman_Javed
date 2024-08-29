document.addEventListener('DOMContentLoaded', function() {
    var texts = [
        "A Passionate Developer",
        "A Curious Learner",
        "A Tech Enthusiast",
        "A Problem Solver"
    ];
    var currentTextIndex = 0;
    var dynamicTextElement = document.getElementById("dynamic-text");

    function changeText() {
        dynamicTextElement.textContent = texts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    setInterval(changeText, 3000);
});
