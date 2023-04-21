import ProductRepository from '../domain/ProductRepository';
import Product from '../domain/Product';
import jsonToProduct from './jsonToProduct';

const products = [
    {
        id: '3b33f129-51ee-4a60-b2b7-1f67cc1c65d9',
        name: "Laptop",
        description: "A high-performance laptop with 16 GB RAM and 512 GB SSD",
        basePrice: 1099.99,
        ivaPercentage: 0.19,
        stock: 100
    },
    {
        id: '3c785f0a-9310-4f25-b312-2cc65b1e0c5d',
        name: "Smartphone",
        description: "A 5G enabled smartphone with 128 GB storage and triple camera setup",
        basePrice: 899.99,
        ivaPercentage: 0.19,
        stock: 50
    },
    {
        id: '0b0a0424-4685-4a8e-aa95-4c0da4a4c073',
        name: "Headphones",
        description: "Wireless noise-cancelling headphones with 20 hours of battery life",
        basePrice: 299.99,
        ivaPercentage: 0.19,
        stock: 200
    },
];

class InMemoryProductRepository implements ProductRepository {
    getAll(): Product[] {
        return products.map((productJson) => jsonToProduct(productJson));
    }
    save(product: Product) {
        products.push({
            id:product.id().value(), 
            name:product.name().value(), 
            description:product.description().value(), 
            basePrice:product.basePrice().value(), 
            ivaPercentage:product.ivaPercentage().value(), 
            stock:product.stock().value(), 
        })
    }
}   

export default InMemoryProductRepository;
