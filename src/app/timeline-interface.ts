import { CardInterface } from './card-interface';

export interface TimelineInterface {
    id: number;
    name: String;
    creationDate: String;
    updateDate: String;
    category: String;
    cardList: CardInterface[];
}
