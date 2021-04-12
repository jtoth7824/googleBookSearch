import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import DisplayBooks from "../DisplayBooks";

function SearchResults () {

    const {books} = useContext(UserContext);

    return (
        <div className="container containerColor marginBottomCont">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body mt-5">
                            <h2 className="card-title text-center myBottomBorder1">Search Results</h2>
                            <br />
                            <div className="row row-cols-1">
                                {books.length ? (
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
                                ) : (
                                    <h3>No Results to Display</h3>
                                )};
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;

