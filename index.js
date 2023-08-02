let barContainer = document.querySelector(".barContainer");
let sidebar = document.querySelector(".links");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function resume(){
  window.open("https://drive.google.com/file/d/165A77SJwrUg5XrRvThQdNjxStp3g8W3k/view?usp=sharing");
}
function close(){
  barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
}