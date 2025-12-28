// Muat produk dari API
async function loadProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  const container = document.getElementById('products');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Harga: Rp ${product.price}</p>
      <select id="variant-${product.id}">
        ${product.variants.map(v => `<option value="${v}">${v}</option>`).join('')}
      </select>
      <input type="number" id="qty-${product.id}" min="1" value="1">
      <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;
    container.appendChild(div);
  });
}

// Tambah ke keranjang (localStorage)
function addToCart(id) {
  const variant = document.getElementById(`variant-${id}`).value;
  const qty = parseInt(document.getElementById(`qty-${id}`).value);
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ id, variant, qty });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Ditambahkan ke keranjang!');
}

// Untuk halaman lain, tambahkan logika navigasi dan pengiriman data
// (Kode lengkap untuk semua halaman akan disesuaikan, tapi ini contoh dasar)
if (document.getElementById('products')) loadProducts();