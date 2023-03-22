import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';
import Address from '@/shared/domain/value_objects/Address';

import User from '../../user/domain/User';

import DeliveryType from './value_objects/DeliveryType';
import BillID from './value_objects/BillID';

export default class Bill {
    private user: User;
    // Products[]: TODO: <--- falta esto :')
    deliveryType: DeliveryType;
    id: BillID;
    address: Address;

    precioBruto: CurrencyValue;
    ivaTotal: CurrencyValue;
    discountTotal: CurrencyValue;
    deliveryPrice: CurrencyValue;
    precioNeto: CurrencyValue;
}
