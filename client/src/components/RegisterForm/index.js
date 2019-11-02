import React from 'react'



class RegisterForm extends React.Component {
	// refs
	// form: null;
	// usernameElem: null;
	// passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);

		return (

			<form
				ref={(elem) => this.form = elem}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: this.usernameElem.value,
						password: this.passwordElem.value,
						email: this.emailElem.value,
						truckName: this.truckNameElem.value,
						truckPic: this.truckPicElem.value,
						truckCuisine: this.truckCuisineElem.value,
						city: this.cityElem.value
					});
				}}
			>

				<div className="form-group">

					<input
						type="text"
						className="validate form-control"
						ref={(input) => this.usernameElem = input}
						name="username"
						placeholder="Create Username" />
					<br />

					<input
						id="password"
						type="password"
						className="validate form-control"
						ref={(input) => this.passwordElem = input}
						name="password"
						placeholder="Create Password"
					/>
					<br />
					<input
						id="email"
						type="email"
						className="validate form-control"
						ref={(input) => this.emailElem = input}
						name="email"
						placeholder="email"
					/>
					<br />
					<input
						id="truckName"
						type="text"
						className="validate form-control"
						ref={(input) => this.truckNameElem = input}
						name="truckName"
						placeholder="Enter Truck Name"
					/>
					<br />
					<input
						id="truckPic"
						type="img"
						className="validate form-control"
						ref={(input) => this.truckPicElem = input}
						name="truckPic"
						placeholder="Insert Truck Picture"
					/>
					<br />
					<input
						id="truckCuisine"
						type="text"
						className="validate form-control"
						ref={(input) => this.truckCuisineElem = input}
						name="truckCuisine"
						placeholder="Enter Truck Cuisine"
					/>
					<br />
					<input
						id="city"
						type="text"
						className="validate form-control"
						ref={(input) => this.cityElem = input}
						name="city"
						placeholder="City"
					/>
					<br />
					<button className="btn btn btn-primary"
						type='submit'>Submit</button>


				</div>

			</form>

		)
	}
}

export default RegisterForm

















// import React from 'react';



// class RegisterForm extends React.Component {
// 	// refs
// 	form: null;
// 	usernameElem: null;
// 	passwordElem: null;

// 	render() {
// 		const { onRegister } = this.props;
// 		console.log(`Register form props are: ${JSON.stringify(this.props)}`);

// 		return (

// 			<form
// 				ref={(elem) => this.form = elem}
// 				onSubmit={(e) => {
// 					e.preventDefault();
// 					return onRegister({
// 						username: this.usernameElem.value,
// 						password: this.passwordElem.value,
// 						email: this.emailElem.value,
// 						truckName: this.truckNameElem.value,
// 						city: this.cityElem.value,
// 					});
// 				}}
// 			>
// 				<div className="form-group">
// 					<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Create a Username' /><br />
// 					<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Create a Password' /><br />
// 					<input className="form-control" ref={(input) => this.emailElem = input} type='email' name="email" placeholder='Email' /><br />
// 					<input className="form-control" ref={(input) => this.truckNameElem = input} type='text' name="truckName" placeholder='Enter Truck Name' /><br />
// 					<input className="form-control" ref={(input) => this.cityElem = input} type='text' name="city" placeholder='City' /><br />
// 					<button className="btn btn btn-primary" type='submit'>Submit</button>
// 				</div>
// 			</form>

// 		)
// 	}
// };

// export default RegisterForm