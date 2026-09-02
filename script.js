/**
 * ============================================
 * Heladería y Frutería Arcoíris - script.js
 * Versión: 2.0
 * Funcionalidades:
 *   - Navbar scroll + menú móvil
 *   - Slideshow dinámico en el hero (fotos reales)
 *   - Filtro de productos por categoría
 *   - Modal de detalle de producto
 *   - Carrito de compras completo (agregar, quitar, vaciar, pedir por WhatsApp)
 *   - Animaciones scroll-reveal
 *   - Contadores animados
 * ============================================
 */

'use strict';

/* =============================================
   1. DATOS DE PRODUCTOS
============================================= */
const productData = {
  'btn-copa-helado': {
    key:   'btn-copa-helado',
    img:   'copa-helado.png.jpg',
    name:  'Copa de Helado',
    desc:  'Deliciosa copa con 3 bolas de helado a elegir entre más de 10 sabores: fresa, vainilla, chocolate, mango, maracuyá y más. Incluye crema chantilly, salsa de fresa y topping de tu preferencia.',
    price: 18000,
    priceStr: '$18.000 COP',
    msg:   'Hola! Quisiera pedir una Copa de Helado 🍦'
  },
  'btn-copa-helado-mini': {
    key:   'btn-cono-helado',
    img:   'copa-fresas.png.jpg',
    name:  'Copa de fresas',
    desc:  'copa de fresas con 2 bolas de helado en los sabores que más te gusten. Disponible en más de 10 sabores naturales. ¡Colorido, divertido y delicioso para toda la familia!',
    price: 10000,
    priceStr: '$10.000 COP',
    msg:   'Hola! Quisiera pedir un Cono Arcoíris 🍦'
  },
  'btn-fresas-con-crema': {
    key:   'btn-fresas-con-crema',
    img:   'fresas1.png.jpg',
    name:  'fresas con crema',
    desc:  'fresas, crema de leche y leche condensada.',
    price: 12000,
    priceStr: '$12.000 COP',
    msg:   'Hola! Quisiera pedir unas fresas con crema 🍦'
  },
   'btn-fresas con crema y helado': {
    key:   'btn-fresas con crema y helado',
    img:   'fresas2.png.jpg',
    name:  'fresas con crema y helado',
    desc:  'fresas, crema de leche, leche condensada y porcion de helado.',
    price: 14000,
    priceStr: '$14.000 COP',
    msg:   'Hola! Quisiera pedir unas fresas con crema y helado 🍦'
  },
  'btn-fresas con crema': {
    key:   'btn-fresas con crema',
    img:   'fresas3.png.jpg',
    name:  'fresas con crema especial',
    desc:  'fresas, crema de leche, leche condensada , queso y porcion de helado.',
    price: 16000,
    priceStr: '$16.000 COP',
    msg:   'Hola! Quisiera pedir unas fresas con crema especial 🍓'
  },
   'btn-banana split': {
    key:   'btn-banana split',
    img:   'banana1.png.jpg',
    name:  'Ensalada Clásica',
    desc:  'porcion de banano, crema de leche, queso, 2 bolas de helado, crema chantilly, salsa de chocolate y galleta.',
    price: 15000,
    priceStr: '$15.000 COP',
    msg:   'Hola! Quisiera pedir una banana split 🍦'
  },
   'btn-banana split super': {
    key:   'btn-banana split super',
    img:   'banana2.png.jpg',
    name:  'banana split super',
    desc:  'porcion de banano, crema de leche, queso, 4 bolas de helado, durazno, fresa, salsa de chocolate y galleta.',
    price: 20000,
    priceStr: '$20.000 COP',
    msg:   'Hola! Quisiera pedir una banana split super 🍦'
  },
  'btn-copa de helado de durazno': {
    key:   'btn-copa de helado de durazno',
    img:   'copa durazno.png.jpg',
    name:  'copa durazno ⭐',
    desc:  'porcion de helado de durazno, crema de leche, porcion de queso, helado y salsa de mora.. ¡Una explosión de colores y sabores!',
    price: 15000,
    priceStr: '$15.000 COP',
    msg:   'Hola! Quisiera pedir una copa durazno 🍦 '
  },
   'btn-brownie con helado': {
    key:   'btn-brownie con helado',
    img:   'brownie.png.jpg',
    name:  'Brownie con Helado 🍨',
    desc:  'brownie al gusto, helado x2, crema chantilly, chocolate, galleta de oreo y salsa de chocolate.',
    price: 15000,
    priceStr: '$15.000 COP',
    msg:   'Hola! Quisiera pedir un brownie con helado 🍦'
  },
   'btn-ensalada-clasica': {
    key:   'btn-ensalada-clasica',
    img:   'ensalada1.png.jpg',
    name:  'ensalada de frutas ⭐',
    desc:  'Frutas de temporada picadas: mango, fresa, kiwi, papaya, uvas y más, con leche condensada, porcion de helado y crema de leche.',
    price: 8000,
    priceStr: '$8.000 COP',
    msg:   'Hola! Quisiera pedir una ensalada clasica 🍦 '
  },
   'btn-Ensalada de fruta sencilla': {
    key:   'btn-Ensalada de fruta sencilla',
    img:   'ensalada2.png.jpg',
    name:  'Ensalada de fruta sencilla 🥗',
    desc:  'Frutas de temporada picadas: mango, fresa, kiwi, papaya, uvas y más, con leche condensada, porcion de helado, decoracion, dulce de mora y crema de leche.',
    price: 10000,
    priceStr: '$10.000 COP',
    msg:   'Hola! Quisiera pedir una ensalada de fruta sencilla 🥗'
  },
  'btn-ensalada-especial': {
    key:   'btn-ensalada-especial',
    img:   'ensalada3.png.jpg',
    name:  'Ensalada Especial Arcoíris',
    desc:  'variedad de frutas, queso, crema de leche, decoracion especial, porcion de helado x2, dulce de mora y dos galletas. ¡La más pedida!',
    price: 13000,
    priceStr: '$13.000 COP',
    msg:   'Hola! Quisiera pedir una ensalada especial 🥗'
  },
  'btn-limonada de coco': {
    key:   'btn-limonada de coco',
    img:   'limonada.png.jpg',
    name:  'Limonada de Coco 🥥',
    desc:  'Deliciosa limonada cremosa preparada con coco natural.',
    price: 8500,
    priceStr: '$8.500 COP',
    msg:   'Hola! Quisiera pedir una limonada de coco 🥥'
  }


  
};

