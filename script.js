// Initialize Icons
lucide.createIcons();

// Cart Logic
let cart = [];

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
    // Bounce effect
    const cartBtn = document.querySelector('.cart-icon');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    const itemsList = document.getElementById('cart-items');
    
    count.innerText = cart.length;
    
    if(cart.length === 0) {
        itemsList.innerHTML = '<p class="empty-msg">Cart-gaagu waa madhan yahay.</p>';
    } else {
        itemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <span>${item}</span>
                <button onclick="removeItem(${index})" style="color:red; background:none; border:none; cursor:pointer;">Ka saar</button>
            </div>
        `).join('');
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkoutWhatsApp() {
    if(cart.length === 0) {
        alert("Fadlan doorto adeeg marka hore.");
        return;
    }
    const phone = "252906160407";
    const text = "Salaamu Calaykum Purexa, waxaan rabaa inaan dalbado: " + cart.join(", ");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

// Close Mobile Menu on Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('show');
    });
});