import Address from "@/shared/domain/value_objects/Address";
import BillID from "./value_objects/BillID";
import DeliveryType from "./value_objects/DeliveryType";

class Delivery {
    private _id: BillID;
    private _deliveryType: DeliveryType;
    private _address: Address;
}