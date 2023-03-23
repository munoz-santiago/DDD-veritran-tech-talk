
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';
import DeliveryType from './value_objects/DeliveryType';

interface Props {
    type: DeliveryType;
    price: CurrencyValue;
}

export default class DeliveryPrice {
    private _type: DeliveryType;
    private _price: CurrencyValue;

    constructor({ type, price }: Props) {
        this._type = type;
        this._price = price;
    }

    type() {
        return this._type;
    }

    price() {
        return this._price;
    }

}
