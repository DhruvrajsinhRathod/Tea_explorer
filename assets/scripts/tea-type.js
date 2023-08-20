document.addEventListener("DOMContentLoaded", function () {
  const teaTypes = {
    "green-tea": {
      title: "Green Tea",
      description:
        "Green tea is a popular type of tea made from Camellia sinensis leaves that have not undergone the same withering and oxidation process used to make oolong and black tea. Originating in China, green tea is now produced in various countries worldwide. It is known for its mild flavor and numerous health benefits, such as antioxidants and potential weight loss properties.",
    },
    "black-tea": {
      title: "Black Tea",
      description:
        "Black tea is a type of tea that is more oxidized than oolong, green, and white teas. Black tea is generally stronger in flavor than other teas and contains more caffeine. Originating in China, black tea production has spread to various countries, including India, Sri Lanka, and Kenya. It is the most consumed type of tea globally and is often enjoyed with milk and sugar.",
    },
    "white-tea": {
      title: "White Tea",
      description:
        "White tea is the least processed of all tea types, made from the young leaves and buds of the Camellia sinensis plant. It undergoes minimal oxidation and has a delicate flavor, with a light, refreshing taste. White tea is primarily produced in China, particularly in the Fujian province. It is known for its high antioxidant content and potential health benefits, including promoting heart health and supporting weight loss.",
    },
    "oolong-tea": {
      title: "Oolong Tea",
      description:
        "Oolong tea is a partially fermented tea, falling between black tea and green tea in terms of oxidation and flavor. It is primarily produced in China and Taiwan and offers a wide range of flavors and aromas, from floral and fruity to creamy and toasty. Oolong tea is known for its health benefits, such as improving brain function, promoting heart health, and aiding weight loss.",
    },
  };

  const teaType = new URLSearchParams(window.location.search).get("type");
  if (teaType && teaTypes[teaType]) {
    document.getElementById("tea-title").innerText = teaTypes[teaType].title;
    document.getElementById("tea-description").innerText =
      teaTypes[teaType].description;
  } else {
    window.location.href = "/404.html";
  }
});
