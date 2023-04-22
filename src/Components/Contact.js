import React, { useState } from 'react';

import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to handle form submission
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-info">
                <p>Email: your-email@example.com</p>
                <p>Phone: 555-555-5555</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;