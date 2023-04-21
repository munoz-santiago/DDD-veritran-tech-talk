import EventBus from bounded_contextsshared/domain/EventBus';
import DeliveryRepository from '../domain/repositories/DeliveryRepository';
import DeliveryPriceUpdatedEvent from '../domain/events/DeliveryPriceUpdatedEvent';
import DeliveryType from '../domain/value_objects/DeliveryType';
import CurrencyValue from "bounded_context/domain/value_objects/CurrencyValue";

export default class UpdateDeliveryTypePrice {
    constructor(private deliveryRepository: DeliveryRepository, private eventBus: EventBus ) {}

    execute(type: DeliveryType, newPrice: CurrencyValue) {
        this.deliveryRepository.updateDeliveryTypePrice(type, newPrice)
        const event = new DeliveryPriceUpdatedEvent(type, newPrice)
        this.eventBus.publish([event]);
    }
}
