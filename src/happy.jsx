import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebase';

const QuotesComponent = ({ feeling }) => {
  const [quote, setQuote] = useState({ key: '', text: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const docRef = doc(db, 'feelings', feeling);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const docData = docSnap.data();
          const keys = Object.keys(docData);
          
          if (keys.length > 0) {
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            setQuote({ key: randomKey, text: docData[randomKey] });
          } else {
            setQuote({ key: 'N/A', text: 'No quotes available for this feeling.' });
          }
        } else {
          console.warn("Document not found!");
        }
      } catch (error) {
        console.error("Error fetching quote: ", error);
      }
    };
    

    fetchQuote();
  }, [feeling]);

  return (
    <div>
      <h1>Random Ayat for when you're feeling {feeling.charAt(0).toUpperCase() + feeling.slice(1)}</h1>
      <div>
        <strong>{quote.key}</strong>
        <blockquote>
          {quote.text}
        </blockquote>
      </div>
    </div>
  );
};

const QuotesComponentHappy = () => <QuotesComponent feeling="happy" />;
const QuotesComponentSad = () => <QuotesComponent feeling="sad" />;
const QuotesComponentAnxious = () => <QuotesComponent feeling="anxious" />;
const QuotesComponentLonely = () => <QuotesComponent feeling="lonely" />;
const QuotesComponentAngry = () => <QuotesComponent feeling="angry" />;
const QuotesComponentThankful = () => <QuotesComponent feeling="thankful" />;

export {
  QuotesComponentHappy,
  QuotesComponentSad,
  QuotesComponentAnxious,
  QuotesComponentLonely,
  QuotesComponentAngry,
  QuotesComponentThankful,
};

