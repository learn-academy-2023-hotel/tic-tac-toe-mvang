import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from "./Footer";

const Marker = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location?.state?.playerName || "";
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleMarkerSelection = (marker) => {
        setSelectedMarker(marker);
        setShowErrorMessage(false); 
    }

    const handleSubmission = () => {
        console.log('Handle Submission called');
        console.log('selectedMarker:', selectedMarker);
    
        if (!selectedMarker) {
            console.log('Error: No marker selected');
            setShowErrorMessage(true);
            return;
        }

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
            {showErrorMessage && <p className="marker-error">𖧧 Please select a marker before submitting. 𖧧</p>}

            <br/>
            
            <button onClick={handleSubmission} className="marker-button">
                Submit
            </button> <br/>
            <Footer />
        </div>
    );
}

export default Marker;
