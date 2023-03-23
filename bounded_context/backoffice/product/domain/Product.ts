import Percentage from '@/shared/domain/value_objects/Percentage';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';

import ProductName from './value_objects/ProductName';
import ProductDescription from './value_objects/ProductDescription';
import StockTotal from './value_objects/StockTotal';

interface Props {
    name: ProductName;
    description: ProductDescription;
    basePrice: CurrencyValue;
    ivaPercentage: Percentage;
    stock: StockTotal;
}

export default class Product {
    private _name: ProductName;
    private _description: ProductDescription;
    private _basePrice: CurrencyValue;
    private _ivaPercentage: Percentage;
    private _stock: StockTotal;

    constructor({ name, description, basePrice, ivaPercentage, stock }: Props) {
        this._name = name;
        this._description = description;
        this._basePrice = basePrice;
        this._ivaPercentage = ivaPercentage;
        this._stock = stock;
    }
    
    name() {
        return this._name;
    }

    description() {
        return this._description;
    }

    basePrice() {
        return this._basePrice;
    }

    ivaPercentage() {
        return this._ivaPercentage;
    }

    stock() {
        return this._stock;
    }

}
