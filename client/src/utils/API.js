import axios from "axios";

export default {
    // Gets all trucks
    getTrucksByCategory: function (category) {
        console.log(category)
        return axios.get("/api/trucks/all/" + category);
    },
    getTrucks: function (username) {
        console.log(username)
        return axios.get("/api/trucks/" + username);
    },
    getTruck: function (id) {
        console.log("API", id)
        return axios.get("/api/trucks/truck/" + id);
    },

    // Gets the truck with the given id
    updateTruck: function (id, updateTruck) {
        return axios.put("/api/trucks/truck/" + id, updateTruck);
    },

    // Saves a truck to the database
    submitTruck: function (createTruck) {
        console.log("Create Truck:", createTruck);
        return axios.post("/api/trucks/" + createTruck.username, createTruck);
    },

    // Deletes the truck with the given id
    deleteTruck: function (id) {
        console.log("Made it here.");
        return axios.delete("/api/trucks/truck/" + id);
    },
}; 