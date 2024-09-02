// script.js

function increaseQuantity(id) {
    let quantity = document.getElementById(id);
    quantity.value = parseInt(quantity.value) + 1;
    validateQuantity(id);  // Validasi setelah peningkatan
}

function decreaseQuantity(id, min) {
    let quantity = document.getElementById(id);
    if (parseInt(quantity.value) > min) {
        quantity.value = parseInt(quantity.value) - 1;
    }
    validateQuantity(id);  // Validasi setelah pengurangan
}

function validateQuantity(id) {
    let quantity = document.getElementById(id);
    let min = quantity.getAttribute('min');
    if (parseInt(quantity.value) < min) {
        document.getElementById('error-message').style.display = 'block';
        quantity.value = min;  // Setel ke minimum jika di bawah minimum
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
}

function buyNow(productName, price, quantityId) {
    let quantity = document.getElementById(quantityId).value;
    let total = price * quantity;
    let message = `Halo, saya ingin membeli ${productName} sebanyak ${quantity} buah dengan total harga Rp ${total}.`;
    let whatsappUrl = `https://wa.me/nomor_whatsapp_anda?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
