import DeliveryRespository from "../domain/repositories/DeliveryRepository";
import EventBus from "bounded_context/domain/EventBus";

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