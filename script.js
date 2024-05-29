const sideIcon = document.querySelector("#sideIcon")
const sidebar = document.querySelector(".sidebar");

sideIcon.addEventListener("click",()=>{
    sideIcon.classList.toggle("active");
    sidebar.classList.toggle("active");
})