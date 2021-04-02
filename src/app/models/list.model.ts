import { ItemModel } from './item.model';

export class ListModel {

    id?: string;
    title: string;
    complete: boolean;
    items: ItemModel[]

    constructor(title: string){
        this.title = title;
        this.complete = false;
        this.items = [];
    }

}