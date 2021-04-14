import React, { useCallback, useContext} from "react";
import SavedBooksContext from "../../utils/savedBooksContext";
import API from "../../utils/API";

function SaveResults (props) {
    // set up context for saved books
    var bookIndex;
    const {savedbooks} = useContext(SavedBooksContext);

    // save the set Trigger method that was passed in via props
    var setTriggerMethod = props.change;

    // bookIndex contains which delete button was pressed
    const updateTrigger = useCallback((bookIndex) => {
        // set trigger state to bookIndex to cause re-render based on state changing
        setTriggerMethod(bookIndex);
      }, [setTriggerMethod])

    // function to delete a book based upon delete button user clicked
    function deleteBook(e) {

      var index;
      // loop over saved books to find the object ID that matches the save button
      for (var i=0; i<savedbooks.length; i++) {
        if ( savedbooks[i]._id === e.target.id ) {
          index = i;
          break;
        }
      }
      // save off the book object ID
      bookIndex = savedbooks[index]._id;
      // call route to delete the book
      API.deleteBook(savedbooks[index]._id)
         .then(res => {
             // call update trigger to change the state value to cause re-render of component
             updateTrigger(bookIndex);
         })
        .catch(err => console.log(err))
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
                                ><button target={props.link} rel="noreferrer noopener" className="btn myButton buttonMargin">View</button></a>
                            <button id={props.id} target="_blank" rel="noreferrer noopener"
                                className="btn myButton buttonMargin" onClick={deleteBook}>Delete</button>
                        </div>
                        <br />
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