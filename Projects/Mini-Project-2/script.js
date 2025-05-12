const correctAnswers = {
  q1: "A",
  q2: "D",
  q3: "C",
  q4: "A",
  q5: "B",
  q6: "B",
  q7: "C",
  q8: "B",
  q9: "A",
  q10: "C",
};

function checkScore() {
  let score = 0;

  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    const options = document.getElementsByName(key);

    // Reset styles
    options.forEach((option) => {
      option.parentElement.classList.remove("correct", "wrong");
    });

    if (selected) {
      const parentLabel = selected.parentElement;

      if (selected.value === correctAnswers[key]) {
        score += 10;
        parentLabel.classList.add("correct");
      } else {
        parentLabel.classList.add("wrong");

        // Highlight the correct option
        options.forEach((option) => {
          if (option.value === correctAnswers[key]) {
            option.parentElement.classList.add("correct");
          }
        });
      }
    }
  }

  document.getElementById("scoreResult").innerText = `Your Score: ${score} / 100`;

  // Disable all inputs
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = true;
  });
}

function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("scoreResult").innerText = "";

  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = false;
    input.parentElement.classList.remove("correct", "wrong");
  });
}
