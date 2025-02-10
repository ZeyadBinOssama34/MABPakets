
document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp Contact Us Button
  let contactUs = document.getElementById("contactBtn");
  if (contactUs) {
    contactUs.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + encodeURIComponent("Hello, saya ingin tahu info lebih");
    });
  }

  // WhatsApp Book Now Buttons
  let bookNowButtons = document.querySelectorAll('.bookNow');
  bookNowButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + encodeURIComponent("Hello, saya ingin tahu info lebih");
    });
  });

  // WhatsApp Formulir Agen-SUB Agen-Jamaah
  let daftarButtons = document.querySelectorAll('.bookNow');
  daftarButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "https://wa.me/6281291515427?text=" + encodeURIComponent("Assalamualaikum, saya ingin tahu info lebih");
    });
  });

  // Filter Cards Function
  function filterCards(category) {
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function (card) {
      card.style.display = (category === "all" || card.classList.contains(category)) ? "block" : "none";
    });
  }

  // Button Event Listeners for Filtering
  let buttons = document.querySelectorAll(".btn-paket");
  buttons.forEach(function (button) {
    function handleClick(event) {
      event.preventDefault(); // Prevent default action if needed
      let category = button.getAttribute("data-category").trim().toLowerCase();
      filterCards(category);
      
    }
    button.addEventListener("click", handleClick);


    if ('ontouchstart' in window) { // يتحقق إذا كان الجهاز يدعم اللمس
      document.querySelectorAll('.btn-paket').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.btn-paket').forEach(b => b.classList.remove('clicked'));
          btn.classList.add('clicked');
        });
      });
    }
  });

  filterCards("all"); // Show all cards on page load
});