/** Número de WhatsApp del negocio */
const WA_NUMBER = '573134292831';

/* =============================================
   2. ESTADO DEL CARRITO
============================================= */
/** @type {Array<{key: string, name: string, price: number, img: string, qty: number}>} */
let cart = [];

/* =============================================
   3. REFERENCIAS AL DOM
============================================= */
const header       = document.getElementById('header');
const navToggle    = document.getElementById('navToggle');
const navMenu      = document.getElementById('navMenu');
const navLinks     = document.querySelectorAll('.nav-link');
const filterBtns   = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const currentYear  = document.getElementById('currentYear');

// Modal
const modal        = document.getElementById('productModal');
const modalClose   = document.getElementById('modalCloseBtn');
const modalImg     = document.getElementById('modalImg');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');
const modalPrice   = document.getElementById('modalPrice');
const modalWa      = document.getElementById('modalWhatsapp');
const modalAddCart = document.getElementById('modalAddCart');

// Carrito
const cartBtn      = document.getElementById('cartBtn');
const cartBadge    = document.getElementById('cartBadge');
const cartDrawer   = document.getElementById('cartDrawer');
const cartOverlay  = document.getElementById('cartOverlay');
const cartClose    = document.getElementById('cartClose');
const cartEmpty    = document.getElementById('cartEmpty');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal    = document.getElementById('cartTotal');
const cartCheckout = document.getElementById('cartCheckout');
const cartClear    = document.getElementById('cartClear');

// Slideshow
const slides       = document.querySelectorAll('.slide');
const dots         = document.querySelectorAll('.dot');
const slidePrev    = document.getElementById('slidePrev');
const slideNext    = document.getElementById('slideNext');

/* =============================================
   4. AÑO DINÁMICO EN EL FOOTER
============================================= */
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =============================================
   5. NAVBAR: SCROLL + ACTIVE LINK + TOGGLE
============================================= */
function handleScroll() {
  const scrollY = window.scrollY;

  // Fondo del header al hacer scroll
  header.classList.toggle('scrolled', scrollY > 60);

  // Botón scroll-to-top
  scrollTopBtn.classList.toggle('visible', scrollY > 400);

  // Enlace activo en el menú
  updateActiveNavLink();
}

function updateActiveNavLink() {
  const sections = ['inicio', 'productos', 'nosotros', 'equipo', 'contacto'];
  const scrollY  = window.scrollY + 100;

  sections.forEach(id => {
    const section = document.getElementById(id);
    const link    = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!section || !link) return;

    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Toggle menú móvil
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cerrar menú móvil al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Botón scroll-top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   6. HERO SLIDESHOW
============================================= */
let currentSlide  = 0;
let slideInterval = null;
const SLIDE_DELAY = 4500; // ms entre transiciones automáticas

/**
 * Muestra la diapositiva en el índice especificado.
 * @param {number} index
 */
function goToSlide(index) {
  // Desactivar slide y punto actuales
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Calcular nuevo índice con wraparound
  currentSlide = (index + slides.length) % slides.length;

  // Activar nuevo slide y punto
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

/** Avanza al siguiente slide y reinicia el temporizador. */
function nextSlide() {
  goToSlide(currentSlide + 1);
  resetSlideTimer();
}

/** Retrocede al slide anterior y reinicia el temporizador. */
function prevSlide() {
  goToSlide(currentSlide - 1);
  resetSlideTimer();
}

/** Reinicia el temporizador de autoplay. */
function resetSlideTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, SLIDE_DELAY);
}

// Iniciar autoplay
if (slides.length > 0) {
  slideInterval = setInterval(nextSlide, SLIDE_DELAY);

  // Controles manuales
  if (slideNext) slideNext.addEventListener('click', nextSlide);
  if (slidePrev) slidePrev.addEventListener('click', prevSlide);

  // Dots de navegación
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetSlideTimer();
    });
  });
}

