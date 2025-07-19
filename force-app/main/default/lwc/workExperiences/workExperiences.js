import { LightningElement, track } from 'lwc';

export default class WorkExperiences extends LightningElement {
    @track workExperiences = [{
        id:0,
        jobTitle: '',
        companyName: '',
        jobPosition: '',
        startDate: ''
    }]

    handelWorkExperiences(event){
        try {
            let fieldIndex = event.target.dataset.index;
            let fieldName = event.target.dataset.field;
            let fieldValue = event.target.value;
            this.workExperiences[fieldIndex][fieldName] = fieldValue;
            this.updateResume();
        } catch (error) {
            console.log('Error from handelWorkExperiences', error);
        }
    }

    updateResume(){
        let updateWorkExpe = new CustomEvent('updateworkexp', {detail: this.workExperiences});
        this.dispatchEvent(updateWorkExpe);
    }

    addWorkExp(){
        let workIndex = this.workExperiences.length;
        this.workExperiences.push({
            id:workIndex,
            jobTitle: '',
            companyName:'',
            jobPosition: '',
            startDate: ''
        })
    }
}