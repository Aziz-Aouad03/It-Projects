let questions = [
    { question: "What is the largest island in the Mediterranean Sea?", answers: ["A) Cyprus", "B) Sardinia", "C) Sicily", "D) Corsica"], correctAnswer: 2 },
    { question: "Who invented the first practical telephone?", answers: ["A) Alexander Graham Bell", "B) Thomas Edison", "C) Guglielmo Marconi", "D) Nikola Tesla"], correctAnswer: 0 },
    { question: "Which country is the largest producer of coffee in the world?", answers: ["A) Colombia", "B) Brazil", "C) Vietnam", "D) Ethiopia"], correctAnswer: 1 },
    { question: "Who was the first woman to win a Nobel Prize?", answers: ["A) Marie Curie", "B) Florence Nightingale", "C) Mother Teresa", "D) Toni Morrison"], correctAnswer: 0 },
    { question: "Which planet in our solar system has the longest day?", answers: ["A)  Mars","B) Venus", "C) Jupiter", "D) Saturn"], correctAnswer: 1 },
    { question: "What is the capital city of Bhutan?", answers: ["A) Ulaanbaatar", "B) Kathmandu", "C) Thimphu", "D) Vientiane"], correctAnswer: 2 },
    { question: "Which of these elements is not a noble gas?", answers: ["A) Helium", "B) Neon", "C) Argon", "D) Krypton"], correctAnswer: 3 },
    { question: "What is the name of the highest mountain in Africa?", answers: ["A) Mount Elbrus", "B) Mount Everest", "C) Mount Kilimanjaro", "D) Mount Aconcagua"], correctAnswer: 2 },
    { question: "Who wrote the novel 'One Hundred Years of Solitude'?", answers: ["A) Jorge Luis Borges", "B) Gabriel Garcia Marquez", "C) Isabel Allende", "D) Pablo Neruda"], correctAnswer: 1 },
    { question: "In which year did the Berlin Wall fall?", answers: ["A) 1986", "B) 1987", "C) 1988", "D) 1989"], correctAnswer: 3 },
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