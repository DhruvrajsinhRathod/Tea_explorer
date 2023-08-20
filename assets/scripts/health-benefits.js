const teaTypes = [
  {
    name: "Black Tea",
    benefits: [
      "May help reduce the risk of heart disease and stroke",
      "May improve mental alertness and cognitive function",
      "May help prevent certain types of cancer",
      "May promote bone health and reduce the risk of osteoporosis",
    ],
  },
  {
    name: "Green Tea",
    benefits: [
      "Rich in antioxidants that help protect the body against damage from harmful free radicals",
      "May help reduce the risk of heart disease and stroke",
      "May help prevent certain types of cancer",
      "May promote weight loss and boost metabolism",
    ],
  },
  {
    name: "White Tea",
    benefits: [
      "May improve oral health and prevent tooth decay",
      "May have anti-aging effects on the skin",
      "May have anti-inflammatory effects on the body",
      "May help with weight loss and management",
    ],
  },
  {
    name: "Oolong Tea",
    benefits: [
      "May help reduce the risk of heart disease and stroke",
      "May help lower cholesterol levels",
      "May aid in digestion and weight loss",
      "May have anti-cancer properties",
    ],
  },
  {
    name: "Herbal Tea",
    benefits: [
      "May help reduce stress and promote relaxation",
      "May help with digestion and nausea",
      "May help with sleep and anxiety",
      "May have anti-inflammatory and antioxidant properties",
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector(".accordion");

  teaTypes.forEach((tea) => {
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const title = document.createElement("h3");
    title.classList.add("accordion-title");
    title.textContent = tea.name;

    const content = document.createElement("div");
    content.classList.add("accordion-content");

    const ul = document.createElement("ul");

    tea.benefits.forEach((benefit) => {
      const li = document.createElement("li");
      li.textContent = benefit;
      ul.appendChild(li);
    });

    content.appendChild(ul);
    item.appendChild(title);
    item.appendChild(content);
    accordion.appendChild(item);
  });

  let accordionTitles = document.getElementsByClassName("accordion-title");

  for (let i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener("click", function () {
      let accordionContent = this.nextElementSibling;
      accordionContent.classList.toggle("active");

      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }
});
