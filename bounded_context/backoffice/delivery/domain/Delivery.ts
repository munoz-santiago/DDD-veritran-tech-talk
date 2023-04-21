import BillID from "@/market/bill/domain/value_objects/BillID";
import AggregateRoot from "bounded_context/domain/AggregateRoot";
import Address from "bounded_context/domain/value_objects/Address";
import CurrencyValue from "bounded_context/domain/value_objects/CurrencyValue";
import DeliveryCreatedEvent from "./events/DeliveryCreatedEvent";
import DeliveryId from "./value_objects/DeliveryId";
import DeliveryStatus from "./value_objects/DeliveryStatus";
import DeliveryType from "./value_objects/DeliveryType";
import DeliveryStatusUpdated from "@/backoffice/delivery/domain/events/DeliveryStatusUpdated";

class Delivery extends AggregateRoot {

    private readonly _id: DeliveryId;
    private readonly _status: DeliveryStatus;
    private readonly _type: DeliveryType;
    private readonly _price: CurrencyValue;
    //TODO: Mover BillId a Shared
    private readonly _billId: BillID;
    private readonly _address: Address;

    constructor(id: DeliveryId, status: DeliveryStatus, type: DeliveryType, price: CurrencyValue, billId: BillID, address: Address) {
        super();
        this._id = id;
        this._status = status;
        this._type = type;
        this._price = price;
        this._billId = billId;
        this._address = address;
    }

    static create(id: DeliveryId, type: DeliveryType, price: CurrencyValue, billId: BillID, address: Address): Delivery {
        const delivery = new Delivery(id, DeliveryStatus.PENDING, type, price, billId, address);
        delivery.record(DeliveryCreatedEvent.fromEntity(delivery));
        return delivery;
    }

    updateStatus(newStatus: DeliveryStatus): Delivery {
        const updated = new Delivery(
            this._id,
            newStatus,
            this._type,
            this._price,
            this._billId,
            this._address
        );
        updated.record(new DeliveryStatusUpdated(this._id, newStatus))
        return updated;
    }

    id() {
        return this._id;
    }

    status() {
        return this._status;
    }

    type() {
        return this._type;
    }

    price() {
        return this._price;
    }

    billId() {
        return this._billId;
    }

    address() {
        return this._address;
    }

    toPrimitives() {
        throw new Error("Method not implemented.");
    }
}

export default Delivery;
