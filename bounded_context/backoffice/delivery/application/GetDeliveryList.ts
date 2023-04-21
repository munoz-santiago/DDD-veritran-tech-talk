import Delivery from "../domain/Delivery";
import DeliveryRepository from "../domain/repositories/DeliveryRepository";

export default class GetDeliveryList {
    constructor(private deliveryRepository: DeliveryRepository) {
    }

    execute(): Array<Delivery> {
        return this.deliveryRepository.getAll();
    }

}