import React, { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("Your Name")
    const [email, setEmail] = useState("yourmail@example.com")
    const [subject, setSubject] = useState("Message Subject")
    const [message, setMessage] = useState("Your Message here")

    const onContactFormSubmit = (SubmitEvent) => {
        SubmitEvent.preventDefault()
    }

    return (
        <div className="contact-wrapper">
            <h3>Feel free to contact me!</h3>
            <p>Lorem Ipsum</p>

            <div className="contact-form">
                <form onSubmit={onContactFormSubmit}>
                    <div className="contact-name">
                        <label>Name:</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="contact-email">
                        <label>Email:</label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="contact-subject">
                        <label>Subject:</label>
                        <input type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="contact-message">
                        <label>Message:</label>
                        <input type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}