# 🏕️ Campgrounds

**Campgrounds** is a full-stack web application that allows users to browse, create, edit, and review campgrounds. Inspired by the popular YelpCamp project, this app is built using Node.js, Express, MongoDB, and EJS. Users can register, log in, add new campsites, and leave reviews.

![Campgrounds Screenshot](https://via.placeholder.com/1000x400?text=Campgrounds+App+Screenshot)

---

## 🚀 Features

- User authentication (register/login/logout)
- Create, edit, and delete campgrounds
- Add image URLs to campgrounds
- Leave reviews on campgrounds
- Input validation and error handling
- RESTful routing with Express
- Flash messages for success/error feedback
- EJS templating for dynamic rendering

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML, CSS, Bootstrap, EJS
- **Authentication:** Passport.js (local strategy)
- **Validation:** Joi
- **Templating Engine:** EJS
- **Middleware:** Express-session, connect-flash, method-override

---

## 📁 Project Structure

Campgrounds/
│
├── models/ # Mongoose schemas
├── routes/ # Express route definitions
├── views/ # EJS templates
├── public/ # Static files (CSS, JS)
├── seeds/ # Seed database scripts
├── utils/ # Reusable utilities
├── app.js # Main server file
├── middleware.js # Custom middleware functions
├── schemas.js # Joi validation schemas
└── package.json # Project metadata and dependencies