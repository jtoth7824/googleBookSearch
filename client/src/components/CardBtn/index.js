import React, { useContext } from "react";
import UserContext from "../../utils/userContext";
import "./style.css";

function CardBtn(props) {
  console.log("card button");
  const { handleBtnClick } = useContext(UserContext);
  return (
    <button onClick={handleBtnClick} />
  );
}

export default CardBtn;
