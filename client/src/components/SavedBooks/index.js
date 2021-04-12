import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import SavedBooksContext from "../../utils/savedBooksContext";
import Save from "../Save";

function SavedBooks () {

    const [books1, setBooks1]= useState([]);
    const [trigger, setTrigger] = useState("1");
    // const {books1 } = useContext(UserContext);
  // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks1())
//       .catch(err => console.log(err));
//   }

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks1();
      }, [trigger])

  // Loads all books and sets them to books
  function loadBooks1() {
    API.getBooks()
      .then(res => {
        console.log(res.data)
        setBooks1(res.data)
      }
      )
      .catch(err => console.log(err));
  };

    return (
        <SavedBooksContext.Provider value={{ books1, trigger}}>
            <div className="container containerColor marginBottomCont">
                <div className="row">
                    <div className="marginBottomCol">
                        <div className="card-transparent">
                            <div className="card-body mt-5">
                                <h2 className="card-title text-center myBottomBorder1">Saved Results</h2>
                                <br />
                                <div className="row row-cols-1">
                                    {books1.length ? (
                                        <div>
                                            {books1.map(result => (
                                                <div key={result._id}>
                                                    <Save 
                                                        newValue={trigger} change={setTrigger}
                                                        id = {result._id}
                                                        author = {result.author}
                                                        image = {result.image}
                                                        title = {result.title}
                                                        description = {result.synopsis}
                                                        link = {result.link}
                                                   />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <h3>No Results to Display</h3>
                                    )};
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        </SavedBooksContext.Provider>
    )
}

export default SavedBooks;

