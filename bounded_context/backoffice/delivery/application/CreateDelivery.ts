import DeliveryRespository from "../domain/DeliveryRepository";
import EventBus from "@/shared/domain/EventBus";

export default class CreateDelivery {
    constructor(private deliveryRepository: DeliveryRespository, private eventBus: EventBus) { }
    /**
     * Recibe BillId, Items list, tipo delivery y Address
     * 
     * Esto representa la preparación y entrega de productos, no la factura
     * 
     * 
     * Opcional: Se va a llamar cuando reciba un evento BillPaidEvent
     */
    execute() {
        
    }
}