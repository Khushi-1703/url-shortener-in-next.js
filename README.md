# 🔗 SnipURL — Modern URL Shortener

SnipURL is a clean, fast, and minimal URL shortener built with modern web technologies.
No clutter. No unnecessary tracking. Just simple and beautiful link shortening.

---

## ✨ Features

* ⚡ **Instant URL shortening**
* 🎯 **Custom short aliases**
* 🔒 **Privacy-focused (no login required)**
* 📱 **Fully responsive UI**
* 🎨 **Modern glassmorphism + gradient design**
* 📋 **Copy-to-clipboard support**
* 🚀 **Fast API with MongoDB backend**

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** MongoDB
* **Styling:** Tailwind CSS + custom UI components

---

## 📂 Project Structure

```
/app
  /api
    /generate        → API route for creating short URLs
  /about             → About page
  /contact           → Contact page
  /privacy           → Privacy policy
  /terms             → Terms of service
  /shorten           → URL shortening page
/components
  Navbar.jsx
  Footer.jsx
/lib
  mongodb.js         → MongoDB connection
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

---

## 🚀 Getting Started

### 1. Clone the repo

```
git clone https://github.com/your-username/snipurl.git
cd snipurl
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

Open 👉 `http://localhost:3000`

---

## 🔌 API Usage

### POST `/api/generate`

**Request Body:**

```json
{
  "url": "https://example.com",
  "shorturl": "custom-alias"
}
```

**Response:**

```json
{
  "message": "Short URL generated successfully"
}
```

---

## 🎯 Key Highlights

* Clean UI/UX focused on simplicity
* No unnecessary authentication flow
* Lightweight and fast
* Designed like a modern SaaS product

---

## 📸 Screens

* Home Page (Hero section)
* Shorten Page (Form + Result UI)
* About / Contact / Legal pages

---

## 🧠 Future Improvements

* 🔐 Authentication system
* 📊 Analytics dashboard
* 🌍 Custom domain support
* 📈 Click tracking (optional)
* 🔗 QR code generation

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a PR

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 💜 Author

Built with love by **Khushi**

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🚀 Share it

---

**SnipURL — Short links, big impact.**
