import axios from "axios";

export default {
    // Gets all trucks
    getTrucks: function (username) {
        console.log(username)
        return axios.get("/api/trucks/" + username);
    },
    // Gets the book with the given id
    updateTruck: function (id) {
        return axios.put("/api/owners" + id);
    },
    // Deletes the book with the given id
    deleteTruck: function (id) {
        return axios.delete("/api/trucks/owners" + id);
    },
    // Saves a book to the database
    submitTruck: function (createTruck) {
        console.log("Create Truck:", createTruck);

        return axios.post("/api/trucks/" + createTruck.username, createTruck);
    }
}; 