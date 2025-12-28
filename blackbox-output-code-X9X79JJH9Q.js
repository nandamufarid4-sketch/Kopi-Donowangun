// Muat keranjang
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart');
  let total = 0;
  cart.forEach((item, index) => {
    // Asumsikan harga dari data (dalam praktik, fetch ulang)
    const price = item.id === 1 ? 50000 : 60000;
    const subtotal = price * item.qty;
    total += subtotal;
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.variant} - Qty: ${item.qty} - Rp ${subtotal}</span>
        <button onclick="removeFromCart(${index})">Hapus</button>
      </div>
    `;
  });
  container.innerHTML += `<p>Total: Rp ${total}</p>`;
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

if (document.getElementById('cart')) loadCart();