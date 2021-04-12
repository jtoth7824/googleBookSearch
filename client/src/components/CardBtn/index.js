import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import "./style.css";

function CardBtn(props) {
  console.log("card button");
  const { handleBtnClick } = useContext(UserContext);

  return (
    <button className="btn myButton buttonMargin" onClick={handleBtnClick}>Search</button>
  );
}

export default CardBtn;
