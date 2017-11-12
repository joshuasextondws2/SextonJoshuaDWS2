//cache of inputs

const submit = document.querySelector('#complete')
const nameField = document.querySelector('#fullName')
const emailField = document.querySelector('#email')
const addressField = document.querySelector('#address')
const cityField = document.querySelector('#city')
const stateField = document.querySelector('#state')
const zipField = document.querySelector('#zip')
const countryField = document.querySelector('#country')
const radioSize = document.querySelector('#sizeChoice1')


const radioColor = document.querySelector('input[name=shirtColor]')

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
			this.addError('We need your name please');
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
		var sizeValue = radioSize.checked;
		if(type === "size" && sizeValue==false){
		this.addError('Please select a shirt size');
		}
		var colorValue = radioColor.checked;
		if(type === "color" && colorValue==false){
		this.addError('Please select a shirt color');
		}
		
		return this.errors
	}
	
}


//set up event listeners

submit.addEventListener("click", (event) => {
	event.preventDefault(); //this will stop standard form validation
		var element1 = document.querySelector('#errorAddress');
		var element2 = document.querySelector('#errorCity');	
		var element3 = document.querySelector('#errorState');	
		var element4 = document.querySelector('#errorName');	
		var element5 = document.querySelector('#errorZip');	
		var element6 = document.querySelector('#errorCountry');	
		var element7 = document.querySelector('#errorSize');	
		var element8 = document.querySelector('#errorColor');	
		var element9 = document.querySelector('#errorEmail');	
			

		if(element1){
			element1.innerHTML = "";
       		delete element1;
       		}
       	if(element2){
			element2.innerHTML = "";
       		delete element2;
       		}
	    if(element3){
			element3.innerHTML = "";
       		delete element3;
       		}
    	if(element4){
			element4.innerHTML = "";
       		delete element4;
       		}
       	if(element5){
			element5.innerHTML = "";
       		delete element5;
       		}
       	if(element6){
			element6.innerHTML = "";
       		delete element6;
       		}	
       	if(element7){
			element7.innerHTML = "";
       		delete element7;
       		}	
       	if(element8){
			element8.innerHTML = "";
       		delete element8;
       		}
       	if(element9){
			element9.innerHTML = "";
       		delete element9;
       		}
       			
       
		
		var conditional= false;
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
		
	let validateSize = new CheckValidation(radioSize, "size");
		let errorMessages7 = validateSize.getMessage();
	
	 let validateColor = new CheckValidation(radioColor, "color");
		let errorMessages8 = validateColor.getMessage();	

	
	if (errorMessages.length > 0 ){
		errorMessages.forEach( (err) => {
			document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorAddress">' + err + '</p>')
			conditional=true;
		})
		}
	if(errorMessages1.length > 0){
		errorMessages1.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorEmail">' + err + '</p>')
		conditional=true;

    	})
    	}
	if(errorMessages2.length >0){
		errorMessages2.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorCity">' + err + '</p>')
		conditional=true;

		})
		}
	if(errorMessages3.length >0) {
		errorMessages3.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorState">' + err + '</p>')
		conditional=true;
		})
		}
	if(errorMessages4.length >0){
		errorMessages4.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorZip">' + err + '</p>')
		conditional=true;

		})
		}
	if(errorMessages5.length >0){
		errorMessages5.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorName">' + err + '</p>')
		conditional=true;

})
}
	if(errorMessages7.length >0){
		errorMessages7.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorSize">' + err + '</p>')
		conditional=true;

})
}
	if(errorMessages8.length >0){
		errorMessages8.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorColor">' + err + '</p>')
		conditional=true;

})
}
	if(errorMessages6.length >0){
		errorMessages6.forEach((err)=>{
		document.querySelector('#countrySelection').insertAdjacentHTML('afterend', '<p class="error" id="errorCountry">' + err + '</p>')
		conditional=true;

})

} if(conditional==false) {
	  alert('Form Submitted');
		}
	})
	



