import ProductRepository from bounded_contextsmarket/product/domain/ProductRepository';
import CurrencyValue from bounded_contextsshared/domain/value_objects/CurrencyValue';
import CartRepository from '../domain/CartRepository';
import Cart from '../Cart';

interface AddToCardProps {
    productId: string;
    total: number;
}

export class AddToCard {
    constructor(
        private cartRepository: CartRepository,
        private productRepository: ProductRepository,
    ) {}

    execute ({ productId, total }: AddToCardProps) {
        const product = this.productRepository.find(productId);
        if (!product) throw new Error('Product with id {} not found'.replace('{}', productId))

        const cart = this.cartRepository.getActiveCart();
        cart.addProduct(product, total)
        this.cartRepository.saveProductItems(cart);
    }
}
