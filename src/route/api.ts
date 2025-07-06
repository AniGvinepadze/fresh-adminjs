import express from 'express';
import { Category } from '../model/Category.model.js';
import { Post } from '../model/Post.model.js';
import { Home } from '../model/Home.model.js';
import { AboutUs } from '../model/AbouUs.model.js';
import { Agro } from '../model/Agro.model.js';
import { RestaurantBar } from '../model/RestaurantBar.model.js';
import { Services } from '../model/Service.model.js';
import { KidsEntertainment } from '../model/KidsEntertainment.model.js';
import { MeetingsEvent } from '../model/MeetingEvent.model.js';
import { SpaWellness } from '../model/SpaWellnes.mode.js';
import { Blog } from '../model/Blog.model.js';
import { Contact } from '../model/Contact.model.js';
import { Rooms } from '../model/rooms.model.js';
import { Wine } from '../model/winee.model.js';

const apiRouter = express.Router();

// // Categories
// router.get('/categories', async (req, res) => {
//   try {
//     const categories = await Category.find({}).lean();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch categories' });
//   }
// });

// router.get('/categories/:id', async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id).lean();
//     if (!category) {
//       return res.status(404).json({ error: 'Category not found' });
//     }
//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch category' });
//   }
// });

// // Posts
// router.get('/posts', async (req, res) => {
//   try {
//     const posts = await Post.find({}).lean();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// });

// router.get('/posts/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id).lean();
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch post' });
//   }
// });

// // Home
// router.get('/home', async (req, res) => {
//   try {
//     const home = await Home.findOne({}).lean();
//     res.json(home);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch home data' });
//   }
// });

// // About Us
apiRouter.get('/aboutUs', async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne({}).lean();
    res.json(aboutUs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch about us data' });
  }
});
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// // Agro
// router.get('/agro', async (req, res) => {
//   try {
//     const agro = await Agro.find({}).lean();
//     res.json(agro);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch agro data' });
//   }
// });

// // Restaurant & Bar
// router.get('/restaurant-bar', async (req, res) => {
//   try {
//     const restaurantBar = await RestaurantBar.find({}).lean();
//     res.json(restaurantBar);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch restaurant & bar data' });
//   }
// });

// // Services
// router.get('/services', async (req, res) => {
//   try {
//     const services = await Services.find({}).lean();
//     res.json(services);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch services' });
//   }
// });

// // Kids Entertainment
// router.get('/kids-entertainment', async (req, res) => {
//   try {
//     const kidsEntertainment = await KidsEntertainment.find({}).lean();
//     res.json(kidsEntertainment);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch kids entertainment data' });
//   }
// });

// // Meetings & Events
// router.get('/meetings-events', async (req, res) => {
//   try {
//     const meetingsEvents = await MeetingsEvent.find({}).lean();
//     res.json(meetingsEvents);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch meetings & events data' });
//   }
// });

// // Spa & Wellness
// router.get('/spa-wellness', async (req, res) => {
//   try {
//     const spaWellness = await SpaWellness.find({}).lean();
//     res.json(spaWellness);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch spa & wellness data' });
//   }
// });

// // Blog
// router.get('/blog', async (req, res) => {
//   try {
//     const blogs = await Blog.find({}).lean();
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blog posts' });
//   }
// });

// // Contact
// router.get('/contact', async (req, res) => {
//   try {
//     const contact = await Contact.findOne({}).lean();
//     res.json(contact);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch contact data' });
//   }
// });

// // Rooms
// router.get('/rooms', async (req, res) => {
//   try {
//     const rooms = await Rooms.find({}).lean();
//     res.json(rooms);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch rooms' });
//   }
// });

// // Wine
// router.get('/wine', async (req, res) => {
//   try {
//     const wine = await Wine.find({}).lean();
//     res.json(wine);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch wine data' });
//   }
// });

export default apiRouter;