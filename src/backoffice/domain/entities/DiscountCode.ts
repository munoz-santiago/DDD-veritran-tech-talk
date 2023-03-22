import Percentage from '@/shared/domain/value_objects/Percentage';
import DiscountCode from '../value_objects/DiscountCode';

export default class Discount {
    private discountCode: DiscountCode;
    private discountPercentage: Percentage;
}
