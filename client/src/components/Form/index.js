import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Register Form</strong>
        </label>
        <input
          className="form-control"
          id="username"
          type="text"
          value={q}
          placeholder="username"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="password"
          type="password"
          value={q}
          placeholder="password"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="email"
          type="email"
          value={q}
          placeholder="email"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="truckName"
          type="text"
          value={q}
          placeholder="Enter Truck Name"
          name="q"
          onChange={handleInputChange}
          required
        />

        <input
          className="form-control"
          id="city"
          type="text"
          value={q}
          placeholder="City"
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
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
