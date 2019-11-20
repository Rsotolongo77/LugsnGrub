import React from 'react';
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
import { Login } from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
// import ProtectedRoute from "./pages/PublicRoute";
import Footer from './components/Footer';
import users from './components/users';
import TruckForm from './components/TruckForm';
import { TruckMgt } from './components/TruckMgt';
import UpdateForm from './components/UpdateForm';
import featured1 from './components/featured1';
import featured2 from './components/featured2';
import featured3 from './components/featured3';
import featured4 from './components/featured4';
import featured5 from './components/featured5';
import featured6 from './components/featured6';
import ScrollToTop from './components/ScrollToTop'
import './App.css';


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
							<Route exact path="/featured1" component={featured1} />
							<Route exact path="/featured2" component={featured2} />
							<Route exact path="/featured3" component={featured3} />
							<Route exact path="/featured4" component={featured4} />
							<Route exact path="/featured5" component={featured5} />
							<Route exact path="/featured6" component={featured6} />
							<Route exact path="/register" component={Register} />
							<PrivateRoute exact path="/protected" component={users} />
							<PrivateRoute exact path="/users" component={users} />
							<PrivateRoute exact path="/truckmgt" component={TruckMgt} />
							<PrivateRoute exact path="/truckform" component={TruckForm} />
							<PrivateRoute exact path="/updateform" component={UpdateForm} />


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
		<button className="btn btn-danger signOut"
			onClick={() => {
				Auth.signout(() => history.push('/'))
			}}>
			Sign out
			</button>
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

