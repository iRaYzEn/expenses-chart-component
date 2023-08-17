const wed = document.querySelector(".wed");
const thu = document.querySelector(".thu");
const spending = document.querySelector(".spending1");
const spending1 = document.querySelector(".spending2");

wed.addEventListener("mouseover", function () {
  spending.style.display = "block";
});
wed.addEventListener("mouseout", function () {
  spending.style.display = "none";
});
thu.addEventListener("mouseover", function () {
  spending1.style.display = "block";
});
thu.addEventListener("mouseout", function () {
  spending1.style.display = "none";
});
