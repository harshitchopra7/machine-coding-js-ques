function handleAccordionClick(id) {
  const clickedAccordion = document.getElementsByClassName("accordion")[id - 1];

  const clickedAccordionDescription =
    clickedAccordion.getElementsByClassName("description")[0];

  if (clickedAccordionDescription.style.display == "none") {
    clickedAccordionDescription.style.display = "block";
  } else {
    clickedAccordionDescription.style.display = "none";
  }
}

const firstAccordion = document.getElementsByClassName("accordion")[0];
firstAccordion.addEventListener("click", () => {
  handleAccordionClick(1);
});

const accordionContainer = document.getElementById("accordion-container");

const addAccordionButton = document.getElementById("add-accordion-button");

addAccordionButton.addEventListener("click", () => {
  const newAccordion = document.createElement("div");
  newAccordion.classList.add("accordion");

  const newAccordionTitle = document.createElement("div");
  newAccordionTitle.classList.add("title");
  newAccordionTitle.innerText = "I am a title";

  const newAccordionDescription = document.createElement("div");
  newAccordionDescription.classList.add("description");
  newAccordionDescription.innerText = "I am a description";

  newAccordion.appendChild(newAccordionTitle);
  newAccordion.appendChild(newAccordionDescription);

  accordionContainer.appendChild(newAccordion);

  const totalAccordions = document.getElementsByClassName("accordion").length;
  newAccordion.id = totalAccordions;

  newAccordion.addEventListener("click", () => {
    handleAccordionClick(totalAccordions);
  });
});
