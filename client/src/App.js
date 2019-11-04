import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	// Link,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import Footer from './components/Footer';
import './App.css';

//I want to add some basic inline styling here, even though we are bringing in styles
// const listStyle = {
// 	color: 'cornflowerblue',
// 	listStyle: 'none'
// };
//Now we have all the stuff we need .. let's render some components with the Router
class App extends React.Component {

	render() {

		return (
			<Router>
				<div>
					<Nav className="App-header" />
					<Container fluid>
						{/* <AuthButton /> */}
						{/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}

						<Switch>
							<Route exact path="/" component={PublicRoute} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/login" component={AuthButton} />
							<Route exact path="/register" component={Register} />
							<PrivateRoute exact path="/protected" component={ProtectedRoute} />
							{/* <PrivateRoute exact path="/main" component={Main} />
							<PrivateRoute exact path="/truckform" component={Form} /> */}
							{/* <Route component={NoMatch} /> */}
						</Switch>
					</Container>
					<Footer />
				</div>
			</Router>
		)
	}
}


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<button className="btn btn-danger"
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
			<span></span>
		)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
	)} />
)

export { App, AuthButton }

