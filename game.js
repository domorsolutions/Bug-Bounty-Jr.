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
  }
}
