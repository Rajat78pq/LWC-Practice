import { LightningElement } from 'lwc';

export default class ListCard extends LightningElement {

    listStudents = [
        {Id:1, Name:'Rohan', Age:20},
        {Id:2, Name:'Sohan', Age:25},
        {Id:3, Name:'Rajni', Age:30},
        {Id:4, Name:'Saravana', Age:35},
        {Id:5, Name:'Saurabh', Age:40},
    ];
}