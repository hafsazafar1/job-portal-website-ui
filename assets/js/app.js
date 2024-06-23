// i have get the button i want to click
const menuOpenBtn = document.querySelector(".BtnOpenJS");
const menuCloseBtn = document.querySelector(".fa-times");

// then i have added the click event of js on the button
menuOpenBtn.addEventListener("click", function () {
  // im getting that div i want to show hide
  const navLinksMenu = document.querySelector(".nav-links-menu");
  navLinksMenu.style.display = "block";
  menuCloseBtn.style.display = "block";
  menuOpenBtn.style.display = "none";
});

// then i have added the click event of js on the button
menuCloseBtn.addEventListener("click", function () {
  // im getting that div i want to show hide
  const navLinksMenu = document.querySelector(".nav-links-menu");
  navLinksMenu.style.display = "none";
  menuOpenBtn.style.display = "block";
  menuCloseBtn.style.display = "none";
});
