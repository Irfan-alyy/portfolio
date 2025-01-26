const menutBtn = document.getElementById("menu");
const showMenu = document.getElementById("sMenu");

menutBtn.addEventListener("click", () => {
  if (showMenu.style.display == "none") {
    showMenu.style.display = "block";
    console.log("cliked");
    menutBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    showMenu.style.display = "none";
    menutBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

function toggleMenu() {
  const showMenu = document.querySelector(".small");

  if (showMenu.style.display == "none") {
    showMenu.style.display == "block";
  } else {
    showMenu.style.display == "none";
  }
}

const imageContainer = document.querySelector(".slider"); // Single slider container
const nextBtn = document.getElementById("nextBtn"); // Select next button by ID
const prevBtn = document.getElementById("prevBtn"); // Select prev button by ID

imageContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  imageContainer.scrollLeft += event.deltaY;
  imageContainer.scroll.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  imageContainer.scroll.scrollBehavior = "smooth";
  imageContainer.scrollLeft += 900;
});
prevBtn.addEventListener("click", () => {
  imageContainer.scroll.scrollBehavior = "smooth";

  imageContainer.scrollLeft -= 900;
});

const accordion1=document.getElementById("accordion1");
const accordion2=document.getElementById("accordion2");
const accordion3=document.getElementById("accordion3");

const innerAccrd1=document.querySelector(".inner1");
const innerAccrd2=document.querySelector(".inner2");
const innerAccrd3=document.querySelector(".inner3");


accordion1.addEventListener('click',()=>{
  innerAccrd2.style.display="none";
  innerAccrd3.style.display="none";
  innerAccrd1.style.display=="block"?innerAccrd1.style.display="none":innerAccrd1.style.display="block"
})
accordion2.addEventListener('click',()=>{
  innerAccrd3.style.display="none";
  innerAccrd1.style.display="none";
  innerAccrd2.style.display=="block"?innerAccrd2.style.display="none":innerAccrd2.style.display="block"
})
accordion3.addEventListener('click',()=>{
  innerAccrd1.style.display="none";
  innerAccrd2.style.display="none";
  innerAccrd3.style.display=="block"?innerAccrd3.style.display="none":innerAccrd3.style.display="block"
})




