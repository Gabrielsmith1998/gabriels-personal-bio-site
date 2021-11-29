import React from 'react';
import emailjs from 'emailjs-com';
import { Card } from 'reactstrap';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q4pd4co',
        'template_es9pz9m',
        e.target,
        'user_ZGcIJ0k3wHAhEBqeBve16',
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.warn(error.text);
        },
      );
    e.target.reset();
  }

  return (
    <>
      <Card>
        <div className="contact-me">
          <a
            href="https://github.com/Gabrielsmith1998"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-links"
          >
            Github
          </a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/gabriel-smith-2a24b4220/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-links"
          >
            Linkedin
          </a>
          <br />
          <br />
          <h5>Phone Number</h5>
          <p>+1(615)-692-9521</p>
          <br />
          <h5>Email</h5>
          <p>gsmith102998@gmail.com</p>
          <br />
          <h5>Shoot me a email!</h5>
          <form onSubmit={sendEmail}>
            <div className="col-8 form group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form group pt-2 mx-auto">
              <input
                type="text"
                className="form-control msg"
                placeholder="Your message"
                name="message"
              />
            </div>
            <div className="col-8 form group mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}
