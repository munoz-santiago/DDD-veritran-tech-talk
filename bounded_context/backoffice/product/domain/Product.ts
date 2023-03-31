import Percentage from '@/shared/domain/value_objects/Percentage';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';

import ProductName from './value_objects/ProductName';
import ProductDescription from './value_objects/ProductDescription';
import StockTotal from './value_objects/StockTotal';
import ProductId from './value_objects/ProductId';
import AggregateRoot from '@/shared/domain/AggregateRoot';
import ProductCreatedEvent from './events/ProductCreatedEvent';

interface Props {
    id: ProductId;
    name: ProductName;
    description: ProductDescription;
    basePrice: CurrencyValue;
    ivaPercentage: Percentage;
    stock: StockTotal;
}

export default class Product extends AggregateRoot {
    private _id: ProductId;
    private _name: ProductName;
    private _description: ProductDescription;
    private _basePrice: CurrencyValue;
    private _ivaPercentage: Percentage;
    private _stock: StockTotal;

    constructor({ id, name, description, basePrice, ivaPercentage, stock }: Props) {
        super();
        this._id = id;
        this._name = name;
        this._description = description;
        this._basePrice = basePrice;
        this._ivaPercentage = ivaPercentage;
        this._stock = stock;
    }

    static create({ id, name, description, basePrice, ivaPercentage, stock }: Props): Product {
        const product = new Product({
            id: id,
            name: name,
            description: description,
            basePrice: basePrice,
            ivaPercentage: ivaPercentage,
            stock: stock,
        });


        const event = new ProductCreatedEvent(product.id().value(), product.toPrimitives())
        product.record(event)

        return product;
    }

    toPrimitives(): { [x: string]: string | number | boolean; } {
        return {
            id: this._id.value(),
            name: this._name.value(),
            description: this._description.value(),
            basePrice: this._basePrice.value(),
            ivaPercentage: this._ivaPercentage.value(),
            stock: this._stock.value(),
        }
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
