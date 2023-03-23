const express = require('express');
import pingView from './views/pingView';
import * as routes from './routes';

const app = express();

export default class Router {
    static init(port = 3000) {
        
        // Register here all routes
        app.get(routes.PING, pingView);

        // start listening in port
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}
