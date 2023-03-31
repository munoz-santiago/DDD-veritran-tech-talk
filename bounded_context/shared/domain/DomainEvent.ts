import EntityId from "./value_objects/EntityId"

type Data = { [x: string]: string | number | boolean }

class DomainEvent {
    protected id: string
    protected aggreateId: string
    protected occurredOn: number
    protected eventName: string
    protected data: Data

    constructor(aggregateId: string, data: Data) {
        this.id = new EntityId().value()
        this.aggreateId = aggregateId
        this.data = data
        this.occurredOn = new Date().getTime()
    }
}

export default DomainEvent;