import { LightningElement, track } from 'lwc';

export default class TrackDecoratorTest extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';

    studentData = {};

    @track reactiveStudentData = {};

    handelFirstName(event){
        // this.firstName = event.target.value;
        // this.studentData.firstName = event.target.value;
        this.reactiveStudentData.firstName = event.target.value;
    }

    handelLastName(event){
        // this.lastName = event.target.value;
        // this.studentData.lastName = event.target.value;
        this.reactiveStudentData.lastName = event.target.value;
    }

    handelEmail(event){
        // this.email = event.target.value;
        // this.studentData.email = event.target.value;
        this.reactiveStudentData.email = event.target.value;
    }
}