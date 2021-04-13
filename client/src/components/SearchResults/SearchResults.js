import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import DisplayBooks from "../DisplayBooks";

function SearchResults () {

    const {books} = useContext(UserContext);

    return (
        <div className="container-fluid containerColor marginBottomCont">
            {books.length ? (            
                <div className="row">
                    <div className="card ">
                        <div className="card-body interiorCardColor h-100">
                            <h2 className="card-title "><strong>Search Results</strong></h2>
                            <div className="row row-cols-1">
                                <div>
                                    {books.map(result => (
                                        <div key={result.id}>
                                            <DisplayBooks 
                                                id = {result.id}
                                                author = {result.volumeInfo.authors}
                                                image = {result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/128x206/c4bfb2/051421.jpg&text=No+Image+"}
                                                title = {result.volumeInfo.title}
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
            ) : (
                <div>
                    <div className="row text-center h-100">
                        <div className="col-md-12 text-center my-auto">
                            <h3><strong>No Results to Display.</strong></h3>
                        </div>
                    </div>
                </div>
            )}                    
        </div>
    )
}

export default SearchResults;

