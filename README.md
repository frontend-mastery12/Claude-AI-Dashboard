# 🛍️ Sinfenazuk — A Full E-Commerce Website Cloned in 10 Minutes Using AI (No Manual Coding)

> A production-ready fashion e-commerce storefront, built entirely by an AI coding agent — guided by a single 1,000+ line instruction file.

Built with **React 19**, **Tailwind CSS 4**, **Vite**, and **React Router DOM v7** — powered by an `AGENTS.md` specification generated with **Claude AI**, and executed end-to-end by **Google Antigravity**.

---

## 📸 Preview

![Sinfenazuk Homepage](https://github.com/frontend-mastery12/Sinfenazuk-AI/blob/b393ce90482cdcfc1250dc8c84c83e36d5270d59/Sinfenazuk-B.png)

---

## 🧠 Overview

**Sinfenazuk** is a fully functional, pixel-accurate clone of a real **Pakistani women's fashion e-commerce site**, rebuilt from scratch by an AI coding agent — **Google Antigravity** — following a structured `AGENTS.md` instruction document authored with Claude AI.

This project is proof of a simple idea: **one great instruction file beats a hundred scattered prompts.** No backend, no database, no manual code — just a clear specification and an AI agent that executes it precisely.

In under 10 minutes and just **4 prompts**, the agent produced a complete storefront: a working shopping cart, multiple product carousels, hover-swap product imagery, a slide-in cart drawer, a dedicated cart page, and full mobile responsiveness.

---

## ✨ Key Features

### 🛒 Full Shopping Cart System
- **Quick Add to Cart** — one-click button slides up on product hover
- **Cart Drawer** — slide-in panel from the right, auto-opens on add
- **Dedicated Cart Page** — full `/cart` route with order summary
- **Quantity Controls** — increment/decrement per item, minimum guard at 1
- **Remove Items** — from both the drawer and the cart page
- **Live Subtotal** — real-time total, with comma-stripped price parsing
- **Cart Badge** — live item count on the header bag icon
- **Persistent Cart** — saved to `localStorage`, restored on page reload

### 🖼️ Product Sections & Carousels
- **Hero Banner** — auto-playing full-width carousel with dot indicators and manual arrows
- **Most Demanding Articles** — circular thumbnail carousel with hover image swap
- **New Arrivals Grid** — responsive 2–4 column grid with sale badges
- **Summer Sale** — horizontal carousel of tall rounded product cards
- **Winter Collection** — circular carousel, 12 products, up to 50% off callout
- **Exclusive Handwork** — editorial 3-column grid with mobile pagination dots
- **Customer Reviews** — image-only horizontal photo carousel

### 🎨 UI & UX Details
- **Hover Image Swap** on every product carousel
- **Animated Ticker** — infinite scroll announcement bar, pauses on hover
- **Mobile Nav Drawer** — full-height slide-in menu with backdrop overlay
- **True Responsive Design** — tested at 375px, 768px, 1024px, and 1280px
- **Minimal Fashion Aesthetic** — black-and-white boutique styling, uppercase typography

### 🏗️ Architecture
- **Fully Component-Based** — every section is an isolated, reusable component
- **Co-located Data** — product arrays live beside their components, not buried in JSX
- **Global Cart State** — `CartContext` + `useContext`, zero prop drilling
- **Clean Routing** — React Router DOM v7 (`/` and `/cart`)
- **Zero External State Libraries** — pure React hooks, nothing else

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | v19 | Component-based UI |
| **Vite** | v8 | Dev server & build tool |
| **Tailwind CSS** | v4 | Utility-first styling |
| **React Router DOM** | v7 | Client-side routing |
| **React Icons** | v5 | All nav, cart, arrow, social & payment icons |

> ⚠️ **Frontend only.** No backend, no database, no auth, no API calls — all product data lives in local JS array files.

---

## 📁 Folder Structure

```
sinfenazuk/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/                   # Product, hero & review images
│   ├── components/
│   │   ├── Header/
│   │   │   ├── TopBar.jsx            # Animated announcement ticker
│   │   │   └── Header.jsx            # Nav, logo, mobile drawer, cart icon
│   │   ├── Hero/
│   │   │   ├── Hero.jsx              # Auto-play image carousel
│   │   │   └── HeroArray.js
│   │   ├── Articles/
│   │   │   ├── Articles.jsx          # Circular thumbnail carousel
│   │   │   └── ArticlesArray.js
│   │   ├── NewProduct/
│   │   │   ├── Product.jsx           # 2–4 col product grid
│   │   │   └── ProductArray.js
│   │   ├── Summer/
│   │   │   ├── SummerSale.jsx
│   │   │   └── SummerArray.js
│   │   ├── Winter/
│   │   │   ├── Winter.jsx
│   │   │   └── WinterArray.js
│   │   ├── Exclusive/
│   │   │   ├── Exclusive.jsx
│   │   │   └── ExclusiveArray.js
│   │   ├── Reviews/
│   │   │   ├── Reviews.jsx
│   │   │   └── ReviewsArray.js
│   │   ├── CartDrawer/
│   │   │   └── CartDrawer.jsx
│   │   └── Cart/
│   │       └── CartPage.jsx
│   ├── context/
│   │   └── CartContext.jsx           # Global cart state + localStorage
│   ├── pages/
│   │   └── Home.jsx                  # Assembles all sections
│   ├── styles/
│   │   ├── TopBar.css
│   │   └── Articles.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── AGENTS.md                         # 1,000+ line AI instruction document
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛒 Cart Logic

**State shape:**
```js
cart = [
  {
    id: Number,
    img: String,
    name: String,
    price: String,      // e.g. "9,999.0" — parsed by stripping non-numeric chars
    discount: String | null,
    qty: Number          // minimum 1
  }
]
```

**Core behavior:**

| Action | Behavior |
|---|---|
| `addToCart(product)` | Increments qty if item exists; appends new item with `qty: 1`. Auto-opens the cart drawer. |
| `removeFromCart(id)` | Removes item from the cart array |
| `updateQty(id, qty)` | Updates quantity, ignores updates below 1 |
| `subtotal` | `cart.reduce((acc, item) => acc + item.qty * parsePrice(item.price), 0)` |
| `totalItemsCount` | `cart.reduce((total, item) => total + item.qty, 0)` |
| Persistence | Stored under `localStorage` key `"sinfenazuk_cart"` — read on load, written on every change |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
```bash
# Clone the repository
git clone https://github.com/frontend-mastery12/Sinfenazuk-AI.git

# Navigate into the project
cd sinfenazuk

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | 0px+ | 2-col grid, stacked sections, hamburger nav |
| `sm` | 640px+ | 3-col product grid |
| `md` | 768px+ | 2-col exclusive, wider carousels |
| `lg` | 1024px+ | 4-col product grid, hover effects active, full nav |
| `xl` | 1280px+ | Constrained containers, desktop hero, side-by-side cart |

---

## 🤖 How This Was Built

This project was built with **Google Antigravity**, an AI coding agent, guided by a **1,000+ line `AGENTS.md`** instruction file written with **Claude AI**.

The entire site was generated from **4 structured prompts**:

| Prompt | What It Built |
|---|---|
| **1** | Project scaffold, Vite config, `CartContext` with `localStorage` |
| **2** | TopBar, Header, Hero carousel, Footer |
| **3** | Articles, New Arrivals, Summer Sale, Winter, Exclusive Handwork |
| **4** | Cart Drawer, Cart Page, Reviews, final `App.jsx` routing |

> 💡 **The real takeaway:** 80% of the effort went into `AGENTS.md`. The prompts are just triggers — the instruction document is the actual product.

---

## 📽️ Watch the Tutorial
🎥 **YouTube:** [I Cloned a Full E-Commerce Website in 10 Minutes Using Google Antigravity](https://youtu.be/ToVZd0HXmek)

## 🌐 Live Preview
🔗 **Netlify:** [https://sinfenazuk.netlify.app/](https://sinfenazuk.netlify.app/)
📎 *Cloned from the original site:* [https://sinfenazuk.com/](https://sinfenazuk.com/)

---

## 👨‍💻 Author

**Frontend Mastery**
- GitHub: [@frontend-mastery12](https://github.com/frontend-mastery12)
- YouTube: [@FrontendMastery](https://youtube.com/@frontend-masterys)

---

## 📄 License

Open source, available under the [MIT License](LICENSE).

---

> ⭐ If this project helped you or saved you time, consider giving it a star — it helps others discover it too!
