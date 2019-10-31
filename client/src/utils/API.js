import axios from "axios";

export default {
    // Gets all books
    getTrucks: function () {
        return axios.get("/api/trucks");
    },
    // Gets the book with the given id
    getOwnerNote: function (id) {
        return axios.put("/api/owners/" + id);
    },
    // Deletes the book with the given id
    deleteOwnerNote: function (id) {
        return axios.delete("/api/owners/" + id);
    },
    // Saves a book to the database
    submitOwnerNote: function (ownerNote) {
        return axios.post("/api/owners", ownerNote);
    }
};