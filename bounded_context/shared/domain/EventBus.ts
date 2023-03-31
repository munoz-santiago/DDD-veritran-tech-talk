import DomainEvent from './DomainEvent'

interface EventBus {
    publish(events: Array<DomainEvent>): void
}

export default EventBus;