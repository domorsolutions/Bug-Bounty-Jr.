document.getElementById("report-btn").addEventListener("click", () => {
  document.getElementById("report-panel").classList.toggle("hidden");
});

function submitReport() {
  const reportText = document.getElementById("bug-report").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  const passPhrases = [
    "button not working",
    "login button broken",
    "login doesn't work",
    "submit not working",
    "form is broken",
    "broken login form",
    "button is broken",
    "nothing happens when i click",
    "login doesn't respond"
  ];

  const matched = passPhrases.some(phrase => reportText.includes(phrase));

  if (matched) {
    feedback.textContent = "✅ Great job, Detective! The login button was broken!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Hmm, that's not quite right. Try again!";
    feedback.style.color = "red";

    let score = 0;
let badges = [];

function updateScore(points) {
  score += points;
  document.getElementById("score").textContent = `Score: ${score}`;
  checkForBadges();
}

function checkForBadges() {
  if (score >= 10 && !badges.includes("Bug Spotter")) {
    badges.push("Bug Spotter");
    displayBadge("Bug Spotter");
  }
  if (score >= 20 && !badges.includes("Bug Hunter")) {
    badges.push("Bug Hunter");
    displayBadge("Bug Hunter");
  }
  // Add more badges as needed
}

function displayBadge(badgeName) {
  const badgeContainer = document.getElementById("badges");
  const badge = document.createElement("div");
  badge.className = "badge";
  badge.textContent = badgeName;
  badgeContainer.appendChild(badge);
  alert(`🎉 You've earned the "${badgeName}" badge!`);
}

function submitReport() {
  const reportText = document.getElementById("bug-report").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  const passPhrases = [
    "button not working",
    "login button broken",
    "login doesn't work",
    "submit not working",
    "form is broken",
    "broken login form",
    "button is broken",
    "nothing happens when i click",
    "login doesn't respond"
  ];

  const matched = passPhrases.some(phrase => reportText.includes(phrase));

  if (matched) {
    feedback.textContent = "✅ Great job, Detective! The login button was broken!";
    feedback.style.color = "green";
    updateScore(10); // Award 10 points for correct report
  } else {
    feedback.textContent = "❌ Hmm, that's not quite right. Try again!";
    feedback.style.color = "red";
  }
}

  }
}
