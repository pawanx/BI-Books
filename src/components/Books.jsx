import useFetch from "../useFetch"
import { useState } from "react";
const Books = () => {
    const {data, loading, error} = useFetch("https://be-4-assignement1.vercel.app/books/");
     const [successMessage, setSuccessMessege] = useState("");
    if(loading) return <p>Loading...</p>;
    if(error) return <p>An error occured {error.message}</p>;
    if(!data) return <p>No books found</p>

    const handleDelete = async(bookId) => {
    try {
        const response = await fetch(`https://be-4-assignement1.vercel.app/books/${bookId}`,
            {
                method : "DELETE",
            }
            
        )

        if(!response.ok){
            throw new Error("Failed to delete Book.")
        }

        const data  = await response.json()

        if(data){
            setSuccessMessege("Book Deleted Successfully.")
            setTimeout(() => {
            window.location.reload();
            }, 1000);
        }

    } catch (error) {
        console.log(error)
    }
 }

    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {data.books.map((book) => (
                <li key={book._id}>{book.title} {" "} <button onClick={() => handleDelete(book._id)}>Delete</button></li>
            ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Books;