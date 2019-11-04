import React from "react";


function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Truck Details</strong>
        </label>
        <input
          className="form-control"
          id="truckName"
          type="text"
          value={q}
          placeholder="Truck Name"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="truckPic"
          type="img"
          value={q}
          placeholder="Truck Picture"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="truckMenu"
          type="text"
          value={q}
          placeholder="Menu"
          name="q"
          onChange={handleInputChange}
          required
        />


        <input
          className="form-control"
          id="truckSchedule"
          type="text"
          value={q}
          placeholder="Schedule"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="truckCuisine"
          type="text"
          value={q}
          placeholder="Cuisine"
          name="q"
          onChange={handleInputChange}
          required
        />

      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Create Truck!
        </button>
      </div>
    </form>
  );
}

export default Form;
