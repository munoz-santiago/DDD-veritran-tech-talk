import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';
import Address from '@/shared/domain/value_objects/Address';

import User from '../../user/domain/User';
import Product from '../../product/domain/Product';

import DeliveryType from './value_objects/DeliveryType';
import BillID from './value_objects/BillID';

interface Props {
    user: User;
    products: Product[];
    deliveryType: DeliveryType;
    id: BillID;
    address: Address;
    precioBruto: CurrencyValue;
    ivaTotal: CurrencyValue;
    discountTotal: CurrencyValue;
    deliveryPrice: CurrencyValue;
    precioNeto: CurrencyValue;
}

export default class Bill {
    private _user: User;
    private _products: Product[];
    private _deliveryType: DeliveryType;
    private _id: BillID;
    private _address: Address;
    private _precioBruto: CurrencyValue;
    private _ivaTotal: CurrencyValue;
    private _discountTotal: CurrencyValue;
    private _deliveryPrice: CurrencyValue;
    private _precioNeto: CurrencyValue;

    constructor({
        user,
        products,
        deliveryType,
        id,
        address,
        precioBruto,
        ivaTotal,
        discountTotal,
        deliveryPrice,
        precioNeto,
    }: Props) {
        this._user = user;
        this._products = products;
        this._deliveryType = deliveryType;
        this._id = id;
        this._address = address;
        this._precioBruto = precioBruto;
        this._ivaTotal = ivaTotal;
        this._discountTotal = discountTotal;
        this._deliveryPrice = deliveryPrice;
        this._precioNeto = precioNeto;
    }

    user() {
        return this._user;
    }

    products() {
        return this._products;
    }

    deliveryType() {
        return this._deliveryType;
    }

    id() {
        return this._id;
    }

    address() {
        return this._address;
    }

    precioBruto() {
        return this._precioBruto;
    }

    ivaTotal() {
        return this._ivaTotal;
    }

    discountTotal() {
        return this._discountTotal;
    }

    deliveryPrice() {
        return this._deliveryPrice;
    }

    precioNeto() {
        return this._precioNeto;
    }

}
