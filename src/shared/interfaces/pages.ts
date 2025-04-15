export interface IPage {
    _id: string;
    name: string;
    url: string;
    lng: 'az' | 'ru' | 'en';
    text: string;
    sort: number;
    isHidden: boolean;
}
