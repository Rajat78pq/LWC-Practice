import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    data = [
        {Id:1, Name:'Raja'},
        {Id:2, Name:'Saravanan'},
        {Id:3, Name:'Kiran'},
        {Id:4, Name:'Sowmya'}
    ];

    message = 'Default Text';

    handelData(event){
        console.log('Message: '+event.detail);
        this.message = event.detail;
    }
}