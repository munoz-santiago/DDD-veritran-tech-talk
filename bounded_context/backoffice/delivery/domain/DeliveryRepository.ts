import Delivery from './Delivery'
import CurrencyValue from "@/shared/domain/value_objects/CurrencyValue";
import DeliveryType from './value_objects/DeliveryType';
import DeliveryId from './value_objects/DeliveryId';

interface DeliveryRespository {
    findById(id: DeliveryId): Delivery;

    updateDeliveryTypePrice(type: DeliveryType, newPrice: CurrencyValue): unknown;

    getAll(): Delivery[];

    update(delivery: Delivery): void;

    getPriceByType(type: DeliveryType): CurrencyValue
}

export default DeliveryRespository;