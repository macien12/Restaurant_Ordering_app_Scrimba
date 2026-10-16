# 🥟 Bar Mleczny — Restaurant Ordering App

A responsive restaurant ordering app inspired by a traditional Polish **bar mleczny** (milk bar). Built with **HTML, CSS, and vanilla JavaScript** as part of the [Scrimba Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack).

This project started as a restaurant ordering exercise. I customized the original design and completed all three stretch goals: **change the theme**, **introduce a meal-deal discount**, and **allow customers to rate their experience**.

## ✨ Features

- **Polish-inspired menu** featuring Pierogi, Schabowy, and Kompot, rendered dynamically from JavaScript data.
- **Interactive basket** — add multiple items, remove individual items, and see the total update immediately.
- **15% meal-deal discount** — automatically applies to the *entire order* when the basket contains **Kompot and either Pierogi or Schabowy**. The discount disappears if the qualifying items are removed.
- **Demo checkout** — a payment-details form displays a personalized order confirmation after submission.
- **Five-star rating UI** — select a rating, see the stars fill and change color, optionally type feedback, and display a thank-you confirmation.
- **Responsive layout** with mobile-friendly adjustments, custom typography, restaurant imagery, and a favicon.

## 🛠️ Tech stack

- **HTML5** — page structure, forms, and `data-*` attributes.
- **CSS3** — layout with Flexbox, responsive media queries, modal styling, and interactive states.
- **JavaScript (ES modules)** — rendering, application state, event handling, basket calculations, and UI updates.
- **Font Awesome** — interface icons and rating stars.
- **Google Fonts** — Rubik and Rubik Spray Paint.
- **Vite** — local development tooling provided by the project starter.

## 🧠 What I learned

### DOM manipulation and event handling

I practiced selecting and updating elements with `getElementById()`, `querySelectorAll()`, `innerHTML`, `textContent`, `style`, and `classList`.

A major learning point was **event delegation**: using a single `document.addEventListener('click', ...)` handler to respond to different actions through `data-*` attributes. I also learned the difference between the event object (`e`), the clicked element (`e.target`), and values such as `e.target.dataset.rating`.

### JavaScript array methods

| Method | How I used it |
| --- | --- |
| `.map()` | Generate HTML for menu items and basket entries. |
| `.find()` | Retrieve the selected menu item when the user clicks the add button. |
| `.findIndex()` | Locate a basket item so it can be removed with `.splice()`. |
| `.reduce()` | Calculate the sum of item prices. |
| `.some()` | Check whether qualifying meal-deal items are in the basket. |
| `.forEach()` | Update the appearance of each rating star. |

### Conditional logic and state

I used `if/else`, `&&`, `||`, comparison operators, and the **ternary operator** to control discounts and interface behavior. I learned how variables such as `basketArr` and `selectedRating` preserve the current UI state, and why UI elements need to be updated whenever that state changes.

### Forms and user feedback

I practiced handling form submission with `submit` events and `preventDefault()`, reading user input, showing and hiding a checkout modal, and displaying personalized confirmation messages. Building the rating feature also helped me understand how to pass function arguments, convert `dataset` strings with `Number()`, and distinguish a single DOM element from a collection of elements.

### Responsive design and refactoring

I adapted the layout for smaller screens and practiced improving code readability by removing unused styles, renaming variables, simplifying repeated conditions, and separating responsibilities into smaller functions.

## 🍽️ How the meal deal works

A customer receives **15% off the complete basket total** when the basket contains:

- **Kompot + Pierogi**, or
- **Kompot + Schabowy**.

For example, Pierogi (25 PLN) + Kompot (12 PLN) normally costs 37 PLN. With the discount, the total is **31.45 PLN**. The discount applies **once per qualifying order**, even if both main dishes are included.

## 🚀 Run locally

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
git clone https://github.com/macien12/Restaurant_Ordering_app_Scrimba.git
cd Restaurant_Ordering_app_Scrimba
npm install
npm start
```

Open the local URL displayed in your terminal.

## 📁 Project files

```text
├── index.html      # Page structure and forms
├── index.css       # Styling and responsive layout
├── index.js        # Basket, discount, checkout, and rating logic
├── data.js         # Restaurant menu data
├── images/         # Restaurant imagery and favicon
└── README.md
```

## ℹ️ Demo limitations

This is a **front-end learning project**, not a production ordering service. The payment form does **not** charge a card or connect to a payment provider. Rating selection and review confirmation are demonstrated in the interface; reviews are **not saved to a database or sent to a server**. Do not enter real payment card details.

## 🙌 Acknowledgments

Built while learning through the [Scrimba Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack), with additional customization and stretch-goal implementations for practice.
