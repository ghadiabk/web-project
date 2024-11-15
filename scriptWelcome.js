let shopbtn=document.getElementById("shopbtn");
let learnbtn=document.getElementById("learnbtn");


function toProductPage(){
    window.location.href="shop.html";
}
shopbtn.addEventListener("click",function(){
    toProductPage();
})

function toAboutUsPage(){
    window.location.href="aboutUs.html";
}
learnbtn.addEventListener("click",function(){
    toAboutUsPage();
})