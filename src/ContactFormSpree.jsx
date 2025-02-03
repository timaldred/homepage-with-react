import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/meoekvrp", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! I'll get back to you shortly.");
      form.reset();
    } else {
      setStatus("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <fieldset>  
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="a-small" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="a-small" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>  
        </fieldset>     

        <fieldset>
          <input type="submit" id="submit" value="Submit" />
        </fieldset> 
      </form>
      
      <div className="centered-text">{status && <p>{status}</p>}</div>
    </div>
  );
}