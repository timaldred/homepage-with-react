import React from 'react';

export default function ContactForm() {
  return (
    <div>
    <h2> Contact me</h2>  
      <form id="contact-form">
        <fieldset>  
          <label htmlFor="name" id="name-label">Name </label>
          <input id="name" type="text" className="a-small" required />

          <label htmlFor="email" id="email-label">Email </label>
          <input id="email" type="email" className="a-small" required />

          <label htmlFor="message" id="message-label">Message  </label>
          <textarea id="message" name="message" rows="5"></textarea>  
        </fieldset>     

        <fieldset>
          <input type="submit" id="submit" value="Submit" />
        </fieldset> 
      </form>
    </div>
  );
}
