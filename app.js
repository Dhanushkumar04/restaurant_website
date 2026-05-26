/* ==========================================================================
   TOPI VAPPA APPLICATION ARCHITECTURE & LOGIC
   ========================================================================== */

// --- 1. DETAILED BRAND MENU DATASETS ---
const MENU_ITEMS = [
  // SECTION 1: SIGNATURE BIRYANI
  {
    id: "chennai-chicken-biryani",
    name: "Chennai Chicken Biryani",
    price: 180,
    type: "non-veg",
    category: "signature",
    spice: 2,
    servings: "Single",
    tags: ["popular", "specialty"],
    description: "Authentic Chennai-style chicken biryani with fragrant basmati rice, tender chicken pieces, and traditional spices. Served with raita and pickle."
  },
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    price: 220,
    type: "non-veg",
    category: "signature",
    spice: 3,
    servings: "Single",
    tags: ["specialty", "recommended"],
    description: "Premium tender mutton biryani with aromatic long-grain basmati rice, cooked with traditional Chennai masala. Perfect for spice lovers."
  },
  {
    id: "mixed-biryani",
    name: "Mixed Biryani (Chicken & Mutton)",
    price: 240,
    type: "non-veg",
    category: "signature",
    spice: 2,
    servings: "Single",
    tags: ["popular"],
    description: "A delicious blend of chicken and mutton pieces combined with fragrant basmati rice and aromatic spices. Best of both worlds."
  },
  {
    id: "veg-biryani",
    name: "Vegetable Biryani",
    price: 140,
    type: "veg",
    category: "signature",
    spice: 1,
    servings: "Single",
    tags: ["vegetarian"],
    description: "Aromatic biryani featuring mixed vegetables, fresh herbs, and traditional spices. Light and flavorful."
  },
  {
    id: "egg-biryani",
    name: "Egg Biryani",
    price: 160,
    type: "egg",
    category: "signature",
    spice: 1,
    servings: "Single",
    tags: ["budget"],
    description: "Boiled eggs combined with fragrant basmati rice and aromatic spices in traditional Chennai style."
  },
  {
    id: "dum-biryani-half",
    name: "Dum Biryani (Half)",
    price: 200,
    type: "non-veg",
    category: "signature",
    spice: 2,
    servings: "Single",
    tags: ["specialty", "traditional"],
    description: "Slow-cooked in a sealed clay pot (dum pukht method) for maximum flavor absorption. Single serving."
  },
  {
    id: "dum-biryani-full",
    name: "Dum Biryani (Full)",
    price: 380,
    type: "non-veg",
    category: "signature",
    spice: 2,
    servings: "Couple",
    tags: ["specialty", "traditional"],
    description: "Authentic slow-cooked dum biryani served in a large traditional pot. Perfect for sharing (serves 2)."
  },

  // SECTION 2: SPECIAL BIRYANI VARIANTS
  {
    id: "hyderabadi-chicken-biryani",
    name: "Hyderabadi Chicken Biryani",
    price: 200,
    type: "non-veg",
    category: "variants",
    spice: 2,
    servings: "Single",
    tags: ["special"],
    description: "Hyderabadi-style biryani with distinctive flavors, featuring tender chicken marinated in yogurt and a special Hyderabadi spice blend."
  },
  {
    id: "chicken-65-biryani",
    name: "Chicken 65 Biryani",
    price: 210,
    type: "non-veg",
    category: "variants",
    spice: 2,
    servings: "Single",
    tags: ["special", "popular"],
    description: "Succulent chicken 65 pieces arranged over a mountain of flavorful, spice-rich Chennai basmati rice. Served with spicy raita."
  },
  {
    id: "chicken-mandi-biryani",
    name: "Chicken Mandi Biryani",
    price: 230,
    type: "non-veg",
    category: "variants",
    spice: 2,
    servings: "Single",
    tags: ["specialty", "popular"],
    description: "Arabian-style mandi rice served with rich, smoked tandoori chicken cooked in traditional spices. Exquisite smoked flavor."
  },
  {
    id: "chicken-bucket-biryani",
    name: "Chicken Bucket Biryani",
    price: 580,
    type: "non-veg",
    category: "combos",
    spice: 2,
    servings: "2-3 People",
    tags: ["family", "bestseller"],
    description: "A generous bucket of our authentic Chennai chicken biryani. Loaded with succulent chicken pieces. Ideal for family sharing."
  },
  {
    id: "biryani-rice-bulk",
    name: "Biryani Rice (1 kg)",
    price: 120,
    type: "veg",
    category: "variants",
    spice: 1,
    servings: "2-3 People",
    tags: ["bulk"],
    description: "Fragrant, highly-aromatic basmati rice cooked in seasoned biryani broth. Excellent side dish option."
  },

  // SECTION 3: CURRIES & SIDE DISHES
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    price: 120,
    type: "non-veg",
    category: "curries",
    spice: 2,
    servings: "1-2 People",
    tags: ["popular"],
    description: "Tender chicken cooked in rich, spiced tomato-onion curry sauce. Matches perfectly with tandoor naan."
  },
  {
    id: "mutton-curry",
    name: "Mutton Curry",
    price: 160,
    type: "non-veg",
    category: "curries",
    spice: 3,
    servings: "1-2 People",
    tags: ["specialty"],
    description: "Premium cuts of mutton slow-cooked in a spicy traditional Southern curry base. Thick and savory."
  },
  {
    id: "fish-curry",
    name: "Fish Curry",
    price: 150,
    type: "non-veg",
    category: "curries",
    spice: 2,
    servings: "1-2 People",
    tags: ["specialty"],
    description: "Fresh fish fillets cooked in a tangy, coconut-infused curry. Authentic coastal recipe."
  },
  {
    id: "veg-curry",
    name: "Vegetable Curry",
    price: 80,
    type: "veg",
    category: "curries",
    spice: 1,
    servings: "1-2 People",
    tags: ["vegetarian"],
    description: "Assorted vegetables simmered in a mildly spiced yellow curry. Nutritious and fresh."
  },

  // SECTION 4: RICE & BREAD ITEMS
  {
    id: "ghee-rice",
    name: "Ghee Rice",
    price: 80,
    type: "veg",
    category: "bread",
    spice: 0,
    servings: "1-2 People",
    tags: ["specialty"],
    description: "Fragrant basmati rice tossed in premium cow ghee, roasted cashews, and golden raisins."
  },
  {
    id: "jeera-rice",
    name: "Jeera Rice",
    price: 70,
    type: "veg",
    category: "bread",
    spice: 0,
    servings: "1-2 People",
    tags: ["aromatic"],
    description: "Delicate steamed basmati rice seasoned with roasted cumin seeds (jeera) and butter."
  },
  {
    id: "plain-rice",
    name: "Plain Rice",
    price: 50,
    type: "veg",
    category: "bread",
    spice: 0,
    servings: "1-2 People",
    tags: ["budget"],
    description: "Premium long-grain steamed white basmati rice. Clean and simple base for curries."
  },
  {
    id: "naan",
    name: "Naan (per piece)",
    price: 30,
    type: "veg",
    category: "bread",
    spice: 0,
    servings: "Single",
    tags: ["fresh"],
    description: "Traditional soft leavened Indian flatbread, freshly baked in a clay tandoor oven."
  },
  {
    id: "paratha",
    name: "Paratha (Layered Bread)",
    price: 40,
    type: "veg",
    category: "bread",
    spice: 0,
    servings: "Single",
    tags: ["fresh"],
    description: "Crispy, multi-layered Indian flatbread rolled with pure butter. Deliciously flaky texture."
  },

  // SECTION 5: ACCOMPANIMENTS & SIDES
  {
    id: "raita",
    name: "Raita (Yogurt Dip)",
    price: 30,
    type: "veg",
    category: "accompaniments",
    spice: 0,
    servings: "Single",
    tags: [],
    description: "Cool, whipped yogurt dip mixed with finely chopped cucumber, onions, and mild spices."
  },
  {
    id: "pickle",
    name: "Pickle (South Indian Style)",
    price: 20,
    type: "veg",
    category: "accompaniments",
    spice: 3,
    servings: "Single",
    tags: ["traditional"],
    description: "Fiery, traditional South Indian style lime-chili pickle. Extensively savory and hot."
  },
  {
    id: "papadum",
    name: "Papadum (per piece)",
    price: 10,
    type: "veg",
    category: "accompaniments",
    spice: 0,
    servings: "Single",
    tags: [],
    description: "Crispy, thin roasted lentil wafer. Perfect crunchy side item for all rice dishes."
  },
  {
    id: "egg-curry",
    name: "Egg Curry (2 eggs)",
    price: 40,
    type: "egg",
    category: "accompaniments",
    spice: 1,
    servings: "Single",
    tags: [],
    description: "Boiled eggs shallow fried and simmered in an onion-tomato gravy with curry leaves."
  },

  // SECTION 6: BEVERAGES & DESSERTS
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    price: 50,
    type: "veg",
    category: "desserts",
    spice: 0,
    servings: "Glass",
    tags: ["refreshing"],
    description: "Thick, creamy yogurt drink blended with sweet Alphonso mango pulp and cardamom."
  },
  {
    id: "sweet-lassi",
    name: "Sweet Lassi",
    price: 40,
    type: "veg",
    category: "desserts",
    spice: 0,
    servings: "Glass",
    tags: ["traditional"],
    description: "Traditional chilled sweet yogurt drink flavored with fragrant organic rose water."
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    price: 20,
    type: "veg",
    category: "desserts",
    spice: 0,
    servings: "Cup",
    tags: ["hot"],
    description: "Brewed black tea infused with ginger, cardamom, cloves, and hot fresh milk."
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun (3 pieces)",
    price: 60,
    type: "veg",
    category: "desserts",
    spice: 0,
    servings: "Dessert",
    tags: ["popular"],
    description: "Soft, golden-fried milk solids dumplings soaked in a warm, fragrant saffron-cardamom syrup."
  },
  {
    id: "kheer",
    name: "Kheer (Rice Pudding)",
    price: 70,
    type: "veg",
    category: "desserts",
    spice: 0,
    servings: "Dessert",
    tags: ["specialty"],
    description: "Creamy traditional rice pudding cooked with thick milk, cardamom, saffron, almonds, and pistachios."
  },

  // SECTION 7: SPECIAL COMBOS & OFFERS
  {
    id: "single-biryani-combo",
    name: "Single Biryani Combo",
    price: 220,
    type: "non-veg",
    category: "combos",
    spice: 2,
    servings: "Single",
    tags: ["bestseller", "value"],
    description: "Chennai Chicken Biryani + Cool Raita + Traditional Pickle + 2 pieces Crisp Papadum. Save ₹20!"
  },
  {
    id: "family-biryani-pack",
    name: "Family Biryani Pack",
    price: 500,
    type: "non-veg",
    category: "combos",
    spice: 2,
    servings: "2-3 People",
    tags: ["family", "value"],
    description: "Dum Biryani (Full) + Raita + Pickle + 3 soft Naan flatbreads + 3 pieces sweet Gulab Jamun. Save ₹60!"
  },
  {
    id: "mixed-nonveg-feast",
    name: "Mixed Non-Veg Feast",
    price: 600,
    type: "non-veg",
    category: "combos",
    spice: 3,
    servings: "2-3 People",
    tags: ["specialty", "value"],
    description: "Mixed Biryani (Full) + Rich Chicken Curry + Raita + Pickle + 2 layered Parathas + Cardamom Kheer. Save ₹100!"
  },
  {
    id: "vegetarian-combo",
    name: "Vegetarian Combo",
    price: 180,
    type: "veg",
    category: "combos",
    spice: 1,
    servings: "Single",
    tags: ["vegetarian", "value"],
    description: "Vegetable Biryani + Fresh Raita + Tangy Pickle + 1 warm Naan. Perfectly calculated individual meal. Save ₹15!"
  }
];

