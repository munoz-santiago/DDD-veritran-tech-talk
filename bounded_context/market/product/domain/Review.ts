
import Product from './Product';

import ProductCalification from './value_objects/ProductCalification';
import ReviewComment from './value_objects/ReviewComment';

interface Props {
    product: Product;
    stars: ProductCalification;
    comment: ReviewComment;
}

export default class Review {
    private _product: Product;
    private _stars: ProductCalification;
    private _comment: ReviewComment;

    constructor({ product, stars, comment }: Props) {
        this._product = product;
        this._stars = stars;
        this._comment = comment;
    }

    product() {
        return this._product;
    }

    stars() {
        return this._stars;
    }

    comment() {
        return this._comment;
    }

}
