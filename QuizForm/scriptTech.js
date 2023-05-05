let questions = [
    { question: "Which of the following social media platforms was initially designed for gamers?", answers: ["A) Facebook", "B) Instagram", "C) Twitter", "D) Twitch"], correctAnswer: 3 },
    { question: "Which company is responsible for developing the Android operating system?", answers: ["A) Google", "B) Apple", "C) Microsoft", "D) Samsung"], correctAnswer: 0 },
    { question: "What does the acronym 'VPN' stand for?", answers: ["A) Video Production Network", "B) Virtual Private Network", "C) Voiceover Private Network", "D) Very Private Name"], correctAnswer: 1 },
    { question: "What is the name of the first commercially available computer processor?", answers: ["A) Intel 4004", "B) Motorola 68000", "C) Zilog Z80", "D) MOS Technology 6502"], correctAnswer: 0 },
    { question: "Which programming language was named after a British mathematician?", answers: ["A) Python", "B) Ada", "C) Pascal", "D) Ruby"], correctAnswer: 1 },
    { question: "What does the acronym 'HTML' stand for?", answers: ["A) Hyperlinks and Text Markup Language", "B) Hypertext Markup Language", "C) High-level Markup Language", "D) Human-readable Text Markup Language"], correctAnswer: 1 },
    { question: "What is the name of the algorithm that powers Google's search engine?", answers: ["A) Backpropagation", "B) Deep Learning", "C) PageRank", "D) Gradient Descent"], correctAnswer: 2 },
    { question: "Which of the following is NOT a type of cloud computing service?", answers: ["A) Infrastructure as a Service (IaaS)", "B) Platform as a Service (PaaS)", "C) Software as a Service (SaaS)", "D) Data as a Service (DaaS)"], correctAnswer: 3 },
    { question: "What is the name of the first widely used web browser?", answers: ["A) Safari", "B) Firefox", "C) Mosaic", "D) Internet Explorer"], correctAnswer: 2 },
    { question: "What is the name of the open-source software used for version control and collaboration?", answers: ["A) Git", "B) Subversion", "C) Mercurial", "D) Bitbucket"], correctAnswer: 0 },
  ];
  
  let userAnswers = [];
  let score = 0;
   
   displayQuestion(0);
   
   function displayQuestion(questionIndex) {
     let question = questions[questionIndex].question;
     let answers = questions[questionIndex].answers;
   
     document.querySelector(".question").textContent = questionIndex + 1 + "- " + question;
   
     let selectedAnswer = document.querySelector(".selected-answer");
     if (selectedAnswer) {
       selectedAnswer.classList.remove("selected-answer");
     }
   
     let answerElements = document.querySelectorAll(".answer");
     for (let i = 0; i < answerElements.length; i++) {
       answerElements[i].textContent = answers[i];
       answerElements[i].setAttribute("data-index", i);
     }
   }
   
   function recordAnswer(answerElement) {
     let answerElements = document.querySelectorAll(".answer");
     for (let i = 0; i < answerElements.length; i++) {
       answerElements[i].classList.remove("selected-answer");
     }
   
     answerElement.classList.add("selected-answer");
   }
   
   function nextQuestion() {
     let selectedAnswer = document.querySelector(".selected-answer");
     if (!selectedAnswer) {
       alert("Please select an answer before proceeding to the next question.");
       return;
     }
   
     let selectedAnswerIndex = Number(selectedAnswer.getAttribute("data-index"));
     userAnswers.push(selectedAnswerIndex);
   
     if (userAnswers.length == questions.length) {
       score = calculateScore();
       displayScore();
       document.querySelector(".next-button").setAttribute("disabled", true);
       return;
     }
     displayQuestion(userAnswers.length);
   }
   
 
 function calculateScore() {
 var totalScore = 0;
 for (let i = 0; i < questions.length; i++) {
 if (userAnswers[i] == questions[i].correctAnswer) {
 totalScore++;
 }
 }
 return totalScore;
 }
 
 
 function displayScore() {
     let container = document.querySelector(".container");
     let txt;
     if (score ===10)
        txt="EXCELLENT !";
    else if (score >=8 && score <10)
        txt ="Very Good !";
     else if (score>=6 &&score<8)
        txt ="Good";
     else if (score === 5)
        txt="Average";
     else txt ="Insufficient";  
 
     container.innerHTML = "<h1>" + txt + "</h1><p>" + score + " / " + questions.length + "</p>";
 
     for (let i = 0; i < questions.length; i++) {
         let questionResultElement = document.createElement("div");
         let question = questions[i].question;
         let userAnswer = userAnswers[i];
         let correctAnswer = questions[i].correctAnswer;
         
         if (userAnswer == correctAnswer) {
             questionResultElement.innerHTML = "<p>" + question + ": <span style='color:blue;'>Correct!</span></p>";
         } else {
             let correctAnswerText = questions[i].answers[correctAnswer];
             questionResultElement.innerHTML = "<p>" + question + ": <span style='color:red;'>Incorrect!</span> The correct answer is " + correctAnswerText + ".</p>";
         }
 
         container.appendChild(questionResultElement);
     }
 }