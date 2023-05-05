<?php

// Define the correct answers
$correctAnswers = array("b", "c", "b");

// Get the submitted answers
$q1Answer = $_POST['q1'];
$q2Answer = $_POST['q2'];
$q3Answer = $_POST['q3'];

// Calculate the score
$score = 0;
if ($q1Answer == $correctAnswers[0]) {
  $score++;
}
if ($q2Answer == $correctAnswers[1]) {
  $score++;
}
if ($q3Answer == $correctAnswers[2]) {
  $score++;
}

// Generate the results message
$resultsMessage = "You scored " . $score . " out of 3.<br>";
if ($score == 0) {
  $resultsMessage .= "You need to study more!";
} elseif ($score == 3) {
  $resultsMessage .= "Excellent job!";
} else {
  $resultsMessage .= "Not bad, but you can do better!";
}

// Display the results page
echo "<html><head><title>Quiz 2 Results</title></head><body>";
echo "<h1>Quiz 2 Results</h1>";
echo $resultsMessage;
echo "</body></html>";

?>
