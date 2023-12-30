import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const IntroPage = () => {
    const [name, setName] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const navigate = useNavigate(); 

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowNameError(false); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setShowNameError(true);
            return;
        }

        // console.log('Name', name);
        navigate('/marker', { state: { playerName: name } });
    }

    return (
        <div className="intro-container">
            <p className="intro-header">Hello, let's play Tic Tac Toe!</p>
            <p className="intro-body">Let's start by getting your name.</p>
            <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="input-box"
                    />
                </label>
                {showNameError && <p className="intro-error" >𖧧 Please input a name. 𖧧</p>}
                <br/>
                <button type="submit" className="intro-button">Next</button>
            </form>
            <Footer />
        </div>
    );
}

export default IntroPage;