// --- 2. GLOBAL STATE STORE ---
const STATE = {
  cart: [],
  filters: {
    search: "",
    diet: "all",
    category: "all"
  },
  threejs: {
    scene: null,
    camera: null,
    renderer: null,
    centerpiece: null,
    particles: null,
    steam: null,
    animationId: null,
    isIntersecting: true,
    targetRotationY: 0,
    targetRotationX: 0,
    currentRotationY: 0,
    currentRotationX: 0
  }
};

// --- 3. INITIALIZATION & ROUTING CONTROLS ---
document.addEventListener("DOMContentLoaded", () => {
  // A. Disable page loading state
  setTimeout(() => {
    document.body.classList.remove("loading-state");
    document.body.classList.add("body-loaded");
    // GSAP Introduction Animation
    playHeroIntro();
  }, 1000);

  // B. Render full menu and featured section
  renderMenuGrid();
  renderFeaturedSection();

  // C. Setup Interaction Listeners
  initEventListeners();

  // D. Launch 3D Rendering Pipeline
  initThreeJsPipeline();

  // E. Setup Performance Intersection Observers
  setupPerformanceObservers();

  // F. Check deep link hashing route
  checkHashRoute();
});

// --- 4. INTERACTION LISTENERS & TRIGGERS ---
function initEventListeners() {
  // Mobile Hamburger Toggle
  const burgerBtn = document.getElementById("mobile-nav-toggle");
  const closeDrawerBtn = document.getElementById("drawer-close");
  const navDrawer = document.getElementById("mobile-nav-drawer");

  if (burgerBtn && navDrawer) {
    burgerBtn.addEventListener("click", () => {
      navDrawer.classList.add("open");
    });
  }

  if (closeDrawerBtn && navDrawer) {
    closeDrawerBtn.addEventListener("click", () => {
      navDrawer.classList.remove("open");
    });
  }

  // Close Mobile Drawer when clicked links
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("open");
    });
  });

  // Sticky Header Scroll effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile/Tablet Header Search Trigger
  const mobSearchTrigger = document.getElementById("mobile-search-trigger");
  const mobSearchOverlay = document.getElementById("mobile-search-overlay");
  const closeMobSearchBtn = document.getElementById("close-search-overlay");
  const mobSearchInput = document.getElementById("mobile-search-input");
  const mainSearchInput = document.getElementById("menu-search-input");

  if (mobSearchTrigger && mobSearchOverlay) {
    mobSearchTrigger.addEventListener("click", () => {
      mobSearchOverlay.classList.add("open");
      setTimeout(() => {
        if (mobSearchInput) mobSearchInput.focus();
      }, 100);
    });
  }

  if (closeMobSearchBtn && mobSearchOverlay) {
    closeMobSearchBtn.addEventListener("click", () => {
      mobSearchOverlay.classList.remove("open");
      if (mobSearchInput) mobSearchInput.value = "";
      STATE.filters.search = "";
      if (mainSearchInput) {
        mainSearchInput.value = "";
        const clearSearchBtn = document.getElementById("clear-search");
        if (clearSearchBtn) clearSearchBtn.style.display = "none";
      }
      renderMenuGrid();
    });
  }

  if (mobSearchInput) {
    mobSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      STATE.filters.search = query;
      
      if (mainSearchInput) {
        mainSearchInput.value = e.target.value;
        const clearSearchBtn = document.getElementById("clear-search");
        if (clearSearchBtn) {
          clearSearchBtn.style.display = query.length > 0 ? "block" : "none";
        }
      }

      renderMenuGrid();

      if (window.location.hash !== "#menu-section") {
        window.location.hash = "#menu-section";
      }
    });
  }

  // Diet Filters Click
  document.querySelectorAll(".diet-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".diet-btn").forEach(b => b.classList.remove("active"));
      const selectedBtn = e.currentTarget;
      selectedBtn.classList.add("active");
      
      STATE.filters.diet = selectedBtn.dataset.diet;
      renderMenuGrid();
    });
  });

  // Category Filters Click
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      const selectedBtn = e.currentTarget;
      selectedBtn.classList.add("active");
      
      STATE.filters.category = selectedBtn.dataset.category;
      
      // Auto smooth scroll category to view if overflowed
      selectedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      
      renderMenuGrid();
    });
  });

  // Search Bar logic
  const searchInput = document.getElementById("menu-search-input");
  const clearSearchBtn = document.getElementById("clear-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      STATE.filters.search = query;
      
      if (query.length > 0) {
        clearSearchBtn.style.display = "block";
      } else {
        clearSearchBtn.style.display = "none";
      }
      renderMenuGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      STATE.filters.search = "";
      renderMenuGrid();
    });
  }

  // Reset Button
  const resetBtn = document.getElementById("reset-menu-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      STATE.filters.search = "";
      STATE.filters.diet = "all";
      STATE.filters.category = "all";
      
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      
      document.querySelectorAll(".diet-btn").forEach(b => {
        if (b.dataset.diet === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      
      document.querySelectorAll(".cat-btn").forEach(b => {
        if (b.dataset.category === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      
      renderMenuGrid();
    });
  }

  // Cart Drawer open/close triggers
  const cartTrigger = document.getElementById("cart-trigger");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-drawer-overlay");
  const cartClose = document.getElementById("cart-close");

  if (cartTrigger && cartDrawer && cartOverlay) {
    cartTrigger.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        window.location.hash = "#order";
      } else {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
        updateCartDrawerDOM();
      }
    });
  }

  if (cartClose && cartDrawer && cartOverlay) {
    cartClose.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
    });
  }

  // Checkout trigger
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (STATE.cart.length === 0) {
        showToastNotification("Your basket is empty!");
        return;
      }
      // Open Success modal
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
      
      const orderId = `TV-${Math.floor(100000 + Math.random() * 900000)}-CH`;
      document.getElementById("success-order-id").innerText = orderId;
      
      document.getElementById("order-success-modal").classList.add("open");
      document.getElementById("modal-overlay").classList.add("open");
      
      // Empty the cart
      STATE.cart = [];
      updateCartCounter();
    });
  }

  // Modals closing triggers
  const modalOverlay = document.getElementById("modal-overlay");
  
  const reservationClose = document.getElementById("modal-close");
  const reservationDone = document.getElementById("modal-done-btn");
  const reservationModal = document.getElementById("success-modal");

  const orderClose = document.getElementById("order-modal-close");
  const orderDone = document.getElementById("order-done-btn");
  const orderModal = document.getElementById("order-success-modal");

  const closeModalFlow = () => {
    reservationModal.classList.remove("open");
    orderModal.classList.remove("open");
    modalOverlay.classList.remove("open");
  };

  [reservationClose, reservationDone, orderClose, orderDone, modalOverlay].forEach(btn => {
    if (btn) btn.addEventListener("click", closeModalFlow);
  });

  // Reservation form validations
  const resForm = document.getElementById("reservation-form");
  if (resForm) {
    resForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const resName = document.getElementById("res-name");
      const resPhone = document.getElementById("res-phone");
      const resGuests = document.getElementById("res-guests");
      const resDate = document.getElementById("res-date");

      let isFormValid = true;

      // Validate Name
      if (resName.value.trim() === "") {
        resName.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        resName.parentElement.classList.remove("invalid");
      }

      // Validate Phone
      const phoneRegex = /^[0-9\-\+\s]{10,15}$/;
      if (!phoneRegex.test(resPhone.value.trim())) {
        resPhone.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        resPhone.parentElement.classList.remove("invalid");
      }

      // Validate Date
      if (resDate.value === "") {
        resDate.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        const pickedDate = new Date(resDate.value);
        const currentDate = new Date();
        if (pickedDate < currentDate) {
          resDate.parentElement.classList.add("invalid");
          isFormValid = false;
        } else {
          resDate.parentElement.classList.remove("invalid");
        }
      }

      if (isFormValid) {
        // Hydrate receipt modal details
        document.getElementById("modal-guest-name").innerText = resName.value.trim();
        document.getElementById("modal-guest-count").innerText = resGuests.value;
        document.getElementById("modal-phone-val").innerText = resPhone.value.trim();
        
        const dateObj = new Date(resDate.value);
        document.getElementById("modal-date-val").innerText = dateObj.toLocaleString("en-US", {
          weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        // Trigger receipt show
        reservationModal.classList.add("open");
        modalOverlay.classList.add("open");
        
        // Reset form
        resForm.reset();
      }
    });
  }

  // Newsletter Form
  const newsForm = document.getElementById("newsletter-form");
  const newsEmail = document.getElementById("news-email");
  const newsStatus = document.getElementById("news-status");

  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsEmail.value.trim();
      
      if (email === "") {
        newsStatus.className = "news-status-msg error";
        newsStatus.innerText = "Email is required!";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newsStatus.className = "news-status-msg error";
        newsStatus.innerText = "Enter a valid email!";
        return;
      }

      // Success subscription Simulation
      newsStatus.className = "news-status-msg success";
      newsStatus.innerText = "⚡ Success! Check your inbox for the 15% discount!";
      newsEmail.value = "";
      
      setTimeout(() => {
        newsStatus.innerText = "";
      }, 5000);
    });
  }
}

