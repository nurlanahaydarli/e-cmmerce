// import { create } from "zustand";
// import { IProductStore } from "./product.types";
// import { isDevelopment } from "../../../../lib/utils";
// import { IProductsQuery } from "@/shared/interfaces/products";
//
// const initial: Omit<IProductStore, "actions"> = {
//     homeLoading: false,
//     catalogLoading: false,
//     homeFetched: false,
//     catalogFetched: false,
//     productLoading: false,
//     catalogProducts: null,
//     singleProduct: null,
//     sameCategoryProducts: null,
//     newProducts: null,
//     bestProducts: null,
//     favoritesProducts: null,
//     favoritesLoading: false,
//     previousQuery: {}
// };
//
// const API_BASE_URL = isDevelopment ? 'http://localhost:9000' : 'https://larcapi.cubicsbrands.az';
//
// export const useProductStore = create<IProductStore>((set, get) => ({
//     ...initial,
//     actions: {
//         getNewProducts: async (limit: number = 4, skip: number = 0) => {
//             set({ homeLoading: true });
//             try {
//                 console.log('Fetching catalog products');
//                 const response = await fetch(`${API_BASE_URL}/api/home/homeProducts?type=new&limit=${limit}&skip=${skip}`);
//                 const newData = await response.json();
//
//                 const { newProducts } = get();
//                 set({
//                     newProducts: [...(newProducts || []), ...newData],
//                     homeLoading: false,
//                 });
//             } catch (error) {
//                 console.error("Failed to fetch new products:", error);
//                 set({ homeLoading: false });
//             }
//         },
//         getBestProducts: async (limit: number = 4, skip: number = 0) => {
//             set({ homeLoading: true });
//             try {
//                 console.log('Fetching best products:', `${API_BASE_URL}/api/home/homeProducts?type=best&limit=${limit}&skip=${skip}`);
//                 const response = await fetch(`${API_BASE_URL}/api/home/homeProducts?type=best&limit=${limit}&skip=${skip}`);
//                 const bestData = await response.json();
//
//                 const { bestProducts } = get();
//                 set({
//                     bestProducts: [...(bestProducts || []), ...bestData],
//                     homeLoading: false,
//                 });
//             } catch (error) {
//                 console.error("Failed to fetch best products:", error);
//                 set({ homeLoading: false });
//             }
//         },
//         getCatalog: async (query: IProductsQuery = {}, limit: number = 24, skip: number = 0) => {
//             set({ catalogLoading: true });
//             try {
//                 const { previousQuery } = get();
//                 const isQueryDifferent = JSON.stringify(previousQuery) !== JSON.stringify(query);
//                 if (isQueryDifferent) {
//                     set({ catalogProducts: null });
//                 }
//                 const queryParams = new URLSearchParams({ limit: limit.toString(), skip: skip.toString() });
//                 Object.entries(query).forEach(([key, value]) => {
//                     if (value) {
//                         queryParams.append(key, value.toString());
//                     }
//                 });
//                 const catalogResponse = await fetch(`${API_BASE_URL}/api/catalog/products?${queryParams.toString()}`);
//                 const catalogData = await catalogResponse.json();
//                 const { catalogProducts } = get();
//                 console.log('Catalog data: ', catalogData);
//                 set({
//                     previousQuery: query,
//                     catalogProducts: [...(catalogProducts || []), ...catalogData],
//                     catalogLoading: false,
//                     catalogFetched: true
//                 });
//             } catch (error) {
//                 console.error("Failed to fetch catalog products:", error);
//                 set({ catalogLoading: false });
//             }
//         },
//         getByPath: async (id: string) => {
//             set({ productLoading: true });
//             try {
//                 if (!id) {
//                     throw new Error("Product ID is missing in the route.");
//                 }
//                 const response = await fetch(`${API_BASE_URL}/api/catalog/product/?path=${id}`);
//                 const data = await response.json();
//                 set({ singleProduct: data, productLoading: false });
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//                 set({ productLoading: false });
//             }
//         },
//         getSameCategoryProducts: async (id: string, limit: number = 4, skip: number = 0) => {
//             set({ productLoading: true });
//             try {
//                 if (!id) {
//                     throw new Error("Product ID is missing in the route.");
//                 }
//                 const response = await fetch(`${API_BASE_URL}/api/catalog/product/category?path=${id}&limit=${limit}&skip=${skip}`);
//                 const newData = await response.json();
//                 const { sameCategoryProducts } = get();
//                 set({ sameCategoryProducts: [...(sameCategoryProducts || []), ...newData] });
//                 console.log('Same category products: ', sameCategoryProducts);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//                 set({ productLoading: false });
//             }
//         },
//         getFavorites: async (ids: string[]) => {
//             const favorites = ids || JSON.parse(localStorage.getItem("favorites") || '[]');
//             if (favorites) {
//                 const parsedFavorites = { ids: (favorites) };
//                 console.log('Parsed favorites: ', parsedFavorites);
//                 set({ favoritesLoading: true });
//                 try {
//                     const favoritesResponse = await fetch(`${API_BASE_URL}/api/catalog/favorites`, {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(parsedFavorites),
//                     });
//                     const favoritesData = await favoritesResponse.json();
//                     console.log('Favorites: ', favoritesData);
//                     set({ favoritesProducts: favoritesData, favoritesLoading: false });
//                 } catch (error) {
//                     console.error("Failed to fetch favorites products:", error);
//                     set({ favoritesLoading: false });
//                 }
//             }
//         },
//         reset: () => set({ ...initial }),
//     },
// }));
