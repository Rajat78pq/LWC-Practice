import { LightningElement, track } from 'lwc';

export default class SignUpPage extends LightningElement {
    @track username = '';
    @track email = '';
    @track password = '';

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleSignup() {
        // In real world, this data goes to Apex or server.
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        alert('Signup successful (mock)');
    }
}