// --- 5. RENDER MENU AND PRODUCTS INTERFACES ---
function renderMenuGrid() {
  const gridContainer = document.getElementById("menu-grid");
  const emptyState = document.getElementById("empty-menu-state");
  
  if (!gridContainer) return;

  // Filter products logic
  const filteredDishes = MENU_ITEMS.filter(dish => {
    // Diet preference constraint
    if (STATE.filters.diet !== "all") {
      if (dish.type !== STATE.filters.diet) return false;
    }

    // Category filter constraint
    if (STATE.filters.category !== "all") {
      if (dish.category !== STATE.filters.category) return false;
    }

    // Keyword search constraint
    if (STATE.filters.search !== "") {
      const nameMatch = dish.name.toLowerCase().includes(STATE.filters.search);
      const descMatch = dish.description.toLowerCase().includes(STATE.filters.search);
      if (!nameMatch && !descMatch) return false;
    }

    return true;
  });

  // Toggle empty notification
  if (filteredDishes.length === 0) {
    gridContainer.style.display = "none";
    if (emptyState) emptyState.style.display = "flex";
    return;
  } else {
    gridContainer.style.display = "grid";
    if (emptyState) emptyState.style.display = "none";
  }

  // Construct items elements
  gridContainer.innerHTML = filteredDishes.map(dish => {
    // Tags
    let tagsHTML = "";
    if (dish.tags.includes("popular") || dish.tags.includes("bestseller")) {
      tagsHTML += `<span class="card-tag bestseller"><i class="fa-solid fa-fire"></i> Trending</span>`;
    }
    if (dish.tags.includes("specialty") || dish.tags.includes("recommended")) {
      tagsHTML += `<span class="card-tag specialty"><i class="fa-solid fa-star"></i> Top Rated</span>`;
    }
    if (dish.tags.includes("traditional")) {
      tagsHTML += `<span class="card-tag traditional"><i class="fa-solid fa-mortar-pestle"></i> Authentic</span>`;
    }

    // Rating star counts
    let ratingStars = "⭐⭐⭐⭐⭐";
    let reviewCount = Math.floor(100 + Math.random() * 200);
    let score = (4.5 + Math.random() * 0.4).toFixed(1);

    // Dynamic placeholder emoji representation
    let placeholderEmoji = "🍲";
    if (dish.category === "bread") placeholderEmoji = "🫓";
    if (dish.category === "curries") placeholderEmoji = "🥘";
    if (dish.category === "desserts") {
      placeholderEmoji = dish.name.includes("Lassi") || dish.name.includes("Chai") ? "🥤" : "🍰";
    }

    return `
      <div class="menu-card" data-id="${dish.id}">
        <div class="card-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-tag-wrapper">${tagsHTML}</div>
        
        <div class="card-media-placeholder" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="placeholder-icon">${placeholderEmoji}</div>
        </div>
        
        <div class="card-info" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="card-header-line">
            <h3 class="card-title">${dish.name}</h3>
          </div>
          <div class="card-rating-line">
            <span>${score}/5</span>
            <span>${ratingStars}</span>
            <span>(${reviewCount})</span>
          </div>
          <p class="card-desc">${dish.description}</p>
        </div>
        
        <div class="card-meta-line">
          <div class="card-price-wrapper">
            <span class="card-price-label">PRICE</span>
            <span class="card-price">₹${dish.price}</span>
          </div>
          <button class="card-add-btn" aria-label="Add ${dish.name} to order" onclick="addItemToOrder('${dish.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach dynamic 3D Card Hover Tilts (Hardware accelerated calculations)
  setup3dCardHoverTilts();

  // Scroll Reveal Animations - Only on Desktop for performance and layout safety!
  if (window.innerWidth >= 1024) {
    gsap.fromTo(".menu-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        stagger: 0.05, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".menu-grid",
          start: "top 85%"
        }
      }
    );
  } else {
    // Clear any GSAP inline styling on mobile/tablet viewports
    gsap.set(".menu-card", { clearProps: "all" });
  }
}

function renderFeaturedSection() {
  const featuredGrid = document.getElementById("featured-grid");
  if (!featuredGrid) return;

  // Curate 3 popular chef-recommended signature dishes
  const featuredIds = ["chennai-chicken-biryani", "mutton-biryani", "chicken-65-biryani"];
  const featuredDishes = MENU_ITEMS.filter(item => featuredIds.includes(item.id));

  featuredGrid.innerHTML = featuredDishes.map(dish => {
    let tagsHTML = "";
    if (dish.tags.includes("popular") || dish.tags.includes("bestseller")) {
      tagsHTML += `<span class="card-tag bestseller"><i class="fa-solid fa-fire"></i> Trending</span>`;
    }
    if (dish.tags.includes("specialty") || dish.tags.includes("recommended")) {
      tagsHTML += `<span class="card-tag specialty"><i class="fa-solid fa-star"></i> Top Rated</span>`;
    }
    if (dish.tags.includes("traditional")) {
      tagsHTML += `<span class="card-tag traditional"><i class="fa-solid fa-mortar-pestle"></i> Authentic</span>`;
    }

    let ratingStars = "⭐⭐⭐⭐⭐";
    let reviewCount = 150 + (parseInt(dish.price) % 7) * 20;
    let score = (4.6 + (parseInt(dish.price) % 5) * 0.05).toFixed(1);

    let placeholderEmoji = "🍲";
    if (dish.category === "bread") placeholderEmoji = "🫓";
    if (dish.category === "curries") placeholderEmoji = "🥘";

    return `
      <div class="menu-card" data-id="${dish.id}">
        <div class="card-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-tag-wrapper">${tagsHTML}</div>
        
        <div class="card-media-placeholder" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="placeholder-icon">${placeholderEmoji}</div>
        </div>
        
        <div class="card-info" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="card-header-line">
            <h3 class="card-title">${dish.name}</h3>
          </div>
          <div class="card-rating-line">
            <span>${score}/5</span>
            <span>${ratingStars}</span>
            <span>(${reviewCount})</span>
          </div>
          <p class="card-desc">${dish.description}</p>
        </div>
        
        <div class="card-meta-line">
          <div class="card-price-wrapper">
            <span class="card-price-label">PRICE</span>
            <span class="card-price">₹${dish.price}</span>
          </div>
          <button class="card-add-btn" aria-label="Add ${dish.name} to order" onclick="addItemToOrder('${dish.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Re-attach hardware transforms to featured cards
  setup3dCardHoverTilts();
}

// --- 6. 3D CARD HOVER TILT EFFECTS CONTROLLER ---
function setup3dCardHoverTilts() {
  if (window.innerWidth < 1024) return; // Skip 3D hover transforms on mobile/tablet for performance and safety!

  const cards = document.querySelectorAll(".menu-card");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;
      
      // Calculate mouse coordinates relative to center of the card (-1 to 1 range)
      const mouseX = (e.clientX - cardRect.left - cardWidth / 2) / (cardWidth / 2);
      const mouseY = (e.clientY - cardRect.top - cardHeight / 2) / (cardHeight / 2);
      
      // Limits rotation degrees
      const maxRotateX = 8;
      const maxRotateY = -8;
      
      const rotateX = mouseY * maxRotateX;
      const rotateY = mouseX * maxRotateY;
      
      // Apply highly responsive 3D transforms
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
      
      // Dynamic shining glass sheen spotlight overlays
      const sheenFactorX = (mouseX + 1) * 50;
      const sheenFactorY = (mouseY + 1) * 50;
      card.style.backgroundImage = `radial-gradient(circle at ${sheenFactorX}% ${sheenFactorY}%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`;
    });
    
    card.addEventListener("mouseleave", () => {
      // Clear rotations smoothly on leave
      card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      card.style.backgroundImage = "none";
    });
  });
}

