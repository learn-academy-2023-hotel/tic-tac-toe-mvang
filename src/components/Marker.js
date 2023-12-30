import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Marker = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location?.state?.playerName || "";

    const handleSubmission = () => {
        console.log('Marker submission clicked');
        navigate('/game', { state: { playerName } });
    }

    return (
        <div className="marker-container">
            <p className="marker-header">Marker Page</p>
            <br/>
            <button onClick={handleSubmission} className="marker-button">Submit</button>
        </div>
    );
}

export default Marker;
