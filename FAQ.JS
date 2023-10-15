const questions = document.querySelectorAll(".faq-item");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});