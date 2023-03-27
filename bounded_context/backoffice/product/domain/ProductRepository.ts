import Product from './Product';

interface ProductRepository {
    getAll: () => Product[];
    create: (product: Product) => void;
}

export default ProductRepository;
