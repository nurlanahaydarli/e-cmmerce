export interface ICategory {
    id: string;
    subcategory: string[];
    name: string;
    path: string
    depth: number;
    type: 'category' | 'link';
    parentCategory: string;
}
