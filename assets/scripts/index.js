// banner images
const images = [
  "/assets/images/banner1.jpg",
  "/assets/images/banner2.jpg",
  "/assets/images/banner3.jpg",
  "/assets/images/banner4.jpg",
];

// featured tea
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
    type: "herbal-tea",
    title: "Herbal Tea",
    description:
      "Herbal tea, also known as tisane, is made from a wide variety of plants, fruits, flowers, and spices. Popular varieties include Chamomile and Peppermint.",
    imageUrl: "/assets/images/herbalTea.webp",
  },
];

$(document).ready(function () {
  let currentIndex = 0;
  let imageCount = images.length;

  function showImage(index) {
    $(".slider-image").hide();
    $(".slider-image").eq(index).show();
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= imageCount) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  // Add images to DOM
  for (let i = 0; i < images.length; i++) {
    let img = $("<img>")
      .attr("src", images[i])
      .addClass("slider-image")
      .attr("alt", "Tea image " + (i + 1));
    $("#image-slider").append(img);
  }

  showImage(currentIndex);
  setInterval(nextImage, 3000);

  // for featured teas
  const teaGrid = document.getElementById("featured-teas-container");

  teaTypes.forEach((tea) => {
    const teaTypeDiv = document.createElement("div");
    teaTypeDiv.classList.add("tea-type");
    teaTypeDiv.innerHTML = `
      <div onClick="window.location.href='tea-type.html?type=${tea.type}';">
        <div class="img-preview">
          <img src="${tea.imageUrl}" alt="${tea.title}" id="featured-image">
        </div>
        <h3>${tea.title}</h3>
        <p>${tea.description}</p>
      </div>`;
    teaGrid.appendChild(teaTypeDiv);
  });
});
