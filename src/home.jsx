import React, { useState } from 'react';
import './index.css';
import Buttons from './displaybuttons';
import FeelingHandle from './feelinghandler'; 

function App() {
    const [isClicked, setIsClicked] = useState(false);
    const [feeling, setFeeling] = useState('');

    const handleBackClick = () => {
        setIsClicked(false); 
    };

    return (
        <>
        
            <nav>
                <h1>Welcome to the Quotes Viewer</h1>
            </nav>
            <div className='headers'>
                <h3>This is your own personal digital peaceful jar</h3>
                <h4>Select whatever you are feeling</h4>
            </div>
            <div>
                {isClicked ? 
                    <FeelingHandle feeling={feeling} handleBackClick={handleBackClick} /> : 
                    <Buttons setIsClicked={setIsClicked} setFeeling={setFeeling} />
                }
            </div>
        </>
    );
}

export default App;

