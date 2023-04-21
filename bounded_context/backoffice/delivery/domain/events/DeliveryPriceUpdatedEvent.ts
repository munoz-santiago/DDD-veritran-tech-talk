import DomainEvent from "bounded_context/domain/DomainEvent";
import DeliveryType from "../value_objects/DeliveryType";
import CurrencyValue from "bounded_context/domain/value_objects/CurrencyValue";

export default class DeliveryPriceUpdatedEvent extends DomainEvent {
    eventName = "backoffice.delivery.price.updated"
    
    constructor(type: DeliveryType, price: CurrencyValue) {
        super(null, {
            "type": type.value(),
            "price": price.value()
        });
    }
}