import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardBtn(props) {
  console.log("card button");
  const { handleBtnClick } = useContext(UserContext);

  return (
    <button className="btn myButton buttonMargin" style={{float: "right", fontSize: "20px"}} onClick={handleBtnClick}><strong>Search</strong></button>
  );
}

export default CardBtn;