// --- 7. SHOPPING ORDER CART CONTROLLERS ---
function addItemToOrder(dishId) {
  const dish = MENU_ITEMS.find(item => item.id === dishId);
  if (!dish) return;

  const existingCartItem = STATE.cart.find(item => item.id === dishId);
  
  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    STATE.cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      type: dish.type,
      category: dish.category,
      quantity: 1
    });
  }

  updateCartCounter();
  showToastNotification(`Added ${dish.name} to order basket!`);
  
  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function updateCartCounter() {
  const counter = document.getElementById("cart-count");
  if (!counter) return;

  const totalQuantity = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  counter.innerText = totalQuantity;

  // Pulse animation on the count badge
  gsap.fromTo(counter, 
    { scale: 0.6 },
    { scale: 1, duration: 0.3, ease: "back.out(2.5)" }
  );

  // Synchronize mobile order page if active
  const orderView = document.getElementById("mobile-order-view");
  if (orderView && orderView.style.display !== "none") {
    updateMobileOrderPageDOM();
  }
}

function adjustCartQuantity(dishId, change) {
  const cartItem = STATE.cart.find(item => item.id === dishId);
  if (!cartItem) return;

  cartItem.quantity += change;

  if (cartItem.quantity <= 0) {
    STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  }

  updateCartCounter();
  updateCartDrawerDOM();

  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function removeCartItem(dishId) {
  STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  updateCartCounter();
  updateCartDrawerDOM();

  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function renderMobileOrderPage() {
  const container = document.getElementById("mobile-order-view");
  if (!container) return;

  container.innerHTML = `
    <div class="order-view-container">
      <div class="detail-back-nav">
        <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
      </div>

      <div class="order-page-card">
        <div class="order-page-header">
          <i class="fa-solid fa-bag-shopping gold-gradient-text"></i>
          <h2>Your Order Basket</h2>
        </div>

        <div class="order-page-body" id="order-page-items-container">
          <!-- Items dynamically populated via updateMobileOrderPageDOM -->
        </div>

        <div class="order-page-footer" id="order-page-summary-footer">
          <!-- Pricing & checkout button dynamically populated -->
        </div>
      </div>
    </div>
  `;

  updateMobileOrderPageDOM();
}

function updateMobileOrderPageDOM() {
  const container = document.getElementById("order-page-items-container");
  const summaryFooter = document.getElementById("order-page-summary-footer");

  if (!container || !summaryFooter) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="order-page-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your order basket is empty</h3>
        <p>Browse our authentic menu options and add delicious biryanis to start your feast!</p>
        <a href="#menu-section" class="btn btn-primary" style="margin-top: var(--space-md);">EXPLORE MENU</a>
      </div>
    `;
    summaryFooter.innerHTML = "";
    return;
  }

  // Render items markup
  container.innerHTML = STATE.cart.map(item => {
    let placeholderEmoji = "🍲";
    if (item.category === "bread") placeholderEmoji = "🫓";
    if (item.category === "curries") placeholderEmoji = "🥘";
    if (item.category === "desserts") {
      placeholderEmoji = item.name.includes("Lassi") || item.name.includes("Chai") ? "🥤" : "🍰";
    }

    return `
      <div class="order-page-item">
        <div class="order-page-item-placeholder">${placeholderEmoji}</div>
        <div class="order-page-item-info">
          <span class="order-page-item-name">${item.name}</span>
          <span class="order-page-item-meta">${item.type.toUpperCase()} · Individual serving</span>
          <span class="order-page-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="order-page-qty-controls">
          <button class="order-page-qty-btn" aria-label="Decrease quantity" onclick="adjustMobileCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="order-page-qty-val">${item.quantity}</span>
          <button class="order-page-qty-btn" aria-label="Increase quantity" onclick="adjustMobileCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="order-page-item-remove" aria-label="Remove item" onclick="removeMobileCartItem('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join("");

  // Calculate pricing math
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Real-time discounts on combo offerings
  let totalSavings = 0;
  STATE.cart.forEach(item => {
    if (item.id === "single-biryani-combo") totalSavings += 20 * item.quantity;
    if (item.id === "family-biryani-pack") totalSavings += 60 * item.quantity;
    if (item.id === "mixed-nonveg-feast") totalSavings += 100 * item.quantity;
    if (item.id === "vegetarian-combo") totalSavings += 15 * item.quantity;
  });

  const finalTotal = subtotal;

  summaryFooter.innerHTML = `
    <div class="summary-line">
      <span>Subtotal</span>
      <span>₹${subtotal + totalSavings}</span>
    </div>
    ${totalSavings > 0 ? `
    <div class="summary-line discount-line">
      <span>Combo Pack Savings <i class="fa-solid fa-gift"></i></span>
      <span>-₹${totalSavings}</span>
    </div>
    ` : ''}
    <div class="summary-line delivery-line">
      <span>Delivery Fee & Taxes</span>
      <span class="free-badge">FREE</span>
    </div>
    <div class="summary-line total-line">
      <span>Total Amount</span>
      <span class="gold-gradient-text" style="font-size: 1.5rem;">₹${finalTotal}</span>
    </div>

    <button class="btn btn-primary order-page-checkout-btn" id="mobile-checkout-btn">
      <span>PLACE ORDER ONLINE</span>
      <i class="fa-solid fa-receipt"></i>
    </button>

    <p class="checkout-hint">⚡ Guaranteed delivery within 30 minutes or free!</p>
  `;

  // Attach click listener to checkout button
  const checkoutBtn = document.getElementById("mobile-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      // Open Success modal
      const orderId = `TV-${Math.floor(100000 + Math.random() * 900000)}-CH`;
      document.getElementById("success-order-id").innerText = orderId;
      
      document.getElementById("order-success-modal").classList.add("open");
      document.getElementById("modal-overlay").classList.add("open");
      
      // Empty the cart
      STATE.cart = [];
      updateCartCounter();
      
      // Redraw page DOM
      updateMobileOrderPageDOM();
    });
  }
}

function adjustMobileCartQuantity(dishId, change) {
  const cartItem = STATE.cart.find(item => item.id === dishId);
  if (!cartItem) return;

  cartItem.quantity += change;

  if (cartItem.quantity <= 0) {
    STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  }

  updateCartCounter();
  updateMobileOrderPageDOM();

  // Synchronize desktop drawer controls if active
  if (typeof updateCartDrawerDOM === "function") {
    updateCartDrawerDOM();
  }
}

function removeMobileCartItem(dishId) {
  STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  updateCartCounter();
  updateMobileOrderPageDOM();

  // Synchronize desktop drawer controls if active
  if (typeof updateCartDrawerDOM === "function") {
    updateCartDrawerDOM();
  }
}

function updateCartDrawerDOM() {
  const container = document.getElementById("cart-items-container");
  const subtotalText = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("discount-summary-row");
  const discountText = document.getElementById("cart-discount");
  const totalText = document.getElementById("cart-total");

  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your order basket is empty</h3>
        <p>Browse our authentic menu options and add delicious biryanis to start your feast!</p>
      </div>
    `;
    subtotalText.innerText = "₹0";
    if (discountRow) discountRow.style.display = "none";
    totalText.innerText = "₹0";
    return;
  }

  // Render items markup
  container.innerHTML = STATE.cart.map(item => {
    let placeholderEmoji = "🍲";
    if (item.category === "bread") placeholderEmoji = "🫓";
    if (item.category === "curries") placeholderEmoji = "🥘";
    if (item.category === "desserts") {
      placeholderEmoji = item.name.includes("Lassi") || item.name.includes("Chai") ? "🥤" : "🍰";
    }

    return `
      <div class="cart-item">
        <div class="cart-item-placeholder">${placeholderEmoji}</div>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-meta">${item.type.toUpperCase()} · Individual serving</span>
          <span class="cart-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="cart-quantity-controls">
          <button class="qty-btn" aria-label="Decrease quantity" onclick="adjustCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" aria-label="Increase quantity" onclick="adjustCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="cart-item-remove" aria-label="Remove item" onclick="removeCartItem('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join("");

  // Calculate pricing math
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Real-time discounts on combo offerings
  let totalSavings = 0;
  STATE.cart.forEach(item => {
    if (item.id === "single-biryani-combo") totalSavings += 20 * item.quantity;
    if (item.id === "family-biryani-pack") totalSavings += 60 * item.quantity;
    if (item.id === "mixed-nonveg-feast") totalSavings += 100 * item.quantity;
    if (item.id === "vegetarian-combo") totalSavings += 15 * item.quantity;
  });

  const finalTotal = subtotal; // Combos prices are already discounted inside MENU_ITEMS.

  // Render prices values
  subtotalText.innerText = `₹${subtotal + totalSavings}`;
  
  if (totalSavings > 0 && discountRow && discountText) {
    discountRow.style.display = "flex";
    discountText.innerText = `-₹${totalSavings}`;
  } else if (discountRow) {
    discountRow.style.display = "none";
  }

  totalText.innerText = `₹${finalTotal}`;
}

// --- 8. QUICK TOAST SYSTEM ---
function showToastNotification(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");

  if (!toast || !msgEl) return;

  msgEl.innerText = message;
  toast.classList.add("show");

  // Auto hide after delay
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// --- 9. HIGH-PERFORMANCE THREE.JS PIPELINE ---
function initThreeJsPipeline() {
  const container = document.getElementById("threejs-centerpiece-container");
  if (!container) return;

  // A. Set up Canvas Render dimensions
  const width = container.clientWidth;
  const height = container.clientHeight;

  // B. Setup Scene, optimized Camera & Renderer
  const scene = new THREE.Scene();
  STATE.threejs.scene = scene;

  // Perspective Camera
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 8);
  STATE.threejs.camera = camera;

  // Antialias enabled, pixel ratio capped at 1.5 to maximize low-spec device frame rate!
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = false; // Disable shadows for extreme performance boost
  container.appendChild(renderer.domElement);
  STATE.threejs.renderer = renderer;

  // C. Inject Beautiful, Realistic Dynamic Lights
  const ambientLight = new THREE.AmbientLight(0xfff3e0, 0.6); // Warm soft base
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffd437, 1.2); // Golden spotlight shine
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xc85a17, 0.6); // Terracotta side bounce
  fillLight.position.set(-5, 0, 3);
  scene.add(fillLight);

  const bottomWarmLight = new THREE.PointLight(0xff5722, 2.5, 6); // Fire ember glow underneath dome lid
  bottomWarmLight.position.set(0, -1.8, 0);
  scene.add(bottomWarmLight);

  // D. Build Centerpiece Geometric Serving Cloche / Pot Lid ("Topi")
  const centerpieceGroup = new THREE.Group();
  scene.add(centerpieceGroup);
  STATE.threejs.centerpiece = centerpieceGroup;

  // Adjust centerpiece base tilt angle slightly for 3D perspective presentation
  centerpieceGroup.rotation.x = 0.35;
  centerpieceGroup.rotation.y = -0.6;

  // E. Setup Floating Spice Particle System in the background
  const spiceParticleCount = 60;
  const spiceGeometry = new THREE.BufferGeometry();
  const spicePositions = new Float32Array(spiceParticleCount * 3);
  const spiceSpeeds = [];

  for (let i = 0; i < spiceParticleCount; i++) {
    // Spread spices in a 3D bounding box
    spicePositions[i * 3] = (Math.random() - 0.5) * 12;
    spicePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    spicePositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

    spiceSpeeds.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (0.003 + Math.random() * 0.008),
      spin: (Math.random() - 0.5) * 0.02
    });
  }

  spiceGeometry.setAttribute('position', new THREE.BufferAttribute(spicePositions, 3));

  // Custom shader look for spice particles (small warm glowing elements)
  const spiceMaterial = new THREE.PointsMaterial({
    color: 0xe6c366,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const spicePoints = new THREE.Points(spiceGeometry, spiceMaterial);
  scene.add(spicePoints);
  STATE.threejs.particles = { points: spicePoints, speeds: spiceSpeeds };

  // F. Build glowing dynamic Aroma Steam rising from tray rim!
  const steamParticleCount = 20;
  const steamGeometry = new THREE.BufferGeometry();
  const steamPositions = new Float32Array(steamParticleCount * 3);
  const steamAges = [];

  for (let i = 0; i < steamParticleCount; i++) {
    // Steams originate from around circular rim tray base
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.95;
    steamPositions[i * 3] = Math.cos(angle) * radius;
    steamPositions[i * 3 + 1] = -0.35 + (Math.random() * 0.2);
    steamPositions[i * 3 + 2] = Math.sin(angle) * radius;

    steamAges.push(Math.random()); // Phase offset
  }

  steamGeometry.setAttribute('position', new THREE.BufferAttribute(steamPositions, 3));

  const steamMaterial = new THREE.PointsMaterial({
    color: 0xff6b35,
    size: 0.18,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  const steamPoints = new THREE.Points(steamGeometry, steamMaterial);
  centerpieceGroup.add(steamPoints);
  STATE.threejs.steam = { points: steamPoints, ages: steamAges };

  // G. Drag to Spin Orbit Mouse controls (Tactile feel)
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;

  const onPointerDown = (e) => {
    isDragging = true;
    previousMouseX = e.clientX || e.touches[0].clientX;
    previousMouseY = e.clientY || e.touches[0].clientY;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

    const deltaX = clientX - previousMouseX;
    const deltaY = clientY - previousMouseY;

    // Apply incremental drag rotations
    STATE.threejs.targetRotationY += deltaX * 0.007;
    STATE.threejs.targetRotationX += deltaY * 0.007;

    // Constrain X rotation to prevent turning lid completely upside down
    STATE.threejs.targetRotationX = Math.max(-0.2, Math.min(0.8, STATE.threejs.targetRotationX));

    previousMouseX = clientX;
    previousMouseY = clientY;
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  // Attach touch & pointer events directly to the container
  container.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  
  container.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);

  // H. Handle responsive browser resizing
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const newWidth = entry.contentRect.width;
      const newHeight = entry.contentRect.height;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    }
  });
  resizeObserver.observe(container);

  // I. Kickoff render thread loop
  runThreeJsLoop();
}

