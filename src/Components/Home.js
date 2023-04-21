import './Home.css';

import React, { useState, useEffect } from 'react';

function Home() {
    const [profession, setProfession] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const typingTimer = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
  
      return () => clearInterval(typingTimer);
    }, []);
  
    useEffect(() => {
      if (index <= 'I\'m an Android developer'.length) {
        setProfession('I\'m an Android developer'.slice(0, index));
      }
    }, [index]);
  
    return (
      <section className="home-section">
        <h1 className="name">Louay Nasr</h1>
        <p className="profession">{profession}</p>
      </section>
    );
  }

export default Home;