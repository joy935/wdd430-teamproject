# 🎨 Project Design

## 🎨 Color Palette

| Element      | Color Code  | Tailwind Class |
|-------------|------------|---------------|
| Primary     | `#3B1D5E`  | `bg-darkPurple` |
| Secondary   | `#7F3FFC`  | `bg-electricBlue` |
| Background  | `#1A0E2E`  | `bg-backgroundDark` |
| Accent      | `#F14BBF`  | `bg-neonPink` |
| Error       | `#E63946`  | `bg-errorRed` |

### 🖋️ Typography

- **Headings:** Poppins, sans-serif (`font-poppins`)
- **Body:** Inter, sans-serif (`font-inter`)
- **Code Blocks:** Fira Code, monospace (`font-mono`)

### 📏 Layout Structure

- **Header** (fixed navigation bar)
- **Main Content Area** (single-column or two-column layout)
- **Footer** (copyright, social links, subscribe)

### 📐 Design Tools Used

- Figma (for UI planning)
- Tailwind CSS (for styling)

### Work Items and User Stories

1. Create LP with header, navigation, and hero section.
    CustomerCustomers, they want to see a well-designed LP, so they can understand what the marketplace is about.
    Seller: As sellers, we want the LP to highlight featured products so that we can attracts more users.

2. Set up user authentication with Next.js and a database.
    Customer: Customers, they want to create an account, log in, purchase products, write reviews, save favorite items, track order, and rate products.
    Seller: As sellers, we want to authenticate our account securely so that we can manage our store and product listings safely.
    Authenticated sellers have dedicated profiles, enabling them to showcase their craftsmanship, share their stories, and display a curated collection of their handcrafted items. Artisans can add product descriptions.

3. Implement registration and login forms.
   Customer: Customers, they want easy-to-use registration and login process so that they can quickly start shopping and proceeding the purchase.
   Seller: As sellers, we want a registration process which allows us to provide business details so that we can start selling on the platform easily.

4. Enable password reset and email verification.
   Customer: Customers, they want to reset their password and verify their email so that they can keep their account secure and recover access if needed.
   Seller: As sellers, we want to verify our email and be able to reset the password so that we can prevent unauthorized access to my store.

5. Design and implement a seller profile page.
    Customer: Customers, they want to visit seller profile so that they can learn more about the seller and their work, products before purchasing.
    Seller: As sellers, we want to create and customize our profile with our bio, purpose, images, ratings, reviews, work history, and product listing so that we can showcase our brand, and who we are so that it can build trust, and attract customers.

6. Create a product listing page. (enable image upload functionality, product listing form, implement edit/delete function, create a search bar with filter options)
   Customer: Customers want quick access to use and browse or filter products by category, price, reviews, popularity, style, and color.
   Seller: Sellers, we want to list our products with proper images, always up-to-date descriptions, pricing and discounts so that the users can explore and purchase items smoothly.

7. Product detail page (reviews and ratings)
   Customer: Customers want to see the detailed version of the product description, specification, more images, videos, customer reviews so that they can make informed purchasing decisions.
   Seller: As sellers, we want customers to leave ratings and reviews on our products so that we can build credibility and attract more buyers.

8. Customer profile page (dashboard)
   Customer: Customers, they want a personal dashboard where they can track their purchases, saved/favorite items, and order history. Also they want to see their personal information listed to be able to modify if needed (e.g.: address or phone number updates.)
   Seller: As sellers, we want a dashboard where we can track the purchases, sales, manage inventory, and analyzing the store's performance.

9. Create a database in the store product details.
   Customer: Customers want to have a smooth experience on the site, to load quickly and accurately so that they can have a great shopping experience.
   Seller: As sellers, we want our product listings to be stored securely in a database so that our products remain available for buyers and can be retrieved efficiently. We sellers, want to handle the inventory of the database quickly and smoothly.

10. Create shopping cart and payment process.
   Customer: Customers want a smooth and secure checkout process with multiple payment options, shipping cost calculation so that they can purchase items easily and safely.
   Seller: As sellers, we want a secure payment system that processes transactions efficiently so that we can receive our earnings without issues.

### Authentication process

- Error Handling
- Deploy to Vercel
