import useFetch from "../useFetch"
const BookbyTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://be-4-assignement1.vercel.app/books/${title}`);
    return data ? (
            <div>
          <h2>{data.book.title}</h2>
          <p><strong>Author:</strong> {data.book.author}</p>
          <p><strong>Release Year:</strong> {data.book.publishedYear}</p>
          <p><strong>Genres:</strong> {data.book.genre.join(", ")}</p>
        </div>
        ) : (
            loading && <p>Loading...</p>
        )
}
export default BookbyTitle;