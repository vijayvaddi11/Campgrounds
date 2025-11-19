# 🏕️ Campgrounds

**Campgrounds** is a full-stack web application that allows users to browse, create, edit, and review campgrounds. Inspired by the popular YelpCamp project, this app is built using Node.js, Express, MongoDB, and EJS. Users can register, log in, add new campsites, and leave reviews.

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

## 🧑‍💻 How to Run Locally


```bash
1. **Clone the repository:**

git clone https://github.com/vijayvaddi11/Campgrounds.git
cd Campgrounds
```




2. **Install dependencies:**

npm install

3. **Set up environment variables:**

Create a .env file in the root directory with the following content:

DATABASE_URL=mongodb://localhost:27017/campgrounds
SECRET=your_secret_key
PORT=3000


4. **Seed the database:**

node seeds/index.js


5. **Start the server:**

node app.js

Open your browser and go to: http://localhost:3000
