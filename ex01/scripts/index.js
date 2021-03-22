// Get elements
const modal = document.getElementById("myModal");
const allTitles = document.querySelectorAll(".img_title");
const modalClose = document.getElementById("close_modal");
//When click on title to open modal

// allTitles.forEach((title) => {
//   title.addEventListener("click", () => {
//     modal.style.display = "flex";
//   });
// });

for (var i = 0; i < allTitles.length; i++) {
  allTitles[i].addEventListener("click", function () {
    modal.style.display = "flex";
  });
}
// When click on close button to close modal
modalClose.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
