import EventBus from '@/shared/domain/EventBus';
import DeliveryRepository from '../domain/DeliveryRepository';
import DeliveryPriceUpdatedEvent from '../domain/events/DeliveryPriceUpdatedEvent';
import DeliveryType from '../domain/value_objects/DeliveryType';
import CurrencyValue from "@/shared/domain/value_objects/CurrencyValue";

export default class UpdateDeliveryTypePrice {
    constructor(private deliveryRepository: DeliveryRepository, private eventBus: EventBus ) {}

    execute(type: DeliveryType, newPrice: CurrencyValue) {
        this.deliveryRepository.updateDeliveryTypePrice(type, newPrice)
        const event = new DeliveryPriceUpdatedEvent(type, newPrice)
        this.eventBus.publish([event]);
    }
}
