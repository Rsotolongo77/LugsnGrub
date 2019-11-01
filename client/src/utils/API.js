import axios from "axios";

export default {
    // Gets all books
    getTrucks: function () {
        return axios.get("/api/trucks");
    },
    // Gets the book with the given id
    updateTruck: function (id) {
        return axios.put("/api/owners" + id);
    },
    // Deletes the book with the given id
    deleteTruck: function (id) {
        return axios.delete("/api/owners" + id);
    },
    // Saves a book to the database
    submitTruck: function (createTruck) {
        return axios.post("/api/owners", createTruck);
    }
};