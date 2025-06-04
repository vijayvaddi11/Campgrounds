const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash')
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


const UserRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds')
const reviewRoutes =require('./routes/reviews')

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
  console.log(req.session)
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use('/', UserRoutes);
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/reviews',reviewRoutes);



app.get('/', (req, res) => {
  res.render('home');
});

/*app.get('/makecampground', async (req, res) => {
  const camp = new Campground({ title: 'erakampalem', description: 'new one!' });
  await camp.save();
  res.send(camp);
  //const camp = await Campground.insertMany([{ title: 'My Backyard', description: 'cheap camping!!' }, { title: 'home', description: 'free of cost' }]);
  //res.send(camp)
});*/





app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found',404))
})

app.use((err, req, res, next) => {
  const { statusCode = 505 } = err;
  if(!err.message) err.message = "Ohh No Something Went Wrong!"
  res.status(statusCode).render('error',{err})
} )

app.listen(3000, () => {
  console.log('server running on port 3000');
});
