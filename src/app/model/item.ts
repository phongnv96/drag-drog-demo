import { Group } from './group';

export interface Item {
    id?: string;
    title?: string;
    color?: string;
    isHasGroup?: boolean;
    group?: Group;
}
