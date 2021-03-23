import { ItemModel } from './item.model';

export class ListModel {

    id!: number;
    title!: string;
    complete: boolean;
    items: ItemModel[];

    constructor(){
        this.complete = false;
        this.items = []
    }

}