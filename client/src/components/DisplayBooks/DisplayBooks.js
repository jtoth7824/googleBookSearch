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
            image: books[index].volumeInfo.imageLinks ? books[index].volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/128x206/c4bfb2/051421.jpg&text=No+Image+",
            link: books[index].volumeInfo.infoLink,
            synopsis: books[index].volumeInfo.description ? books[index].volumeInfo.description : "No description available for this book.",
            author: newAuthor
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