const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const mongoose = require('mongoose');
const Campground = require('../models/campground');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random160 = Math.floor(Math.random() * 160 + 1);
    const price = Math.floor(Math.random() * 2000) + 1000;
    const camp = new Campground({
      author:'676a5fbcec7637829a87fdb1',
      location: `${cities[random160].city},${cities[random160].admin_name}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: `https://picsum.photos/400?random=${Math.random()}`,
      description:
        'a wonderful campground to vist with friends and family, beautiful locations on surrounding .perfect for camping',
      price: price
    });
    await camp.save(); 
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
