function expandLink(el) {
  el.classList.toggle('expanded');
}

const questions = document.querySelectorAll(".questions");

questions.forEach((questionElement) => {
  questionElement.addEventListener("click", () => {
    const answer = questionElement.nextElementSibling;
    const icon = questionElement.querySelector(".icon");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
      icon.classList.remove("active");
    } else {
      answer.style.display = "block";
      icon.textContent = "-";
      icon.classList.add("active");
    }
  });
});