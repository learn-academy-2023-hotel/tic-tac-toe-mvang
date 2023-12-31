import React from "react";
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="background-2">
      <div className="nf-container">
        <p className="nf-header">Oops!</p>
        <p className="nf-body">
          Press <br />
          <button className="nf-return-button" onClick={handleClick}>HERE</button> <br />
          to go back to the beginning.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
