import DomainEvent from "bounded_context/domain/DomainEvent";
import DeliveryId from "@/backoffice/delivery/domain/value_objects/DeliveryId";
import DeliveryStatus from "@/backoffice/delivery/domain/value_objects/DeliveryStatus";

export default class DeliveryStatusUpdated extends DomainEvent {
    eventName = "backoffice.delivery.status.updated"

    constructor(id: DeliveryId, status: DeliveryStatus) {
        super(id.value(), {"status": status});
    }
}