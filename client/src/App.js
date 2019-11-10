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
							{/* <Route exact path="/login" component={truckButton} /> */}
							<Route exact path="/register" component={Register} />
							<PrivateRoute exact path="/protected" component={users} />
							<PrivateRoute exact path="/users" component={users} />
							<PrivateRoute exact path="/truckmgt" component={TruckMgt} />
							<PrivateRoute exact path="/truckform" component={TruckForm} />
							<PrivateRoute exact path="/updateform" component={UpdateForm} />

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

// const truckButton = withRouter(({ history }) => (
// 	Auth.isAuthenticated ? (
// 	  <button className="btn btn-danger"
// 		onClick={() => {
// 		  history.push('/truckmgt')
// 		}}>
// 		Manage Trucks
// 			  </button>
// 	) : (
// 		<span></span>
// 	  )
//   ))


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

