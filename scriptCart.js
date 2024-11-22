$(document).ready(function() {
    function renderCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartContainer = $("#check-outItems");
        let total = 0;
        cartContainer.empty();

        if (cart.length === 0) {
            $("#cart-state").text("Your cart is currently empty. Start shopping now!");
            $("#total").text("0.00$");
        } else {
            cart.forEach(item => {
                total += parseFloat(item.price.replace('$', '')) * item.quantity;
                let cartItem = `
                    <div class="item">
                    <div id="productImg">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image"></div>
                        <div id= "productDetails-cart">
                        <p>${item.name} (x${item.quantity})</p>
                        <p>${item.price}</p> </div>
                        <div id="removeBtn">
                        <button class="remove-item" data-product-name="${item.name}">Remove</button></div>
                    </div>
                `;
                cartContainer.append(cartItem);
            });
            $("#cart-state").text("");
            $("#total").text(total.toFixed(2) + "$");
        }
    }

    renderCart();

    $(document).on('click', '.remove-item', function() {
        let productName = $(this).data("product-name");
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = cart.find(item => item.name === productName);

        if (product && product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(item => item.name !== productName);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
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
        renderCart();
    });

    $("#buybtn").click(function() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Your cart is empty! Add items before proceeding to checkout.");
        } else {
            console.log("Proceeding to checkout...");
            window.location.href = "shop.html";
        }
    });
});
