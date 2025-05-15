# MERN Authentication System

Live Demo: [https://auth-system-s7q8.onrender.com](https://auth-system-s7q8.onrender.com)

## 📚 Overview

This is a full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js). It features:

- **User Authentication**: Sign up, log in, and log out functionalities.
- **JWT-Based Authorization**: Secure routes using JSON Web Tokens.
- **Responsive UI**: Built with React and styled using Tailwind CSS v4.
- **State Management**: Utilizes Zustand for efficient state handling.
- **Notifications**: Real-time feedback with React Hot Toast.
- **Protected Routes**: Ensures certain pages are accessible only to authenticated users.

## 🛠️ Technologies Used

- **Frontend**:
  - React 19
  - Vite 6
  - Tailwind CSS v4 (with `@tailwindcss/vite`)
  - React Router DOM v7
  - Zustand
  - Axios
  - Framer Motion
  - Lucide React
  - React Hot Toast

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Tokens (JWT)
  - Bcrypt.js
  - Helmet
  - Morgan
  - CORS
  - Express Rate Limit
  - Winston Logger
  - Mailtrap

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/auth-mern.git
   cd auth-mern
   ```

2. **Install dependencies**:

   ```bash
   npm install
   npm install --prefix frontend
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   CLIENT_URL=http://localhost:5173
   MONGO_URI=your_mongodb_connection_string
   MAILTRAP_TOKEN=your_mailtrap_token
   MAILTRAP_ENDPOINT=your_mailtrap_endpoint
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=your_expiry_date
   ```

4. **Run the application**:

   - For development:

     ```bash
     npm run dev
     ```

   - For production:

     ```bash
     npm run build
     npm start
     ```

## 📁 Project Structure

```
auth-mern/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── .env
├── package.json
└── README.md
```

## 🌐 Deployment

The application is deployed on [Render](https://render.com/). The backend serves both API routes and the frontend's static files.

### Build and Start Commands

- **Build**:

  ```bash
  npm run build
  ```

- **Start**:

  ```bash
  npm start
  ```

Ensure that the `vite.config.js` has the correct `base` path set:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
});
```

## 🧪 Features

- **Authentication**: Secure login and registration with hashed passwords.
- **Authorization**: Protected routes accessible only to authenticated users.
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS.
- **State Management**: Efficient global state handling with Zustand.
- **Notifications**: User-friendly alerts with React Hot Toast.
- **Email Notifications: Email integration using Mailtrap
- **Rate Limiting**: Prevent brute-force attacks with express-rate-limit.
- **Security**: Enhanced security with Helmet and CORS configurations.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License.
