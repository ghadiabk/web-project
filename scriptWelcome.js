let newArrivalsData={
    newArrivals: [
        {
            "name":"Coat Dress",
            "image":"imgs/Black Coat Dress.png",
            "desc":"A beautiful and elegant Black Coat dress"
        },

        {
            "name":"Puffer Jacket",
            "image":"imgs/Black Puffer Jacket.png",
            "desc":"Puffer Jackets are perfect to keep you warm during the winter"
        },

        {
            "name":"Uggs",
            "image":"imgs/uggs.png",
            "desc":"The most comfortable boots that will also help you keep warm"
        },

    ]
}
$(document).ready(function () {

    let container = $("#newArrivalContainer");
    newArrivalsData.newArrivals.forEach((product)=>{
        let newArrivalHTML = `
        <div class=newArrivalBox>
            <img src="${product.image}">
            <div class="product-desc">
            <p id="name"> ${product.name}</p>
            <p id="desc"> ${product.desc}</p>
            </div>
        </div>
        `;
        container.append(newArrivalHTML);
    }
);


    setTimeout(function() {
      $('#promo-overlay').fadeIn();
      $('body').addClass('promo-active');
    }, 3000);
  
    $('#promo-close').on('click', function() {
      $('#promo-overlay').fadeOut();
      $('body').removeClass('promo-active'); 
    });







    let shopBtn = document.getElementById("shopBtn");

    function toProductPage() {
        window.location.href = "shop.html";
    }
    shopBtn.addEventListener("click", function () {
        toProductPage();
    });

    let imgs = ["imgs/sale.jpg", "imgs/newcollection.jpg", "imgs/online shop.jpg"];
    let descriptions = [
        "Why wait for a sale when exclusive deals are right here? For a limited time, shop your favorite items at unbeatable prices—up to 50% off. Whether you’re eyeing that chic new outfit or stocking up on essentials, these offers are too good to pass up. Act fast—once they're gone, they're gone!",
        "Get ahead of the fashion game with our Fresh Looks collection! From bold prints to sleek new cuts, we've curated the best pieces for your wardrobe. Whether you're dressing up for a night out or adding some flair to your daily look, these are the items everyone will be talking about. Be the first to wear the latest trends and stand out in style.",
        "At our one-of-a-kind online clothing store, you'll discover exclusive pieces that reflect your unique personality and vibe. Our collection is designed to stand out, offering fashion that’s as bold and distinctive as you are. Shop now and experience a whole new level of style, where every piece tells a story."
    ];
    let headers = ["Shop Exclusive Deals", "Fresh Looks, Just In!", "Feel the Difference"];

    let $imgSlider = $("#imgSlider");
    let $imgdesc = $("#imgdesc");
    let $descHeader = $("#descHeader");
    let $sliders = $(".slider");
    let Index = 0;
    let autoSlideTime=5000;

    function updateSlider(index) {
        $imgSlider.fadeOut(300, function () {
          $imgSlider.attr("src", imgs[index]).fadeIn(300);
        });
        $imgdesc.fadeOut(300, function () {
          $imgdesc.text(descriptions[index]).fadeIn(300);
        });
        $descHeader.fadeOut(300, function () {
          $descHeader.text(headers[index]).fadeIn(300);
        });
        $sliders.removeClass("active");
        $sliders.eq(index).addClass("active");
      }

      function nextSlide() {
        Index = (Index + 1) % imgs.length;
        updateSlider(Index);
      }

      $sliders.each(function (index) {
        $(this).on("click", function () {
          Index = index;
          updateSlider(index);
        });
      });

      updateSlider(Index);
      setInterval(nextSlide, autoSlideTime);

    let totalImages = $('.carousel img').length;
    let indexNow = 0;

    $('.carousel-container').on('mousedown touchstart', function (event) {
        startX = event.pageX || event.originalEvent.touches[0].pageX;
    });

    $('.carousel-container').on('mousemove touchmove', function (event) {
        if (startX === undefined) return;

        const currentX = event.pageX || event.originalEvent.touches[0].pageX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                indexNow = (indexNow + 1) % totalImages;
            } else {
                indexNow = (indexNow - 1 + totalImages) % totalImages;
            }

            $('.carousel').css('transform', 'translateX(' + (-indexNow * 100) + '%)');
            startX = undefined;
        }
    });

    $('.carousel-container').on('mouseup touchend', function () {
        startX = undefined;
    });

 function updateCarouselImages() {
    let images = $('.carousel img');
    images.each(function () {
        let img = $(this)[0];
        if (window.innerWidth <= 768) {
            let imageName = img.getAttribute('src').split('/').pop().replace('.png', '');
            let smallImage = `imgs/small${imageName}.png`; 
    
            img.srcset = `${smallImage} 475w`;
        } else {
            img.srcset = img.getAttribute('src') + " 1920w";
        }
    });
}


$(document).ready(function() {
    updateCarouselImages(); 
    $(window).resize(function() {
        updateCarouselImages(); 
    });
});

 



    let heroimgs = ["imgs/Modern Clothing Store.jpg", "imgs/StockCake-Fashion store interior_1731771790.jpg"];
    let heroImg = document.getElementById("heroImg");
    let currentIndex = 0;

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
