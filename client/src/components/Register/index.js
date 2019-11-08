import React from 'react';
import RegisterForm from "../RegisterForm";
import { Redirect } from 'react-router-dom';

//The component for doing the actual signup of the User
class Register extends React.Component {
    state = {
        redirectToReferrer: false
    }

    register = (data) => {
        fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('Succesfully registered user!');
                    this.setState({
                        redirectToReferrer: true
                    })
                }
            })
            .catch((err) => {
                console.log('Error registering user.', err);
            });
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/protected' } }
        const { redirectToReferrer } = this.state
        console.log(redirectToReferrer);

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div id='registerCont'>
                <br></br>
                <br></br>
                <h1>Register Wheels</h1>
                <RegisterForm onRegister={this.register} />
            </div>
        )
    }
}

export default Register