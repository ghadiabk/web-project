
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

let imgs = ["imgs/EXCLUSIVE OFFERS.jpg", "imgs/NEW ARRIVALS.jpg"];
    let descriptions = [
        "Why wait for a sale when exclusive deals are right here? For a limited time, shop your favorite items at unbeatable prices—up to 50% off. Whether you’re eyeing that chic new outfit or stocking up on essentials, these offers are too good to pass up. Act fast—once they're gone, they're gone!",
        "Get ahead of the fashion game with our Fresh Looks collection! From bold prints to sleek new cuts, we've curated the best pieces for your wardrobe. Whether you're dressing up for a night out or adding some flair to your daily look, these are the items everyone will be talking about. Be the first to wear the latest trends and stand out in style."
    ];
    let headers = ["Shop Exclusive Deals", "Fresh Looks, Just In!"];

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

    let slide1 =document.getElementById("slide1");
    slide1.addEventListener("click", function(){
       updateSlider(0);

    });

    let slide2 =document.getElementById("slide2");
    slide2.addEventListener("click", function(){
        updateSlider(1);
    });
});