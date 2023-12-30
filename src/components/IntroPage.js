import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const IntroPage = () => {
    const [name, setName] = useState('');
    const history = useHistory(); 

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Submitted name:', name);
        history.push('/');
    }

    return (
        <div>
            <h1>Hello, let's play Tic Tac Toe!</h1>
            <h2>Let's start by getting your name.</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default IntroPage;
