// get image lists
const getItem = function(func) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let result = JSON.parse(this.responseText);

        // func(result) this enables external functions to work with the result
        func(result)
    }
    xhttp.open("GET", "js/datas.json");
    xhttp.send();
}

/* display and hidden the submenu */
const showSubmenu = function() {
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
}();

/* pin, unpin, open and close de side nav */
const openAndCloseSideNav = function () {
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
}();

// image collection (small screen)    
const portfolioImageCollection = function() {
    let imageIndex = 0
    // right button
    const rightArrow = document.querySelector('#right-arrow');
    // left button
    const leftArrow = document.querySelector('#left-arrow');
    // image container
    const imageCollection = document.querySelector('.image-collection');
    // image index
    const imageNumber = document.querySelector('#image-number');
    
    /* change the Collection image */
    function changeImage(imagesList) {
        let images = imagesList.portfolioImagesCollection; // list of images

        imageNumber.innerHTML =  '1/' +  images.length; // image index
        // go to the previous image
        leftArrow.addEventListener('click', _=> {
            // if this is the first image then go to the last image
            if (imageIndex == 0) {
                imageIndex = images.length - 1;
                imageCollection.style.backgroundImage = images[imageIndex]
            }else { //if not, go to the previous image
                imageCollection.style.backgroundImage = images[--imageIndex]; // imageIndex = imageIndex - 1        
            }
            // change the image index
            imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
        });
        // go to the next image
        rightArrow.addEventListener('click', _=> {
            imageCollection.style.backgroundImage = images[++imageIndex]; // imageIndex = imageIndex + 1
            // if this is the last image then go to the first image
            if (imageIndex > images.length - 1) {
                imageIndex = 0;
                imageCollection.style.backgroundImage = images[imageIndex]
            }
            // change the image index
            imageNumber.innerHTML = (imageIndex + 1).toString() + '/' + images.length.toString();
        });
    }
    /* 
        sending the function to be able to work with the json value in the xhttp.onload method, since the variables inside this method are not accessible outside it
     */
    getItem(changeImage);
}();

// change products image
const changeProducts = function() {
    let i = 0; // index for images
    let index; // index for img tag(class="product-image")
    let selectedImgTag;
    const productImage = document.querySelectorAll(".product-image"); // list of img tag with the class "product-image"

    function loop(imagesList) {
        setInterval(() => {
            if(i === imagesList.itemsImages.length) {i = 0}

            index = Math.floor(Math.random() * productImage.length);
            selectedImgTag = productImage[index];
            
            /* applies an opacity animation when changing images (works like css keyframe) */
            selectedImgTag.animate(
                [
                    // keyframes
                    {opacity:0},
                    {opacity:1}
                ], {
                    // timing options
                    duration: 1000
                }
            );
            selectedImgTag.src = imagesList.itemsImages[i].toString(); // change the image
            i++;
        }, 2500);
    }
    /* 
        sending the function to be able to work with the json value in the xhttp.onload method, since the variables inside this method are not accessible outside it
     */
    getItem(loop);
}();