import axios from "axios";

export default {
    // Gets all trucks
    getTrucks: function (username) {
        console.log(username)
        return axios.get("/api/trucks/" + username);
    },
    getTruck: function (id) {
        console.log("API", id)
        return axios.get("/api/trucks/truck/" + id);
    },
    // Gets the book with the given id
    updateTruck: function (updateTruck) {
        return axios.put("/api/trucks/truck/" + updateTruck.truckName);
    },
    // Deletes the book with the given id
    deleteTruck: function (id) {
        return axios.delete("/api/trucks/truck" + id);
    },
    // Saves a book to the database
    submitTruck: function (createTruck) {
        console.log("Create Truck:", createTruck);

        return axios.post("/api/trucks/" + createTruck.username, createTruck);
    }
}; 