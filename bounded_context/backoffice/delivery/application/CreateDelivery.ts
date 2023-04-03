import DeliveryRespository from "../domain/DeliveryRepository";
import EventBus from "@/shared/domain/EventBus";

export default class CreateDelivery {
    constructor(private deliveryRepository: DeliveryRespository, private eventBus: EventBus) { }
    
    execute() {
        
    }
}