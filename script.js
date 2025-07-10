document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const questions = ["q1", "q2", "q3", "q4", "q5"];
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    questions.forEach((q) => {
        const answer = document.querySelector(`input[name="${q}"]:checked`);
        if (answer) scores[answer.value]++;
    });

    let result = "";
    const max = Math.max(...Object.values(scores));

    // Pick the style that matches the highest count
    if (scores.A === max) {
        result =
            "👑 You are *The Heiress* – quiet luxury, timeless elegance, Succession energy.";
    } else if (scores.B === max) {
        result =
            "🥐 You are *The Paris Dreamer* – flirty, joyful, bold and romantic like Emily in Paris.";
    } else if (scores.C === max) {
        result =
            "💋 You are *The It Girl* – glamorous, dramatic, and magnetic like a Gossip Girl queen.";
    } else if (scores.D === max) {
        result =
            "💼 You are *The Sleek Professional* – classy, polished, and powerful like Suits Meghan.";
    } else {
        result =
            "🔥 You are *The Rule Breaker* – unpredictable, expressive, and iconic like Euphoria meets Rihanna.";
    }

    document.getElementById("result").innerHTML = `
    <p>🔍 Your Fashion Archetype:</p>
    <p>${result}</p>
    <p><a href="https://chat.openai.com/g/gpt-style-selectah" target="_blank">👗 Style Selectah can help you dress the part →</a></p>
  `;
});
