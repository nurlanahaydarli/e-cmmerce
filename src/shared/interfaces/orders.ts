import { IProduct } from "./products";

export interface IDeliveryAddress {
    _id: string;
    country?: string;
    city?: string;
    coordinates?: {
        lat?: number;
        lng?: number;
    }
    formatted_address?: string;
    address?: string;
    addressDetail?: string;
    addressComments?: string;
    postalCode?: string;
}

export interface IOrderProduct extends IProduct {
    sizeGroupOrders: string;
    sizeOrders: string;
    colorOrders: string;
    numberOrders: number;
}

export interface IOrder {
    _id: string;
    userId: string;
    adress: string; // WTF IS THAT?!
    address: IDeliveryAddress;
    acceptableDelivery: string[];
    adminVisible: boolean;
    clientVisible: boolean;
    countryDelivery: string;
    cityDelivery: string;
    deliveryPrice: number;
    orderName: string;
    partianPayment: boolean;
    payment: 'delivered' | 'online';
    paymentSuccessOnline: boolean;
    priceDeliveryType: string; // IDK
    status: 'expectation' | 'confirmed' | 'canceled';
    withoutLogin: boolean;
    createdAt: Date;
    totalPriceOrders: number;
    products: IOrderProduct[];
}

export interface IOrderClient extends IOrder {
    date?: string;
    statusText?: string;
    deliveryAddress?: string;
    totalPriceText?: string;
    addressText?: string;
    details?: string;
}

export interface IOrderBasket {
    userId: string;
    adress: string;
    address: IDeliveryAddress;
}
