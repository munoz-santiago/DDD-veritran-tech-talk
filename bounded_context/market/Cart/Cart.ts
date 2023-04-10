import AggregateRoot from '@/shared/domain/AggregateRoot';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';
import Product from '../product/domain/Product';
import CartItem from './CartItem';
import ProductItemTotal from './domain/value_objects/ProductItemTotal';

class Cart extends AggregateRoot {

    private _items: CartItem[];

    constructor() {
        super();

        this._items = [];
    }

    toPrimitives() {
        return {};
    }

    addProduct(product: Product, totalItems: number) {
        const productItemTotalVo = new ProductItemTotal(totalItems);
        const priceTotalVo = new CurrencyValue(productItemTotalVo.value() * product.productPrice().value());
        const cartItem = new CartItem({
            product,
            total: productItemTotalVo,
            price_total: priceTotalVo,
            unit_price: product.productPrice(),
        });
        this._items.push(cartItem);
    }
}

export default Cart;
