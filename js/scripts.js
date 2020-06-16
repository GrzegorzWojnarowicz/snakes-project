var $galleryImage = document.querySelectorAll(".gallery > figure > img");
var $buttonRight = document.querySelector(".gallery .gallery-element:last-of-type button:first-of-type");
var $buttonLeft = document.querySelector(".gallery .gallery-element:last-of-type button:last-of-type");
var $navAnchors = document.querySelectorAll(".fixed-width nav ul li a");
var $navAnchorsEm = document.querySelectorAll(".fixed-width nav ul li em");

function selectMainVisualImg(element) {
    var $mainImg = element.parentNode.parentNode.querySelector("figure:first-of-type > img");
    return $mainImg;
}

function swapMainVisualImg(event){
    var $image = event.target;
    var source = $image.src;
    selectMainVisualImg($image).src = source;  
}

function swapToDefaultMainVisualImg(event){
    $image = event.target;
    var source = "https://cdn.pixabay.com/photo/2015/02/28/15/25/rattlesnake-653646_960_720.jpg";
    
    selectMainVisualImg($image).src = source;
}


function nextImages(event){
    var $figcaption = document.querySelectorAll(".gallery .gallery-element figcaption em");
    var $swappedImages = event.target.parentNode.parentNode.querySelectorAll(".gallery-element .is-visible + img");
    if ($swappedImages.length != 3) {
        $swappedImages = document.querySelectorAll(".gallery > .gallery-element > img:last-of-type");
    }
    var $previousViewed = event.target.parentNode.parentNode.querySelectorAll(".gallery-element .is-visible");
    for (var i = 0; i < $previousViewed.length; i++) {
        $previousViewed[i].classList.remove("is-visible");
    }   

    for (var i = 0; i < $swappedImages.length; i++) {
        $swappedImages[i].classList.add("is-visible");
        $figcaption[i].innerHTML =  $swappedImages[i].alt;
    }   


}

function previousImages(event){
    var $figcaption = document.querySelectorAll(".gallery .gallery-element figcaption em");
    var $previousViewed = event.target.parentNode.parentNode.querySelectorAll(".gallery-element .is-visible");
    

    for (let i = 0; i < $previousViewed.length; i++) {
        
        if($previousViewed[i].previousElementSibling != null){
            $previousViewed[i].previousElementSibling.classList.add("is-visible");
            $figcaption[i].innerHTML =  $previousViewed[i].previousElementSibling.alt;
            $previousViewed[i].classList.remove("is-visible");
        }
    }   

}

function turnToBlack(event){
    $link = event.target;

    $link.classList.add("changed-background");
    $link.parentNode.classList.add("changed-background");
    $link.parentNode.querySelector("a em").classList.add("changed-background");
}

function turnToBlack2(event){
    $link = event.target;

    $link.classList.add("changed-background");
    $link.parentNode.parentNode.classList.add("changed-background");
    $link.parentNode.parentNode.querySelector("a").classList.add("changed-background");
}


function turnToNormal(event){
    $link = event.target;

    $link.classList.remove("changed-background");
    $link.parentNode.classList.remove("changed-background");
    $link.parentNode.querySelector("a em").classList.remove("changed-background");
}

function turnToNormal2(event){
    $link = event.target;

    $link.classList.remove("changed-background");
    $link.parentNode.parentNode.classList.remove("changed-background");
    $link.parentNode.parentNode.querySelector("a").classList.remove("changed-background");
}


for (let i = 1; i < $galleryImage.length; i++) {
    var $image = $galleryImage[i];

    $image.addEventListener("mouseover", swapMainVisualImg);
    $image.addEventListener("mouseout", swapToDefaultMainVisualImg);
}

$buttonRight.addEventListener("click", nextImages);
$buttonLeft.addEventListener("click", previousImages);

for (let i = 0; i<$navAnchors.length; i++){
    $link = $navAnchors[i];

    $link.addEventListener("mouseover", turnToBlack);
    $link.addEventListener("mouseout", turnToNormal);
}

for (let i = 0; i<$navAnchorsEm.length; i++){
    $link = $navAnchorsEm[i];

    $link.addEventListener("mouseover", turnToBlack2);
    $link.addEventListener("mouseout", turnToNormal2);
}