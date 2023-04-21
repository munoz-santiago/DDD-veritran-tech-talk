import Product from '../domain/Product';

import ProductId from '../domain/value_objects/ProductId';
import ProductName from '../domain/value_objects/ProductName';
import ProductDescription from '../domain/value_objects/ProductDescription';
import StockTotal from '../domain/value_objects/StockTotal';

import CurrencyValue from '../../../shared/domain/value_objects/CurrencyValue';
import Percentage from '../../../shared/domain/value_objects/Percentage';

const jsonToProduct = (databaseJson: any): Product => {
    const product = new Product({
        id: new ProductId(databaseJson.id),
        name: new ProductName(databaseJson.name),
        description: new ProductDescription(databaseJson.description),
        basePrice: new CurrencyValue(databaseJson.basePrice),
        ivaPercentage: new Percentage(databaseJson.ivaPercentage),
        stock: new StockTotal(databaseJson.stock),
    });
    return product;
};

export default jsonToProduct;
