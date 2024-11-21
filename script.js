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
                "rating": 3
            },
            {
                "name": "Black Mary-Janes",
                "category": ["shoes", "female"],
                "price": "40$",
                "image": "imgs/Black MaryJanes.png",
                "rating": 4
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
                "rating": 3
            },
            {
                "name": "Sweater",
                "category": ["tops", "male"],
                "price": "19.99$",
                "image": "imgs/Grey Sweater.png",
                "rating": 4
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
                "name": "Baguette Bag",
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
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        products.forEach(product => {
            let isWishlisted = wishlist.includes(product.name);
            let stars = "<ul class='stars'>" + "<li><i class='fa-solid fa-star'></i></li>".repeat(product.rating) + "</ul>";
            let productBox = `
                <div class="productBox ${product.category.join(' ')}">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="productName">${product.name}</p>
                    <p>${product.price}</p>
                    ${stars}
                    <div id="box-icons">
                        <div id="wishlist-icon">
                            <button class="wishlist-btn" data-product-id="${product.name}">
                                <i class="heart-icon ${isWishlisted ? 'fa-solid fa-heart filled' : 'fa-regular fa-heart'}"></i>
                            </button>
                        </div>
                        <div id="addToCart-icon">
                            <button class="add-to-cart" data-product-name="${product.name}" data-product-price="${product.price}">
                                <i id="cart-icon" class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productContainer.append(productBox);
        });
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
        $('#cartcount').text(totalCount);
    }

    function filter(event) {
        let filterValue = $(event.target).data("filter");
        let filteredProducts;
    
        if (filterValue === "wishlist") {
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            filteredProducts = productData.product.filter(product => 
                wishlist.includes(product.name)
            );
        } else if (filterValue === "*") {
            filteredProducts = productData.product;
        } else {
            filteredProducts = productData.product.filter(product =>
                product.category.includes(filterValue)
            );
        }
    
        renderProducts(filteredProducts);
    }
    

    renderProducts(productData.product);
    updateCartCount();

    $(".filter").click(function(event) {
        filter(event);
    });

    $(document).on('click', '#addToCart-icon button', function() {
        let productName = $(this).data("product-name");
        let productPrice = $(this).data("product-price");
        let productImage = $(this).closest('.productBox').find('img').attr('src');
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showPopupMessage("Item added successfully!"); 
    });
    $(document).on('click', '.wishlist-btn', function() {
        let heartIcon = $(this).find('.heart-icon');
        let productId = $(this).data('product-id');
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
            heartIcon.removeClass('fa-solid filled').addClass('fa-regular');
        } else {
            wishlist.push(productId);
            heartIcon.removeClass('fa-regular').addClass('fa-solid filled');
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
    $(document).ready(function() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.forEach((id) => {
            let button = $(`.wishlist-btn[data-product-id="${id}"]`);
            if (button.length > 0) {
                let heartIcon = button.find('.heart-icon');
                heartIcon.addClass('fa-solid filled').removeClass('fa-regular');
            }
        });
    });
    
});

let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");

function toggleSidebar() {
    if (sidebar.style.right === "-250px") {
        sidebar.style.right = "0";
        overlay.style.display = "block";
    } else {
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
    }
}

function closeSidebar() {
    sidebar.style.right = "-250px";
    overlay.style.display = "none";
}