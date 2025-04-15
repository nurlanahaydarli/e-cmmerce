import { IProductCharacteristic } from "./products";

export interface IBasket {
    _id: string;
    userId: string;
    productId: string;
    size: string;
    sizeGroup: string;
    color: string;
    number: number;
    createdAt: Date;
    productName?: string;
    image?: string;
    characteristic?: IProductCharacteristic;
}
