function checkAnswer() {
    var correctAnswer = "4"; // The correct answer to the quiz question
    var userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the checked radio button

    // Check if a radio button is selected
    if (userAnswer) {
        userAnswer = userAnswer.value; // Access the value property of the selected radio button
        var feedbackElement = document.getElementById('feedback'); // Get the feedback element

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Correct answer feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
        }
    } else {
        // If no option is selected
        document.getElementById('feedback').textContent = "Please select an answer."; // Prompt to select an answer
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
