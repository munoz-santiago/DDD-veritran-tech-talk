import DomainEvent from "@/shared/domain/DomainEvent";

type ProductCreatedData = {}

class ProductCreatedEvent extends DomainEvent {
    eventName = "backoffice.product.created";
    data: ProductCreatedData;
}

export default ProductCreatedEvent