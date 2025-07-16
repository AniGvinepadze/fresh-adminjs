import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import cors from 'cors';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';
import * as AdminJSMongoose from '@adminjs/mongoose';
import apiRouter from './route/api.js';
import * as dotenv from 'dotenv';
import sendEmail from './mailer/mailer.js';
dotenv.config();
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
});
const port = process.env.PORT || 3001;
const start = async () => {
    const app = express();
    await initializeDb();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const corsOptions = {
        origin: [
            process.env.FRONT_URL,
        ],
        credentials: true,
    };
    app.use(cors(corsOptions));
    console.log('first');
    app.use('/api', apiRouter);
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    app.post('/contact', async (req, res) => {
        const { name, guests, date, restaurant } = req.body;
        if (!name || !guests || !date || !restaurant) {
            return res.status(400).json({ error: 'ყველა ველი სავალდებულოა' });
        }
        const result = await sendEmail({
            to: 'a.gvin3@gmail.com',
            subject: `Reservation Inquiry from ${name}`,
            restaurant,
            date,
            guests,
            userName: name,
        });
        if (result.success) {
            res.json({ message: 'ელფოსტა წარმატებით გაიგზავნა' });
        }
        else {
            res.status(500).json({ error: 'ელფოსტის გაგზავნა ვერ მოხერხდა' });
        }
    });
    const admin = new AdminJS(options);
    if (process.env.NODE_ENV === 'production') {
        await admin.initialize();
    }
    else {
        admin.watch();
    }
    const router = buildAuthenticatedRouter(admin, {
        cookiePassword: process.env.COOKIE_SECRET,
        cookieName: 'adminjs',
        provider,
    }, null, {
        secret: process.env.COOKIE_SECRET,
        saveUninitialized: true,
        resave: true,
    });
    app.use(admin.options.rootPath, router);
    app.listen(port, () => {
        console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
    });
};
start();
