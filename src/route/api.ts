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
import { Wine } from '../model/wine.model.js';
import { HomeRooms } from '../model/HomeRooms.model.js';
import { KidsEntertainmentImage } from '../model/KidsEntertainmentImages.model.js';

const apiRouter = express.Router();

apiRouter.get('/home', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  console.log(language);
  try {
    const home = await Home.findOne({}).lean();
    const responseData = {
      home_pabellon_section_description_en: home[`home_pabellon_section_description_${language}`],
      home_pabellon_section_description_ge: home[`home_pabellon_section_description_${language}`],
      home_pabellon_section_little_description_en: home[`home_pabellon_section_little_description_${language}`],
      home_pabellon_section_little_description_ge: home[`home_pabellon_section_little_description_${language}`],
      home_rooms_section_title_en: home[`home_rooms_section_title_${language}`],
      home_rooms_section_title_ge: home[`home_rooms_section_title_${language}`],
      home_rooms_section_description_en: home[`home_rooms_section_description_${language}`],
      home_rooms_section_description_ge: home[`home_rooms_section_description_${language}`],
      home_rooms_section_little_description_en: home[`home_rooms_section_little_description_${language}`],
      home_rooms_section_little_description_ge: home[`home_rooms_section_little_description_${language}`],
      home_big_description_en: home[`home_big_description_${language}`],
      home_big_description_ge: home[`home_big_description_${language}`],
      home_contact_section_title_en: home[`home_contact_section_title_${language}`],
      home_contact_section_title_ge: home[`home_contact_section_title_${language}`],
      home_contact_section_getInTouch_en: home[`home_contact_section_getInTouch_${language}`],
      home_contact_section_getInTouch_ge: home[`home_contact_section_getInTouch_${language}`],
      home_contact_section_about_team_en: home[`home_contact_section_about_team_${language}`],
      home_contact_section_about_team_ge: home[`home_contact_section_about_team_${language}`],
      home_contact_section_email: home.home_contact_section_email,
      home_contact_section_phone: home.home_contact_section_phone,
      hero_imageUrl: home.hero_imageUrl,
      pabellon_imageUrl: home.pabellon_imageUrl,
    };
    res.json(responseData);
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
apiRouter.get('/homeRooms', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const homeRooms = await HomeRooms.find({}).lean();
    const responseData = homeRooms.map((room) => ({
      imageUrl: room.imageUrl,
      rooms_title_en: room[`rooms_title_${language}`],
      rooms_title_ge: room[`rooms_title_${language}`],
      rooms_description_en: room[`rooms_description_${language}`],
      rooms_description_ge: room[`rooms_description_${language}`],
      rooms_people_quantity: room.rooms_people_quantity,
      rooms_bed_quantity: room.rooms_bed_quantity,
      rooms_area: room.rooms_area,
      rooms_sofa: room.rooms_sofa,
      rooms_bath: room.rooms_bath,
    }));

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch home rooms data' });
  }
});

apiRouter.get('/agro', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  console.log(language);
  try {
    const agro = await Agro.findOne({}).lean();

    const responseData = {
      agro_section_little_description: agro[`agro_section_little_description_${language}`],
      agro_section_description: agro[`agro_section_description_${language}`],
      our_mission_title: agro[`our_mission_title_${language}`],
      our_mission_description: agro[`our_mission_description_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch about us data' });
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
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const services = await Services.find({}).lean();
    const responseData = services.map((service) => ({
      restaurant_and_bars_title: service[`restaurant_and_bars__title_${language}`],
      restaurant_and_bars_section_little_description:
        service[`restaurant_and_bars_section_little_description_${language}`],
      restaurant_and_bars_section_description: service[`restaurant_and_bars_section_description_${language}`],

      bars_title: service[`bars_title_${language}`],
      bars_section_description: service[`bars_section_description_${language}`],

      meetings_and_events_title: service[`meetings_and_events_title_${language}`],
      meetings_and_events_section_little_description:
        service[`meetings_and_events_section_little_description_${language}`],
      meetings_and_events_section_description: service[`meetings_and_events_section_description_${language}`],

      wellness_and_fitness_title: service[`wellness_and_fitness_title_${language}`],
      wellness_and_fitness_section_little_description:
        service[`wellness_and_fitness_section_little_description_${language}`],
      wellness_and_fitness_section_description: service[`wellness_and_fitness_section_description_${language}`],

      our_facilities_title: service[`our_facilities_title_${language}`],

      kids_entertainment_title: service[`kids_entertainment_title_${language}`],
      kids_entertainment_section_little_description:
        service[`kids_entertainment_section_little_description_${language}`],
      kids_entertainment_section_description: service[`kids_entertainment_section_description_${language}`],
      kids_entertainment_section_big_description: service[`kids_entertainment_section_big_description_${language}`],

      restaurantImageUrl: service.restaurantImageUrl,
      barImageUrl: service.barImageUrl,
      meetingsAndEventsImageUrl: service.meetingsAndEventsImageUrl,
      wellnessAndFitnessImageUrl: service.wellnessAndFitnessImageUrl,
      kidsEntertainmentImageUrl: service.kidsEntertainmentImageUrl,
      artImageUrl: service.artImageUrl,
    }));

    res.json(responseData);
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
apiRouter.get('/kids-entertainmentimgs', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const kidsEntertainment = await KidsEntertainmentImage.find({}).lean();
    // const responseData = {
    //   imageUrl: kidsEntertainment.imageUrl,
    //   secondImageUrl: kidsEntertainment.secondImageUrl,
    //   thirdImageUrl: kidsEntertainment.thirdImageUrl,
    //   fourthImageUrl: kidsEntertainment.fourthImageUrl,
    // }
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
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const rooms = await Rooms.find({}).lean();

    const responseData = rooms.map((room) => ({
      imageUrl: room.imageUrl,
      rooms_title: room[`rooms_title_${language}`],
      rooms_section_little_description: room[`rooms_section_little_description_${language}`],
      rooms_section_description: room[`rooms_section_description_${language}`],
    }));
    console.log(responseData);
    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

apiRouter.get('/wine', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const wine = await Wine.findOne({}).lean();

    const categories = [
      {
        title: wine[`wine_categories_first_title_${language}`],
        description: wine[`wine_categories_first_description_${language}`],
      },
      {
        title: wine[`wine_categories_second_title_${language}`],
        description: wine[`wine_categories_second_description_${language}`],
      },
      {
        title: wine[`wine_categories_third_title_${language}`],
        description: wine[`wine_categories_third_description_${language}`],
      },
      {
        title: wine[`wine_categories_fourth_title_${language}`],
        description: wine[`wine_categories_fourth_description_${language}`],
      },
    ];

    const responseData = {
      wine_page_title: wine[`wine_page_title_${language}`],
      wine_page_breath_deeply: wine[`wine_page_breath_deeply_${language}`],
      wine_page_mission: wine[`wine_page_mission_${language}`],
      wine_categories_title: wine[`wine_categories_title_${language}`],
      wine_categories: categories,
      wine_page_table: wine[`wine_page_table_${language}`],
      winePageImageFirst: wine.winePageImageFirst,
      winePageImageSecond: wine.winePageImageSecond,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch wine data' });
  }
});

export default apiRouter;
