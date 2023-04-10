import ProductRepository from '../domain/ProductRepository';

interface ListProductsProps { }

class ListProducts {
    constructor(private productRepo: ProductRepository) { }
    
    execute({ }: ListProductsProps) {
        const products = this.productRepo.getAll();
        return products;
    }
}

export default ListProducts;
