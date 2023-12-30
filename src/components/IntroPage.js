import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate(); 

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        console.log('Submitted name:', name);
        navigate('/marker', { state: { playerName: name } });
    }

    return (
        <div className="intro-container">
            <p className="intro-header">Hello, let's play Tic Tac Toe!</p>
            <p className="intro-body">Let's start by getting your name.</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label >
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        style={{ width: "300px", height: "50px", textAlign: "center", fontSize: "25px" }}
                    />
                </label>
                <br/>
                <button type="submit" className="intro-button">Submit</button>
            </form>
        </div>
    );
}

export default IntroPage;
