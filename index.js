let MainContainer = document.querySelectorAll(".main-contenaire");
let answer = document.querySelectorAll(".answer-part");

MainContainer.forEach((MainContainer, index) => {
  MainContainer.addEventListener("click", () => {
    answer.forEach((answer, index) => {
      if (answer !== index) {
        answer.classList.remove;
      }
    });
    answer[index].classList.toggle("active");
  });
});
