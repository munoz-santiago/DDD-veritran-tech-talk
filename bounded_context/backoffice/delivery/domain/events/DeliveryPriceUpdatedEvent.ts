import DomainEvent from "@/shared/domain/DomainEvent";
import DeliveryType from "../value_objects/DeliveryType";
import CurrencyValue from "@/shared/domain/value_objects/CurrencyValue";

export default class DeliveryPriceUpdatedEvent extends DomainEvent {
    eventName = "backoffice.delivery.price.updated"
    
    constructor(type: DeliveryType, price: CurrencyValue) {
        super(null, {
            "type": type.value(),
            "price": price.value()
        });
    }
}