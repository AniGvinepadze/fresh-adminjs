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
import { MeetingImage } from '../model/MeetingsImages.js';
import { Further } from '../model/FurtherQuestion.model.js';
import { Header } from '../model/Header.model.js';
import { BookHome } from '../model/BookHome.model.js';
import { BookMakrine } from '../model/BookMakrine.model.js';
import { BookServices } from '../model/BookServices.model.js';
import { SearchRooms } from '../model/SearchRooms.model.js';

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

apiRouter.get('/restaurantbar', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const bars = await RestaurantBar.find({}).lean();
    const responseData = bars.map((bar) => ({
      makrine_section_little_description: bar[`makrine_section_little_description_${language}`],
      makrine_section_description: bar[`makrine_section_description_${language}`],

      makrine_restaurant_title: bar[`makrine_restaurant_title_${language}`],
      makrine_restaurant_section_little_description: bar[`makrine_restaurant_section_little_description_${language}`],
      makrine_restaurant_section_description: bar[`makrine_restaurant_section_description_${language}`],
      makrine_restaurant_community_impact: bar[`makrine_restaurant_community_impact_${language}`],
      makrine_restaurant_menu: bar[`makrine_restaurant_menu_${language}`],

      restaurant_and_bar_section_title: bar[`restaurant_and_bar_section_title_${language}`],
      restaurant_and_bar_section_description: bar[`restaurant_and_bar_section_description_${language}`],

      lobby_bar_title: bar[`lobby_bar_title_${language}`],
      lobby_bar_little_description: bar[`lobby_bar_little_description_${language}`],
      lobby_bar_description: bar[`lobby_bar_description_${language}`],

      pool_bar_title: bar[`pool_bar_title_${language}`],
      pool_bar_section_description: bar[`pool_bar_section_description_${language}`],
      menuImageUrl: bar[`menuImageUrl_${language}`],

      menuImageUrlSecondPart: bar[`menuImageUrlSecondPart_${language}`],

      logoImageUrl: bar['logoImageUrl'],
      mainImageUrl: bar['mainImageUrl'],
      makrineRestaurantImageUrl: bar['makrineRestaurantImageUrl'],
      restaurantBarImageUrl: bar['restaurantBarImageUrl'],
      lobbyImageUrl: bar['lobbyImageUrl'],
      poolImageUrl: bar['poolImageUrl'],
      menuLogoImageUrl: bar['menuLogoImageUrl'],
    }));

    res.json(responseData);
  } catch (error) {
    console.error('Failed to fetch restaurant bars:', error);
    res.status(500).json({ error: 'Failed to fetch restaurant bars' });
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

   
      our_facilities_spa: service[`our_facilities_spa_${language}`],
      our_facilities_indoorPool: service[`our_facilities_indoorPool_${language}`],
      our_facilities_outdoorPool: service[`our_facilities_outdoorPool_${language}`],
      our_facilities_gym: service[`our_facilities_gym_${language}`],

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

    console.log(responseData)

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

apiRouter.get('/kids-entertainment', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const kidsEntertainment = await KidsEntertainment.find({}).lean();
    const responseData = kidsEntertainment.map((item) => ({
      kids_entertainment_title: item[`kids_entertainment_title_${language}`],
      kids_entertainment_section_little_description: item[`kids_entertainment_section_little_description_${language}`],
      kids_entertainment_section_description: item[`kids_entertainment_section_description_${language}`],
      kids_entertainment_play_area: item[`kids_entertainment_play_area_${language}`],

      imageUrl: item.imageUrl,
    }));
    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch kids entertainment data' });
  }
});
apiRouter.get('/kids-entertainmentimgs', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const kidsEntertainment = await KidsEntertainmentImage.find({}).lean();
    const responseData = kidsEntertainment.map((item) => ({
      imageUrl: item.imageUrl,
      secondImageUrl: item.secondImageUrl,
      thirdImageUrl: item.thirdImageUrl,
      fourthImageUrl: item.fourthImageUrl,
    }));
    console.log(responseData);
    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch kids entertainment data' });
  }
});
apiRouter.get('/further', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const furtherData = await Further.find({}).lean();

    const responseData = furtherData.map((item) => ({
      further_title: item[`further_title_${language}`],

      further_about_team: item[`further_about_team_${language}`],

      further_getInTouch: item[`further_getInTouch_${language}`],

      further_email: item.further_email,
      further_phone: item.further_phone,
    }));

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch further data' });
  }
});
apiRouter.get('/meetings-events', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const meetingEvents = await MeetingsEvent.find({}).lean();
    const responseData = meetingEvents.map((event) => ({
      conference_ballroom_title: event[`conference_ballroom_title_${language}`],
      conference_ballroom_section_little_description:
        event[`conference_ballroom_section_little_description_${language}`],
      conference_ballroom_section_description: event[`conference_ballroom_section_description_${language}`],

      spaces_title: event[`spaces_title_${language}`],
      conference_rooms_title: event[`conference_rooms_title_${language}`],
      conference_rooms_section_little_description: event[`conference_rooms_section_little_description_${language}`],
      conference_rooms_section_description: event[`conference_rooms_section_description_${language}`],
      spaces_meeting_room: event[`spaces_meeting_room_${language}`],
      spaces_boardroom: event[`spaces_boardroom_${language}`],
      spaces_ballroom: event[`spaces_ballroom_${language}`],
      meeting_room_iliauri: event[`meeting_room_iliauri_${language}`],
      meeting_room_kamara: event[`meeting_room_kamara_${language}`],
      kamara_iliauri: event[`kamara_iliauri_${language}`],
      boardroom_krebuli_room: event[`boardroom_krebuli_room_${language}`],
      ballroom_alazani_hall: event[`ballroom_alazani_hall_${language}`],
      conferenceImageUrl: event.conferenceImageUrl,
      artWorkImageUrl: event.artWorkImageUrl,
      conferenceRoomsImageUrl: event.conferenceRoomsImageUrl,
    }));

    res.json(responseData);
  } catch (error) {
    console.error('Failed to fetch meeting events:', error);
    res.status(500).json({ error: 'Failed to fetch meeting events' });
  }
});
apiRouter.get('/meetings-eventsImg', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const meetingEvents = await MeetingImage.find({}).lean();
    const responseData = meetingEvents.map((event) => ({
      imageUrl: event.imageUrl,
      secondImageUrl: event.secondImageUrl,
      thirdImageUrl: event.thirdImageUrl,
      fourthImageUrl: event.fourthImageUrl,
    }));

    res.json(responseData);
  } catch (error) {
    console.error('Failed to fetch meeting events:', error);
    res.status(500).json({ error: 'Failed to fetch meeting events' });
  }
});

