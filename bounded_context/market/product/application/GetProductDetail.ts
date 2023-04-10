import ProductRepository from '../domain/ProductRepository';

interface GetProductDetailProps {
    productId: string;
}

class GetProductDetail {
    constructor(private productRepo: ProductRepository) { }
    
    execute({ productId }: GetProductDetailProps) {
        const product = this.productRepo.find(productId);
        return product;
    }
}

export default GetProductDetail;
