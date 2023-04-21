import DomainEvent from "bounded_context/domain/DomainEvent";
import Delivery from "../Delivery";

export default class DeliveryCreatedEvent extends DomainEvent {
    eventName = "backoffice.delivery.delivery.created"

    static fromEntity(delivery: Delivery): DeliveryCreatedEvent {
        return new DeliveryCreatedEvent(delivery.id().value(), {
            "id": delivery.id().value(),
            "type": delivery.type().value(),
            "billId": delivery.billId().value(),
            "address": delivery.address().value(),
            "price": delivery.price().value()
        })
    }
}