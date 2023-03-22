import Percentage from '@/shared/domain/value_objects/Percentage';
import CurrencyValue from '@/shared/domain/value_objects/CurrencyValue';

import ProductName from '../value_objects/ProductName';
import ProductDescription from '../value_objects/ProductDescription';
import StockTotal from '../value_objects/StockTotal';


export default class Product {
    private name: ProductName;
    private description: ProductDescription;
    private basePrice: CurrencyValue;
    private ivaPercentage: Percentage;
    private stock: StockTotal;
}
