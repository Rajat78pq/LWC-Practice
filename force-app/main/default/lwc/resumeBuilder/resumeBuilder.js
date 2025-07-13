import { LightningElement } from 'lwc';

export default class ResumeBuilder extends LightningElement {
    personalInformation = {};
    handelUpdatePi(event){
        console.log('the pi 7 called');
        this.personalInformation = event.detail;
        console.log('the pi 8 called', this.personalInformation);
    }
}