document.getElementById('gradeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const scoreInput = document.getElementById('scoreInput').value;
  const totalScores = generateRandomScores(); // Generate random scores
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = studentMsg(totalScores, scoreInput);
});

function generateRandomScores() {
  const numScores = Math.floor(Math.random() * 6) + 10; // Generate between 10 and 15 scores
  const scores = [];
  for (let i = 0; i < numScores; i++) {
      scores.push(Math.floor(Math.random() * 101)); // Generate random score between 0 and 100
  }
  return scores;
}

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
      sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
      return "A++";
  } else if (score >= 90) {
      return "A";
  } else if (score >= 80) {
      return "B";
  } else if (score >= 70) {
      return "C";
  } else if (score >= 60) {
      return "D";
  } else {
      return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  return hasPassingGrade(studentScore) ?
      "Class average: " + getAverage(totalScores).toFixed(2) + ". Your grade: " + getGrade(studentScore) + ". You passed the course." :
      "Class average: " + getAverage(totalScores).toFixed(2) + ". Your grade: " + getGrade(studentScore) + ". You failed the course." ;
}
