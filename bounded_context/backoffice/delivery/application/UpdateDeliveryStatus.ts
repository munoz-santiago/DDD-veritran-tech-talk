import DeliveryRepository from "@/backoffice/delivery/domain/repositories/DeliveryRepository";
import EventBus from "bounded_context/domain/EventBus";
import DeliveryId from "@/backoffice/delivery/domain/value_objects/DeliveryId";
import DeliveryStatus from "@/backoffice/delivery/domain/value_objects/DeliveryStatus";

export default class UpdateDeliveryStatus {
 constructor(private deliveryRepository: DeliveryRepository, private eventBus: EventBus) { }

    execute(id: DeliveryId, newStatus: DeliveryStatus) { //Cambiar por primitives
        const found = this.deliveryRepository.findById(id);
        if (found === null)
            throw new Error("Delivery not found"); //TODO: Crear errores de negocio
        const updated = found.updateStatus(newStatus);
        this.deliveryRepository.update(updated);
        this.eventBus.publish(updated.pullDomainEvents())
    }
}