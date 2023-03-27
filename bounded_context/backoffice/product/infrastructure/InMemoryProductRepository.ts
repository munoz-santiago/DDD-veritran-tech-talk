import ProductRepository from '../domain/ProductRepository';
import Product from '../domain/Product';

class InMemoryProductRepository implements ProductRepository {
    getAll(): Product[] {
        const products: Product[] = [];
        return products;
    }
}   

export default InMemoryProductRepository;
