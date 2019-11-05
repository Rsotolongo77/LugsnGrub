import React from "react";
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Redirect,
  // Switch,
  // withRouter
} from 'react-router-dom';


function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
        </label>
        <input
          className="form-control"
          id="truckName"
          type="text"
          value={props.truckName}
          placeholder="Truck Name"
          name="truckName"
          onChange={props.handleInputChange}
          required
        />

        <br></br>

        <input
          className="form-control"
          id="truckPic"
          type="img"
          value={props.truckPic}
          placeholder="Truck Picture"
          name="truckPic"
          onChange={props.handleInputChange}
          required
        />

        <br></br>

        <input
          className="form-control"
          id="truckMenu"
          type="text"
          value={props.truckMenu}
          placeholder="Menu"
          name="truckMenu"
          onChange={props.handleInputChange}
          required
        />

        <br></br>

        <input
          className="form-control"
          id="truckSchedule"
          type="text"
          value={props.truckSchedule}
          placeholder="Schedule"
          name="truckSchedule"
          onChange={props.handleInputChange}
          required
        />

        <br></br>

        <input
          className="form-control"
          id="truckCuisine"
          type="text"
          value={props.truckCuisine}
          placeholder="Cuisine"
          name="truckCuisine"
          onChange={props.handleInputChange}
          required
        />

        <br></br>

      </div>
      <div className="pull-right">
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"

        >
          Submit
        </button>
      </div>
      <Link to="/truckmgt">Truck Mgt</Link>
    </form>
  );
}

export default Form;
