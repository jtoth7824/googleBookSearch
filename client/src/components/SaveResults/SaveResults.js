import React, { useCallback, useContext} from "react";
import SavedBooksContext from "../../utils/savedBooksContext";
import API from "../../utils/API";

function SaveResults (props) {
var bookIndex;
    const {books1} = useContext(SavedBooksContext);
    console.log(props);
    var help = props.change;
    const updateTrigger = useCallback((bookIndex) => {
        console.log("bookIndex in update = " + bookIndex);
        help(bookIndex);
      }, [help])

    function deleteBook(e) {

      console.log(e.target.id);
      var index;
      for (var i=0; i<books1.length; i++) {
        if ( books1[i]._id === e.target.id ) {
          index = i;
          break;
        }
      }
      console.log(books1[index]._id);
      bookIndex = books1[index]._id;
      API.deleteBook(books1[index]._id)
         .then(res => {
             console.log(bookIndex);
             updateTrigger(bookIndex);
         })
        .catch(err => console.log(err))
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
                                ><button target={props.link} rel="noreferrer noopener" className="btn myButton buttonMargin">View</button></a>
                            <button id={props.id} target="_blank" rel="noreferrer noopener"
                                className="btn myButton buttonMargin" onClick={deleteBook}>Delete</button>
                        </div>
                        <div className="row" style={{display: 'inline-block'}}>
                            <img className="padding" style={{float: 'left'}} src={props.image} alt="savedbooks"/>
                            <p className="card-text card-padding">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaveResults;