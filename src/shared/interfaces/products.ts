export interface IProductCharacteristic {
    _id: string;
    size: string;
    color: string;
    barcode: string;
    count: number;
    price: number;
}

export interface IProduct {
    _id: string;
    id: number;
    name: string;
    path: string;
    price: number;
    size: string[];
    color: string[];
    sizeGroup?: string;
    inStock: boolean;
    quantity: number;
    createdAt: string | Date;
    mainImg: string;
    images: string[];
    category: string[];
    description: string;
    totalCount: number;
    minPrice?: number;
    maxPrice?: number;
    totalMinPrice?: number;
    totalMaxPrice?: number;
    status: boolean;
    characteristic?: IProductCharacteristic[]
}

export interface IProductsQuery {
    name?: string;
    category?: string;
    color?: string;
    size?: string;
}
