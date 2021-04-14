import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import DisplayBooks from "../DisplayBooks";

function SearchResults (props) {
    // set context to the book search results
    const {books} = useContext(UserContext);

    return (
        <div className="container-fluid containerColor marginBottomCont">
            {books.length ? (       
                <div className="row">     
                    <div className="container-fluid">
                        <div className="card ">
                            <div className="card-body interiorCardColor h-100">
                                <h2 className="card-title "><strong>Search Results</strong></h2>
                                <div className="row row-cols-1">
                                    <div>
                                        {books.map(result => (
                                            <div key={result.id}>
                                                <DisplayBooks 
                                                    newValueBooks={props.newValue}
                                                    newSetBooksMethod={props.change}
                                                    id = {result.id}
                                                    // sometimes no author is returned from google so need to handle this
                                                    author = {result.volumeInfo.authors ? result.volumeInfo.authors.join(", ") : "No authors provided."}
                                                    // sometimes no thumbnail image is returned from google so need to handle this
                                                    image = {result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/128x206/c4bfb2/051421.jpg&text=No+Image+"}
                                                    title = {result.volumeInfo.title}
                                                    // sometimes no book description is returned from google so need to handle this
                                                    description = {result.volumeInfo.description ? result.volumeInfo.description : "No description available for this book."}
                                                    link = {result.volumeInfo.infoLink}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row text-center h-100">
                        <div className="col-md-12 text-center my-auto">
                            <br />
                            <br />
                            <h3><strong>No Results to Display.</strong></h3>
                        </div>
                    </div>
                </div>
            )}                    
        </div>
    )
}

export default SearchResults;