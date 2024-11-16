// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Add an event listener to the form submit
    document.getElementById("quizForm").addEventListener("submit", function(e) {
      e.preventDefault();  // Prevent the default form submission (which causes a page reload)
  
      // Define correct answers
      const correctAnswers = {
        q1: 'b',  // 2-3 liters
        q2: 'a',  // Improved digestion
        q3: 'b'   // Drinking water in small sips throughout the day
      };
  
      let score = 0;
  
      // Check the selected answers for each question
      for (let i = 1; i <= 3; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (selectedAnswer) {
          // If the selected answer is correct, increment the score
          if (selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
          }
        }
      }
  
      // Display the result
      const resultMessage = `You answered ${score} out of 3 questions correctly.`;
      document.getElementById("score").textContent = resultMessage;
  
      // Hide the quiz and show the results
      document.getElementById("quizContainer").style.display = "none";  // Hide the quiz form
      document.getElementById("quizResults").style.display = "block";   // Show the results
    });
  
  });
  