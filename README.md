# My E-commerce App

## Project Overview

This project is a simple e-commerce web application built using Next.js, Tailwind CSS, and the DummyJSON API. It showcases a Shop Home page and a Product Detail page.

## Technologies Used

- Node.js (v18.16.0)
- Next.js (v13.4.4)
- Tailwind CSS (v3.2.4)
- axios (v1.3.4)

## Running the Project

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd my-ecommerce-app
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:3000`.

## Project Structure

- **pages:**
    - `index.js`: Shop Home page component.
    - `product/[id].js`: Product Detail page component.
- **components:**
    - `Sidebar.js`: Sidebar component for categories.
    - `ProductCard.js`: Product card component.
- **utils:**
    - `api.js`: API helper functions for data fetching.

## Documentation

- The `api.js` file contains functions to fetch data from the DummyJSON API, including categories, products by category, all products, and product details.
- The `Sidebar.js` component renders a list of categories and handles category selection.
- The `ProductCard.js` component displays product information on the Shop Home page.
- The `ProductDetail.js` component displays detailed product information.