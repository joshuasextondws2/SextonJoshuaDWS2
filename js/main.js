//cache of inputs

const submit = document.querySelector('#complete')
const nameField = document.querySelector('#fullName')
const emailField = document.querySelector('#email')
const addressField = document.querySelector('#address')
const cityField = document.querySelector('#city')
const stateField = document.querySelector('#state')
const zipField = document.querySelector('#zip')
const countryField = document.querySelector('#country')

function shipInfoName(){
	document.querySelector('#shipName').innerHTML = document.querySelector('#fullName').value;
}

function shipInfoAddress(){
	document.querySelector('#shipAddress').innerHTML = document.querySelector('#address').value;
}

function shipInfoCity(){
	document.querySelector('#shipCity').innerHTML = document.querySelector('#city').value + ",";
}

function shipInfoState(){
	document.querySelector('#shipState').innerHTML = document.querySelector('#state').value;
}
function shipInfoZip(){
	document.querySelector('#shipZip').innerHTML = document.querySelector('#zip').value;
}



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
		const type = this.type
		
		if(type === "name" && status.valueMissing){
			this.addError('We need your name here');
		}
		
		if(type === "address" && status.valueMissing){
			this.addError('We need your address please');
		}
		
		if(type === "city" && status.valueMissing){
			this.addError('Please give us a city for shipping');
		}
		
		if(type === "state" && status.valueMissing){
			this.addError('You forgot to add a state');
		}
		
		if(type === "email" && !this.input.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
			this.addError('Please enter a valid email');
		}
		
		if(type ==="zip" && !this.input.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
			this.addError('Please enter a valid US zipcode');
		}
		const countryField = document.querySelector('#countrySelection')
		var selectedValue = countryField.options[countryField.selectedIndex].value;
		if(type === "country" && selectedValue=="se"){
			this.addError('Please select a country');
		}
		
		return this.errors
	}
	
}


//set up event listeners

submit.addEventListener("click", (event) => {
	event.preventDefault(); //this will stop standard form validation
		var element = document.querySelector('#errors');	
		if(element){	
			element.outerHTML = "";
       		delete element;
       		}
	
		
	let validateEmail = new CheckValidation(emailField, "email");
	let errorMessages1 = validateEmail.getMessage();
	
	let validateName = new CheckValidation(nameField, "name");
	let errorMessages5 = validateName.getMessage();

	let validateAddress = new CheckValidation(addressField, "address");
	let errorMessages = validateAddress.getMessage();
	
	let validateCity = new CheckValidation(cityField, "city");
	let errorMessages2 = validateCity.getMessage();

	let validateState = new CheckValidation(stateField, "state");
	let errorMessages3 = validateState.getMessage();

	let validateZip = new CheckValidation(zipField, "zip");
	let errorMessages4 = validateZip.getMessage();

	let validateCountry = new CheckValidation(countryField, "country");
		let errorMessages6 = validateCountry.getMessage();

	
	if (errorMessages.length > 0 ){
		errorMessages.forEach( (err) => {
			document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
		})
		}
	else if(errorMessages1.length > 0){
		errorMessages1.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
    	})
    	}
	else if(errorMessages2.length >0){
		errorMessages2.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
		})
		}
	else if(errorMessages3.length >0) {
		errorMessages3.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
		})
		}
	else if(errorMessages4.length >0){
		errorMessages4.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
		})
		}
	else if(errorMessages5.length >0){
		errorMessages5.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
})
}
	else if(errorMessages6.length >0){
		errorMessages6.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errors">' + err + '</p>')
})

} else {
	  alert('Form Submitted');
		}
	})
	



