console.log("i am running ");

let string = "";


let buttons = document.querySelectorAll('.btn');


Array.from(buttons).forEach((button) => {
	button.addEventListener('click', (e) => {
		// console.log(e.target);
		try {
			if (e.target.innerHTML == '=') {
				string = eval(string);
				document.querySelector('.input').value = string;
			}
			else if (e.target.innerHTML == 'C') {
				string = ""
				document.querySelector('.input').value = string;
			}
			else {
				string = string + e.target.innerHTML;
				document.querySelector('.input').value = string;
			}
		}
		catch (err) {
			// console.log("error");
			string = "error occured try different ";
			document.querySelector('.input').value = string;
		}

	})

})






