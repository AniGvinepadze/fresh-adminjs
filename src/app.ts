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

const port = process.env.PORT || 3001;

const start = async () => {
  const app = express();

  await initializeDb();

  const corsOptions = {
    origin: ['http://localhost:3000', process.env.FRONT_URL, 'https://pabellon-anis-projects-e2dd7ff7.vercel.app/'],
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use('/api', apiRouter);
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

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
