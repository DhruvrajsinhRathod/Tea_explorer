document.addEventListener("DOMContentLoaded", function () {
  const teaTypes = [
    {
      type: "green-tea",
      title: "Green Tea",
      description:
        "Green tea is known for its numerous health benefits and refreshing taste. Popular varieties include Sencha and Matcha.",
      imageUrl: "/assets/images/greentea.webp",
    },
    {
      type: "black-tea",
      title: "Black Tea",
      description:
        "Black tea is fully fermented and has a strong, bold flavor. Popular varieties include English Breakfast and Earl Grey.",
      imageUrl: "/assets/images/blacktea.jpg",
    },
    {
      type: "white-tea",
      title: "White Tea",
      description:
        "White tea is the least processed and has a delicate, light flavor. Popular varieties include Silver Needle and White Peony.",
      imageUrl: "/assets/images/whitetea.webp",
    },
    {
      type: "oolong-tea",
      title: "Oolong Tea",
      description:
        "Oolong tea is partially fermented and offers a wide range of flavors. Popular varieties include Tie Guan Yin and Da Hong Pao.",
      imageUrl: "/assets/images/oolongtea.jpg",
    },
    {
      type: "herbal-tea",
      title: "Herbal Tea",
      description:
        "Herbal tea, also known as tisane, is made from a wide variety of plants, fruits, flowers, and spices. Popular varieties include Chamomile and Peppermint.",
      imageUrl: "/assets/images/herbalTea.webp",
    },
  ];

  const teaGrid = document.getElementById("tea-grid");

  teaTypes.forEach((tea) => {
    const teaTypeDiv = document.createElement("div");
    teaTypeDiv.classList.add("tea-type");
    teaTypeDiv.innerHTML = `
      <div onClick="window.location.href='tea-type.html?type=${tea.type}';">
        <div class="img-preview">
          <img src="${tea.imageUrl}" alt="${tea.title}">
        </div>
        <h3>${tea.title}</h3>
        <p>${tea.description}</p>
      </div>`;
    teaGrid.appendChild(teaTypeDiv);
  });
});
