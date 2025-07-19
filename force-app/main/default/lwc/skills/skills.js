import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {
    @track Skills = [
        {
            id:0,
            name:''
        }
    ];

    handelSkill(event){
        try {
            let skillIndex = event.target.dataset.index;
            let fieldName = event.target.dataset.field;
            let fieldValue = event.target.value;
            this.Skills[skillIndex][fieldName] = fieldValue;
            this.updateResume();
        } catch (error) {
            console.error('Error from skill handler', error);
        }
    }

    updateResume(){
        let updateSkill = new CustomEvent('updateskill', {detail: this.Skills});
        this.dispatchEvent(updateSkill);
    }

    addSkill(){
        let skillIndex = this.Skills.length;
        this.Skills.push({
            id: skillIndex,
            name:''
        })
    }
}