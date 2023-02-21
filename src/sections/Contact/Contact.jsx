import "./Contact.scss";

import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="app__contact">
      <h2 className="app__head">Contact Me</h2>
      <form className="app__flex">
        <div className="app__contact-input app__flex">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
        </div>
        {/* <div> */}
        <textarea
          name=""
          id=""
          // cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        {/* </div> */}
        <button className="app__contact-btn" type="submit">
          Send Message
        </button>
      </form>

      <div className="app__contact-info app__flex">
        <div>
          <h4>Email Me</h4>
          <p>ekremufacik07@gmail.com</p>
        </div>
        <div>
          <h4>Call Me</h4>
          <p>5444746867</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>Görele/Giresun</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
