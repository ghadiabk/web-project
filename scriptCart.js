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
                total += parseFloat(item.price.replace('$', ''));
                let cartItem = `
                    <div class="item">
                    <div id="productImg">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image"></div>
                        <div id= "productDetails-cart">
                        <p>${item.name}</p>
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
        cart = cart.filter(item => item.name !== productName);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    $("#buybtn").click(function() {
        alert("Proceeding to checkout!");
    });
});
