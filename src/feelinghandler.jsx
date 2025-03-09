import React from 'react';
import './index.css';
import {
  QuotesComponentHappy,
  QuotesComponentSad,
  QuotesComponentAnxious,
  QuotesComponentLonely,
  QuotesComponentAngry,
  QuotesComponentThankful,
} from './happy';  

function FeelingHandle({ feeling, handleBackClick }) {
    switch (feeling) {
        case 'happy':
            return (
                <div className='happy'>
                    <div className="feeling-container">
                        <QuotesComponentHappy />
                        <button className='back' onClick={handleBackClick}>
                            ← Back
                        </button>
                    </div>
                </div>
            );
        case 'sad':
            return (
                <div className='sad'>  
                    <div className="feeling-container">
                    <QuotesComponentSad />
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
                </div>
            );
        case 'anxious':
            return (
                <div className='anxious'>
                    <div className="feeling-container">
                    <QuotesComponentAnxious />
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
                </div>
            );
        case 'lonely':
            return (
                <div className='lonely'>
                    <div className="feeling-container">
                    <QuotesComponentLonely />
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
                </div>
            );
        case 'angry':
            return (
                <div className='angry'>
                    <div className="feeling-container">
                    <QuotesComponentAngry />
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
                </div>
            );
        case 'thankful':
            return (
                <div className='thankful'>
                    <div className="feeling-container">
                    <QuotesComponentThankful />
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
                </div>
            );
        default:
            return (
                <div className="feeling-container">
                    <div>No feeling selected</div>
                    <button className='back' onClick={handleBackClick}>
                        ← Back
                    </button>
                </div>
            );
    }
}

export default FeelingHandle;
