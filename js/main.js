//cache of inputs

const submit = document.querySelector('#complete')
const nameField = document.querySelector('#name')
const emailField = document.querySelector('#email')
const addressField = document.querySelector('#address')
const cityField = document.querySelector('#city')
const stateField = document.querySelector('#state')
const zipField = document.querySelector('#zip')
const countryField = document.querySelector('#country')

//create a checkValidation class

class CheckValidation {
	constructor(input,type){
		this.input = input;
		this.type = type;
		this.errors = [];
	}
	
	addError(message){
		this.errors.push(message);
	}
	
	getMessage(){
	
		const status = this.input.validity
		
		if(status.valueMissing){
			this.addError('We need this field completed');
		}
		
		if(!this.input.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
			this.addError('Please enter a valid email');
		}
		
		if(!this.input.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
			this.addError('Please enter a valid US zipcode');
		}
		
		return this.errors
	}
	
}


//set up event listeners

submit.addEventListener("click", (event) => {
	event.preventDefault(); //this will stop standard form validation
		
	
	let validateEmail = new CheckValidation(emailField, "email");
	let errorMessages = validateEmail.getMessage();
	let validateName = new CheckValidation(nameField, "name");
	
	let validateAddress = new CheckValidation(addressField, "address");
	
	let validateCity = new CheckValidation(cityField, "city");
	
	let validateState = new CheckValidation(stateField, "state");
	
	let validateZip = new CheckValidation(zipField, "zip");
	
	let validateCountry = new CheckValidation(countryField, "country");
	
	
	

	if (errorMessages.length > 0){
		errorMessages.forEach( (err) => {
			countryField.insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
		})
	} else {
	  alert('Form Submitted');
		}
	})



