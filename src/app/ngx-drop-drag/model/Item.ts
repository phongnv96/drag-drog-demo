export interface Item {
    id?: string;
    type?: string;
    title?: string;
    color?: string;
    isHasChildItem?: boolean;
    items?: Item[];
}
