import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';

export function getBookBySearchTerm(searchTerm){
    return axios.get(`${BASE_URL}volumes?q=${searchTerm}`)
}

export function getBookDetails(bookId){
    return axios.get(`${BASE_URL}volumes/${bookId}`)
}