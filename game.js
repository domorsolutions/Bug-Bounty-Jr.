document.getElementById("report-btn").addEventListener("click", () => {
  document.getElementById("report-panel").classList.toggle("hidden");
});

function submitReport() {
  const reportText = document.getElementById("bug-report").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (reportText.includes("button") && reportText.includes("not working")) {
    feedback.textContent = "✅ Great job, Detective! The login button was broken!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Hmm, that's not quite right. Try again!";
    feedback.style.color = "red";
  }
}
