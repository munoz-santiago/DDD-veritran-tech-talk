import ListProduct from '../../application/ListProducts';
import InMemoryProductRepository from '../InMemoryProductRepository';
import Product from 'bounded_context/backoffice/product/domain/Product';

const listProducts = (req, res) => {
    const productsRepo = new InMemoryProductRepository();
    const listProducts = new ListProduct(productsRepo);
    const products = listProducts.execute();

    const serializedProducts = products.map((product: Product) => ({
        id: product.id().value(),
        name: product.name().value(),
        description: product.description().value(),
        basePrice: product.basePrice().value(),
        ivaPercentage: product.ivaPercentage().value(),
        stock: product.stock().value(),
    }));

    res.send({
        total: serializedProducts.length,
        results: serializedProducts,
        page: 1,
    });
}

export default listProducts;
