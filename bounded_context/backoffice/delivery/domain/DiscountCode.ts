import Percentage from '@/shared/domain/value_objects/Percentage';
import DiscountCode from './value_objects/DiscountCode';

interface Props {
    discountCode: DiscountCode;
    discountPercentage: Percentage;
}

export default class Discount {
    private _discountCode: DiscountCode;
    private _discountPercentage: Percentage;

    constructor({ discountCode, discountPercentage }: Props) {
        this._discountCode = discountCode;
        this._discountPercentage = discountPercentage;
    }

    discountCode() {
        return this._discountCode;
    }

    discountPercentage() {
        return this._discountPercentage;
    }

}
