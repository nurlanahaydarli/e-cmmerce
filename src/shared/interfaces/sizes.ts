export interface ISize {
    _id: string;
    name: string;
    path: string;
    createdAt: Date;
    count: number;
    sizes: [
        {
            _id: string;
            size: string;
            path: string;
        }
    ];
}
