// Collecting Information
const allImages = document.querySelectorAll(".slider-images > img");
const slidesCount = allImages.length;
let currentIndex = 0;
let slideNumber = document.getElementById("slider-number");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
  goPrevious();
})
nextBtn.addEventListener("click", () => {
  goNext();
})

// Adding list items to ul based on slides count
let paginationUl = document.querySelector(".pagination-ul");
for (let i = 0; i < slidesCount; i++) {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(i + 1));
  paginationUl.appendChild(listItem);
}
let allListItems = Array.from(document.querySelectorAll(".pagination-ul li"));

function work() {
  slideNumber.textContent = `Slide ${currentIndex + 1} Of ${slidesCount}`;
  removeActive();
  allImages[currentIndex].classList.add("active");
  allListItems[currentIndex].classList.add("active");
  if (currentIndex === 4) nextBtn.classList.add("disabled");
  else nextBtn.classList.remove("disabled");
  if (currentIndex === 0) prevBtn.classList.add("disabled");
  else prevBtn.classList.remove("disabled");
}
work();



function goPrevious() {
  if (currentIndex === 0) return;
  currentIndex--;
  work();
}
function goNext() {
  if (currentIndex === 4) return;
  currentIndex++;
  work();
}

// Click on each list item
allListItems.forEach(item => {
  item.addEventListener("click", () => {
    currentIndex = allListItems.indexOf(item);
    work();
  })
})

// Remove active classes from list items and images
function removeActive() {
  allListItems.forEach(item => item.classList.remove("active"));
  allImages.forEach(item => item.classList.remove("active"));
}