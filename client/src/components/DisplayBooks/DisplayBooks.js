import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";

function Project (props) {

    const {books} = useContext(UserContext);

    console.log("id = " + props.id);
    function saveBook(e) {
        var newAuthor;

        console.log(e.target.id);
        var index;

        for (var i=0; i<books.length; i++) {
            if ( books[i].id === e.target.id ) {
                index = i;
                break;
            }
        }
        console.log(books[index].volumeInfo.title);

        if(books[index].volumeInfo.authors.length > 1) {
            newAuthor = books[index].volumeInfo.authors.join(", ");
        }
        else {
            newAuthor = books[index].volumeInfo.authors[0];
        };
        console.log(newAuthor);
        API.saveBook({
            title: books[index].volumeInfo.title,
            image: books[index].volumeInfo.imageLinks.smallThumbnail,
            link: books[index].volumeInfo.previewLink,
            synopsis: books[index].volumeInfo.description,
            author: newAuthor
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="col-xs-12 col-sm-12  marginBottomCol" key={props.id}>
                <div className="card h-100">
                    <div className="card-body cardBodyBorder">
                        <div className="row" style={{display: 'inline-block'}}>
                            <h5 className="card-title">{props.title}</h5>
                            <h5>Written by {props.author}</h5>
                        </div>
                        <div style={{ float: 'right'}}>
                            <a  href={props.link} target="_blank" rel="noreferrer noopener"
                                className="btn myButton buttonMargin"><button target={props.link} rel="noreferrer noopener" className="btn myButton buttonMargin">View</button></a>
                            <button id={props.id} target="_blank" rel="noreferrer noopener"
                                className="btn myButton buttonMargin" onClick={saveBook}>Save</button>
                        </div>
                        <div className="row" style={{display: 'inline-block'}}>
                            <img style={{float: 'left'}} src={props.image} alt="book"/>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;