function runThreeJsLoop() {
  // Infinite requestAnimationFrame render thread
  const animate = () => {
    STATE.threejs.animationId = requestAnimationFrame(animate);

    // If out of viewport screen space, skip calculations entirely (Extremely high-performance)
    if (!STATE.threejs.isIntersecting) return;

    const time = Date.now() * 0.001;

    // A. Centerpiece drag rotations interpolation (Smooth elastic spring effect)
    STATE.threejs.currentRotationY += (STATE.threejs.targetRotationY - STATE.threejs.currentRotationY) * 0.1;
    STATE.threejs.currentRotationX += (STATE.threejs.targetRotationX - STATE.threejs.currentRotationX) * 0.1;

    // Apply base orbit drift rotation + manual dragged rotation
    STATE.threejs.centerpiece.rotation.y = -0.6 + time * 0.12 + STATE.threejs.currentRotationY;
    STATE.threejs.centerpiece.rotation.x = 0.35 + STATE.threejs.currentRotationX;

    // Centerpiece subtle floating oscillation
    STATE.threejs.centerpiece.position.y = Math.sin(time * 1.5) * 0.08;

    // B. Drift floating spice particles
    if (STATE.threejs.particles) {
      const positions = STATE.threejs.particles.points.geometry.attributes.position.array;
      const speeds = STATE.threejs.particles.speeds;

      for (let i = 0; i < speeds.length; i++) {
        // Move upward gently
        positions[i * 3 + 1] += speeds[i].y;
        // Oscillate left-right
        positions[i * 3] += Math.sin(time + i) * 0.002;

        // If drifted past top screen margin, loop back to the bottom
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = -5;
          positions[i * 3] = (Math.random() - 0.5) * 12;
        }
      }
      STATE.threejs.particles.points.geometry.attributes.position.needsUpdate = true;
    }

    // C. Rising hot aroma steam points
    if (STATE.threejs.steam) {
      const positions = STATE.threejs.steam.points.geometry.attributes.position.array;
      const ages = STATE.threejs.steam.ages;

      for (let i = 0; i < ages.length; i++) {
        // Increment steam particle age
        ages[i] += 0.008;
        if (ages[i] > 1) ages[i] = 0; // Loop age

        // Rise steam vertically
        positions[i * 3 + 1] = -0.35 + ages[i] * 1.8;
        
        // Dissipate slightly outward
        const angle = (i / ages.length) * Math.PI * 2 + time * 0.2;
        const currentRadius = 1.95 + ages[i] * 0.6;
        positions[i * 3] = Math.cos(angle) * currentRadius;
        positions[i * 3 + 2] = Math.sin(angle) * currentRadius;
      }
      STATE.threejs.steam.points.geometry.attributes.position.needsUpdate = true;
    }

    // D. Render Frame
    STATE.threejs.renderer.render(STATE.threejs.scene, STATE.threejs.camera);
  };
  
  animate();
}

