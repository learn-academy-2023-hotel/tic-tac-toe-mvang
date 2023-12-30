import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Marker = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location?.state?.playerName || "";
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerSelection = (marker) => {
        setSelectedMarker(marker);
    }

    const handleSubmission = () => {
        console.log('Marker submission clicked with selected marker:', selectedMarker);
        navigate('/game', { state: { playerName, selectedMarker } });
    }

    return (
        <div className="marker-container">
            <p className="marker-header">{playerName}, ༯<br/>what a beautiful name.</p>
            <p className="marker-body">Last step, please choose one of the options below as your designated marker.</p>
            <div className="marker-options">
                <button
                    onClick={() => handleMarkerSelection("🍃 ")}
                    className={`marker-select ${selectedMarker === "🍃 " ? "selected" : ""}`}
                >
                    🍃 
                </button>
                <button
                    onClick={() => handleMarkerSelection("🌿")}
                    className={`marker-select ${selectedMarker === "🌿" ? "selected" : ""}`}
                >
                    🌿
                </button>
                <button
                    onClick={() => handleMarkerSelection("X")}
                    className={`marker-select ${selectedMarker === "X" ? "selected" : ""}`}
                >
                    X
                </button>
            </div>
            <br/>
            <button onClick={handleSubmission} className="marker-button">Submit</button>
        </div>
    );
}

export default Marker;
