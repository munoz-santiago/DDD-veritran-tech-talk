import EntityId from "./value_objects/EntityId"

type Data = { [x: string]: string | number | boolean }

class DomainEvent {
    protected _id: string
    protected _aggreateId: string
    protected _occurredOn: number
    protected _eventName: string
    protected _data: Data

    constructor(aggregateId: string, data: Data) {
        this._id = new EntityId().value()
        this._aggreateId = aggregateId
        this._data = data
        this._occurredOn = new Date().getTime()
    }

    id() {
        return this._id;
    }

    aggreateId() {
        return this._aggreateId;
    }

    occurredOn() {
        return this._occurredOn;
    }

    eventName() {
        return this._eventName;
    }

    data() {
        return this._data;
    }


}

export default DomainEvent;