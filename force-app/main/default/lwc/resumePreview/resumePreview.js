import { LightningElement, api } from 'lwc';

const educationColumns = [
    {label: 'Degree', fieldName: 'degree'},
    {label: 'Institute', fieldName:'institute'},
    {label: 'Passing Year', fieldName:'passingYear'}
];

const workExpColumns = [
    {label: 'Job Title', fieldName: 'jobTitle'},
    {label: 'Company Name', fieldName:'companyName'},
    {label: 'Position', fieldName:'jobPosition'},
    {label: 'Start Date', fieldName:'startDate'}
];

export default class ResumePreview extends LightningElement {
    @api personalInformation = {};
    @api educationDetails = [];
    @api workExperiences = [];
    @api skillSet = [];
    @api summary = '';

    ResumePreview(){
        console.log('form constructor ', this.skillSet);
    }

    EduColumns = educationColumns;
    ExpColumns = workExpColumns;
}