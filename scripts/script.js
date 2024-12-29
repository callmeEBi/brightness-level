let $ = document;
let rangeButton = $.querySelector("#range_button");
rangeButton.addEventListener("input", function () {
  $.body.style.filter = `brightness(${rangeButton.value / 100})`;
});
