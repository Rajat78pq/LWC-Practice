import { LightningElement, wire } from 'lwc';
import getCases from '@salesforce/apex/CaseController.getCasesList';
import getCaseDetail from '@salesforce/apex/CaseController.getCaseDetail';

export default class CustomerSupportDashboard extends LightningElement {
    caseDetails = [];
    caseRowDetail = {};
    caseRecordId;
    columns = [
        {
            label:'Case Id',
            fieldName:'recordLink',
            type:'url',
            typeAttributes: {
                label: { fieldName: 'Case Id' },
                target: '_self'
            }
        },
        {label:'Case Number', fieldName:'CaseNumber'},
        {label:'Reason', fieldName:'Reason'},
        {label:'Status', fieldName:'Status'},
        {label:'Priority', fieldName:'Priority'},
        {
        type: 'button',
        typeAttributes: {
            label: 'Detail',
            name: 'get_id',
            variant: 'brand'
        }
    }
    ];

    @wire(getCases, {status: '$value'})
    getCasesHandeler(response){
        const {data, error} = response;
        if (data) {
            this.caseDetails = data.map(row => ({
                ...row,
                recordLink: '/' + row.Id 
            }));
        } else {
            console.error(error);
        }
    }

    value = 'New';
    get options(){
        return [
            {label:'New', value:'New'},
            {label:'Working', value:'Working'},
            {label:'Escalated', value:'Escalated'}
        ]
    }

    handleChange(event){
        this.value = event.target.value;
    }

    handelRowAction(event){
        const row = event.detail.row;
        console.log('Clicked Record Id', row.Id);
        this.caseRecordId = row.Id;
    }

    
}