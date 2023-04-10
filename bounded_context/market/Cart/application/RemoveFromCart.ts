import CartRepository from "../domain/CartRepository";

interface RemoveFromCartProps {

}

export default class RemoveFromCart {
    constructor(private cartRepository: CartRepository) {}

    execute({ productId: string }: RemoveFromCartProps) {
        
    }
}
