// alert('heoooo');
const form = document.querySelector('form');

form.addEventListener("submit",
	function(event) {
		event.preventDefault();
		// alert('is it you?');

		const fullName = document.getElementById('fullName').value;
		const password = document.getElementById('password').value;
		const email = document.getElementById('email').value;
		let passwordError = document.getElementById('passwordError')
		let nameError = document.getElementById('nameError')
		let emailError = document.getElementById('emailError')

		if (fullName === "") {
			nameError.textContent = "Name is required"
			console.log('name is required')
			// alert('Your Name Is Required');
			return;
		};

		if (password.length < 8) {
			passwordError.textContent = "Password is required"
			console.log('Password most be at least eight character')
			// alert("password most be at least eight character")
			return;
		};

		if (!email.includes("@")){
			emailError.textContent = "Email is required"
			// alert('Please your email is required')
			return;
		};

		alert("You have successfully register.");

});

