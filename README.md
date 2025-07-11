# Scrimba > Mobile Restaurant Menu

This project involved creating a mobile-first restaurant ordering application based on the design provided in the following Figma file:

[Figma Design](https://www.figma.com/design/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0-1&t=8Lv2uAondSiOFfm1-1)

The primary goal was to build a functional and interactive menu that allows users to add items to their cart, see a running total, and complete an order. This project served as a practical exercise in applying the following concepts:

**Key Concepts Applied:**

- **JavaScript Modules (Import/Export):** The project was structured using JavaScript modules to organize code logically. The menu data, for instance, was kept in a separate file and imported into the main application script.
- **DOM Manipulation with Data Attributes:** Instead of relying on generic classes or IDs, **data attributes** were used extensively to target specific elements for JavaScript interaction. This provided a more robust and clear connection between the HTML and the scripts managing user actions like adding an item to the cart.
- **Form Handling in JavaScript:** A key part of the functionality was managing the order form. This involved using `preventDefault()` to stop the default form submission behavior, accessing user input from various form elements, and processing that data within the application.
- **Advanced Array Methods:** This project heavily utilized modern JavaScript array methods to manage the order data.
  - `.map()` was used to dynamically render the menu items from the data file.
  - `.filter()` and `.reduce()` were employed to calculate the total price of the items in the cart.
  - `.splice()` was used to remove items from the order.
- **Conditional Logic (Ternary Operators):** For cleaner and more concise code, **ternary operators** were used for flow control, such as conditionally displaying the order summary section only when items were in the cart.

**Learning Journey Highlight:**

The biggest learning from this project was getting comfortable using built-in JavaScript array methods. A significant part of the development process was understanding the distinction between methods that return a new array (like `.map()` and `.filter()`) and those that modify the original array in place. This understanding was crucial for managing the state of the shopping cart accurately. When an item was added or removed, it was essential to know whether the operation was creating a new version of the cart or directly changing the existing one to avoid unexpected bugs and ensure the UI always reflected the correct data. This project solidified the practical application of these powerful methods for managing collections of data.
