import Product from './Product';

interface ProductRepository {
    getAll: () => Product[];
    find: (productId) => Product | null;
}

export default ProductRepository;
