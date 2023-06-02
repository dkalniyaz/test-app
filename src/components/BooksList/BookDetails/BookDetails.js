import { useState, useEffect } from "react"
import parse from 'html-react-parser'
import { getBookDetails } from "../../../api/bookApi";


function BookDetails({bookId}){
    const [book, setBook] = useState(null)
    const [error, setError] = useState(false)

    useEffect(()=>{
        getBookDetails(bookId)
           .then((response) => {
                setBook(response.data);
                setError(false);
                console.log(response);
            })
            .catch((error) => {
                console.error(error)
                setError(true)
            })
    }, [bookId]);

    if(!book){
        return <div>Loading...</div>
    }

    if(error){
        return <div className="book-error">Book not found.</div> 
    }

    return (
        <div className="book">
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors'}</h2>
            <p>{book.volumeInfo.description ? parse(book.volumeInfo.description): 'No Description'}</p>
            {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}
        </div>
    )
}

export default BookDetails