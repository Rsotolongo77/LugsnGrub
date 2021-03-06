import React from "react";


function Form(props) {


  return (
    <div>
      <form onSubmit={props.handleImageSubmit}>
        <div className="custom-file mb-2">
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
        <input type="submit" value="Upload Truck Image" className="btn btn-primary btn-block" />
      </form>

      <hr id="uploadLine"></hr>

      <form onSubmit={props.handleMenuSubmit}>
        <div className="custom-file mb-2">
          <input
            type="file"
            className="custom-file-input"
            value={props.menuInput}
            name="menu"
            id="truckMenu"
            onChange={props.onChangeInput2}
          />
          <label
            className="custom-file-label"
            htmlFor="truckMenu">{props.truckMenu}
          </label>
        </div>
        <input type="submit" value="Upload Truck Menu" className="btn btn-primary btn-block" />
      </form>

      <hr id="uploadLine"></hr>

      <form onSubmit={props.handleScheduleSubmit}>
        <div className="custom-file mb-2">
          <input
            type="file"
            className="custom-file-input"
            value={props.scheduleInput}
            name="schedule"
            id="truckSchedule"
            onChange={props.onChangeInput3}
          />
          <label
            className="custom-file-label"
            htmlFor="truckMenu">{props.truckSchedule}
          </label>
        </div>
        <input type="submit" value="Upload Truck Schedule" className="btn btn-primary btn-block" />
      </form>

      <hr id="uploadLine"></hr>

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
            className="btn btn-lg float-right" id="formBtn">
            Submit
        </button>
        </div>
      </form >
    </div>
  );
}

export default Form;

