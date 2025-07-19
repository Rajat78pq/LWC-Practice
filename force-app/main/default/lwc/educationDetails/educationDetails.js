import { LightningElement, track } from 'lwc';

export default class EducationDetails extends LightningElement {
    @track educationDetails = [{
        id:0,
        degree:'',
        institute:'',
        passingYear:''
    }];

    handelEducationDetails(event){

        try {
            let fieldIndex = event.target.dataset.index;
            let fieldName = event.target.dataset.field;
            let fieldValue = event.target.value;
            this.educationDetails[fieldIndex][fieldName] = fieldValue;
            this.updateResume();
        } catch (error) {
            console.error('handelEducationDetails function error ', error);
        }
    }
    updateResume(){
            let updateEdu = new CustomEvent('updateedu', {detail: this.educationDetails});
            this.dispatchEvent(updateEdu);
    }

    addEducation(){
        let eduIndex = this.educationDetails.length;
        this.educationDetails.push({
            id:eduIndex,
            degree:'',
            institute:'',
            passingYear:''
        })
    }

}