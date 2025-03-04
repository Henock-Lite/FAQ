const MainContainer = document.querySelectorAll(".main-contenaire");
const answer = document.querySelectorAll(".answer-part");

MainContainer.forEach((MainContainer, index) => {
  MainContainer.addEventListener("click", () => {
    answer.forEach((answer, indexanswer) => {
      if (indexanswer !== index) {
        answer.classList.remove;
      }
    });
    answer[index].classList.toggle("active");
  });
});
