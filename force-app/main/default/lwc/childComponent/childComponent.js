import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api listNames = [];

    sendToParent(event){
        console.log('child js called.');
        const msg = event.target.value;
        this.dispatchEvent(new CustomEvent('send', {detail : msg}));
        console.log('dispatch the event '+ msg);
    }
}