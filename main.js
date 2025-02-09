// wa function contact Us
document.addEventListener("DOMContentLoaded", function () {
  let contactUs = document.getElementById("contactBtn");

  if (contactUs) {
    contactUs.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + encodeURIComponent("Hello, saya ingin tahu info lebih");
    });
  }
});

// wa functio booknow

document.addEventListener("DOMContentLoaded", function () {
  let contactUsButtons = document.querySelectorAll('.bookNow');

  contactUsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + 
        encodeURIComponent("Hello, saya ingin tahu info lebih");
    });
  });
});
//  functio formuliler Agen-SUB agen-Jammh

document.addEventListener("DOMContentLoaded", function () {
  let daftarButtons = document.querySelectorAll('.bookNow');

  daftarButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + 
        encodeURIComponent("Assalamualaikum,saya ingin tahu info lebih");
    });
  });
});


// pakets buttons function 
document.addEventListener("DOMContentLoaded", function () {

  function filterCards(category) {
    let allCards = document.querySelectorAll(".card");

    allCards.forEach(function (card) {
      card.classList.remove("show");

      if (category === "all" || card.classList.contains(category.trim().toLowerCase())) {
        card.classList.add("show");
      }
    });
  }

  let buttons = document.querySelectorAll(".btn-paket");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let category = button.getAttribute("data-category").trim().toLowerCase();
      filterCards(category);
    });
  });

  filterCards("all"); // Show all cards on page load
});