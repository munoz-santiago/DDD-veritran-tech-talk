import RedisEventBus from '../../../../shared/infrastructure/redisEventBus';
import CreateProduct from '../../application/CreateProduct';
import InMemoryProductRepository from '../InMemoryProductRepository';

const saveProduct = (req, res) => {
    try {
        const {
            id,
            name,
            description,
            basePrice,
        } = req.body;
    
        if(!id) throw new Error('id is required.')
        if(!name) throw new Error('name is required.')
        if(!description) throw new Error('description is required.')
        if(!basePrice) throw new Error('basePrice is required.')
    
        const productsRepo = new InMemoryProductRepository();
        const eventBus = new RedisEventBus();
    
        const saveProduct = new CreateProduct(productsRepo, eventBus);
        saveProduct.execute({
            id,
            name,
            description,
            basePrice,
            ivaPercentage: 19,
        });
    
        res.status(200);
        res.send({});

    } catch (error) {
        res.status(500);
        res.send({
            error: error.toString(),
        }); 
    }
}

export default saveProduct;
