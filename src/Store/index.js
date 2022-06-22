import { createStore, createLogger } from 'vuex'

import auth from './Modules/User/Auth';
import votes from './Modules/User/Votes';
import hallOfFame from './Modules/User/HallOfFame';
import client from './Modules/Client/Client';
import loader from './Modules/Loader/Loader';

import notifications from './Modules/Notification/Notifications';
import articles from './Modules/Article/Articles';
import photos from './Modules/Photos/Photos';
import rooms from './Modules/Rooms/Rooms';
import looks from './Modules/User/Looks';
import permissions from './Modules/User/Permissions';
import guilds from './Modules/Guilds/Guilds';

import badges from './Modules/Badge/Badges';
import locales from "./Modules/Locale/Locale";

import { plugin } from './plugins'

export default createStore({
    modules: {
        auth,
        notifications,
        articles,
        photos,
        looks,
        client,
        votes,
        loader,
        permissions,
        badges,
        rooms,
        locales,
        hallOfFame,
        guilds
    },
    plugins: [plugin]
})
