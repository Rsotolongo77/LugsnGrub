import React from 'react'



class RegisterForm extends React.Component {

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

					});

				}}
			>

				<div className="form-group" id='registerCon2' >

					<input
						id="username"
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
					<button className="btn btn btn-primary"
						type='submit'>Submit</button>


				</div>

			</form>

		)
	}
}

export default RegisterForm


