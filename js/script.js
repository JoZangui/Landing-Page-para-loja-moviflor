// get image lists
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    let result = JSON.parse(this.responseText);
    imagesList = result
}
xhttp.open("GET", "js/datas.json");
xhttp.send();

/* display and hidden the submenu */
function showSubmenu() {
    const arrow = document.querySelectorAll(".arrow");

    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
            // The parent of the submenu and selected arrow
            let submenuParent = e.target.parentElement.parentElement;
            /* 
                Adds or remove the show-submenu class(if the class already exist then remove, if not, add) to the parent of the selected submenu when clicking its arrow;
                when it adds the class display the submenu and when it remove the class hides its submenu
             */
            submenuParent.classList.toggle("show-submenu");
        });
    }
}

/* pin, unpin, open and close de side nav */
function openAndCloseSideNav () {
    const sidebar = document.querySelector(".side-nav");
    const pinIcon = document.querySelector(".pin-icon");
    
    // pin And Unpin side-nav
    pinIcon.addEventListener('click', function() {
        sidebar.classList.toggle('close');
        this.classList.toggle('actived-pin');
    });
    // open side-nav
    sidebar.addEventListener('mouseover', function() {
        if(!pinIcon.classList.contains('actived-pin')) {
            this.classList.remove('close');
        }
    });
    // close side-nav
    sidebar.addEventListener('mouseout', function() {
        if(!pinIcon.classList.contains('actived-pin')) {
            this.classList.add('close');
        }
    });
}


showSubmenu()
openAndCloseSideNav();

// change image collection (small screen)    
let imageIndex = 0
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const imageCollection = document.querySelector('.image-collection');
const imageNumber = document.querySelector('#image-number');
let images = [
    'url("../images/pexels-element-digital-1125136.jpg")',
    'url("../images/pexels-isaw-company-945688.jpg")',
    'url("../images/pexels-jean-van-der-meulen-1457844.jpg")',
    'url("../images/pexels-medhat-ayad-383568.jpg")',
    'url("../images/pexels-marta-dzedyshko-2067638.jpg")'
]


imageNumber.innerHTML =  '1/' +  images.length

leftArrow.addEventListener('click', _=> {
    if (imageIndex == 0) {
        imageIndex = images.length - 1;
        imageCollection.style.backgroundImage = images[imageIndex]
    }else {
        imageCollection.style.backgroundImage = images[imageIndex - 1];

        imageIndex --;
    }
        
    imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
});

rightArrow.addEventListener('click', _=> {
    imageCollection.style.backgroundImage = images[imageIndex + 1];

    imageIndex ++;
    
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
        imageCollection.style.backgroundImage = images[imageIndex]
    }

    imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
});
// products images show
const productImage = document.querySelectorAll(".product-image");
let i = 0;
let productImage_index;
let selectedItem;
let imagesList;

setInterval(() => {
    if(i === imagesList.itemsImages.length) {i = 0}
    
    productImage_index = Math.floor(Math.random() * productImage.length)

    
    selectedItem = productImage[productImage_index];
    
    if(selectedItem.style.display !== "None") {
        selectedItem.animate([
            // keyframes
            {opacity:0},
            {opacity:1}
        ], {
            // timing options
            duration: 1000
        });
        selectedItem.src = imagesList.itemsImages[i].toString();
    }
    selectedItem.classList.remove("opacity-animation");
    i++;
}, 4000);