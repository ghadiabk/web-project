$(document).ready(function() {

    let productData = {
        "product": [
            {
                "name": "White Top",
                "category": ["tops", "female"],
                "price": "19.99$",
                "image": "imgs/White Top.png",
                "rating": 5
            },
            {
                "name": "Cherry Top",
                "category": ["tops", "female"],
                "price": "15$",
                "image": "imgs/White Top with Red.png",
                "rating": 5
            },
            {
                "name": "Star Denim Jeans",
                "category": ["pants", "female"],
                "price": "31.99$",
                "image": "imgs/Star Denim Jeans.png",
                "rating": 5
            },
            {
                "name": "Off-White Dress",
                "category": ["dresses", "female"],
                "price": "50$",
                "image": "imgs/Off White Dress.png",
                "rating": 5
            },
            {
                "name": "Beige Boots",
                "category": ["shoes", "female"],
                "price": "20$",
                "image": "imgs/Beige Boots.png",
                "rating": 5
            },
            {
                "name": "Black Mary-Janes",
                "category": ["shoes", "female"],
                "price": "40$",
                "image": "imgs/Black MaryJanes.png",
                "rating": 5
            },
            {
                "name": "Platform Shoes",
                "category": ["shoes", "male"],
                "price": "19.99$",
                "image": "imgs/Black shoes.png",
                "rating": 5
            },
            {
                "name": "Cargo Pants",
                "category": ["pants", "male"],
                "price": "25$",
                "image": "imgs/Brown Cargo Pants.png",
                "rating": 5
            },
            {
                "name": "Sweater",
                "category": ["tops", "male"],
                "price": "19.99$",
                "image": "imgs/Grey Sweater.png",
                "rating": 5
            },
            {
                "name": "Jeans",
                "category": ["pants", "male"],
                "price": "30.99$",
                "image": "imgs/Male Denim Jeans.png",
                "rating": 5
            },
            {
                "name": "White T-Shirt",
                "category": ["tops", "male"],
                "price": "10$",
                "image": "imgs/White Shirt.png",
                "rating": 5
            },
            {
                "name": "White Sneakers",
                "category": ["shoes", "male"],
                "price": "19.99$",
                "image": "imgs/White_shoes.png",
                "rating": 5
            },
            {
                "name": "Shorts",
                "category": ["shorts", "male"],
                "price": "12.99$",
                "image": "imgs/white_shorts.png",
                "rating": 5
            },
            {
                "name": "Minimalist Baguette Bag",
                "category": ["bags"],
                "price": "19.99$",
                "image": "imgs/Minimalist Baguette Bag.png",
                "rating": 5
            }
        ]
    };

    function renderProducts(products) {
        let productContainer = $(".productContainer");
        productContainer.empty(); 
        products.forEach(product => {
            let stars = "<ul class='stars'>" + "<li><i class='fa-solid fa-star'></i></li>".repeat(product.rating) + "</ul>";
            let productBox = `
                <div class="productBox ${product.category.join(' ')}">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="productName">${product.name}</p>
                    <p>${product.price}</p>
                    ${stars}
                    <div id="addToCart-icon">
                        <button class="add-to-cart" data-product-name="${product.name}" data-product-price="${product.price}">
                            <i id="cart-icon" class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            `;
            productContainer.append(productBox);

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.forEach(item => {
                if (item.name === product.name) {
                    let button = $(".add-to-cart[data-product-name='" + product.name + "']");
                    button.html('<i class="fa-solid fa-check"></i>') 
                        .css({
                            'background': 'linear-gradient(45deg, #1d3041, #C38EB4)',
                            'color': '#fff',
                            'transform': 'scale(1.1)',
                            'transition': 'all 0.3s ease',
                        });
                }
            });
        });
    }

    function filter(event) {
        let filterValue = $(event.target).data("filter"); 
        let products = $(".productBox");

        if (filterValue === "*") {
            products.show();
        } else {
            products.each(function() {
                let categories = $(this).attr("class").split(" ");
                if (categories.includes(filterValue)) {
                    $(this).show(); 
                } else {
                    $(this).hide();
                }
            });
        }
    }

    renderProducts(productData.product);

    $(".filter").click(function(event) {
        filter(event);
    });

   

    $(document).on('click', '#addToCart-icon button', function() {
        let productName = $(this).data("product-name");
        let productPrice = $(this).data("product-price");
        let productImage = $(this).closest('.productBox').find('img').attr('src');
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let productExists = cart.some(item => item.name === productName);
        if (!productExists) {
            cart.push({ name: productName, price: productPrice,image:productImage });
            localStorage.setItem("cart", JSON.stringify(cart));
            $(this).html('<i class="fa-solid fa-check"></i>') 
                .css({
                    'background': 'linear-gradient(45deg, #1d3041, #C38EB4)',
                    'color': '#fff',
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s ease',
                });
        }
    });

});

let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
function toggleSidebar() {
    if (sidebar.style.right === "-250px") {
      sidebar.style.right = "0";
      overlay.style.display = "block";
    } 
    else {
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
      }
}
function closeSidebar() {
    sidebar.style.right = "-250px";
    overlay.style.display = "none";
}
function filter(e) {
  let products = document.querySelectorAll(".productContainer div");
  let filter = e.target.dataset.filter;
  if (filter === '*') {
    products.forEach(product => product.classList.remove('hidden'));
  }  else {
    products.forEach(product => {
      product.classList.contains(filter) ? 
      product.classList.remove('hidden') : 
      product.classList.add('hidden');
    });
  };
};