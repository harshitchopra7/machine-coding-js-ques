let progressBarIndex = 0;

function renderProgressBar(index) {
  const progressBar = document.getElementsByClassName("progress-bar")[index];
  let width = 0;
  const func = setInterval(() => {
    width = width + 100;
    if (width === 500) {
      clearInterval(func);
      renderProgressBar(progressBarIndex);
    }
    progressBar.style.width = `${width}px`;
  }, 1000);
}

renderProgressBar(0);

const addProgressBarButton = document.getElementById("progress-bar-button");

const progressBarContainer = document.getElementById("progress-bar-container");

addProgressBarButton.addEventListener("click", () => {
  const newProgressBar = document.createElement("div");
  newProgressBar.classList.add("progress-bar");
  progressBarContainer.appendChild(newProgressBar);
  progressBarIndex++;
});
