# e-plantShopping

**Paradise Nursery** is a shopping cart application for an online houseplant shop, built as the final project for the IBM/Coursera *Developing Front-End Apps with React* course.

## Overview

Paradise Nursery lets users browse a variety of houseplants organized into categories, add plants to a shopping cart, and manage their cart before checkout. The app is built with **React** and uses **Redux Toolkit** for global state management of the shopping cart.

## Features

- **Landing page** with a background image, company welcome message, an "About Us" section, and a **Get Started** button that links to the product listing page.
- **Navigation bar** (visible on the product listing and cart pages) with links to the landing page, the plants listing, and the cart. The cart icon displays the total number of items dynamically.
- **Product listing page** grouping plants into multiple categories (Air Purifying, Aromatic Fragrant, Medicinal, and Low Maintenance), each showing a thumbnail, name, description, and price. Each plant has an **Add to Cart** button that adds the item, updates the cart, and becomes disabled/grayed out (labeled "Added to Cart") once added.
- **Shopping cart page** displaying a card for each plant type with a thumbnail, unit price, subtotal, quantity increment/decrement buttons, and a **Delete** button. It shows the total number of plants and the total cost, and includes **Continue Shopping** and **Checkout** buttons.

## Tech Stack

- React 18
- Redux Toolkit (`@reduxjs/toolkit`) and React Redux
- Vite (build tooling)

## Project Structure

```
src/
├── App.jsx         # Landing page + routing between landing and product list
├── App.css         # Landing page styling (background image, etc.)
├── AboutUs.jsx     # Company description / About Us section
├── ProductList.jsx # Product listing page with navbar and cart icon
├── CartItem.jsx    # Shopping cart page
├── CartSlice.jsx   # Redux slice: addItem, removeItem, updateQuantity
├── store.js        # Redux store configuration
└── main.jsx        # App entry point wrapped in Redux Provider
```

## Getting Started

Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

To preview a production build:

```bash
npm run build
npm run preview
```

## Deployment

The app can be deployed to GitHub Pages:

```bash
npm run deploy
```

The `base` path in `vite.config.js` is set to `/e-plantShopping` for GitHub Pages hosting.
