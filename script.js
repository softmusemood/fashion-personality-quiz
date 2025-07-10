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
  
    if (scores.A === max) {
      result = `
        <h2>👑 The Heiress</h2>
        <img src="images/the-heiress.jpg" alt="The Heiress" class="archetype-image" />
        <p>Quiet luxury, timeless elegance, Succession energy.</p>
        <p><a href="https://www.pinterest.com/SoftMoodMuse/the-heiress/" target="_blank">View The Heiress board →</a></p>
        <a href="images/the-heiress.jpg" download class="secondary-button">Download Style Card</a>
      `;
    } else if (scores.B === max) {
      result = `
        <h2>🥐 The Paris Dreamer</h2>
        <img src="images/the-paris-dreamer.jpg" alt="The Paris Dreamer" class="archetype-image" />
        <p>Romantic vintage charm and effortless chic.</p>
        <p><a href="https://www.pinterest.com/SoftMoodMuse/the-paris-dreamer/" target="_blank">View The Dreamer board →</a></p>
        <a href="images/the-paris-dreamer.jpg" download class="secondary-button">Download Style Card</a>
      `;
    } else if (scores.C === max) {
      result = `
        <h2>💋 The It Girl</h2>
        <img src="images/the-it-girl.jpg" alt="The It Girl" class="archetype-image" />
        <p>Trendsetting style and social media influence.</p>
        <p><a href="https://www.pinterest.com/SoftMoodMuse/the-it-girl/" target="_blank">View It Girl board →</a></p>
        <a href="images/the-it-girl.jpg" download class="secondary-button">Download Style Card</a>
      `;
    } else if (scores.D === max) {
      result = `
        <h2>💼 The Sleek Professional</h2>
        <img src="images/the-sleek-professional.jpg" alt="The Sleek Professional" class="archetype-image" />
        <p>Sharp tailoring and confident minimalism.</p>
        <p><a href="https://www.pinterest.com/SoftMoodMuse/the-sleek-professional/" target="_blank">View Professional board →</a></p>
        <a href="images/the-sleek-professional.jpg" download class="secondary-button">Download Style Card</a>
      `;
    } else {
      result = `
        <h2>🔥 The Rule Breaker</h2>
        <img src="images/the-rule-breaker.jpg" alt="The Rule Breaker" class="archetype-image" />
        <p>Fearless creativity and unconventional choices.</p>
        <p><a href="https://www.pinterest.com/SoftMoodMuse/the-rule-breaker/" target="_blank">View Rule Breaker board →</a></p>
        <a href="images/the-rule-breaker.jpg" download class="secondary-button">Download Style Card</a>
      `;
    }
  
    document.getElementById("result").innerHTML = result;
  });
  