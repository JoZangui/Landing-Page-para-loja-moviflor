let arrow = document.querySelectorAll(".arrow");
        
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("show-submenu");
    });
}

let sidebar = document.querySelector(".side-nav.close");
let sidebarBtn = document.querySelector(".menu-icon");
console.log(sidebarBtn);

sidebarBtn.addEventListener('click', ()=> {
    if (sidebar.className == 'side-nav close') {
        sidebar.className = 'side-nav'
    } else {
        sidebar.className = 'side-nav close'
    }
})