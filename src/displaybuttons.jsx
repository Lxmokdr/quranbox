import React from 'react';
import './index.css';

function Buttons({ setIsClicked, setFeeling }) {
    const OnClickedHappy = () => {
        setIsClicked(true);
        setFeeling('happy');  
    };
    const OnClickedSad = () => {
        setIsClicked(true);
        setFeeling('sad');  
    };
    const OnClickedAnxious = () => {
        setIsClicked(true);
        setFeeling('anxious');  
    };
    const OnClickedLonely = () => {
        setIsClicked(true);
        setFeeling('lonely');  
    };const OnClickedAngry = () => {
        setIsClicked(true);
        setFeeling('angry');  
    };
    const OnClickedThankful = () => {
        setIsClicked(true);
        setFeeling('thankful');  
    };



    return(
        <>
            <button className='happy' onClick={OnClickedHappy}>
                Happy
            </button>
            <button className='sad' onClick={OnClickedSad}>
                Sad
            </button>
            <button className='anxious' onClick={OnClickedAnxious}>
                Anxious
            </button>
            <button className='lonely' onClick={OnClickedLonely}>
                Lonely
            </button><button className='angry' onClick={OnClickedAngry}>
                Angry
            </button><button className='thankful' onClick={OnClickedThankful}>
                Thankful
            </button>
        </>
        
    );
}

export default Buttons;
