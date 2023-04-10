import Cart from '../Cart';

export default interface CartRepository {
    getActiveCart: () => Cart | null;
    saveProductItems: (cart: Cart) => void;
}
