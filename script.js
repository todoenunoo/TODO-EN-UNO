// Alternar menú para navegación
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Función para filtrar productos
function filterProducts(event) {
    event.preventDefault();
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
