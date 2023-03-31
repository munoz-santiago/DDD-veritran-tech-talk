import Percentage from '@/shared/domain/value_objects/Percentage';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';

import ProductRepository from '../domain/ProductRepository';
import Product from '../domain/Product';

import ProductName from '../domain/value_objects/ProductName';
import ProductDescription from '../domain/value_objects/ProductDescription';
import StockTotal from '../domain/value_objects/StockTotal';
import ProductId from '../domain/value_objects/ProductId';
import EventBus from '@/shared/domain/EventBus';

interface CreateProductProps {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    ivaPercentage: number;
    stock?: number;
}

class CreateProduct {
    constructor(private productRepo: ProductRepository, private eventBus: EventBus) { }
    
    execute({ id, name, description, basePrice, ivaPercentage, stock = 0 }: CreateProductProps) {
        const productId = new ProductId(id);
        const nameVO = new ProductName(name);
        const descriptionVO = new ProductDescription(description);
        const basePriceVO = new CurrencyValue(basePrice);
        const ivaPercentageVO = new Percentage(ivaPercentage);
        const stockVO = new StockTotal(stock);

        const product = Product.create({
            id: productId,
            name: nameVO,
            description: descriptionVO,
            basePrice: basePriceVO,
            ivaPercentage: ivaPercentageVO,
            stock: stockVO,
        });

        this.productRepo.save(product);
        this.eventBus.publish(product.pullDomainEvents())
    }
}

export default CreateProduct;
