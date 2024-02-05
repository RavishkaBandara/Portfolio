import React from 'react';

export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <hr />
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 className="skills--section--heading">Contact Me</h2>
            </div>
            <form
                action="https://formspree.io/f/xleyykpa"
                method="POST"
                className="contact--form--container"
            >
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input test-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input test-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input test-md"
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        required
                    />
                </label>
                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
