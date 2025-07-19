import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {
    summary = '';

    handleSummary(event){
        try {
            this.summary = event.target.value;
            this.updateResume();
        } catch (error) {
            console.error('Error from summary handler', error);
        }
    }

    updateResume(){
        let updateSummary = new CustomEvent('updatesummary', {detail: this.summary});
        this.dispatchEvent(updateSummary);
    }
}