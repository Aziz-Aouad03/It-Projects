function checkInputs() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var startButton = document.getElementById("start-quiz-button");
  
    if (!id || !name || !password) {
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  }
  
  function startQuiz() {
    var id = document.getElementById("numeric-id").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var startButton = document.getElementById("start-quiz-button");
  
    if (!id || !name || !password) {
      startButton.disabled = true;
      return;
    }
  
    if (password !== "1234") {
      alert("Invalid password. Please enter the correct password to start the quiz.");
      document.getElementById("password").value = "";
      return;
    }
  
    window.location.href = "description.html";
    startButton.disabled = true;
  }