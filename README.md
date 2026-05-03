# 🏠 HomeVista Interior

🚀 **Affordable Interiors with Premium Feel**

HomeVista Interior is a full-stack MERN web application designed for an interior design business. It helps customers request services online and allows the admin to manage leads, portfolio, and client communication efficiently.

---

## 🌐 Live Demo

🔗 Frontend: https://homevista-interior.vercel.app/
🔗 Backend API: https://homevista-interior.onrender.com

---

## 📌 Project Overview

This project is built to solve real business problems:

✔ Generate leads online
✔ Showcase interior design portfolio
✔ Manage customer inquiries
✔ Automate client communication via WhatsApp

---

## ✨ Features

### 👨‍💼 Customer Side

* Modern responsive UI (mobile + desktop)
* Service listing (Home, Kitchen, Office, Renovation)
* Portfolio gallery
* Contact form for service requests
* WhatsApp integration for instant communication

---

### 🔐 Admin Panel

* Secure login using JWT authentication
* View all customer leads
* Update lead status:

  * New
  * Contacted
  * Site Visit Fixed
  * Completed
  * Rejected
* Delete leads
* Upload portfolio images

---

## 🛠️ Tech Stack

### 🎨 Frontend

* React.js (Vite)
* CSS (Modern UI Design)
* Axios
* React Router DOM

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (File Upload)

---

## 📁 Folder Structure

```bash
homevista-interior/
│
├── client/               # Frontend (React)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/               # Backend (Node.js)
│   ├── uploads/          # Uploaded images
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/anonymous8528/homevista-interior.git
cd homevista-interior
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=your_email
ADMIN_PASSWORD=your_password
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🚀 Deployment

### Backend (Render)

* Create Web Service
* Root Directory: `server`
* Add Environment Variables

### Frontend (Vercel)

* Root Directory: `client`
* Add environment variable:

```env
VITE_API_URL=https://your-backend.onrender.com
```

---

## 📸 Screenshots (Add Later)

* Home Page UI
* Admin Dashboard
* Contact Form
* Portfolio Upload

---

## 💼 Real Business Use Case

This project is ideal for:

* Interior designers
* Contractors
* Freelancers
* Small startup teams

Helps to:

* Generate online leads
* Build a professional brand
* Manage clients efficiently

---

## 🚀 Future Improvements

* 💳 Online Payment Integration (Razorpay)
* 📊 Analytics Dashboard
* 🧑‍💼 Customer Login System
* ⭐ Reviews & Ratings System
* 🌍 Multi-city expansion support

---

## 👨‍💻 Author

**Anuj Chaudhary**
🎓 BTech CSE Student
💻 MERN Stack Developer

---

## 📞 Contact

📧 Email: [anujchaudhary8528@gmail.com](mailto:anujchaudhary8528@gmail.com)
📍 Location: Gorakhpur, Uttar Pradesh

---

## ⭐ Support

If you like this project:

⭐ Star the repository
📢 Share with others

---

## 📄 License

This project is for educational and business use.

---

💡 *“Transforming spaces into beautiful living experiences.”*