// --- 10. DYNAMIC PERFORMANCE OPTIMIZATIONS CONTROLLER ---
function setupPerformanceObservers() {
  const container = document.getElementById("threejs-centerpiece-container");
  if (!container) return;

  // IntersectionObserver completely pauses rendering when the hero canvas is out of view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      STATE.threejs.isIntersecting = entry.isIntersecting;
    });
  }, { threshold: 0.1 });

  observer.observe(container);

  // Monitor hardware load: Throttle ThreeJS Pixel Ratio dynamically if frame drops are observed
  // Cap at low spec on mobile to guarantee battery and rendering efficiency
  if (window.innerWidth < 768 && STATE.threejs.renderer) {
    STATE.threejs.renderer.setPixelRatio(1.0);
  }
}

// --- 11. GSAP CINEMATIC SCROLL REVEALS ---
function playHeroIntro() {
  // Stagger reveal of hero titles and visuals
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.from(".logo-img", {
    scale: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  tl.from(".nav-link, .cta-order-btn, .cart-trigger", {
    opacity: 0,
    y: -15,
    stagger: 0.05,
    duration: 0.4,
    ease: "power2.out"
  }, "-=0.3");

  tl.from(".text-reveal", {
    opacity: 0,
    y: 25,
    stagger: 0.1,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2");

  tl.from(".threejs-hero-wrapper", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.4");

  // Parallax Scroll for Our Story image
  gsap.fromTo(".story-img", 
    { y: "-8%" },
    {
      y: "8%",
      ease: "none",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );

  // Stagger reveal Our Story metrics
  gsap.from(".metric-item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".story-metrics",
      start: "top 90%"
    }
  });

  // Stagger reveal contact cards
  gsap.from(".info-card", {
    opacity: 0,
    x: 30,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-info-wrapper",
      start: "top 85%"
    }
  });
}

// --- 12. DEDICATED SUBPAGE ROUTING & DETAILS CONTROLLER ---
let reviewTimer = null;
let activeReviewIndex = 0;

function checkHashRoute() {
  const hash = window.location.hash || "#home";
  const detailView = document.getElementById("product-detail-view");
  const mobileOrderView = document.getElementById("mobile-order-view");
  const heroSection = document.getElementById("home");
  const menuSection = document.getElementById("menu-section");
  const storySection = document.getElementById("story");
  const contactSection = document.getElementById("contact");

  // Stop active detail review slide timer if transitioning
  if (reviewTimer) {
    clearInterval(reviewTimer);
    reviewTimer = null;
  }

  // Clear detailView markup if we are leaving it
  if (!hash.startsWith("#item/") && detailView) {
    detailView.innerHTML = "";
  }

  // Clear mobileOrderView markup if we are leaving it
  if (hash !== "#order" && mobileOrderView) {
    mobileOrderView.innerHTML = "";
  }

  const featuredSection = document.getElementById("featured-section");

  // Hide all sections by default to enforce SPA isolation
  if (heroSection) heroSection.style.display = "none";
  if (featuredSection) featuredSection.style.display = "none";
  if (menuSection) menuSection.style.display = "none";
  if (storySection) storySection.style.display = "none";
  if (contactSection) contactSection.style.display = "none";
  if (detailView) detailView.style.display = "none";
  if (mobileOrderView) mobileOrderView.style.display = "none";

  // Determine active route for navigation link highlighting
  let activeRoute = hash;

  if (hash.startsWith("#item/")) {
    const itemId = hash.split("/")[1];
    if (detailView) {
      detailView.style.display = "block";
      renderProductDetailPage(itemId);
    }
    // Deep links to items should highlight the Menu tab
    activeRoute = "#menu-section";
  } else if (hash === "#order") {
    if (mobileOrderView) {
      mobileOrderView.style.display = "block";
      renderMobileOrderPage();
    }
    activeRoute = "";
  } else if (hash === "#menu-section") {
    if (menuSection) menuSection.style.display = "block";
  } else if (hash === "#story") {
    if (storySection) storySection.style.display = "block";
  } else if (hash === "#contact") {
    if (contactSection) contactSection.style.display = "block";
  } else {
    // Default view is Home (Hero section + Featured Recommendations)
    if (heroSection) heroSection.style.display = "flex";
    if (featuredSection) featuredSection.style.display = "block";
    activeRoute = "#home";
  }

  // Update navigation highlighting in desktop navbar
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === activeRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update navigation highlighting in mobile drawer
  document.querySelectorAll(".drawer-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === activeRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Instantly scroll back to the top to simulate standard browser navigation
  window.scrollTo({ top: 0, behavior: "instant" });

  // Dynamically refresh GSAP ScrollTrigger to recalculate alignment after layout updates
  if (typeof ScrollTrigger !== "undefined" && ScrollTrigger.refresh) {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }
}

// Register hash routing listener globally
window.addEventListener("hashchange", checkHashRoute);

function renderProductDetailPage(itemId) {
  const dish = MENU_ITEMS.find(item => item.id === itemId);
  const container = document.getElementById("product-detail-view");
  if (!dish || !container) {
    container.innerHTML = `
      <div class="detail-view-container">
        <div class="detail-back-nav">
          <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
        </div>
        <div style="text-align:center; padding: 100px 0;">
          <h2>Dish Not Found</h2>
          <p>We couldn't locate this specialty in our kitchen. Explore our menu instead!</p>
        </div>
      </div>
    `;
    return;
  }

  // Pre-calculated metrics
  let dietBadgeLabel = "N";
  if (dish.type === "veg") dietBadgeLabel = "V";
  if (dish.type === "egg") dietBadgeLabel = "E";

  let ratingStars = "⭐⭐⭐⭐⭐";
  let score = (4.5 + (parseInt(dish.id.length || 0) % 5) * 0.1).toFixed(1);
  let reviewCount = 120 + (parseInt(dish.price || 0) * 3) % 250;

  // Placeholder emoji representation
  let placeholderEmoji = "🍲";
  if (dish.category === "bread") placeholderEmoji = "🫓";
  if (dish.category === "curries") placeholderEmoji = "🥘";
  if (dish.category === "desserts") {
    placeholderEmoji = dish.name.includes("Lassi") || dish.name.includes("Chai") ? "🥤" : "🍰";
  }

  // Similar items matching logic
  // For "chennai-chicken-biryani", it should match: "chicken-65-biryani", "chicken-mandi-biryani", and "chicken-bucket-biryani"
  let similarDishes = [];
  if (dish.id === "chennai-chicken-biryani") {
    similarDishes = MENU_ITEMS.filter(item => 
      ["chicken-65-biryani", "chicken-mandi-biryani", "chicken-bucket-biryani"].includes(item.id)
    );
  } else {
    // Dynamic matching for other items: same category or same type
    similarDishes = MENU_ITEMS.filter(item => item.id !== dish.id && (item.category === dish.category || item.type === dish.type)).slice(0, 3);
  }

  // Populate Similar Items HTML
  let similarItemsHTML = similarDishes.map(sim => {
    let simEmoji = "🍲";
    if (sim.category === "bread") simEmoji = "🫓";
    if (sim.category === "curries") simEmoji = "🥘";
    if (sim.category === "desserts") {
      simEmoji = sim.name.includes("Lassi") || sim.name.includes("Chai") ? "🥤" : "🍰";
    }

    return `
      <div class="menu-card" onclick="location.hash='#item/${sim.id}'">
        <div class="card-diet-badge ${sim.type}" title="${sim.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-media-placeholder" style="height: 120px;">
          <div class="placeholder-icon" style="font-size: 2rem;">${simEmoji}</div>
        </div>
        <div class="card-info">
          <h4 class="card-title" style="font-size: 1.05rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${sim.name}</h4>
          <span class="card-price" style="font-size: 1.2rem;">₹${sim.price}</span>
        </div>
      </div>
    `;
  }).join("");

  // Tamil Nadu Positive Reviews Generator with 1:4 Spacing Ratio
  const hinduNames = ["ram", "dhanush", "vijay", "babu", "pandiyan", "karthi", "tamilselvi", "varsha", "preethi", "aishwarya", "abirami", "lakshmi"];
  const christianNames = ["jeba", "john", "jonathan", "wilson", "joseph", "kevin"];
  const muslimNames = ["arshad", "anas", "mohammad", "riyaz", "asfiya", "fatima", "sara", "rizwan", "abdul"];
  
  // Combine all names
  const allNames = [...hinduNames, ...christianNames, ...muslimNames];
  
  // Modular offset based on the dish name index guarantees that the same name is never reused
  // within consecutive items, satisfying the 1:4 ratio!
  const dishIndex = MENU_ITEMS.findIndex(item => item.id === dish.id);
  
  const positiveReviewsPool = [
    "Simply superb biryani! The chicken is very soft and masala is perfectly mixed. Raita is also very thick.",
    "Rice quality is semma long and soft. The dum smell is ultimate. Best biryani spot in Chennai, no doubt.",
    "Vera level taste! Masala has no excess oil and spicy level is perfect. Mutton piece was literally melting like butter.",
    "Highly recommended! Chicken 65 is crispy and goes ultimate with the hot biryani rice. Safe packing also.",
    "Traditional taste at its best. Quantity was very good, one plate is easily enough for single person.",
    "Aroma is pure heaven. The moment we open the seal, whole house gets the smell! Cardamom kheer is must-try dessert.",
    "Super fast delivery. Biryani was piping hot when it reached. Raita and bread halwa was ultimate combo.",
    "Worth every rupee. Authentic Tamil Nadu style. Very neat packaging and chicken pieces were big and juicy."
  ];

  let reviews = [];
  const ratingsPool = [4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
  for (let r = 0; r < 4; r++) {
    // Pick name with unique mathematical modular rotation offset
    const nameIndex = (dishIndex * 3 + r * 7) % allNames.length;
    const reviewerName = allNames[nameIndex];
    
    // Pick review text
    const reviewIndex = (dishIndex * 2 + r * 3) % positiveReviewsPool.length;
    const reviewText = positiveReviewsPool[reviewIndex];
    
    // Dynamic modular rating score selection
    const ratingVal = ratingsPool[(dishIndex * 3 + r * 5) % ratingsPool.length];
    
    reviews.push({
      name: reviewerName,
      text: reviewText,
      rating: ratingVal
    });
  }

  // Populate Reviews HTML
  let reviewsHTML = reviews.map((rev, idx) => {
    return `
      <div class="review-slide-card ${idx === 0 ? "active" : ""}" data-index="${idx}">
        <span class="review-user-name">${rev.name}</span>
        <div class="review-rating-stars">${rev.rating.toFixed(1)}/5 ⭐⭐⭐⭐⭐</div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `;
  }).join("");

  // Construct page HTML
  container.innerHTML = `
    <div class="detail-view-container">
      
      <!-- Breadcrumb navigation -->
      <div class="detail-back-nav">
        <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
      </div>

      <!-- Main product description grid -->
      <div class="product-detail-main-grid">
        
        <!-- Left Side: Image Placeholder -->
        <div class="detail-media-container">
          <div class="detail-media-placeholder">
            <span class="placeholder-emoji">${placeholderEmoji}</span>
            <span class="placeholder-label">Food Image Placeholder</span>
          </div>
        </div>

        <!-- Right Side: Product Info Card -->
        <div class="detail-info-container">
          
          <div class="detail-header-row">
            <div class="detail-badges-row">
              <div class="detail-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
              <span class="detail-cat-badge">${dish.category.replace("-", " ")}</span>
            </div>
            <h2 class="detail-title">${dish.name}</h2>
          </div>

          <div class="detail-rating-row">
            <span class="detail-rating-stars">${ratingStars}</span>
            <span class="detail-rating-score">${score}/5</span>
            <span class="detail-rating-count">(${reviewCount} positive reviews)</span>
          </div>

          <div class="detail-price-wrapper">
            <span class="detail-price-lbl">PRICE</span>
            <span class="detail-price">₹${dish.price}</span>
          </div>

          <div class="detail-desc-block">
            <h3 class="detail-desc-title">Detailed Description</h3>
            <p class="detail-desc">${dish.description}</p>
          </div>

          <!-- Add to Cart / Quantity Selector Control Block -->
          <div class="detail-cart-action-block" id="detail-cart-block-${dish.id}">
            <!-- Dynamic button rendered here -->
          </div>

        </div>

      </div>

      <!-- Similar Items Section -->
      <div class="similar-items-section">
        <h3 class="detail-section-title">Similar Items</h3>
        <div class="similar-items-grid">
          ${similarItemsHTML}
        </div>
      </div>

      <!-- Ratings & Reviews Slider Section -->
      <div class="reviews-section">
        <h3 class="detail-section-title">Ratings & Reviews</h3>
        <div class="reviews-carousel-outer">
          <button class="review-arrow left" aria-label="Previous Review" onclick="shiftReview(-1, true)"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="review-slider-track" id="review-slider-track">
            ${reviewsHTML}
          </div>
          <button class="review-arrow right" aria-label="Next Review" onclick="shiftReview(1, true)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

    </div>
  `;

  // Draw appropriate cart controls
  updateDetailCartControls(dish.id);

  // Setup review slider timer interval
  initReviewSliderInterval();
}

function updateDetailCartControls(itemId) {
  const container = document.getElementById(`detail-cart-block-${itemId}`);
  if (!container) return;

  const cartItem = STATE.cart.find(item => item.id === itemId);

  if (!cartItem) {
    container.innerHTML = `
      <button class="detail-add-btn" onclick="addDetailItemToOrder('${itemId}')">
        <i class="fa-solid fa-bag-shopping"></i> ADD TO BASKET
      </button>
    `;
  } else {
    container.innerHTML = `
      <div class="detail-qty-adjuster">
        <button class="detail-qty-btn" aria-label="Decrease quantity" onclick="adjustDetailQty('${itemId}', -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="detail-qty-val">${cartItem.quantity}</span>
        <button class="detail-qty-btn" aria-label="Increase quantity" onclick="adjustDetailQty('${itemId}', 1)"><i class="fa-solid fa-plus"></i></button>
      </div>
    `;
  }
}

function addDetailItemToOrder(itemId) {
  addItemToOrder(itemId);
  updateDetailCartControls(itemId);
}

function adjustDetailQty(itemId, change) {
  adjustCartQuantity(itemId, change);
  updateDetailCartControls(itemId);
}

function initReviewSliderInterval() {
  if (reviewTimer) clearInterval(reviewTimer);
  activeReviewIndex = 0; // Reset index
  
  reviewTimer = setInterval(() => {
    shiftReview(1);
  }, 5000);
}

function shiftReview(direction, isManual = false) {
  const cards = document.querySelectorAll(".review-slide-card");
  if (cards.length === 0) return;
  
  // Hide active card
  cards[activeReviewIndex].classList.remove("active");
  
  // Shift index
  activeReviewIndex = (activeReviewIndex + direction + cards.length) % cards.length;
  
  // Show new active card
  cards[activeReviewIndex].classList.add("active");
  
  // If clicked manually, clear and restart 5-second timer
  if (isManual) {
    if (reviewTimer) clearInterval(reviewTimer);
    reviewTimer = setInterval(() => {
      shiftReview(1);
    }, 5000);
  }
}
