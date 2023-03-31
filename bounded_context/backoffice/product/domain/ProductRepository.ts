import Product from './Product';

interface ProductRepository {
    getAll: () => Product[];
    save: (product: Product) => void;
}

export default ProductRepository;