apiRouter.get('/spa-wellness', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const spaWellness = await SpaWellness.find({}).lean();
    const responseData = spaWellness.map((data) => ({
      our_facilities: data[`our_facilities_${language}`],
      our_facilities_spa: data[`our_facilities_spa_${language}`],
      our_facilities_heated_indoor_pool: data[`our_facilities_heated_indoor_pool_${language}`],
      our_facilities_outdoor_pool: data[`our_facilities_outdoor_pool_${language}`],
      our_facilities_gym: data[`our_facilities_gym_${language}`],
      spa_and_wellness_title: data[`spa_and_wellness_title_${language}`],
      spa_and_wellness_section_little_description: data[`spa_and_wellness_section_little_description_${language}`],
      spa_and_wellness_section_description: data[`spa_and_wellness_section_description_${language}`],
      spa_and_wellness_section_about_room: data[`spa_and_wellness_section_about_room_${language}`],
      spa_and_wellness_section_menu: data[`spa_and_wellness_section_menu_${language}`],
      pool_title: data[`pool_title_${language}`],
      pool_section_little_description: data[`pool_section_little_description_${language}`],
      pool_section_description: data[`pool_section_description_${language}`],
      out_door_pool_section_description: data[`out_door_pool_section_description_${language}`],
      in_door_pool_section_description: data[`in_door_pool_section_description_${language}`],

      firstSpaImageUrl: data.firstSpaImageUrl,
      secondSpaImageUrl: data.secondSpaImageUrl,
      thirdSpaImageUrl: data.thirdSpaImageUrl,
      firstPoolImageUrl: data.firstPoolImageUrl,
      secondPoolImageUrl: data.secondPoolImageUrl,
      thirdPoolImageUrl: data.thirdPoolImageUrl,
      menuImgUrl: data.menuImgUrl,
    }));

    res.json(responseData);
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
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const contactData = await Contact.find({}).lean();

    const responseData = contactData.map((item) => ({
      experience_title: item[`experience_title_${language}`],

      experience_description: item[`experience_description_${language}`],

      imageUrl: item.imageUrl,
    }));

    res.json(responseData);
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
apiRouter.get('/header', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const header = await Header.findOne({}).lean();

    const responseData = {
      home: header[`home_${language}`],
      aboutUs: header[`aboutUs_${language}`],
      rooms: header[`rooms_${language}`],
      services: header[`services_${language}`],
      experiences: header[`experiences_${language}`],
      barsRestaurant: header[`barsRestaurant_${language}`],
      meetingEvents: header[`meetingEvents_${language}`],
      spaWellness: header[`spaWellness_${language}`],
      kids: header[`kids_${language}`],
      wine: header[`wine_${language}`],
      agro: header[`agro_${language}`],
      contact: header[`contact_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch header data' });
  }
});
apiRouter.get('/bookhome', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const bookHome = await BookHome.findOne({}).lean();

    const responseData = {
      book_title: bookHome[`book_title_${language}`],
      check_in: bookHome[`check_in_${language}`],
      check_out: bookHome[`check_out_${language}`],
      bookBtn: bookHome[`bookBtn_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch BookHome data' });
  }
});
apiRouter.get('/bookmakrine', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';
  try {
    const bookMakrine = await BookMakrine.findOne({}).lean();

    const responseData = {
      book_title: bookMakrine[`book_title_${language}`],
      check_in: bookMakrine[`check_in_${language}`],
      bookBtn: bookMakrine[`bookBtn_${language}`],
      select_date: bookMakrine[`select_date_${language}`],
      adults: bookMakrine[`adults_${language}`],
      name: bookMakrine[`name_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch BookMakrine data' });
  }
});
apiRouter.get('/footer', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en'; 

  try {
    const footerData = await Footer.findOne({}).lean(); 

    if (!footerData) {
      return res.status(404).json({ error: 'Footer data not found' });
    }

   
    const responseData = {
      contactUs: footerData[`contactUs_${language}`],
      email: footerData[`email_${language}`],
      phone: footerData[`phone_${language}`],
      rooms: footerData[`rooms_${language}`],
      home: footerData[`home_${language}`],
      services: footerData[`services_${language}`],
      restaurant: footerData[`restaurant_${language}`],
      faqs: footerData[`faqs_${language}`],
      instagram: footerData[`instagram_${language}`],
      facebook: footerData[`facebook_${language}`],
      linkedIn: footerData[`linkedIn_${language}`],
    };

    res.json(responseData); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch footer data' });
  }
});

apiRouter.get('/bookservices', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const bookServices = await BookServices.findOne({}).lean();

    const responseData = {
      book_title: bookServices[`book_title_${language}`],
      check_in: bookServices[`check_in_${language}`],
      bookBtn: bookServices[`bookBtn_${language}`],
      select_date: bookServices[`select_date_${language}`],
      adults: bookServices[`adults_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch BookServices data' });
  }
});

apiRouter.get('/searchrooms', async (req, res) => {
  const { lang } = req.query;
  const language = lang === 'ge' ? 'ge' : 'en';

  try {
    const searchRooms = await SearchRooms.findOne({}).lean();

    const responseData = {
      search_title: searchRooms[`search_title_${language}`],
      check_in: searchRooms[`check_in_${language}`],
      check_out: searchRooms[`check_out_${language}`],
      bookBtn: searchRooms[`bookBtn_${language}`],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch SearchRooms data' });
  }
});

export default apiRouter;
