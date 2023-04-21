import DomainEvent from '../../../../shared/domain/DomainEvent';

type ProductCreatedData = {}

class ProductCreatedEvent extends DomainEvent {
    protected _eventName: string =  'backoffice.product.created';

    constructor(aggregateId: string, data: ProductCreatedData) {
        super(aggregateId, data);
    }
}

export default ProductCreatedEvent;