/* =============================================
   7. FILTRO DE PRODUCTOS
============================================= */
function filterProducts(filter) {
  productCards.forEach(card => {
    const category = card.dataset.category;
    const show     = filter === 'all' || category === filter;

    if (show) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      void card.offsetWidth; // reflow para reiniciar animación
      card.style.animation = 'fadeUp 0.45s ease both';
    } else {
      card.classList.add('hidden');
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    filterProducts(btn.dataset.filter);
  });
});

/* =============================================
   8. MODAL DE DETALLE DE PRODUCTO
============================================= */
/** Clave del producto abierto en el modal (para "Agregar al carrito" desde modal) */
let modalCurrentKey = null;

/**
 * Abre el modal con los datos del producto indicado.
 * @param {string} productKey - ID del botón overlay del producto.
 */
function openModal(productKey) {
  const data = productData[productKey];
  if (!data) return;

  modalCurrentKey = productKey;
  modalImg.src    = data.img;
  modalImg.alt    = data.name;
  modalTitle.textContent = data.name;
  modalDesc.textContent  = data.desc;
  modalPrice.textContent = data.priceStr;
  modalWa.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(data.msg)}`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

/** Cierra el modal. */
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalCurrentKey = null;
}

// Eventos del modal
document.querySelectorAll('.overlay-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.id));
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('open')) closeModal();
    if (cartDrawer.classList.contains('open')) closeCart();
  }
});

// Agregar al carrito desde el modal
if (modalAddCart) {
  modalAddCart.addEventListener('click', () => {
    if (modalCurrentKey) {
      addToCart(modalCurrentKey);
      closeModal();
      openCart();
    }
  });
}

/* =============================================
   9. CARRITO DE COMPRAS
============================================= */

/** Abre el panel lateral del carrito. */
function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/** Cierra el panel lateral del carrito. */
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Abrir carrito con el botón del navbar
cartBtn.addEventListener('click', () => {
  if (cartDrawer.classList.contains('open')) {
    closeCart();
  } else {
    openCart();
  }
});

// Cerrar carrito
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/**
 * Agrega un producto al carrito o incrementa su cantidad si ya existe.
 * @param {string} productKey - Clave del producto en productData.
 */
function addToCart(productKey) {
  const data = productData[productKey];
  if (!data) return;

  const existing = cart.find(item => item.key === productKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key:   data.key,
      name:  data.name,
      price: data.price,
      img:   data.img,
      qty:   1
    });
  }

  updateCartUI();
  animateCartBtn();
}

/**
 * Cambia la cantidad de un item del carrito.
 * Si la cantidad llega a 0, elimina el item.
 * @param {string} productKey
 * @param {number} delta - +1 o -1
 */
function changeQty(productKey, delta) {
  const idx = cart.findIndex(item => item.key === productKey);
  if (idx === -1) return;

  cart[idx].qty += delta;

  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }

  updateCartUI();
}

/**
 * Elimina un item del carrito completamente.
 * @param {string} productKey
 */
function removeFromCart(productKey) {
  cart = cart.filter(item => item.key !== productKey);
  updateCartUI();
}

/** Vacía el carrito por completo. */
function clearCart() {
  cart = [];
  updateCartUI();
}

/** Actualiza toda la interfaz del carrito (lista, totales, badge). */
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Badge del navbar
  cartBadge.textContent = totalItems;
  cartBadge.classList.add('bump');
  setTimeout(() => cartBadge.classList.remove('bump'), 300);

  // Mostrar/ocultar estado vacío
  const isEmpty = cart.length === 0;
  cartEmpty.style.display      = isEmpty ? 'flex'   : 'none';
  cartItemsList.style.display  = isEmpty ? 'none'   : 'flex';
  cartCheckout.disabled        = isEmpty;
  cartClear.style.display      = isEmpty ? 'none'   : 'flex';

  // Totales
  const formatted = totalPrice.toLocaleString('es-CO');
  cartSubtotal.textContent = `$${formatted} COP`;
  cartTotal.textContent    = `$${formatted} COP`;

  // Renderizar items
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${(item.price * item.qty).toLocaleString('es-CO')} COP</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn qty-minus" data-key="${item.key}" aria-label="Reducir cantidad">−</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn qty-plus"  data-key="${item.key}" aria-label="Aumentar cantidad">+</button>
      </div>
      <button class="cart-item-remove" data-key="${item.key}" aria-label="Eliminar ${item.name}">
        <i class="fas fa-trash" aria-hidden="true"></i>
      </button>
    `;
    cartItemsList.appendChild(li);
  });

  // Delegar eventos en los botones del carrito
  cartItemsList.querySelectorAll('.qty-minus').forEach(btn =>
    btn.addEventListener('click', () => changeQty(btn.dataset.key, -1))
  );
  cartItemsList.querySelectorAll('.qty-plus').forEach(btn =>
    btn.addEventListener('click', () => changeQty(btn.dataset.key, +1))
  );
  cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn =>
    btn.addEventListener('click', () => removeFromCart(btn.dataset.key))
  );
}

