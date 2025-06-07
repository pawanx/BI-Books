import Books from './components/Books'
import BookbyTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'
import AddBookForm from './components/AddBookForm'
import './App.css'

function App() {
  return (
    <div>
      <AddBookForm/>
      <Books/>
      <BookbyTitle title="Shoe Dog"/>
      <BookByAuthor author="Harper Lee"/>
    </div>
  )
}

export default App
