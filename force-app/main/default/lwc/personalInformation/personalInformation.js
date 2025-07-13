import { LightningElement } from 'lwc';

export default class PersonalInformation extends LightningElement {
    personalInformation = {};
     
    handelPiChange(event){
        try {
            let fieldName = event.target.dataset.field;
            let fieldValue = event.target.value;
            console.log('The fieldName ', fieldName, 'filedValue ', fieldValue);
            this.personalInformation[fieldName] = fieldValue;
            let personalInfo = JSON.stringify(this.personalInformation);
            console.log('Pi object Value ', personalInfo);
            // console.log('The event dispatch will be start');
            // let updatePiEvent = new CustomEvent('updatepi', {detail: this.personalInformation});
            // this.dispatchEvent(updatePiEvent);
            // console.log('The event is dispatched');
        } catch (error) {
            console.error('Error from handelPiChange ', error);
        }
         
    
        // updateResume();
    }

    updateResume(){
        let updatePiEvent = new CustomEvent('updatepi', {detail: this.personalInformation});
        this.dispatchEvent(updatePiEvent);
        console.log('The event is dispatch');
    }

    // handelPiChange(event){
    //     console.log('The pi 1 called');
    //     let fieldName = event.target.dataset.field;
    //     console.log('The pi 2 called', fieldName);
    //     let fieldValue = event.target.value;
    //     console.log('The pi 3 called', fieldValue);

    //     this.personalInformation[fieldName] = fieldValue;
    //     console.log('The pi 4 called', this.personalInformation);
    //     updateResume();
    //     console.log('The pi 5 called');
    // }

    // updateResume(){
    //     let updatePiEvent = new CustomEvent('updatepi', {detail: this.personalInformation});
    //     this.dispatchEvent(updatePiEvent);
    //     console.log('The pi 6 called');
    // }
}