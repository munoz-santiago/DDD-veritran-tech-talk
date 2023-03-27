import Percentage from '@/shared/domain/value_objects/Percentage';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';

import ProductName from './value_objects/ProductName';
import ProductDescription from './value_objects/ProductDescription';
import StockTotal from './value_objects/StockTotal';
import ProductId from './value_objects/ProductId';

interface Props {
    id: ProductId;
    name: ProductName;
    description: ProductDescription;
    basePrice: CurrencyValue;
    ivaPercentage: Percentage;
    stock: StockTotal;
}

export default class Product {
    private _id: ProductId;
    private _name: ProductName;
    private _description: ProductDescription;
    private _basePrice: CurrencyValue;
    private _ivaPercentage: Percentage;
    private _stock: StockTotal;

    constructor({ id, name, description, basePrice, ivaPercentage, stock }: Props) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._basePrice = basePrice;
        this._ivaPercentage = ivaPercentage;
        this._stock = stock;
    }
    
    id() {
        return this._id;
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
