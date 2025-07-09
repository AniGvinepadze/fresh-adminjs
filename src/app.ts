import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import cors from 'cors';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';
import * as AdminJSMongoose from '@adminjs/mongoose';
import apiRouter from './route/api.js';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const port = process.env.PORT || "https://pabellon-anis-projects-e2dd7ff7.vercel.app/";

const start = async () => {
  const app = express();

  await initializeDb();

  // Set up CORS
  const corsOptions = {
    origin: ['http://localhost:3000', 'https://www.pabellon.ge/'],
    credentials: true,
  };
  app.use(cors(corsOptions));

  // Set up API routes
  app.use('/api', apiRouter);
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  // AdminJS setup
  const admin = new AdminJS(options);

  // Initialize AdminJS (in production or watch in development)
  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  // Build authenticated router for AdminJS
  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    }
  );

  app.use(admin.options.rootPath, router);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
