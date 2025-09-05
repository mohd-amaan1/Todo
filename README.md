

# 📝 Todo App

A **full-stack Todo application** built with **React (Vite)** for the frontend, **Express.js** for the backend, and **MongoDB** as the database.

---

## 🚀 Tech Stack

* **Frontend:** React + Vite + TailwindCSS
* **Backend:** Node.js + Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Others:** Fetch API, dotenv

---

## ✨ Features

* ➕ Add new todos with title & description
* 📋 View list of all todos
* ✅ Mark todos as completed
* 🗑 Delete todos (optional if implemented)
* 🎨 Modern responsive UI with TailwindCSS

---

## ⚙️ Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside **backend**:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todos
```

Run backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:

```bash
npm run dev
```

---

## 📂 Project Structure

```
todo-app/
│── backend/        # Express.js + MongoDB
│   ├── models/     # Mongoose schemas
│   ├── routes/     # API routes
│   ├── index.js    # Server entry
│   └── .env
│
│── frontend/       # React + Vite + TailwindCSS
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| POST   | `/todo`      | Add a new todo           |
| GET    | `/todos`     | Get all todos            |
| PUT    | `/completed` | Mark todo as completed   |
| DELETE | `/todo/:id`  | Delete a todo (optional) |

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

