# 📚 Bookshelf

A responsive web application that helps book lovers manage, review, and track their reading journey in a user-friendly way. Users can add books, track their reading progress, write reviews, and discover books added by others.

## 🔗 Live Site

[👉 Click to Visit Virtual Bookshelf](https://bookshelf-web-apps.netlify.app/)

---

## 🌐 Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **Swiper.js**
- **React Router**
- **Firebase Authentication**
- **Axios**
- **Recharts etc.**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**

---

## 🚀 Key Features

### 🏠 Home Page

- Animated slider/banner using Swiper + Framer Motion.
- Popular books section (sorted by upvotes).
- Featured book categories.
- User testimonials & upcoming events.
- Fully responsive design with clean layout.

### 📚 Bookshelf

- Public listing of all books.
- Filtering by `reading status`.
- Search by `title`.

### 📖 Book Details

- View detailed information of a selected book.
- View & post user reviews (one review per user per book).
- Upvote a book (except your own).

### ➕ Add Book (Private)

- Only authenticated users can add books.
- Pre-filled email & name from Firebase.

### 🔄 My Books (Private)

- Shows only logged-in user's books.
- Update or delete any book you've added.

### 👤 Profile Page (Private)

- User info (name, email, photo).
- Summary of bookshelf.
- Pie chart showing books by category (Recharts).

### 🔐 Authentication

- Email/password login.
- Google sign-in.
- Private route protection.

### 📊 Extra Features

- JWT support with Firebase.
- Animated scroll-down icons.
- Smooth page transitions using Framer Motion.
- Responsive navigation & footer.

---

## 🚀 Run Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**

git clone:https://github.com/samiulalim-dev/bookshelf-web-app-client.git

2. **Navigate to the project directory**
- **cd bookshelf-web-app**
3. **Install dependencies**
- **npm install**
4. **Start the development server**
- **npm run dev**
4. **Open your browser and visit**
- **http://localhost:5173**

## 📦 NPM Packages Used

```bash
npm install react-router-dom axios framer-motion swiper firebase recharts date-fns lottie-react react-icons react-toastify sweetalert2
```
