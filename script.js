let card1 = document.querySelector(".card1");
let card = document.querySelector(".card");
let winner = document.querySelector(".winner");
let exit = document.querySelector(".exit");

var icons = document.querySelectorAll(".rating-icon");
icons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    icons.forEach((btn) => {
      btn.classList.remove("rating-selected");
    });
    var values = e.target.dataset.value;
    window.stars = values;

    console.log("rating: " + values);

    var stars = Array.from({ length: values }, (v, i) => i + 1);

    stars.forEach((star) => {
      document
        .querySelector(`.rating-icon[data-value="${star}"]`)
        .classList.add("rating-selected");
    });
  });
});

document.querySelector(".submit").addEventListener("click", (e) => {
  if (window.stars) {
    // alert(window.stars);
    card1.classList.remove("hidden");
    card.classList.add("hidden");
    winner.textContent = window.stars;
  } else {
    alert("Please select a rating");
  }
});

exit.addEventListener("click", function () {
  card.classList.remove("hidden");
  card1.classList.add("hidden");
});
