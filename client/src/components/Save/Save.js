import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";


function Save (props) {

    const {books} = useContext(UserContext);
console.log("id = " + props.id);

        function deleteBook(e) {
//          var newAuthor;
          console.log(e.target.id);
          var index;

          for (var i=0; i<books.length; i++) {
            if ( books[i].id === e.target.id ) {
                index = i;
                break;
            }
        }
        console.log(books[index].volumeInfo.title);

//          if(books[index].volumeInfo.authors.length > 1) {
//            newAuthor = books[index].volumeInfo.authors.join(", ");
//            }
//            else {
//              newAuthor = books[index].volumeInfo.authors[0];
//            };
          console.log(books[index]._id);
          API.deleteBook(books[index]._id)
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
                            className="btn myButton buttonMargin">View</a>
                        <a id={props.id} target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin" onClick={deleteBook}>Delete</a>
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

export default Save;