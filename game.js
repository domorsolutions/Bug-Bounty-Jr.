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
    updateScore(10);

    // Show NEXT LEVEL button
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "▶️ Go to Level 2";
    nextBtn.onclick = () => window.location.href = "level2.html";
    feedback.appendChild(document.createElement("br"));
    feedback.appendChild(nextBtn);
  } else {
    feedback.textContent = "❌ Hmm, that's not quite right. Try again!";
    feedback.style.color = "red";
  }
}

window.onload = () => {
  document.getElementById("report-btn").addEventListener("click", () => {
    document.getElementById("report-panel").classList.toggle("hidden");
  });
};
