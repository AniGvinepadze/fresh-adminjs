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

apiRouter.get('/home', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  console.log(language);
  try {
    const home = await Home.findOne({}).lean();
    console.log(home);

    // const responseData = {
    //   aboutus_experience_overview: aboutUs[`aboutus_experience_overview_${language}`],
    //   aboutus_facilities_and_services: aboutUs[`aboutus_facilities_and_services_${language}`],
    //   aboutus_wine_collections_and_story: aboutUs[`aboutus_wine_collections_and_story_${language}`],
    //   aboutus_historical_culture_heritage: aboutUs[`aboutus_historical_culture_heritage_${language}`],
    //   aboutus_family_tradition: aboutUs[`aboutus_family_tradition_${language}`],
    //   aboutus_farmToTable_experience: aboutUs[`aboutus_farmToTable_experience_${language}`],
    // };
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch about us data' });
  }
});

apiRouter.get('/aboutUs', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  console.log(language);
  try {
    const aboutUs = await AboutUs.findOne({}).lean();

    const responseData = {
      aboutus_title: aboutUs[`aboutus_title_${language}`],
      aboutus_section_little_description: aboutUs[`aboutus_section_little_description_${language}`],
      aboutus_section_description: aboutUs[`aboutus_section_description_${language}`],
      aboutus_experience_overview: aboutUs[`aboutus_experience_overview_${language}`],
      aboutus_facilities_and_services: aboutUs[`aboutus_facilities_and_services_${language}`],
      aboutus_wine_collections_and_story: aboutUs[`aboutus_wine_collections_and_story_${language}`],
      aboutus_historical_culture_heritage: aboutUs[`aboutus_historical_culture_heritage_${language}`],
      aboutus_family_tradition: aboutUs[`aboutus_family_tradition_${language}`],
      aboutus_farmToTable_experience: aboutUs[`aboutus_farmToTable_experience_${language}`],
      iliaImageUrl: aboutUs.iliaImageUrl,
      artWorkImageUrl: aboutUs.artWorkImageUrl,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch about us data' });
  }
});

apiRouter.get('/agro', async (req, res) => {
  try {
    const agro = await Agro.find({}).lean();
    res.json(agro);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agro data' });
  }
});

apiRouter.get('/restaurant-bar', async (req, res) => {
  try {
    const restaurantBar = await RestaurantBar.find({}).lean();
    res.json(restaurantBar);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant & bar data' });
  }
});

apiRouter.get('/services', async (req, res) => {
  try {
    const services = await Services.find({}).lean();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

apiRouter.get('/kids-entertainment', async (req, res) => {
  try {
    const kidsEntertainment = await KidsEntertainment.find({}).lean();
    res.json(kidsEntertainment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch kids entertainment data' });
  }
});

apiRouter.get('/meetings-events', async (req, res) => {
  try {
    const meetingsEvents = await MeetingsEvent.find({}).lean();
    res.json(meetingsEvents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meetings & events data' });
  }
});

apiRouter.get('/spa-wellness', async (req, res) => {
  try {
    const spaWellness = await SpaWellness.find({}).lean();
    res.json(spaWellness);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch spa & wellness data' });
  }
});
apiRouter.get('/blog', async (req, res) => {
  try {
    const blogs = await Blog.find({}).lean();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

apiRouter.get('/contact', async (req, res) => {
  try {
    const contact = await Contact.findOne({}).lean();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact data' });
  }
});

apiRouter.get('/rooms', async (req, res) => {
  try {
    const rooms = await Rooms.find({}).lean();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

apiRouter.get('/wine', async (req, res) => {
  try {
    const wine = await Wine.find({}).lean();
    res.json(wine);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch wine data' });
  }
});

export default apiRouter;
