
$(document).ready(function () {

let shopBtn=document.getElementById("shopBtn");
let aboutUsBtn = document.getElementById("aboutUsBtn");
// let contactBtn= document.getElementById("contactBtn");


function toProductPage(){
    window.location.href="shop.html";
}
shopBtn.addEventListener("click",function(){
    toProductPage();
})

function toAboutUsPage(){
    window.location.href="aboutUs.html";
}
aboutUsBtn.addEventListener("click",function(){
    toAboutUsPage();
})

let imgs = ["imgs/SalesOffers.jpg", "imgs/NewCollection.jpg","imgs/WelcomeNeon.jpg"];
    let descriptions = [
        "Why wait for a sale when exclusive deals are right here? For a limited time, shop your favorite items at unbeatable prices—up to 50% off. Whether you’re eyeing that chic new outfit or stocking up on essentials, these offers are too good to pass up. Act fast—once they're gone, they're gone!",
        "Get ahead of the fashion game with our Fresh Looks collection! From bold prints to sleek new cuts, we've curated the best pieces for your wardrobe. Whether you're dressing up for a night out or adding some flair to your daily look, these are the items everyone will be talking about. Be the first to wear the latest trends and stand out in style.",
        "At our one-of-a-kind online clothing store, you'll discover exclusive pieces that reflect your unique personality and vibe. Our collection is designed to stand out, offering fashion that’s as bold and distinctive as you are. Shop now and experience a whole new level of style, where every piece tells a story."
    ];
    let headers = ["Shop Exclusive Deals", "Fresh Looks, Just In!","Feel the Difference"];

    let imgSlider=document.getElementById("imgSlider");
    let imgdesc =document.getElementById("imgdesc");
    let descHeader=document.getElementById("descHeader");

    imgSlider.src=imgs[0];
    imgdesc.textContent=descriptions[0];
    descHeader.textContent= headers[0];

    function updateSlider(index){
        $(imgSlider).fadeOut(300, function(){
            imgSlider.src =imgs[index];
            $(imgSlider).fadeIn(300);
        });
        $(imgdesc).fadeOut(300, function(){
            imgdesc.textContent= descriptions[index];
            $(imgdesc).fadeIn(300);
        });
        $(descHeader).fadeOut(300, function(){
            descHeader.textContent= headers[index]; 
            $(descHeader).fadeIn(300); 
    });
       
    }

    let startX = 0, totalImages = $('.carousel img').length;
    let indexNow =totalImages = $('.carousel img').length;

$('.carousel-container').on('mousedown touchstart', function(event) {
    startX = event.pageX || event.originalEvent.touches[0].pageX;
});

$('.carousel-container').on('mousemove touchmove', function(event) {
    if (startX === undefined) return;
    const currentX = event.pageX || event.originalEvent.touches[0].pageX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            if (indexNow < totalImages - 1) {
                indexNow++;
            }
        } else {
            if (indexNow > 0) {
                indexNow--;
            }
        }
        $('.carousel').css('transform', 'translateX(' + (-indexNow * 100) + '%)');
        startX = undefined;
    }
});

$('.carousel-container').on('mouseup touchend', function() {
    startX = undefined;
});


    
  

    let slide1 =document.getElementById("slide1");
    slide1.addEventListener("click", function(){
       updateSlider(0);
    });

    let slide2 =document.getElementById("slide2");
    slide2.addEventListener("click", function(){
        updateSlider(1);
    });

    let slide3 =document.getElementById("slide3");
    slide3.addEventListener("click", function(){
        updateSlider(2);
    });


    let heroimgs=["imgs/Modern Clothing Store.jpg","imgs/StockCake-Fashion store interior_1731771790.jpg"];
    let heroImg= document.getElementById("heroImg");
    let currentIndex=0;


function updateHeroImage() {
    currentIndex = (currentIndex + 1) % heroimgs.length;
    $(heroImg).fadeOut(300, function () {
        heroImg.src = heroimgs[currentIndex];
        $(heroImg).fadeIn(300);
    });
}
function loadInitialImage() {
    heroImg.src = heroimgs[currentIndex];
    $(heroImg).hide().fadeIn(300);
}
loadInitialImage();
setInterval(updateHeroImage, 5000);

 


});