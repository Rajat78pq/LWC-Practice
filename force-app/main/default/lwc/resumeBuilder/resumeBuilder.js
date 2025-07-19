import { LightningElement, track } from 'lwc';

export default class ResumeBuilder extends LightningElement {
    @track personalInformation = {};
    @track educationDetails = [];
    @track workExperiences = [];
    @track Skills = [];
    @track Summary = '';


    handelUpdatePi(event){
        this.personalInformation = JSON.parse(JSON.stringify(event.detail));
        console.log(this.personalInformation);
    }

    handelUpdateEdu(event){
        this.educationDetails = JSON.parse(JSON.stringify(event.detail));
        let eduDetails = JSON.stringify(this.educationDetails);
        console.log('The object looks like ', eduDetails);
    }

    handelUpdateWorkExp(event){
        this.workExperiences = JSON.parse(JSON.stringify(event.detail));
        let workExp = JSON.stringify(this.workExperiences);
        console.log('The receive object looks like ', workExp);
    }

    handelUpdateSkills(event){
        this.Skills = JSON.parse(JSON.stringify(event.detail));
        console.log('The skills object looks like ', this.Skills);
    }

    handelUpdateSummary(event){
        this.Summary = event.detail;
        console.log('Summary detail', this.Summary);
    }
}