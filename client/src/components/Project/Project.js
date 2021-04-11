import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";


function Project (props) {

    const {books} = useContext(UserContext);

    function saveBook() {
          var newAuthor;

          if(books[0].volumeInfo.authors.length > 1) {
            newAuthor = books[0].volumeInfo.authors.join(", ");
            }
            else {
              newAuthor = books[0].volumeInfo.authors[0];
            };
          console.log(newAuthor);
          API.saveBook({
            title: books[0].volumeInfo.title,
            image: books[0].volumeInfo.imageLinks.smallThumbnail,
            link: books[0].volumeInfo.previewLink,
            synopsis: books[0].volumeInfo.description,
            author: newAuthor
          })
        .catch(err => console.log(err));
    }

    return (
        <div>
        <div className="col-xs-12 col-sm-12  marginBottomCol" >

            <div className="card h-100">
                <div className="card-body cardBodyBorder">
                    <div className="row" style={{display: 'inline-block'}}>
                        <h5 className="card-title">{props.title}</h5>
                        <h5>Written by {props.author}</h5>
                    </div>
                    <div style={{ float: 'right'}}>
                        <a  href={props.link} target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin">View</a>
                        <a  target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin" onClick={saveBook}>Save</a>
                    </div>
                    <div className="row" style={{display: 'inline-block'}}>
                        <img style={{float: 'left'}} src={props.image}/>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Project;