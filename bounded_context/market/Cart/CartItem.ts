import CurrencyValue from bounded_contextsshared/domain/value_objects/CurrencyValue';

import Product from '../product/domain/Product';
import ProductItemTotal from './domain/value_objects/ProductItemTotal';

interface CartItemProps {
    product: Product;
    total: ProductItemTotal;
    unit_price: CurrencyValue
    price_total: CurrencyValue
}

class CartItem {
    private _product: Product;
    private _total: ProductItemTotal;
    private _price_total: CurrencyValue;
    private _unit_price: CurrencyValue;

    constructor({ product, total, price_total, unit_price }: CartItemProps) {
        this._product = product;
        this._total = total;
        this._price_total = price_total;
        this._unit_price = unit_price;
    }

    product() {
        return this._product;
    }

    total() {
        return this._total;
    }

    price_total() {
        return this._price_total;
    }

    unit_price() {
        return this._unit_price;
    }
}

export default CartItem;
