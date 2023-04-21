const express = require('express');

import pingView from './views/pingView';

import backofficeListProductsView from '../../bounded_context/backoffice/product/infrastructure/views/listProducts';
import backofficeSaveProductView from '../../bounded_context/backoffice/product/infrastructure/views/saveProduct';

import * as routes from './routes';

const app = express();

export default class Router {
    static init(port = 3000) {
        app.use(express.json());

        app.get(routes.PING, pingView);

        app.get(routes.BACKOFFICE_LIST_PRODUCTS, backofficeListProductsView);
        app.post(routes.BACKOFFICE_SAVE_PRODUCT, backofficeSaveProductView);

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}
