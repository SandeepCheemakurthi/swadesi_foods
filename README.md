## Swadesi Foods – Authentic Andhra Sweets & Snacks

Swadesi Foods is a single-page React application showcasing authentic Andhra sweets, snacks, pickles, and powders.  
Customers can browse products by category and place orders quickly through WhatsApp.

The project is built with **Create React App**, **React Router**, and a small set of reusable UI components.

---

## Features

- **Home page**
  - Hero section highlighting *Fresh | Homemade | Authentic* Andhra items.
  - Image carousel (`AdvancedCarousel`) with responsive auto-sliding banners.
  - “Shop by Category” grid that deep-links into the products page with the selected category.

- **Products listing**
  - Category tabs (`Products` page) powered by `categories` and `products` from `src/data/products.js`.
  - URL-based filtering via `?category=...` query params, so category selection is shareable.
  - Each product is rendered via `ProductCard` with image, name, and price.
  - Clicking any product opens WhatsApp with a pre-filled order message for that item.

- **Product details**
  - `ProductDetails` page resolves a product by `id` from the URL.
  - Shows product image, description, and price.
  - Includes an “Order on WhatsApp” button that opens a pre-filled chat.

- **Navigation & layout**
  - `Navbar` with links to Home, Products, and Contact, including a mobile hamburger menu.
  - Global styling via `src/styles/global.css` and basic layout shell in pages.
  - `Footer` with simple site copyright.

- **Contact page**
  - WhatsApp contact pills for primary and secondary numbers.
  - Store address details and a clickable map marker image that opens Google Maps.

---

## Tech stack

- **React** (Create React App)
- **React Router** for SPA routing (`/home`, `/products`, `/product/:id`, `/contact`)
- **React Icons** for icons in navigation and contact UI
- **Axios** is available as a dependency (not heavily used yet)
- **gh-pages** for static hosting of the production build

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm start
```

- Opens the app on `http://localhost:3000/`.
- Hot reload is enabled; changes in `src` will automatically refresh the page.

### 3. Run tests

```bash
npm test
```

Runs the Create React App test runner in watch mode.

### 4. Build for production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

---

## Deployment

This project is configured to deploy to **GitHub Pages** using the `gh-pages` package.

- The `homepage` in `package.json` is set to `https://www.swadesi.food/`.
- The `deploy` script builds the app and publishes the `build` folder.

### Deploying

```bash
npm run deploy
```

This command will:

- Run `npm run build`.
- Publish the built files to the **`gh-pages`** branch of the repository.

After deployment completes, the static website files are served from the **`gh-pages`** branch, which is the branch where the website files are hosted.
