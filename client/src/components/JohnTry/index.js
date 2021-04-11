import React, {useContext} from "react";
import UserContext from "../../utils/userContext";
import Project from "../Project";

function JohnTry () {

    const {books} = useContext(UserContext);

    return (
<div className="container containerColor marginBottomCont">
<div className="row">
    <div className="marginBottomCol">
        <div className="card-transparent">
            <div className="card-body mt-5">
                <h2 className="card-title text-center myBottomBorder1">Results</h2>
                <br />
                <div className="row row-cols-1">
                        {books.map(result => (
                            <div key={result.id}>
                            <Project 
                                author = {result.volumeInfo.authors}
                                image = {result.volumeInfo.imageLinks.smallThumbnail}
                                title = {result.volumeInfo.title}
                                description = {result.volumeInfo.description}
                                link = {result.volumeInfo.previewLink}
                            />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default JohnTry;

