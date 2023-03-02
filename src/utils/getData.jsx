import axios from "axios";

export const getBooks = async (query) => {
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
}