import { IProduct, IProductsQuery } from "../../interfaces/products";

export interface IProductStoreActions {
    // getAll: () => Promise<void>;
    // getHome: (limit: number, skipNew: number, skipBest: number) => Promise<void>;
    getNewProducts: (limit: number, skip: number) => Promise<void>;
    getBestProducts: (limit: number, skip: number) => Promise<void>;
    getByPath: (id: string) => Promise<void>;
    getCatalog: (query: IProductsQuery, limit: number, skip: number) => Promise<void>;
    getFavorites: (ids: string[]) => Promise<void>;
    getSameCategoryProducts: (id: string, limit: number, skip: number) => Promise<void>;
    // getByID: (id: number) => Promise<void>;
    reset: () => void;
}
export interface IProductStore {
    homeLoading: boolean;
    productLoading: boolean;
    catalogLoading: boolean;
    catalogProducts: IProduct[] | null
    newProducts: IProduct[] | null
    bestProducts: IProduct[] | null
    singleProduct: IProduct | null
    sameCategoryProducts: IProduct[] | null
    favoritesProducts: IProduct[] | null
    actions: IProductStoreActions;
    homeFetched: boolean;
    catalogFetched: boolean;
    favoritesLoading: boolean;
    previousQuery: IProductsQuery;
}
