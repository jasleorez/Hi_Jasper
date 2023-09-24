let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function addToCart() {
    const cartBtns = document.querySelectorAll('.btn.add-to-cart');
    const cartItemContainer = document.querySelector('.cart-item-container');

    cartBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Create a new cart item element
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="fas fa-times remove-from-cart"></span>
                <img src="images/sample-product.png" alt="">
                <div class="content">
                    <h3>Product Name</h3>
                    <div class="price">Price: $10</div>
                </div>
            `;

            // Add the new item to the cart container
            cartItemContainer.appendChild(cartItem);

            // Attach an event listener to the remove button
            const removeBtn = cartItem.querySelector('.remove-from-cart');
            removeBtn.addEventListener('click', () => {
                cartItem.remove();
            });
        });
    });
}
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function toggleMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Function to open and close the search form
function toggleSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    const searchBox = document.getElementById('search-box');

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        searchBox.focus();
    });
}

// Function to add items to the cart


// Function to handle checkout
function checkout() {
    const checkoutBtn = document.querySelector('.btn.checkout');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceDisplay = document.querySelector('.total-price');

    checkoutBtn.addEventListener('click', () => {
        let totalPrice = 0;

        // Calculate the total price by summing up the prices of all items in the cart
        cartItems.forEach((cartItem) => {
            const priceText = cartItem.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('php', '').trim()); // Assuming price format: "600php"
            totalPrice += price;
        });

        // Display the total price to the user
        totalPriceDisplay.textContent = `Total Price: ${totalPrice}php`;

        // Optionally, you can clear the cart after checkout
        cartItems.forEach((cartItem) => {
            cartItem.remove();
        });
    });
}

// Call the checkout function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    toggleSearch();
    addToCart();
    checkout();
});

// Call the functions when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    toggleSearch();
    addToCart();
    checkout();
});
