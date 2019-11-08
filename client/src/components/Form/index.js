import React from "react";
// import {
//   // BrowserRouter as Router,
//   // Route,
//   // Link,
//   // Redirect,
//   // Switch,
//   // withRouter
// } from 'react-router-dom';



function Form(props) {


  return (
    <div>
      <form onSubmit={props.handleImageSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            value={props.imageInput}
            name="image"
            id="truckPic"
            onChange={props.onChangeInput}
          />
          <label
            className="custom-file-label"
            htmlFor="truckPic">{props.truckPic}
          </label>
        </div>
        <input type="submit" value="Upload Image" className="btn btn-primary btn-block mt-4" />
      </form>
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

          {/* <br></br>

        <input
          className="custom-file-input"
          id="truckPic"
          type="file"
          value={props.imageInput}
          // placeholder={props.truckPic}
          name="image"
          onChange={props.onChangeInput}
          required
        />
        <label 
        className="custom-file-label" 
        htmlFor="truckPic">{props.truckPic}</label> */}

          {/* <input 
          type="file" 
          className="custom-file-input form-control" 
          id="truckPic"
          value={props.truckPic} 
          name="image" 
          onChange={props.onChangeInput} /> */}

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
      </form >
    </div>
  );
}

export default Form;

