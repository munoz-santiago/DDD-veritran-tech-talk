import CurrencyValue from bounded_contextsshared/domain/value_objects/CurrencyValue';

import ProductCalification from './value_objects/ProductCalification';
import ProductName from './value_objects/ProductName';
import ProductDescription from './value_objects/ProductDescription';

interface Props {
    name: ProductName;
    productPrice: CurrencyValue;
    ivaTotal: CurrencyValue;
    stars: ProductCalification;
    description: ProductDescription;
}

export default class Product {
    private _name: ProductName;
    private _productPrice: CurrencyValue;
    private _ivaTotal: CurrencyValue;
    private _stars: ProductCalification;
    private _description: ProductDescription;

    constructor({ name, productPrice, ivaTotal, stars, description }: Props) {
        this._name = name;
        this._productPrice = productPrice;
        this._ivaTotal = ivaTotal;
        this._stars = stars;
        this._description = description;
    }

    name() {
        return this._name;
    }

    productPrice() {
        return this._productPrice;
    }

    ivaTotal() {
        return this._ivaTotal;
    }

    stars() {
        return this._stars;
    }

    description() {
        return this._description;
    }

}
