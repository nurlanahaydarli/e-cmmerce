export interface IColor {
    _id: string;
    name: string;
    color: string;
    createdAt: Date;
    path: string;
    i18n: {
        az: {
            name: string;
        },
        ru: {
            name: string;
        },
        en: {
            name: string;
        }
    };
}