/** Animación de sacudida en el botón del carrito al agregar un producto. */
function animateCartBtn() {
  cartBtn.classList.add('wiggle');
  setTimeout(() => cartBtn.classList.remove('wiggle'), 500);
}

// Botón: Vaciar carrito
cartClear.addEventListener('click', clearCart);

// Botón: Checkout por WhatsApp
cartCheckout.addEventListener('click', () => {
  if (cart.length === 0) return;

  const lines = cart.map(item =>
    `• ${item.name} x${item.qty} = $${(item.price * item.qty).toLocaleString('es-CO')} COP`
  ).join('\n');

  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const message = `🌈 *Pedido - Heladería y Frutería Arcoíris*\n\n${lines}\n\n*Total: $${total.toLocaleString('es-CO')} COP*\n\n¡Hola! Quisiera hacer este pedido. Estoy en Tocaima 📍`;

  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );
});

/* =============================================
   10. BOTONES "AGREGAR AL CARRITO" EN TARJETAS
   Lee los datos directamente de los atributos data-* del botón
   para evitar problemas con IDs que tienen espacios o nombres inconsistentes.
============================================= */
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    // Leer datos directamente del botón (data-name, data-price, data-img)
    const name  = btn.dataset.name  || 'Producto';
    const price = parseInt(btn.dataset.price, 10) || 0;
    const img   = btn.dataset.img   || '';
    const key   = btn.id || ('prod-' + name);

    // Agregar al carrito usando los datos del data-*
    const existing = cart.find(item => item.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ key, name, price, img, qty: 1 });
    }
    updateCartUI();
    animateCartBtn();

    // Feedback visual en el botón
    const originalHTML = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> ¡Agregado!';
    btn.disabled  = true;

    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = originalHTML;
      btn.disabled  = false;
    }, 1400);
  });
});

/* =============================================
   11. ANIMACIONES SCROLL-REVEAL
============================================= */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.product-card, .about-card, .value-item, .contact-item')
  .forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.06}s`;
    revealObserver.observe(el);
  });

/* =============================================
   12. EFECTO HOVER 3D EN TARJETAS
============================================= */
productCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect    = card.getBoundingClientRect();
    const x       = e.clientX - rect.left;
    const y       = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -5;
    const rotateY = ((x - rect.width  / 2) / rect.width)  *  5;
    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform  = '';
    card.style.transition = 'transform 0.4s ease';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease';
  });
});

/* =============================================
   13. CONTADORES ANIMADOS
============================================= */
function animateCounter(el, target, duration) {
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = eased * target;
    const isInt    = Number.isInteger(target);

    // Detectar sufijo del texto original
    const original = el.dataset.target || el.textContent;
    const hasPlus   = original.startsWith('+');
    const hasPercent = original.includes('%');
    const suffix    = hasPercent ? '%' : (hasPlus ? '+' : '');
    const prefix    = hasPlus && !hasPercent ? '+' : '';

    el.textContent = prefix + (isInt ? Math.round(current) : current.toFixed(1)) + (hasPercent ? '%' : '');

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el   = entry.target;
        const text = el.textContent.trim();
        const num  = parseFloat(text.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) animateCounter(el, num, 1800);
        statsObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));

/* =============================================
   14. INICIALIZACIÓN DEL CARRITO
============================================= */
updateCartUI();

/* =============================================
   15. LOG DE BIENVENIDA EN CONSOLA
============================================= */
console.log('%c🌈 Heladería y Frutería Arcoíris', 'color: #FF6B35; font-size: 1.4rem; font-weight: bold;');
console.log('%c📍 Tocaima, Cundinamarca, Colombia', 'color: #2ED573; font-size: 1rem;');
console.log('%c"Sabor, color y frescura en cada bocado" ✨', 'color: #C850C0; font-style: italic;');
