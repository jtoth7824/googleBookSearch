import React, { useCallback, useContext} from "react";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";

function Project (props) {
    // set context for book search results
    var bookIndex;
    const {books} = useContext(UserContext);
    // save the set state method
    var setBooksMethod = props.newSetBooksMethod;

    // bookIndex is the button object id for the save button clicked by user
    const updateBooks = useCallback( (bookIndex) => {
        // update the books state by filtering out the book to be saved from the results list
        setBooksMethod(bookList => bookList.filter(c=>c.id !== bookIndex));
    }, [setBooksMethod])

    // function to save the book clicked by user
    function saveBook(e) {
        var newAuthor;
        var index;

        // loop to find the book object id that matches the id of the save button clicked
        for (var i=0; i<books.length; i++) {
            if ( books[i].id === e.target.id ) {
                index = i;
                break;
            }
        }

        // check if there are authors returned from google
        if(!books[index].volumeInfo.authors) {
            // if no authors, save a text string
            newAuthor = "No Author provided.";
        }
        // check if multiple authors, then join them together as one string to save
        else if(books[index].volumeInfo.authors.length > 1) {
            newAuthor = books[index].volumeInfo.authors.join(", ");
        }
        // only a single author to save
        else {
            newAuthor = books[index].volumeInfo.authors[0];
        };
        // save the index of the book save button clicked
        bookIndex = books[index].id;
        // call save book route to save the book to database
        API.saveBook({
            title: books[index].volumeInfo.title,
            // sometimes no thumbnail image returned from google and need to handle this
            image: books[index].volumeInfo.imageLinks ? books[index].volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/128x206/c4bfb2/051421.jpg&text=No+Image+",
            link: books[index].volumeInfo.infoLink,
            // sometimes no book description returned from google and need to handle this
            synopsis: books[index].volumeInfo.description ? books[index].volumeInfo.description : "No description available for this book.",
            author: newAuthor
        })
        .then(res => {
            // call update books to remove the just saved book from page
            updateBooks(bookIndex);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="col-xs-12 col-sm-12  marginBottomCol" key={props.id}>
                <div className="card h-100">
                    <div className="card-body bookCardColor cardBodyBorder">
                        <div className="row" style={{display: 'inline-block'}}>
                            <h5 className="card-title">{props.title}</h5>
                            <h5>Written by {props.author}</h5>
                        </div>
                        <div style={{ float: 'right'}}>
                            <a  href={props.link} target="_blank" rel="noreferrer noopener"
                                ><button className="btn myButton buttonMargin" target={props.link} rel="noreferrer noopener" >View</button></a>
                            <button id={props.id} target="_blank" rel="noreferrer noopener"
                                className="btn myButton buttonMargin" onClick={saveBook}>Save</button>
                        </div>
                        <br />
                        <div className="row" style={{display: 'inline-block'}}>
                            <img className="padding" style={{float: 'left', height: '170px', width: '128px'}} src={props.image} alt="book"/>
                            <p className="card-text card-padding">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;