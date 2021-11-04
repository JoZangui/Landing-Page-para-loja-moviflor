let arrow = document.querySelectorAll(".arrow");
let lines = document.querySelector('.lines');
        
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("show-submenu");
    });
}

let sidebar = document.querySelector(".side-nav.close");
let menuIcon = document.querySelector(".menu-icon");
// console.log(menuIcon);

menuIcon.addEventListener('click', ()=> {
    sidebar.classList.toggle('close')
    if (lines.getAttribute('d') == "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z") {
        lines.setAttribute('d', "M4 11h16v2H4zm0-5h16v2H4zm0 12h16.235v-2H4z")
    } else {
        lines.setAttribute('d', "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z")
    }
})