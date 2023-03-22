
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';
import DeliveryType from '../value_objects/DeliveryType';

export default class DeliveryPrice {
    private type: DeliveryType;
    private price: CurrencyValue;
}
