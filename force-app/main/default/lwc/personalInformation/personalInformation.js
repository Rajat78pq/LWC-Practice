import { LightningElement } from 'lwc';

export default class PersonalInformation extends LightningElement {
    personalInformation = {};
     
    handelPiChange(event){
        try {
            let fieldName = event.target.dataset.field;
            let fieldValue = event.target.value;
            console.log('The fieldName ', fieldName, 'filedValue ', fieldValue);
            this.personalInformation[fieldName] = fieldValue;
            this.updateResume();
        } catch (error) {
            console.error('Error from handelPiChange ', error);
        }
    }

    updateResume(){
        let updatePiEvent = new CustomEvent('updatepi', {detail: this.personalInformation});
        this.dispatchEvent(updatePiEvent);
    }

}