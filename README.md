# QUIZZ-GAME
This is a simple quiz application built with HTML, CSS, and JavaScript. The app allows users to answer a set of 10 questions, displays a countdown timer, and shows the result at the end. Users are also rewarded with a message if they score perfectly.

Features
Login (Optional): In a real-world scenario, a login can be implemented, but for simplicity, it’s not part of this version.
Date and Time: Displays the current date and time.
Timer: A countdown timer (5 minutes) is displayed, and the quiz ends when the time is up.
Quiz Questions: The quiz contains 10 questions with multiple-choice answers.
Navigation: Buttons for navigating to the next question and saving progress.
Result: After completing the quiz, the results are shown with the score and a reward if the user scores 100%.
Background Image: The app allows a custom background image to be set.
Technologies Used
HTML: Used to structure the content of the quiz.
CSS: Used for styling the quiz, including the background image and layout.
JavaScript: Handles the logic of the quiz, including tracking answers, displaying the timer, and calculating results.
Installation
Clone this repository or download the project files.

bash
Copy
git clone https://github.com/yourusername/quiz-app.git
Navigate to the project folder.

bash
Copy
cd quiz-app
Open index.html in your preferred web browser.

If you prefer a live server setup for development purposes, you can install any local server (e.g., Live Server for VS Code) and open index.html.

How to Use
Open the index.html file in your browser.
The quiz will start immediately with the first question.
Answer each question by selecting one of the multiple-choice options.
Click the "Next Question" button to move to the next question.
Once the quiz is completed, your score will be displayed along with a reward if you answered all the questions correctly.
Customization
You can customize the following:

Background Image: Modify the style.css file to change the background image of the quiz. Update the background-image URL in the CSS to point to the image of your choice.

css
Copy
body {
  background-image: url('path-to-your-image.jpg'); /* Replace with your image URL */
}
Questions and Answers: Update the questions, options, and correct answers in the quiz.js file. The questions are stored in the questions array:

javascript
Copy
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  // Add more questions here
];
License
This project is open--source and free to use. You can modify and distribute it as you like.
