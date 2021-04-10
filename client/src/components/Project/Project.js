import React from "react";

function Project (props) {
    return (
        <div className="col-xs-12 col-sm-12  marginBottomCol" key={props.id}>
            <div className="card h-100">
{/*                 <div className="embed-responsive embed-responsive-4by3">
                    <img src={props.image}
                        className="card-img-top embed-responsive-item" alt="project"/>
                </div> */}
                <div className="card-body cardBodyBorder">
                    <div className="row" style={{display: 'inline-block'}}>
                        <h5 className="card-title">{props.title}</h5>
                        <h5>Written by {props.author}</h5>
                    </div>
                    <div style={{ float: 'right'}}>
                        <a  href={props.link} target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin">View</a>
                        <a  target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin">Save</a>
                    </div>
                    <div className="row" style={{display: 'inline-block'}}>
                        <img style={{float: 'left'}} src={props.image}/>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;