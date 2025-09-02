import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Steelseries Sensei 310',
      price: 100,
      originalPrice: 199,
      category: 'Mice',
      compatibales: [
        "Engineered with hyper-durable materials",
        "Guaranteed 60 million click mechanical switches",
        "Lightweight ergonomic design for comfort",
        "Brilliant Prism lighting with 3 zones of 16.8 million beautifully crisp colors",
        "TrueMove Core optical gaming sensor with true 1-to-1 tracking"
      ],
      highlights: [
        "Ultra-durable 60M click switches",
        "True 1-to-1 tracking sensor",
        "Lightweight ergonomic comfort",
        "Customizable RGB lighting"
      ],
      image: '../img/sensei310.jpg',
      description: 'Professional gaming mouse with true move3 sensor',
      stock: 15
    },
    {
      id: 2,
      name: 'steelseries apex pro gen3 ',
      price: 129,
      originalPrice: 159,
      category: 'Keyboards',
      compatibales: [
        "WORLD'S FASTEST KEYBOARD — Push the boundaries with cutting-edge OmniPoint 3.0 Adjustable HyperMagnetic switches and new features",
        "OMNIPOINT 3.0 — More than just fast, our newly redesigned Hall Effect Switch have 20x faster actuation and 11x quicker response time, with 40 levels of adjustable actuation.",
        "GG QUICKSET — Game-ready presets for your favorite games; recommended actuation levels, Rapid Trigger, Protection Mode, Rapid Tap and more with just a few clicks",
        "REDUCED LATENCY — Rapid Trigger and Rapid Tap register keypresses faster for more responsive game play and improved aim",
        "PROTECTION MODE — A SteelSeries exclusive, reduce the sensitivity of surrounding keys when the intended key is pressed, preventing accidental inputs",
        "OLED SMART DISPLAY — Adjust settings on the fly without ever alt-tabbing out of your game and control media"
      ],
      highlights: [
        "Adjustable OmniPoint 3.0 switches",
        "20x faster actuation, reduced latency",
        "Smart OLED display controls",
        "Rapid Trigger & game-ready presets"
      ],
      image: '../img/apex_pro_gen_3.jpg',
      description: 'Mechanical gaming keyboard with Razer switches',
      stock: 8
    },
    {
      id: 3,
      name: 'apex pro mini',
      price: 129,
      originalPrice: 159,
      category: 'Keyboards',
      compatibales: [
        "WORLD'S FASTEST KEYBOARD — Push the boundaries with cutting-edge OmniPoint 3.0 Adjustable HyperMagnetic switches and new features",
        "OMNIPOINT 3.0 — More than just fast, our newly redesigned Hall Effect Switch have 20x faster actuation and 11x quicker response time, with 40 levels of adjustable actuation.",
        "REDUCED LATENCY — Rapid Trigger and Rapid Tap register keypresses faster for more responsive game play and improved aim.",
        "MINI FORM FACTOR, FULL POWER — Mini form factor. Full-size functionality. Premium aluminum top plate. Detachable USB-C",
        "PROTECTION MODE — A SteelSeries exclusive, reduce the sensitivity of surrounding keys when the intended key is pressed, preventing accidental inputs"
      ],
      highlights: [
        "Compact mini design, full power",
        "Adjustable actuation switches",
        "Rapid Trigger for faster gameplay",
        "Premium aluminum & USB-C"
      ],
      image: '../img/apex_pro_mini.jpg',
      description: 'Mechanical gaming keyboard with Razer switches',
      stock: 8
    },
    {
      id: 4,
      name: 'steelseries arctis 9x',
      price: 129,
      originalPrice: 159,
      category: 'headsets',
      compatibales: [
        "Dual Wireless: 2.4G lossless + Bluetooth",
        "Industry-leading hi-res capable speaker drivers",
        "Lightweight aluminum alloy and steel construction",
        "Swappable dual-battery system"
      ],
      highlights: [
        "Dual wireless (2.4GHz + Bluetooth)",
        "Premium hi-res audio drivers",
        "Durable steel/aluminum frame",
        "Swappable battery system"
      ],
      image: '../img/headset.jpg',
      description: ' gaming headset with surround sound',
      stock: 8
    },
    {
      id: 5,
      name: 'aerox 5 wireless',
      price: 89,
      originalPrice: 159,
      category: 'Mice',
      compatibales: [
        "STUNNING RGB — Radiant 3-zone PrismSync RGB shines in 16.8 million configurable colors",
        "ULTRA LIGHTWEIGHT — Purposefully designed holey shell reduces weight to 74g for effortless, fast gameplay",
        "AQUABARRIER™ — Mouse interiors are shielded from water splashes, dust, and dirt, technology rated IP54",
        "9 PROGRAMMABLE BUTTONS — Natural comfort with fully customizable buttons which include a side panel and an up/down flick switch",
        "PERFORMANCE TO OUTLAST YOU — Extensive 180-hour battery life enabled by lag-free Quantum 2.0 Wireless technology with 2.4GHz for gaming and Bluetooth 5.0 connection"
      ],
      highlights: [
        "Ultra-lightweight 74g design",
        "180h wireless battery life",
        "Water/dust resistant (IP54)",
        "9 programmable buttons + RGB"
      ],
      image: '../img/aerox5.jpg',
      description: ' gaming mouse with ultra-light design',
      stock: 8
    },
    {
      id: 6,
      name: 'call of duty mousepad',
      price: 129,
      originalPrice: 159,
      category: 'Mice',
      compatibales: [
        "Officially licensed Call of Duty®: Modern Warfare® III art gaming mousepad",
        "Exclusive QcK micro-woven cloth for maximum control",
        "Optimized for low and high CPI tracking movements",
        "Durable and washable for easy cleaning",
        "450 mm x 400 mm x 2mm"
      ],
      highlights: [
        "COD® Modern Warfare III design",
        "Micro-woven cloth for precision",
        "Anti-slip + washable surface"
      ],
      image: '../img/codpad.jpg',
      description: 'call of duty themed mousepad with anti-slip base',
      stock: 8
    },
    {
      id: 7,
      slug: 'm1',
      name: 'M1',
      price: 79,
      originalPrice: 99,
      category: 'Mice',
      compatibales: [
        "STUNNING RGB — Radiant 3-zone PrismSync RGB shines in 16.8 million configurable colors",
        "ULTRA LIGHTWEIGHT — Purposefully designed holey shell reduces weight to 74g for effortless, fast gameplay",
        "AQUABARRIER™ — Mouse interiors are shielded from water splashes, dust, and dirt, technology rated IP54",
        "9 PROGRAMMABLE BUTTONS — Natural comfort with fully customizable buttons which include a side panel and an up/down flick switch",
        "PERFORMANCE TO OUTLAST YOU — Extensive 180-hour battery life enabled by lag-free Quantum 2.0 Wireless technology with 2.4GHz for gaming and Bluetooth 5.0 connection"
      ],
      highlights: [
        "Ultra-lightweight esports design",
        "180h wireless battery life",
        "9 programmable buttons",
        "Water/dust resistant"
      ],
      image: '../img/M1.jpg',
      description: 'High-performance gaming mouse for esports.',
      stock: 20
    },
    {
      id: 8,
      slug: 'pods',
      name: 'Pods',
      price: 199,
      originalPrice: '',
      category: 'headsets',
      compatibales: [
        "High-speed 2.4GHz wireless plus Quick-Switch Bluetooth 5.3",
        "Active Noise Cancellation with transparency mode",
        "100+ PS5 audio presets with the Arctis Companion App for iOS & Android",
        "Immersive 360° Spatial Audio on PlayStation, PC, mobile",
        "10-hour battery with Qi Wireless Charging Case for 40h total."
      ],
      highlights: [
        "Low-latency 2.4GHz + Bluetooth",
        "Active Noise Cancellation",
        "360° Spatial Audio",
        "40h battery with wireless charging"
      ],
      image: '../img/pods.jpg',
      description: 'Wireless gaming earbuds with low latency.',
      stock: 25
    },
    {
      id: 9,
      slug: 'apexpad',
      name: 'Apexpad',
      price: 11,
      originalPrice: 24,
      category: 'Mousepads',
      compatibales: [
        "Officially licensed Apex Legends™ art gaming mousepad",
        "Exclusive QcK micro-woven cloth for maximum control",
        "Optimized for low and high CPI tracking movements",
        "Durable and washable for easy cleaning",
        "450 mm x 400 mm x 2mm"
      ],
      highlights: [
        "Apex Legends™ edition design",
        "Large surface (450×400mm)",
        "Durable, washable cloth"
      ],
      image: '../img/apexpad.jpg',
      description: 'Large mousepad for precise control.',
      stock: 30
    },
    {
      id: 10,
      slug: 'apex_pro_tkl',
      name: 'Apex Pro TKL',
      price: 141,
      originalPrice: 189,
      category: 'Keyboards',
      compatibales: [
        "FULLY CUSTOMIZABLE & STUPIDLY FAST with OmniPoint 2.0 Adjustable HyperMagnetic switches",
        "WORLD’S FASTEST KEYBOARD — 20x faster actuation, 11x faster response than traditional mechanical keyboards",
        "RAPID TRIGGER — Eradicate latency arising from the physical movement of the switch through dynamic activation and deactivation of keys based on travel distance rather than a fixed point in the key travel",
        "2-IN-1 ACTION KEYS — Program two different actions to the same key, such as walking with a light touch or sprinting with a deep press",
        "Esports-ready TKL form factor. Full-size functionality. Premium aluminum top plate. Detachable USB-C"
      ],
      highlights: [
        "Fast OmniPoint 2.0 switches",
        "Esports-ready TKL form factor",
        "2-in-1 action keys",
        "Premium aluminum build"
      ],
      image: '../img/apex_pro_.jpg',
      description: 'Tenkeyless mechanical keyboard for pro gamers.',
      stock: 12
    },
    {
      id: 11,
      slug: 'Stratus+',
      name: 'Stratus+',
      price: 41,
      originalPrice: 59,
      category: 'controllers',
      compatibales: [
        "Game anywhere on an Android™ or Chromebook device",
        "Included slim phone mount adjusts to Android mobile devices for smartphone gaming",
        "90+ hours of mobile gameplay with a fast charge function",
        "High-performance hardware engineered with ALPS thumbsticks and Hall Effect triggers"
      ],
      highlights: [
        "Works with Android & Chromebook",
        "90h battery + fast charge",
        "High-precision thumbsticks",
        "Adjustable mobile mount"
      ],
      image: '../img/controller.jpg',
      description: 'Tenkeyless mechanical keyboard for pro gamers.',
      stock: 12
    },
    {
      id: 12,
      slug: 'Arctis Nova Pro Wireless',
      name: 'Arctis Nova Pro Wireless',
      price: 309,
      originalPrice: 379,
      category: 'headsets',
      compatibales: [
        "Dual USB connections support PC, Mac, PlayStation, Switch, VR & more",
        "Nova Pro Acoustic System with Premium Hi-Res Capable Drivers and Sonar Software",
        "Active Noise Cancellation (ANC) with Transparency Mode",
        "Hot-swap between 2 batteries for unlimited playing time",
        "Simultaneous 2.4GHz & Bluetooth mixes game & mobile audio"
      ],
      highlights: [
        "Dual USB & Bluetooth connections",
        "Hi-Res Nova Pro acoustic drivers",
        "Active Noise Cancellation",
        "Hot-swappable dual batteries"
      ],
      image: '../img/arctis_nova_pro.jpg',
      description: 'Tenkeyless mechanical keyboard for pro gamers.',
      stock: 12
    }
  ],
  status: 'idle',
  error: null,
  filteredCategory: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push({
        ...action.payload,
        id: state.items.length > 0 
          ? Math.max(...state.items.map(p => p.id)) + 1 
          : 1
      });
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(
        product => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(
        product => product.id !== action.payload
      );
    },
    reduceProductStock: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.items.find(p => p.id === productId);
      if (product) {
        product.stock -= quantity;
      }
    },
    restoreProductStock: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.items.find(p => p.id === productId);
      if (product) {
        product.stock += quantity;
      }
    },
    filterByCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
    clearCategoryFilter: (state) => {
      state.filteredCategory = null;
    },
    setLoading: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    }
  }
});

export const { 
  addProduct,
  updateProduct,
  removeProduct,
  reduceProductStock,
  restoreProductStock,
  filterByCategory,
  clearCategoryFilter,
  setLoading,
  setError
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.items;
export const selectProductById = (state, productId) => 
  state.products.items.find(product => product.id === productId);
export const selectFilteredProducts = (state) => {
  const { items, filteredCategory } = state.products;
  return filteredCategory 
    ? items.filter(product => product.category === filteredCategory) 
    : items;
};
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectProductCategories = (state) => {
  const categories = new Set(state.products.items.map(p => p.category));
  return Array.from(categories);
};

export default productsSlice.reducer;
