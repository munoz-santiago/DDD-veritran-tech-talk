import ProductRepository from '../domain/ProductRepository';
import Product from '../domain/Product';

class ListProducts {
    constructor(private productRepo: ProductRepository) { }

    execute(): Product[] {
        const products = this.productRepo.getAll();
        return products;
    }
}

export default ListProducts;
